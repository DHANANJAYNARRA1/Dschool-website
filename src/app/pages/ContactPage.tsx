import { useState } from "react";
import { motion } from "motion/react";
import { Mail, Phone, MapPin, Clock, Send, CheckCircle, AlertCircle, ExternalLink } from "lucide-react";
import { sendContactUserEmail, sendContactAdminEmail } from "../services/emailService";

const MAPS_DIRECTIONS_URL =
  "https://www.google.com/maps/dir/17.4362149,78.3933893/SIMS+Healthcare+Pvt+Ltd,+Amar+Society,+Plot+No.26,+Kavuri+Hills,+Madhapur,+Telangana+500033/@17.436074,78.3903728,757m/data=!3m2!1e3!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x3bcb915af3100005:0x9ad8d9d6768f7cca!2m2!1d78.3930854!2d17.435768?entry=ttu&g_ep=EgoyMDI2MDQyMC4wIKXMDSoASAFQAw%3D%3D";

const MAPS_EMBED_URL =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.24807!2d78.39088541534607!3d17.43576808800766!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb915af3100005%3A0x9ad8d9d6768f7cca!2sSIMS+Healthcare+Pvt+Ltd!5e0!3m2!1sen!2sin!4v1713880000000!5m2!1sen!2sin";

type Status = "idle" | "sending" | "success" | "error";

interface FormState {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

type FormErrors = Partial<Record<keyof FormState, string>>;

const EMPTY_FORM: FormState = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  subject: "",
  message: "",
};

function validateContact(form: FormState): FormErrors {
  const e: FormErrors = {};
  if (form.firstName.trim().length < 2)
    e.firstName = "First name must be at least 2 characters.";
  if (form.lastName.trim().length < 2)
    e.lastName = "Last name must be at least 2 characters.";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim()))
    e.email = "Please enter a valid email address.";
  const digits = form.phone.replace(/\D/g, "");
  if (!/^[6-9]\d{9}$/.test(digits) && !/^91[6-9]\d{9}$/.test(digits))
    e.phone = "Enter a valid 10-digit Indian phone number.";
  if (!form.subject)
    e.subject = "Please select a subject.";
  if (form.message.trim().length < 10)
    e.message = "Message must be at least 10 characters.";
  return e;
}

