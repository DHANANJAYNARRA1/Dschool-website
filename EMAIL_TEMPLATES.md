# EmailJS Template Setup

**Service ID:** `service_3r3amce` (Gmail: dschool@sims.healthcare) ✅  
**Public Key:** `2j2r9CU4Pup1lGFPL` ✅

---

## Template 1 — User Confirmation
**Template ID:** `template_gyc5jng`  
Goes to the person who just registered (their own inbox).

### Settings in EmailJS dashboard → `template_gyc5jng`

| Field | Value |
|-------|-------|
| To Email | `{{to_email}}` |
| From Name | `{{from_name}}` |
| Subject | `Welcome to D School – {{program_name}} Registration Confirmed` |
| Reply To | `{{reply_to}}` |

### Message body (paste this in the Content/Body field):

```
Dear {{full_name}},

Welcome to the D School family! We're excited to have you on board.

Your registration for {{program_name}} has been successfully received, and you're now one step closer to advancing your healthcare career.

━━━━━━━━━━━━━━━━━━━━━━━━━
REGISTRATION SUMMARY
━━━━━━━━━━━━━━━━━━━━━━━━━
Name           : {{full_name}}
Email          : {{user_email}}
Phone          : {{phone}}
Location       : {{city}}, {{state}}
Program        : {{program_name}}
Registered On  : {{registration_date}}
━━━━━━━━━━━━━━━━━━━━━━━━━

Our team will contact you within 24 hours with the next steps, program schedule, and payment details.

If you have any questions or need help getting started, our support team is just an email away at dschool@sims.healthcare. We're here to assist you every step of the way!

Best regards,
The D School Team
📞 +91 91007 77107
📧 dschool@sims.healthcare
```

---

## Template 2 — Admin Notification
**Template ID:** `template_pqofmfr`  
Goes to `dschool@sims.healthcare` every time someone registers.

### Settings in EmailJS dashboard → `template_pqofmfr`

| Field | Value |
|-------|-------|
| To Email | `{{to_email}}` |
| From Name | `{{from_name}}` |
| Subject | `New Registration – {{program_name}} \| {{full_name}}` |
| Reply To | `{{reply_to}}` |

### Message body (paste this in the Content/Body field):

```
New student registration received. Reply to this email to contact the student directly.

━━━━━━━━━━━━━━━━━━━━━━━━━
PERSONAL DETAILS
━━━━━━━━━━━━━━━━━━━━━━━━━
Full Name      : {{full_name}}
Email          : {{user_email}}
Phone          : {{phone}}
Address        : {{address}}
City / State   : {{city}}, {{state}} – {{pincode}}

━━━━━━━━━━━━━━━━━━━━━━━━━
PROGRAM DETAILS
━━━━━━━━━━━━━━━━━━━━━━━━━
Program        : {{program_name}}
Registered On  : {{registration_date}}

━━━━━━━━━━━━━━━━━━━━━━━━━
PROFESSIONAL BACKGROUND
━━━━━━━━━━━━━━━━━━━━━━━━━
Qualification  : {{qualification}}
Specialization : {{specialization}}
Experience     : {{experience}}
Current Role   : {{current_role}}
Current Employer: {{current_employer}}
━━━━━━━━━━━━━━━━━━━━━━━━━

D School · SIMS Healthcare
dschool@sims.healthcare
```

---

## Template 3 — Placement User Confirmation
**Service ID:** `service_zsnwhem`  
**Template ID:** `template_o4363eh`  
Goes to the applicant confirming their CV was received.

### Settings in EmailJS dashboard → `template_o4363eh`

| Field | Value |
|-------|-------|
| To Email | `{{to_email}}` |
| From Name | `D School` |
| Subject | `Your CV has been received – D School Placements` |
| Reply To | `dschool@sims.healthcare` |

### Message body

```
Dear {{full_name}},

Thank you for submitting your application to D School Placements!

We have successfully received your CV and our placement team will review it shortly.

━━━━━━━━━━━━━━━━━━━━━━━━━
YOUR SUBMISSION DETAILS
━━━━━━━━━━━━━━━━━━━━━━━━━
Name              : {{full_name}}
Email             : {{user_email}}
Phone             : {{phone}}
Specialization    : {{specialization}}
Submitted On      : {{submission_date}}
━━━━━━━━━━━━━━━━━━━━━━━━━

What happens next?
1. Our team reviews your CV
2. You'll receive a call for a brief screening
3. We match you with suitable openings
4. Interview preparation & placement support

We typically respond within 2–3 business days.
If you have any questions, reach us at dschool@sims.healthcare.

Best regards,
The D School Placement Team
📞 +91 91007 77107
📧 dschool@sims.healthcare
```

---

## Template 4 — Placement Admin Notification (CV download link)
**Service ID:** `service_zsnwhem`  
**Template ID:** `template_l8dtqtr`  
Goes to `dschool@sims.healthcare`. The CV is NOT attached (free plan) — a secure
14-day download link is included instead. Admin clicks the link to download the CV.

> **How it works:** When the applicant submits, the CV is uploaded to file.io (free,
> no account needed). A 14-day download link is generated and embedded in this email.

### Settings in EmailJS dashboard → `template_l8dtqtr`

| Field | Value |
|-------|-------|
| To Email | `dschool@sims.healthcare` *(hardcode this in the EmailJS To field)* |
| From Name | `{{full_name}}` |
| Subject | `New CV Submission – {{full_name}} ({{specialization}})` |
| Reply To | `{{reply_to}}` |

### Message body

```
A new placement application has been received.
Reply to this email to contact the applicant directly.

━━━━━━━━━━━━━━━━━━━━━━━━━
APPLICANT DETAILS
━━━━━━━━━━━━━━━━━━━━━━━━━
Full Name         : {{full_name}}
Email             : {{user_email}}
Phone             : {{phone}}
Specialization    : {{specialization}}
Submitted On      : {{submission_date}}
━━━━━━━━━━━━━━━━━━━━━━━━━

CV FILE
━━━━━━━━━━━━━━━━━━━━━━━━━
File Name  : {{cv_filename}}
Download   : {{cv_link}}

(Link is valid for 14 days — download promptly)
━━━━━━━━━━━━━━━━━━━━━━━━━

D School · SIMS Healthcare
dschool@sims.healthcare
```

---

## All config values (in code)

| Key | Value |
|-----|-------|
| Public Key | `kQv9bBdAXVn23k85G` |
| Registration Service | `service_3r3amce` |
| Registration User Template | `template_gyc5jng` |
| Registration Admin Template | `template_pqofmfr` |
| Placement Service | `service_zsnwhem` |
| Placement User Template | `template_o4363eh` |
| Placement Admin Template | `template_l8dtqtr` |
| Sender / Admin inbox | `dschool@sims.healthcare` |
