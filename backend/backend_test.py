"""
Love & Legacy Executive Transportation - Backend API Test Suite
Tests all endpoints including bookings, contacts, corporate inquiries, and admin routes.
"""
import requests
import sys
from datetime import datetime

class LoveAndLegacyAPITester:
    def __init__(self, base_url):
        self.base_url = base_url
        self.tests_run = 0
        self.tests_passed = 0
        self.failed_tests = []
        self.admin_token = "loveandlegacy-admin-2026"

    def run_test(self, name, method, endpoint, expected_status, data=None, headers=None):
        """Run a single API test"""
        url = f"{self.base_url}/api/{endpoint}"
        default_headers = {'Content-Type': 'application/json'}
        if headers:
            default_headers.update(headers)

        self.tests_run += 1
        print(f"\n🔍 Test {self.tests_run}: {name}")
        print(f"   URL: {url}")
        
        try:
            if method == 'GET':
                response = requests.get(url, headers=default_headers, timeout=10)
            elif method == 'POST':
                response = requests.post(url, json=data, headers=default_headers, timeout=10)
            else:
                print(f"❌ Unsupported method: {method}")
                return False, {}

            success = response.status_code == expected_status
            if success:
                self.tests_passed += 1
                print(f"✅ PASSED - Status: {response.status_code}")
                try:
                    return True, response.json()
                except:
                    return True, {}
            else:
                print(f"❌ FAILED - Expected {expected_status}, got {response.status_code}")
                try:
                    print(f"   Response: {response.text[:200]}")
                except:
                    pass
                self.failed_tests.append({
                    "test": name,
                    "expected": expected_status,
                    "actual": response.status_code,
                    "endpoint": endpoint
                })
                return False, {}

        except Exception as e:
            print(f"❌ FAILED - Error: {str(e)}")
            self.failed_tests.append({
                "test": name,
                "error": str(e),
                "endpoint": endpoint
            })
            return False, {}

    def test_health(self):
        """Test health check endpoint"""
        return self.run_test(
            "Health Check",
            "GET",
            "health",
            200
        )

    def test_services_list(self):
        """Test services list endpoint"""
        success, response = self.run_test(
            "Get Services List",
            "GET",
            "services",
            200
        )
        if success and 'services' in response:
            services = response['services']
            print(f"   Found {len(services)} services: {', '.join(services)}")
            expected_services = [
                "Airport Transfer",
                "Executive Transportation",
                "VIP & Event",
                "Executive Protection",
                "Production Transportation",
                "Corporate Account"
            ]
            if len(services) == 6:
                print("   ✓ Correct number of services")
            else:
                print(f"   ⚠ Expected 6 services, got {len(services)}")
        return success, response

    def test_create_booking_airport(self):
        """Test creating a booking with Airport Transfer (includes flight_number)"""
        timestamp = datetime.now().strftime('%Y-%m-%dT%H:%M')
        payload = {
            "service_type": "Airport Transfer",
            "pickup_datetime": timestamp,
            "pickup_location": "Hartsfield-Jackson Atlanta International Airport (ATL)",
            "dropoff_location": "1234 Peachtree St NE, Atlanta, GA 30309",
            "passengers": 2,
            "flight_number": "DL1234",
            "notes": "Test booking - please disregard",
            "name": "Test Client",
            "email": "test@example.com",
            "phone": "(404) 555-0100",
            "source": "Google"
        }
        success, response = self.run_test(
            "Create Booking (Airport Transfer with flight_number)",
            "POST",
            "bookings",
            201,
            data=payload
        )
        if success:
            if 'id' in response and 'created_at' in response:
                print(f"   ✓ Booking created with ID: {response['id']}")
                return success, response
            else:
                print("   ⚠ Response missing id or created_at")
        return success, response

    def test_create_booking_non_airport(self):
        """Test creating a booking with non-Airport service (flight_number should be ignored)"""
        timestamp = datetime.now().strftime('%Y-%m-%dT%H:%M')
        payload = {
            "service_type": "Executive Transportation",
            "pickup_datetime": timestamp,
            "pickup_location": "1234 Peachtree St NE, Atlanta, GA 30309",
            "dropoff_location": "5678 Buckhead Ave, Atlanta, GA 30305",
            "passengers": 1,
            "flight_number": "SHOULD_BE_IGNORED",
            "notes": "Test executive ride",
            "name": "Executive Test",
            "email": "exec@example.com",
            "phone": "(404) 555-0101",
            "source": "Referral"
        }
        success, response = self.run_test(
            "Create Booking (Non-Airport service, flight_number should be null)",
            "POST",
            "bookings",
            201,
            data=payload
        )
        if success and response.get('flight_number') is None:
            print("   ✓ flight_number correctly set to null for non-Airport service")
        elif success:
            print(f"   ⚠ flight_number should be null but got: {response.get('flight_number')}")
        return success, response

    def test_create_booking_invalid_email(self):
        """Test booking with invalid email returns 422"""
        timestamp = datetime.now().strftime('%Y-%m-%dT%H:%M')
        payload = {
            "service_type": "Airport Transfer",
            "pickup_datetime": timestamp,
            "pickup_location": "ATL",
            "dropoff_location": "Downtown",
            "passengers": 1,
            "name": "Test",
            "email": "invalid-email",
            "phone": "404-555-0100"
        }
        return self.run_test(
            "Create Booking with Invalid Email (expect 422)",
            "POST",
            "bookings",
            422,
            data=payload
        )

    def test_create_booking_missing_fields(self):
        """Test booking with missing required fields returns 422"""
        payload = {
            "service_type": "Airport Transfer",
            "name": "Test"
        }
        return self.run_test(
            "Create Booking with Missing Required Fields (expect 422)",
            "POST",
            "bookings",
            422,
            data=payload
        )

    def test_create_contact(self):
        """Test creating a contact message"""
        payload = {
            "name": "Contact Test",
            "email": "contact@example.com",
            "phone": "(404) 555-0200",
            "subject": "General Inquiry",
            "message": "This is a test contact message."
        }
        success, response = self.run_test(
            "Create Contact Message",
            "POST",
            "contacts",
            201,
            data=payload
        )
        if success and 'id' in response:
            print(f"   ✓ Contact created with ID: {response['id']}")
        return success, response

    def test_create_contact_missing_message(self):
        """Test contact with missing message returns 422"""
        payload = {
            "name": "Test",
            "email": "test@example.com"
        }
        return self.run_test(
            "Create Contact with Missing Message (expect 422)",
            "POST",
            "contacts",
            422,
            data=payload
        )

    def test_create_corporate_inquiry(self):
        """Test creating a corporate inquiry"""
        payload = {
            "company": "Test Corporation Inc.",
            "name": "Corporate Contact",
            "role": "Operations Manager",
            "email": "corporate@example.com",
            "phone": "(404) 555-0300",
            "monthly_volume": "10-20 rides",
            "use_case": "Executive team transportation",
            "notes": "Looking for corporate account setup"
        }
        success, response = self.run_test(
            "Create Corporate Inquiry",
            "POST",
            "corporate-inquiries",
            201,
            data=payload
        )
        if success and 'id' in response:
            print(f"   ✓ Corporate inquiry created with ID: {response['id']}")
        return success, response

    def test_create_corporate_inquiry_missing_company(self):
        """Test corporate inquiry with missing company returns 422"""
        payload = {
            "name": "Test",
            "email": "test@example.com"
        }
        return self.run_test(
            "Create Corporate Inquiry with Missing Company (expect 422)",
            "POST",
            "corporate-inquiries",
            422,
            data=payload
        )

    def test_admin_bookings_no_token(self):
        """Test admin endpoint without token returns 401 or 503"""
        success, response = self.run_test(
            "Admin Bookings without Token (expect 401 or 503)",
            "GET",
            "admin/bookings",
            401  # Will accept 401 or 503
        )
        if not success:
            # Try 503 if 401 failed
            success2, response2 = self.run_test(
                "Admin Bookings without Token (trying 503)",
                "GET",
                "admin/bookings",
                503
            )
            return success2, response2
        return success, response

    def test_admin_bookings_with_token(self):
        """Test admin endpoint with valid token returns 200"""
        headers = {"X-Admin-Token": self.admin_token}
        success, response = self.run_test(
            "Admin Bookings with Valid Token",
            "GET",
            "admin/bookings",
            200,
            headers=headers
        )
        if success and 'items' in response:
            print(f"   ✓ Retrieved {response.get('count', 0)} bookings")
        return success, response

    def test_sendgrid_noop(self):
        """Test that missing SENDGRID_API_KEY doesn't block booking creation"""
        timestamp = datetime.now().strftime('%Y-%m-%dT%H:%M')
        payload = {
            "service_type": "VIP & Event",
            "pickup_datetime": timestamp,
            "pickup_location": "Mercedes-Benz Stadium",
            "dropoff_location": "The St. Regis Atlanta",
            "passengers": 4,
            "notes": "VIP event transportation test",
            "name": "VIP Test Client",
            "email": "vip@example.com",
            "phone": "(404) 555-0400"
        }
        success, response = self.run_test(
            "SendGrid No-Op Test (booking should succeed even without email)",
            "POST",
            "bookings",
            201,
            data=payload
        )
        if success:
            print("   ✓ Booking succeeded despite missing SENDGRID_API_KEY")
        return success, response

    def print_summary(self):
        """Print test summary"""
        print("\n" + "="*70)
        print("📊 TEST SUMMARY")
        print("="*70)
        print(f"Total Tests Run: {self.tests_run}")
        print(f"Tests Passed: {self.tests_passed}")
        print(f"Tests Failed: {len(self.failed_tests)}")
        print(f"Success Rate: {(self.tests_passed/self.tests_run*100):.1f}%")
        
        if self.failed_tests:
            print("\n❌ FAILED TESTS:")
            for i, failure in enumerate(self.failed_tests, 1):
                print(f"\n{i}. {failure.get('test', 'Unknown')}")
                print(f"   Endpoint: {failure.get('endpoint', 'N/A')}")
                if 'expected' in failure:
                    print(f"   Expected: {failure['expected']}, Got: {failure['actual']}")
                if 'error' in failure:
                    print(f"   Error: {failure['error']}")
        
        print("\n" + "="*70)
        return len(self.failed_tests) == 0


