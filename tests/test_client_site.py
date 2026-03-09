#!/usr/bin/env python3
"""
test_client_site.py
Al-Shifa Family Clinic -- 45 pytest tests
Run: cd /home/claude/clients/al-shifa-clinic && /home/claude/venv/bin/pytest tests/test_client_site.py -v
"""

import json
import os
import subprocess

BASE = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))


def read(path):
    with open(os.path.join(BASE, path)) as f:
        return f.read()


def file_exists(path):
    return os.path.exists(os.path.join(BASE, path))


# SECTION 1 -- File Structure (10 tests)

def test_app_layout_exists():
    assert file_exists("app/layout.tsx")

def test_app_page_exists():
    assert file_exists("app/page.tsx")

def test_globals_css_exists():
    assert file_exists("app/globals.css")

def test_header_component_exists():
    assert file_exists("components/Header.tsx")

def test_hero_component_exists():
    assert file_exists("components/Hero.tsx")

def test_services_component_exists():
    assert file_exists("components/Services.tsx")

def test_doctor_profile_component_exists():
    assert file_exists("components/DoctorProfile.tsx")

def test_testimonials_component_exists():
    assert file_exists("components/Testimonials.tsx")

def test_booking_cta_component_exists():
    assert file_exists("components/BookingCTA.tsx")

def test_footer_component_exists():
    assert file_exists("components/Footer.tsx")


# SECTION 2 -- Component Content (10 tests)

def test_header_has_clinic_name():
    assert "Al-Shifa Family Clinic" in read("components/Header.tsx")

def test_header_has_whatsapp_button():
    content = read("components/Header.tsx")
    assert "wa.me" in content or "WhatsApp" in content

def test_header_has_booking_link():
    assert "cal.com" in read("components/Header.tsx")

def test_hero_has_headline():
    assert "DHA Phase 5" in read("components/Hero.tsx")

def test_hero_has_doctor_name():
    assert "Dr. Ahmed Raza" in read("components/Hero.tsx")

def test_hero_has_credentials():
    content = read("components/Hero.tsx")
    assert "MBBS" in content and "FCPS" in content

def test_services_has_all_five():
    content = read("components/Services.tsx")
    for svc in ["General Consultation", "Family Medicine", "Child Healthcare",
                "Preventive Care", "Executive Health Checkups"]:
        assert svc in content, "Service missing: " + svc

def test_doctor_profile_has_bio():
    content = read("components/DoctorProfile.tsx")
    assert "Dr. Ahmed Raza" in content and "FCPS" in content

def test_testimonials_has_google_reviews():
    assert "Google Reviews" in read("components/Testimonials.tsx")

def test_footer_has_address():
    content = read("components/Footer.tsx")
    assert "DHA Phase 5" in content and "Lahore" in content


# SECTION 3 -- SEO Metadata (5 tests)

def test_layout_has_title():
    content = read("app/layout.tsx")
    assert "Al-Shifa Family Clinic" in content and "title" in content

def test_layout_has_description():
    content = read("app/layout.tsx")
    assert "description" in content and "DHA Phase 5" in content

def test_layout_has_keywords():
    assert "keywords" in read("app/layout.tsx")

def test_layout_has_opengraph():
    assert "openGraph" in read("app/layout.tsx")

def test_layout_has_robots():
    assert "robots" in read("app/layout.tsx")


# SECTION 4 -- Contact Info (5 tests)

def test_whatsapp_number_present():
    found = False
    for comp in ["Header.tsx", "Hero.tsx", "BookingCTA.tsx", "Footer.tsx", "ContactForm.tsx"]:
        path = os.path.join(BASE, "components", comp)
        if os.path.exists(path):
            with open(path) as f:
                if "0300-0000000" in f.read() or "923000000000" in f.read():
                    found = True
                    break
    assert found, "WhatsApp number not found"

def test_whatsapp_wa_me_link():
    found = False
    for comp in os.listdir(os.path.join(BASE, "components")):
        if comp.endswith(".tsx"):
            with open(os.path.join(BASE, "components", comp)) as f:
                if "wa.me/923000000000" in f.read():
                    found = True
                    break
    assert found, "wa.me/923000000000 link not found"

def test_dha_location_in_footer():
    assert "DHA Phase 5" in read("components/Footer.tsx")

def test_doctor_name_in_multiple_components():
    count = 0
    for comp in os.listdir(os.path.join(BASE, "components")):
        if comp.endswith(".tsx"):
            with open(os.path.join(BASE, "components", comp)) as f:
                if "Dr. Ahmed Raza" in f.read():
                    count += 1
    assert count >= 2, "Doctor name found in too few components"

def test_cal_com_booking_link():
    found = False
    for comp in os.listdir(os.path.join(BASE, "components")):
        if comp.endswith(".tsx"):
            with open(os.path.join(BASE, "components", comp)) as f:
                if "cal.com" in f.read():
                    found = True
                    break
    assert found, "cal.com booking link not found"


# SECTION 5 -- Features Present (5 tests)

def test_google_maps_placeholder():
    content = read("components/ContactForm.tsx")
    assert "Google Maps" in content or "maps.google" in content

def test_google_reviews_badge_placeholder():
    assert "Google Reviews" in read("components/Testimonials.tsx")

def test_contact_form_has_fields():
    content = read("components/ContactForm.tsx")
    assert "name" in content.lower() and "phone" in content.lower() and "message" in content.lower()

def test_whatsapp_above_fold_in_hero():
    assert "wa.me" in read("components/Hero.tsx")

def test_page_imports_all_components():
    content = read("app/page.tsx")
    for comp in ["Header", "Hero", "Services", "DoctorProfile", "Testimonials", "BookingCTA", "Footer"]:
        assert comp in content, "page.tsx missing: " + comp


# SECTION 6 -- New SEO & UX Features (5 tests)

def test_json_ld_schema_present():
    assert "application/ld+json" in read("app/layout.tsx")

def test_json_ld_medical_clinic_type():
    assert "MedicalClinic" in read("app/layout.tsx")

def test_twitter_card_present():
    content = read("app/layout.tsx")
    assert "twitter" in content and "summary_large_image" in content

def test_testimonials_left_aligned():
    assert "text-left" in read("components/Testimonials.tsx")

def test_services_child_healthcare_present():
    assert "Child Healthcare" in read("components/Services.tsx")


# SECTION 7 -- Git Structure (5 tests)

def test_git_repo_initialized():
    assert os.path.isdir(os.path.join(BASE, ".git"))

def test_git_has_commits():
    result = subprocess.run(["git", "log", "--oneline", "-1"], cwd=BASE, capture_output=True, text=True)
    assert result.returncode == 0 and result.stdout.strip()

def test_git_remote_configured():
    result = subprocess.run(["git", "remote", "-v"], cwd=BASE, capture_output=True, text=True)
    assert "adamwebsolutions" in result.stdout or "github.com" in result.stdout

def test_git_main_branch_exists():
    result = subprocess.run(["git", "branch", "-a"], cwd=BASE, capture_output=True, text=True)
    assert "main" in result.stdout

def test_git_client_branch_exists():
    result = subprocess.run(["git", "branch", "-a"], cwd=BASE, capture_output=True, text=True)
    assert "client" in result.stdout
