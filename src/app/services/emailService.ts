import emailjs from '@emailjs/browser';

// ─── Config ───────────────────────────────────────────────────────────────────
export const EMAIL_CONFIG = {
  // EmailJS ── registration + placement user confirmation
  PUBLIC_KEY: 'kQv9bBdAXVn23k85G',
  SERVICE_ID: 'service_3r3amce',                    // Registration service (Gmail)
  USER_TEMPLATE_ID: 'template_gyc5jng',             // Registration confirmation → user
  ADMIN_TEMPLATE_ID: 'template_pqofmfr',            // Registration alert → admin
  PLACEMENT_SERVICE_ID: 'service_zsnwhem',           // Placement service (different account)
  PLACEMENT_PUBLIC_KEY: 'JhGpS3L0lX3SoowX8',
  PLACEMENT_USER_TEMPLATE_ID: 'template_o4363eh',   // Placement confirmation → applicant
  PLACEMENT_ADMIN_TEMPLATE_ID: 'template_l8dtqtr',  // Placement alert + CV link → admin

  // Contact form – dedicated service + templates
  CONTACT_SERVICE_ID: 'service_dpq5r8d',
  CONTACT_PUBLIC_KEY: 'Bv7XSOa4Ae-zbA5DJ',
  CONTACT_USER_TEMPLATE_ID: 'template_81nmg3e',    // confirmation → user
  CONTACT_ADMIN_TEMPLATE_ID: 'template_1dx63bd',   // enquiry details → admin

  CLOUDINARY_CLOUD_NAME: 'dkjsfmmud',
  CLOUDINARY_UPLOAD_PRESET: 'kymp2kmj',

  ADMIN_EMAIL: 'dschool@sims.healthcare',
};

export function initEmailJS() {
  emailjs.init(EMAIL_CONFIG.PUBLIC_KEY);
}