def main():
    # Get backend URL from environment
    import os
    backend_url = os.environ.get('REACT_APP_BACKEND_URL', 'https://youthful-wescoff-13.preview.emergentagent.com')
    
    print("="*70)
    print("Love & Legacy Executive Transportation - Backend API Tests")
    print("="*70)
    print(f"Backend URL: {backend_url}")
    print(f"Testing started at: {datetime.now().strftime('%Y-%m-%d %H:%M:%S')}")
    print("="*70)

    tester = LoveAndLegacyAPITester(backend_url)

    # Run all tests
    print("\n🚀 Starting API Tests...\n")
    
    # Basic endpoints
    tester.test_health()
    tester.test_services_list()
    
    # Booking tests
    tester.test_create_booking_airport()
    tester.test_create_booking_non_airport()
    tester.test_create_booking_invalid_email()
    tester.test_create_booking_missing_fields()
    
    # Contact tests
    tester.test_create_contact()
    tester.test_create_contact_missing_message()
    
    # Corporate inquiry tests
    tester.test_create_corporate_inquiry()
    tester.test_create_corporate_inquiry_missing_company()
    
    # Admin tests
    tester.test_admin_bookings_no_token()
    tester.test_admin_bookings_with_token()
    
    # SendGrid no-op test
    tester.test_sendgrid_noop()

    # Print summary
    all_passed = tester.print_summary()
    
    return 0 if all_passed else 1


if __name__ == "__main__":
    sys.exit(main())