export default function ContactPage() {
  const [form, setForm] = useState<FormState>(EMPTY_FORM);
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: undefined }));
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const errs = validateContact(form);
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    setStatus("sending");
    setErrorMsg("");

    try {
      await Promise.all([
        sendContactUserEmail(form),
        sendContactAdminEmail(form),
      ]);
      setStatus("success");
      setForm(EMPTY_FORM);
      setErrors({});
    } catch (err) {
      console.error("Contact form email error:", err);
      setErrorMsg("Something went wrong. Please try again or email us directly.");
      setStatus("error");
    }
  }

  const inputCls = (field: keyof FormState) =>
    `w-full px-4 py-3 rounded-lg border ${
      errors[field]
        ? "border-red-400 focus:ring-red-400/50"
        : "border-border focus:ring-primary/50"
    } bg-input-background focus:outline-none focus:ring-2`;

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-slate-900 text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6" style={{ fontFamily: 'var(--font-display)' }}>
              Get in Touch
            </h1>
            <p className="text-xl opacity-90">
              Have questions about our programs? Our team is here to help you take the next step in your healthcare career.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <h2 className="text-3xl font-bold mb-6" style={{ fontFamily: 'var(--font-display)' }}>
                Send us a Message
              </h2>
              <p className="text-muted-foreground mb-8">
                Fill out the form below and we'll get back to you within 24 hours.
              </p>

              {/* Success state */}
              {status === "success" && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="mb-6 flex items-start gap-3 rounded-2xl border border-green-200 bg-green-50 p-5 text-green-800"
                >
                  <CheckCircle size={22} className="mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-semibold">Message sent successfully!</p>
                    <p className="text-sm mt-1">
                      We've received your enquiry. Check your inbox for a confirmation email — we'll
                      get back to you within 24 hours.
                    </p>
                  </div>
                </motion.div>
              )}

              {/* Error state */}
              {status === "error" && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="mb-6 flex items-start gap-3 rounded-2xl border border-red-200 bg-red-50 p-5 text-red-800"
                >
                  <AlertCircle size={22} className="mt-0.5 flex-shrink-0" />
                  <p className="text-sm">{errorMsg}</p>
                </motion.div>
              )}

              <form className="space-y-6" onSubmit={handleSubmit} noValidate>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">First Name *</label>
                    <input
                      type="text"
                      name="firstName"
                      value={form.firstName}
                      onChange={handleChange}
                      className={inputCls("firstName")}
                      placeholder="John"
                    />
                    {errors.firstName && (
                      <p className="mt-1 text-sm text-red-500">{errors.firstName}</p>
                    )}
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Last Name *</label>
                    <input
                      type="text"
                      name="lastName"
                      value={form.lastName}
                      onChange={handleChange}
                      className={inputCls("lastName")}
                      placeholder="Doe"
                    />
                    {errors.lastName && (
                      <p className="mt-1 text-sm text-red-500">{errors.lastName}</p>
                    )}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Email Address *</label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    className={inputCls("email")}
                    placeholder="john@example.com"
                  />
                  {errors.email && (
                    <p className="mt-1 text-sm text-red-500">{errors.email}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Phone Number *</label>
                  <input
                    type="tel"
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    className={inputCls("phone")}
                    placeholder="+91 XXXXX XXXXX"
                  />
                  {errors.phone && (
                    <p className="mt-1 text-sm text-red-500">{errors.phone}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Subject *</label>
                  <select
                    name="subject"
                    value={form.subject}
                    onChange={handleChange}
                    className={inputCls("subject")}
                  >
                    <option value="">Select a subject</option>
                    <option value="Program Inquiry">Program Inquiry</option>
                    <option value="Registration Support">Registration Support</option>
                    <option value="Placement Services">Placement Services</option>
                    <option value="Partnership Opportunities">Partnership Opportunities</option>
                    <option value="Other">Other</option>
                  </select>
                  {errors.subject && (
                    <p className="mt-1 text-sm text-red-500">{errors.subject}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Message *</label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    rows={6}
                    className={inputCls("message")}
                    placeholder="Tell us how we can help you..."
                  />
                  {errors.message && (
                    <p className="mt-1 text-sm text-red-500">{errors.message}</p>
                  )}
                </div>

                <motion.button
                  whileHover={{ scale: status === "sending" ? 1 : 1.02 }}
                  whileTap={{ scale: status === "sending" ? 1 : 0.98 }}
                  type="submit"
                  disabled={status === "sending"}
                  className="w-full bg-primary text-primary-foreground px-8 py-4 rounded-full hover:bg-primary/90 transition-all font-bold flex items-center justify-center gap-2 shadow-lg disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {status === "sending" ? (
                    <>
                      <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24" fill="none">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
                      </svg>
                      Sending…
                    </>
                  ) : (
                    <>
                      <Send size={20} />
                      Send Message
                    </>
                  )}
                </motion.button>
              </form>
            </motion.div>

            {/* Contact Details */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-3xl font-bold mb-6" style={{ fontFamily: 'var(--font-display)' }}>
                  Contact Information
                </h2>
                <p className="text-muted-foreground mb-8">
                  Reach out to us through any of the following channels. We're here to support your journey.
                </p>
              </div>

              <div className="space-y-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                  className="bg-card rounded-2xl p-6 shadow-lg border border-border"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <Mail className="text-primary" size={24} />
                    </div>
                    <div>
                      <h3 className="font-bold mb-2">Email</h3>
                      <p className="text-muted-foreground">dschool@sims.healthcare</p>
                      <p className="text-sm text-muted-foreground mt-1">We'll respond within 24 hours</p>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="bg-card rounded-2xl p-6 shadow-lg border border-border"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <Phone className="text-primary" size={24} />
                    </div>
                    <div>
                      <h3 className="font-bold mb-2">Phone</h3>
                      <p className="text-muted-foreground">+91 91007 77107</p>
                      <p className="text-sm text-muted-foreground mt-1">Mon-Sat: 9:30 AM - 5:30 PM IST</p>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="bg-card rounded-2xl p-6 shadow-lg border border-border"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <MapPin className="text-primary" size={24} />
                    </div>
                    <div>
                      <h3 className="font-bold mb-2">Address</h3>
                      <p className="text-muted-foreground">
                        SIMS Healthcare Private Limited,<br />
                        Plot No.26, Kavuri Hills,<br />
                        Madhapur, Hyderabad — 500033
                      </p>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="bg-card rounded-2xl p-6 shadow-lg border border-border"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <Clock className="text-primary" size={24} />
                    </div>
                    <div>
                      <h3 className="font-bold mb-2">Office Hours</h3>
                      <p className="text-muted-foreground">
                        Monday - Friday: 9:30 AM - 5:30 PM<br />
                        Saturday: 9:30 AM - 2:00 PM<br />
                        Sunday: Closed
                      </p>
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Google Maps Embed */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="rounded-2xl overflow-hidden shadow-lg border border-border relative group"
              >
                <iframe
                  title="SIMS Healthcare Location"
                  src={MAPS_EMBED_URL}
                  width="100%"
                  height="280"
                  style={{ border: 0, display: "block" }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
                {/* Overlay link to open directions */}
                <a
                  href={MAPS_DIRECTIONS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute inset-0 flex items-end justify-end p-3 bg-transparent"
                  aria-label="Get directions to SIMS Healthcare"
                >
                  <span className="flex items-center gap-1.5 bg-primary text-primary-foreground text-xs font-semibold px-3 py-2 rounded-full shadow-md opacity-0 group-hover:opacity-100 transition-opacity">
                    <ExternalLink size={13} />
                    Get Directions
                  </span>
                </a>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-secondary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-6" style={{ fontFamily: 'var(--font-display)' }}>
              Frequently Asked <span className="text-primary">Questions</span>
            </h2>
          </motion.div>

          <div className="space-y-4">
            {[
              {
                q: "How do I register for a program?",
                a: "Visit the Programs page, select your desired program, and click 'Register Now'. Fill out the form and complete the payment to secure your spot.",
              },
              {
                q: "What payment methods do you accept?",
                a: "We accept Credit/Debit Cards, UPI, and Net Banking. All payments are processed securely through our payment gateway.",
              },
              {
                q: "Do you offer refunds?",
                a: "Yes, we offer full refunds if cancellation is made 15 days before the program start date. Please refer to our refund policy for details.",
              },
              {
                q: "Are the programs accredited?",
                a: "All our programs are delivered in association with ASCI (Administrative Staff College of India), ensuring high-quality, industry-aligned education.",
              },
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-card rounded-2xl p-6 shadow-sm border border-border"
              >
                <h3 className="font-bold mb-2">{faq.q}</h3>
                <p className="text-muted-foreground">{faq.a}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
