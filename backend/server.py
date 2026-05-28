from __future__ import annotations

import logging
import os
import uuid
from datetime import datetime, timezone
from pathlib import Path
from typing import List, Optional

from dotenv import load_dotenv
from fastapi import APIRouter, BackgroundTasks, Depends, FastAPI, Header, HTTPException, status
from motor.motor_asyncio import AsyncIOMotorClient
from pydantic import BaseModel, ConfigDict, EmailStr, Field
from starlette.middleware.cors import CORSMiddleware

from email_service import notify_booking, notify_contact, notify_corporate_inquiry

ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / ".env")

logging.basicConfig(
    level=logging.INFO,
    format="%(asctime)s [%(levelname)s] %(name)s :: %(message)s",
)
logger = logging.getLogger("loveandlegacy")

mongo_url = os.environ["MONGO_URL"]
client = AsyncIOMotorClient(mongo_url)
db = client[os.environ.get("DB_NAME", "loveandlegacy")]

app = FastAPI(title="Love & Legacy Executive Transportation API")
api_router = APIRouter(prefix="/api")

ADMIN_TOKEN = os.environ.get("ADMIN_TOKEN", "").strip()


# ----------------------------- Models ------------------------------------


SERVICE_TYPES = [
    "Airport Transfer",
    "Executive Transportation",
    "VIP & Event",
    "Executive Protection",
    "Production Transportation",
    "Corporate Account",
]


class BookingCreate(BaseModel):
    model_config = ConfigDict(extra="ignore", str_strip_whitespace=True)

    service_type: str = Field(..., description="One of the six service types")
    pickup_datetime: str = Field(..., min_length=1)
    pickup_location: str = Field(..., min_length=1)
    dropoff_location: str = Field(..., min_length=1)
    passengers: int = Field(..., ge=1, le=20)
    flight_number: Optional[str] = None
    notes: Optional[str] = None
    name: str = Field(..., min_length=1)
    email: EmailStr
    phone: str = Field(..., min_length=4)
    source: Optional[str] = None  # how did you hear about us


class Booking(BookingCreate):
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    created_at: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))
    status: str = "new"


class ContactCreate(BaseModel):
    model_config = ConfigDict(extra="ignore", str_strip_whitespace=True)
    name: str = Field(..., min_length=1)
    email: EmailStr
    phone: Optional[str] = None
    subject: Optional[str] = None
    message: str = Field(..., min_length=1)


class ContactMessage(ContactCreate):
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    created_at: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))
    status: str = "new"


class CorporateInquiryCreate(BaseModel):
    model_config = ConfigDict(extra="ignore", str_strip_whitespace=True)
    company: str = Field(..., min_length=1)
    name: str = Field(..., min_length=1)
    role: Optional[str] = None
    email: EmailStr
    phone: Optional[str] = None
    monthly_volume: Optional[str] = None
    use_case: Optional[str] = None
    notes: Optional[str] = None


class CorporateInquiry(CorporateInquiryCreate):
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    created_at: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))
    status: str = "new"


# ----------------------------- Helpers -----------------------------------


def _serialize(doc: dict) -> dict:
    if not doc:
        return doc
    doc.pop("_id", None)
    for key, value in list(doc.items()):
        if isinstance(value, datetime):
            doc[key] = value.isoformat()
    return doc


def require_admin(x_admin_token: Optional[str] = Header(default=None)) -> None:
    if not ADMIN_TOKEN:
        raise HTTPException(status_code=503, detail="Admin not configured")
    if x_admin_token != ADMIN_TOKEN:
        raise HTTPException(status_code=401, detail="Unauthorized")


# ----------------------------- Routes ------------------------------------


@api_router.get("/")
async def root():
    return {
        "service": "Love & Legacy Executive Transportation API",
        "status": "operational",
    }


@api_router.get("/health")
async def health():
    try:
        await db.command("ping")
        return {"status": "ok"}
    except Exception as exc:  # noqa: BLE001
        raise HTTPException(status_code=503, detail=str(exc))


@api_router.get("/services")
async def list_services():
    return {"services": SERVICE_TYPES}


# ---- Bookings ----


@api_router.post("/bookings", response_model=Booking, status_code=201)
async def create_booking(payload: BookingCreate, background: BackgroundTasks):
    booking = Booking(**payload.model_dump())
    doc = booking.model_dump()
    # store datetime as ISO string for stability
    doc["created_at"] = doc["created_at"].isoformat() if isinstance(doc["created_at"], datetime) else doc["created_at"]
    try:
        await db.bookings.insert_one(doc.copy())
    except Exception as exc:  # noqa: BLE001
        logger.exception("[bookings] insert failed: %s", exc)
        raise HTTPException(status_code=500, detail="Failed to save booking")

    # email is best-effort; never block response or raise
    background.add_task(notify_booking, doc)
    return booking


@api_router.get("/admin/bookings", dependencies=[Depends(require_admin)])
async def list_bookings(limit: int = 100):
    items: List[dict] = []
    cursor = db.bookings.find().sort("created_at", -1).limit(min(limit, 500))
    async for doc in cursor:
        items.append(_serialize(doc))
    return {"count": len(items), "items": items}


# ---- Contacts ----


@api_router.post("/contacts", response_model=ContactMessage, status_code=201)
async def create_contact(payload: ContactCreate, background: BackgroundTasks):
    obj = ContactMessage(**payload.model_dump())
    doc = obj.model_dump()
    doc["created_at"] = doc["created_at"].isoformat() if isinstance(doc["created_at"], datetime) else doc["created_at"]
    await db.contacts.insert_one(doc.copy())
    background.add_task(notify_contact, doc)
    return obj


@api_router.get("/admin/contacts", dependencies=[Depends(require_admin)])
async def list_contacts(limit: int = 100):
    items: List[dict] = []
    cursor = db.contacts.find().sort("created_at", -1).limit(min(limit, 500))
    async for doc in cursor:
        items.append(_serialize(doc))
    return {"count": len(items), "items": items}


# ---- Corporate ----


@api_router.post("/corporate-inquiries", response_model=CorporateInquiry, status_code=201)
async def create_corporate_inquiry(payload: CorporateInquiryCreate, background: BackgroundTasks):
    obj = CorporateInquiry(**payload.model_dump())
    doc = obj.model_dump()
    doc["created_at"] = doc["created_at"].isoformat() if isinstance(doc["created_at"], datetime) else doc["created_at"]
    await db.corporate_inquiries.insert_one(doc.copy())
    background.add_task(notify_corporate_inquiry, doc)
    return obj


@api_router.get("/admin/corporate-inquiries", dependencies=[Depends(require_admin)])
async def list_corporate_inquiries(limit: int = 100):
    items: List[dict] = []
    cursor = db.corporate_inquiries.find().sort("created_at", -1).limit(min(limit, 500))
    async for doc in cursor:
        items.append(_serialize(doc))
    return {"count": len(items), "items": items}


app.include_router(api_router)

app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=os.environ.get("CORS_ORIGINS", "*").split(","),
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.on_event("shutdown")
async def shutdown_db_client():
    client.close()
