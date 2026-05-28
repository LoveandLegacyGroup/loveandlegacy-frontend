"""Love & Legacy — Email Notification Service (SendGrid).
Gracefully no-ops if SENDGRID_API_KEY is missing so leads are never lost.
"""
from __future__ import annotations

import logging
import os
from typing import Any, Dict

logger = logging.getLogger("loveandlegacy.email")


def _send(to_email: str, subject: str, html: str) -> bool:
    api_key = os.environ.get("SENDGRID_API_KEY", "").strip()
    sender = os.environ.get("SENDER_EMAIL", "").strip()
    if not api_key or not sender:
        logger.warning("[email] SendGrid not configured; skipping email to %s", to_email)
        return False
    try:
        from sendgrid import SendGridAPIClient
        from sendgrid.helpers.mail import Mail

        message = Mail(
            from_email=sender,
            to_emails=to_email,
            subject=subject,
            html_content=html,
        )
        sg = SendGridAPIClient(api_key)
        response = sg.send(message)
        ok = 200 <= response.status_code < 300
        if not ok:
            logger.error("[email] Non-2xx from SendGrid: %s", response.status_code)
        return ok
    except Exception as exc:  # noqa: BLE001
        logger.exception("[email] Send failed: %s", exc)
        return False


def _brand_wrap(title: str, lines: list[tuple[str, Any]], footer: str = "") -> str:
    rows = "".join(
        f"""<tr><td style=\"padding:10px 0;border-bottom:1px solid rgba(212,175,55,0.18);\">
              <div style=\"font-size:11px;letter-spacing:0.22em;text-transform:uppercase;color:#C8B98A;\">{k}</div>
              <div style=\"font-size:15px;color:#F6F1E6;margin-top:2px;\">{v if v not in (None, '') else '—'}</div>
           </td></tr>"""
        for k, v in lines
    )
    return f"""
    <div style=\"background:#0B0B0B;padding:32px;font-family:Inter,Arial,sans-serif;color:#F6F1E6;\">
      <div style=\"max-width:560px;margin:0 auto;background:#111112;border:1px solid rgba(212,175,55,0.22);border-radius:14px;overflow:hidden;\">
        <div style=\"padding:24px 28px;border-bottom:1px solid rgba(212,175,55,0.22);\">
          <div style=\"font-size:11px;letter-spacing:0.28em;color:#D4AF37;text-transform:uppercase;\">Love &amp; Legacy</div>
          <div style=\"font-family:'Cormorant Garamond',Georgia,serif;font-size:24px;color:#F6F1E6;margin-top:4px;\">{title}</div>
        </div>
        <div style=\"padding:8px 28px 24px 28px;\">
          <table style=\"width:100%;border-collapse:collapse;\">{rows}</table>
        </div>
        <div style=\"padding:18px 28px;background:#0B0B0B;border-top:1px solid rgba(212,175,55,0.22);font-size:11px;color:#C8B98A;letter-spacing:0.18em;text-transform:uppercase;\">
          {footer or 'Discretion. Reliability. Presence.'}
        </div>
      </div>
    </div>
    """


def notify_booking(booking: Dict[str, Any]) -> bool:
    admin = os.environ.get("ADMIN_EMAIL", "").strip()
    if not admin:
        return False
    lines = [
        ("Service Type", booking.get("service_type")),
        ("Vehicle Preference", booking.get("vehicle_preference")),
        ("Pickup Date & Time", booking.get("pickup_datetime")),
        ("Pickup Location", booking.get("pickup_location")),
        ("Drop-Off Location", booking.get("dropoff_location")),
        ("Passengers", booking.get("passengers")),
        ("Flight Number", booking.get("flight_number")),
        ("Notes", booking.get("notes")),
        ("Name", booking.get("name")),
        ("Email", booking.get("email")),
        ("Phone", booking.get("phone")),
        ("Source", booking.get("source")),
    ]
    html = _brand_wrap("New Booking Request", lines, footer="Respond within 2 hours.")
    return _send(admin, "New Booking — Love & Legacy", html)


def notify_contact(message: Dict[str, Any]) -> bool:
    admin = os.environ.get("ADMIN_EMAIL", "").strip()
    if not admin:
        return False
    lines = [
        ("Name", message.get("name")),
        ("Email", message.get("email")),
        ("Phone", message.get("phone")),
        ("Subject", message.get("subject")),
        ("Message", message.get("message")),
    ]
    html = _brand_wrap("New Contact Message", lines)
    return _send(admin, "New Contact — Love & Legacy", html)


def notify_corporate_inquiry(inq: Dict[str, Any]) -> bool:
    admin = os.environ.get("ADMIN_EMAIL", "").strip()
    if not admin:
        return False
    lines = [
        ("Company", inq.get("company")),
        ("Contact Name", inq.get("name")),
        ("Role", inq.get("role")),
        ("Email", inq.get("email")),
        ("Phone", inq.get("phone")),
        ("Expected Monthly Volume", inq.get("monthly_volume")),
        ("Primary Use Case", inq.get("use_case")),
        ("Notes", inq.get("notes")),
    ]
    html = _brand_wrap("New Corporate Inquiry", lines, footer="High-value lead — priority follow-up.")
    return _send(admin, "New Corporate Inquiry — Love & Legacy", html)