function formatDate() {
  return new Date().toLocaleDateString('en-IN', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
}

// ─── Registration Emails ──────────────────────────────────────────────────────

export interface RegistrationEmailData {
  fullName: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  state: string;
  pincode: string;
  qualification: string;
  specialization: string;
  experience: string;
  currentRole: string;
  currentEmployer: string;
  programName: string;
  programPrice: number;
}

export async function sendUserConfirmationEmail(data: RegistrationEmailData) {
  return emailjs.send(EMAIL_CONFIG.SERVICE_ID, EMAIL_CONFIG.USER_TEMPLATE_ID, {
    to_email: data.email,
    to_name: data.fullName,
    from_name: 'D School',
    full_name: data.fullName,
    user_email: data.email,
    phone: data.phone,
    city: data.city,
    state: data.state,
    program_name: data.programName,
    registration_date: formatDate(),
    reply_to: data.email,
  });
}

export async function sendAdminNotificationEmail(data: RegistrationEmailData) {
  return emailjs.send(EMAIL_CONFIG.SERVICE_ID, EMAIL_CONFIG.ADMIN_TEMPLATE_ID, {
    from_name: data.fullName,
    full_name: data.fullName,
    user_email: data.email,
    phone: data.phone,
    address: data.address,
    city: data.city,
    state: data.state,
    pincode: data.pincode,
    program_name: data.programName,
    qualification: data.qualification,
    specialization: data.specialization || 'Not provided',
    experience: data.experience,
    current_role: data.currentRole || 'Not provided',
    current_employer: data.currentEmployer || 'Not provided',
    registration_date: formatDate(),
    reply_to: data.email,
  });
}

// ─── Placement Emails ─────────────────────────────────────────────────────────

export interface PlacementEmailData {
  fullName: string;
  email: string;
  phone: string;
  specialization: string;
}

export async function uploadCVToCloudinary(file: File): Promise<string> {
  const ext = file.name.split('.').pop()?.toLowerCase() ?? 'pdf';
  const baseName = file.name.replace(/[^a-zA-Z0-9._-]/g, '_').replace(/\.[^.]+$/, '');
  // public_id MUST include extension for raw uploads — without it Cloudinary stores
  // the file with no extension and browsers can't identify it as a PDF
  const publicId = `cv_${Date.now()}_${baseName}.${ext}`;

  const formData = new FormData();
  formData.append('file', file);
  formData.append('upload_preset', EMAIL_CONFIG.CLOUDINARY_UPLOAD_PRESET);
  formData.append('public_id', publicId);

  const response = await fetch(
    `https://api.cloudinary.com/v1_1/${EMAIL_CONFIG.CLOUDINARY_CLOUD_NAME}/raw/upload`,
    { method: 'POST', body: formData }
  );

  const data = await response.json();
  if (!response.ok || data.error) {
    throw new Error(data.error?.message ?? `Cloudinary upload failed (${response.status})`);
  }

  return data.secure_url as string;
}

// Step 2a ── Applicant gets a confirmation email
// reply_to uses the applicant's own email — avoids the .healthcare TLD rejection bug in EmailJS
export async function sendPlacementUserEmail(data: PlacementEmailData) {
  const date = formatDate();
  const SEP = '━━━━━━━━━━━━━━━━━━━━━━━━━';
  const message = [
    `Dear ${data.fullName},`,
    '',
    'Thank you for submitting your application to D School Placements!',
    '',
    'We have successfully received your CV and our placement team will review it shortly.',
    '',
    SEP,
    'YOUR SUBMISSION DETAILS',
    SEP,
    `Name              : ${data.fullName}`,
    `Email             : ${data.email}`,
    `Phone             : ${data.phone}`,
    `Specialization    : ${data.specialization}`,
    `Submitted On      : ${date}`,
    SEP,
    '',
    'What happens next?',
    '1. Our team reviews your CV',
    '2. You\'ll receive a call for a brief screening',
    '3. We match you with suitable openings',
    '4. Interview preparation & placement support',
    '',
    'We will respond within 2–3 business days.',
    'If you have any questions, reach us at dschool@sims.healthcare.',
    '',
    'Best regards,',
    'The D School Placement Team',
    '📞 +91 91007 77107',
    '📧 dschool@sims.healthcare.',
  ].join('\n');

  return emailjs.send(
    EMAIL_CONFIG.PLACEMENT_SERVICE_ID,
    EMAIL_CONFIG.PLACEMENT_USER_TEMPLATE_ID,
    {
      to_email:        data.email,
      to_name:         data.fullName,
      from_name:       'D School',
      full_name:       data.fullName,
      user_email:      data.email,
      phone:           data.phone,
      specialization:  data.specialization,
      submission_date: date,
      message,
      reply_to:        data.email,
    },
    EMAIL_CONFIG.PLACEMENT_PUBLIC_KEY   // ← key for the account that owns service_zsnwhem
  );
}

// Step 2b ── Admin gets all details + CV attached by applicant
export async function sendPlacementAdminEmail(
  data: PlacementEmailData & { cvLink: string; cvFilename: string }
) {
  const date = formatDate();
  const SEP = '━━━━━━━━━━━━━━━━━━━━━━━━━';
  const message = [
    'A new placement application has been received. The CV is attached to this email.',
    'Reply to this email to contact the applicant directly.',
    '',
    SEP,
    'APPLICANT DETAILS',
    SEP,
    `Full Name         : ${data.fullName}`,
    `Email             : ${data.email}`,
    `Phone             : ${data.phone}`,
    `Specialization    : ${data.specialization}`,
    `Submitted On      : ${date}`,
    '',
    '',
    'D School Team.',
    'dschool@sims.healthcare.',
  ].join('\n');

  return emailjs.send(
    EMAIL_CONFIG.PLACEMENT_SERVICE_ID,
    EMAIL_CONFIG.PLACEMENT_ADMIN_TEMPLATE_ID,
    {
      full_name:       data.fullName,
      user_email:      data.email,
      phone:           data.phone,
      specialization:  data.specialization,
      submission_date: date,
      cv_filename:     data.cvFilename,
      cv_link:         data.cvLink,
      message,
      reply_to:        data.email,
    },
    EMAIL_CONFIG.PLACEMENT_PUBLIC_KEY
  );
}

// ─── Contact Form Emails ──────────────────────────────────────────────────────

export interface ContactEmailData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

// User receives an acknowledgement that their message was received
export async function sendContactUserEmail(data: ContactEmailData) {
  return emailjs.send(
    EMAIL_CONFIG.CONTACT_SERVICE_ID,
    EMAIL_CONFIG.CONTACT_USER_TEMPLATE_ID,
    {
      to_name:   `${data.firstName} ${data.lastName}`,
      to_email:  data.email,
      from_name: 'D School',
      subject:   data.subject,
      message:   data.message,
      sent_date: formatDate(),
      reply_to:  EMAIL_CONFIG.ADMIN_EMAIL,
    },
    EMAIL_CONFIG.CONTACT_PUBLIC_KEY,
  );
}

// Admin receives the full enquiry details
export async function sendContactAdminEmail(data: ContactEmailData) {
  return emailjs.send(
    EMAIL_CONFIG.CONTACT_SERVICE_ID,
    EMAIL_CONFIG.CONTACT_ADMIN_TEMPLATE_ID,
    {
      from_name:  `${data.firstName} ${data.lastName}`,
      user_email: data.email,
      phone:      data.phone,
      subject:    data.subject,
      message:    data.message,
      sent_date:  formatDate(),
      reply_to:   data.email,
    },
    EMAIL_CONFIG.CONTACT_PUBLIC_KEY,
  );
}
