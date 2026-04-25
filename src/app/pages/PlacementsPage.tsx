import { useState } from "react";
import { motion } from "motion/react";
import {
  Users, Award, CheckCircle, Briefcase, GraduationCap,
  MapPin, Mail, CheckCircle2, AlertCircle, Loader2,
} from "lucide-react";
import {
  initEmailJS,
  sendPlacementUserEmail,
  sendPlacementAdminEmail,
} from "../services/emailService";

initEmailJS();

const fieldCls = (hasError: boolean) =>
  `w-full px-4 py-3 rounded-lg border ${
    hasError
      ? "border-red-400/70 focus:ring-red-400/50"
      : "border-white/20 focus:ring-white/40"
  } bg-white/10 text-white placeholder:text-white/60 focus:outline-none focus:ring-2 transition-all`;

const SPECIALIZATIONS = [
  { value: "", label: "Select Preferred Specialization" },
  { value: "Nursing", label: "Nursing" },
  { value: "Radiology", label: "Radiology" },
  { value: "Healthcare Administration", label: "Healthcare Administration" },
  { value: "Emergency Care", label: "Emergency Care" },
  { value: "ICU / Critical Care", label: "ICU / Critical Care" },
  { value: "Pediatrics", label: "Pediatrics" },
  { value: "Operation Theatre", label: "Operation Theatre" },
  { value: "Pharmacy", label: "Pharmacy" },
  { value: "MBBS", label: "MBBS" },
  { value: "MRCEM", label: "MRCEM" },
];

type Status = "idle" | "step2" | "notifying" | "complete" | "error";

type FieldErrors = {
  fullName?: string;
  email?: string;
  phone?: string;
  specialization?: string;
};

function buildEmailUrl(userEmail: string, subject: string, body: string): string {
  const domain = userEmail.split("@")[1]?.toLowerCase() ?? "";
  const to  = "dschool@sims.healthcare";
  const cc  = encodeURIComponent(userEmail);          // user gets a copy too
  const sub = encodeURIComponent(subject);
  const bdy = encodeURIComponent(body);

  if (domain.includes("gmail"))
    return `https://mail.google.com/mail/?view=cm&fs=1&to=${to}&cc=${cc}&su=${sub}&body=${bdy}`;
  if (domain.includes("yahoo"))
    return `https://compose.mail.yahoo.com/?to=${to}&cc=${cc}&subject=${sub}&body=${bdy}`;
  if (domain.includes("hotmail") || domain.includes("outlook") || domain.includes("live"))
    return `https://outlook.live.com/owa/?path=/mail/action/compose&to=${to}&cc=${cc}&subject=${sub}&body=${bdy}`;
  // fallback: device default mail app
  return `mailto:${to}?cc=${cc}&subject=${sub}&body=${bdy}`;
}

function validatePlacement(fullName: string, email: string, phone: string, specialization: string): FieldErrors {
  const e: FieldErrors = {};
  if (fullName.trim().length < 2)
    e.fullName = "Full name must be at least 2 characters.";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim()))
    e.email = "Please enter a valid email address.";
  const digits = phone.replace(/\D/g, "");
  if (!/^[6-9]\d{9}$/.test(digits) && !/^91[6-9]\d{9}$/.test(digits))
    e.phone = "Enter a valid 10-digit Indian phone number.";
  if (!specialization)
    e.specialization = "Please select a specialization.";
  return e;
}

export default function PlacementsPage() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [specialization, setSpecialization] = useState("");
  const [fieldErrors, setFieldErrors] = useState<FieldErrors>({});
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const [cvEmailUrl, setCvEmailUrl] = useState("");

  // Step 1: validate form → go to step2 screen (no emails yet)
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const errs = validatePlacement(fullName, email, phone, specialization);
    if (Object.keys(errs).length > 0) { setFieldErrors(errs); return; }
    const subject = `CV Application – ${fullName} – ${specialization}`;
    const body = `Dear D School Placement Team,\n\nPlease find my CV attached.\n\nName: ${fullName}\nPhone: ${phone}\nEmail: ${email}\nSpecialization: ${specialization}\n\nRegards,\n${fullName}`;
    setFieldErrors({});
    setErrorMsg("");
    setCvEmailUrl(buildEmailUrl(email, subject, body));
    setStatus("step2");
  };

  // Step 2: open user's email compose + fire EmailJS to both sides
  const handleSendCV = async () => {
    window.open(cvEmailUrl, "_blank");
    setStatus("notifying");
    const [userResult, adminResult] = await Promise.allSettled([
      sendPlacementUserEmail({ fullName, email, phone, specialization }),
      sendPlacementAdminEmail({
        fullName, email, phone, specialization,
        cvLink: "CV sent by applicant directly to dschool@sims.healthcare",
        cvFilename: "N/A",
      }),
    ]);
    if (userResult.status === "rejected") console.error("User email failed:", userResult.reason);
    if (adminResult.status === "rejected") console.error("Admin email failed:", adminResult.reason);
    if (userResult.status === "fulfilled" || adminResult.status === "fulfilled") {
      setStatus("complete");
    } else {
      setStatus("error");
      setErrorMsg("Notification emails failed. Please try again or contact dschool@sims.healthcare.");
    }
  };

  const isNotifying = status === "notifying";

  const features = [
    { icon: Users, title: "500+ Placements", description: "Successfully facilitated placements for radiographers, nurses, and doctors across leading healthcare institutions" },
    { icon: Award, title: "Industry Partners", description: "Strong network with top-tier hospitals, healthcare facilities, and medical institutions" },
    { icon: CheckCircle, title: "End-to-End Support", description: "Skill enhancement, exam prep, interview readiness, licensing, and onboarding" },
    { icon: Briefcase, title: "Career Development", description: "Comprehensive training and continuous professional development throughout your career journey" },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero */}
      <section className="relative text-white py-24 overflow-hidden">
        <img
          src="/assets/placements.jpeg"
          alt=""
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/80 via-blue-800/75 to-slate-900/80" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold mb-6" style={{ fontFamily: "var(--font-display)" }}>
              Career <span className="text-accent">Placements</span>
            </h1>
            <p className="text-xl opacity-90 mb-8">
              With a strong network of healthcare partners, recruiters, and leading hospitals, D School has
              successfully facilitated over 500 placements for healthcare professionals.
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-center">
              {[{ value: "500+", label: "Placements" }, { value: "20+", label: "Partners" }, { value: "95%", label: "Success Rate" }].map((s) => (
                <div key={s.label} className="bg-primary-foreground/10 backdrop-blur-sm rounded-2xl p-6 min-w-[150px]">
                  <p className="text-4xl font-bold mb-2">{s.value}</p>
                  <p className="opacity-90">{s.label}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6" style={{ fontFamily: "var(--font-display)" }}>
              Why Choose D School for <span className="text-primary">Your Career</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {features.map((feature, index) => (
              <motion.div key={index} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }}
                className="bg-card rounded-2xl p-8 shadow-lg border border-border text-center hover:shadow-xl transition-all">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <feature.icon className="text-primary" size={32} />
                </div>
                <h3 className="text-xl font-bold mb-3" style={{ fontFamily: "var(--font-display)" }}>{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </motion.div>
            ))}
          </div>

          {/* Metrics */}
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-16">
            <h3 className="text-3xl font-bold mb-8 text-center" style={{ fontFamily: "var(--font-display)" }}>Our Success Metrics</h3>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { title: "Quick Placements", value: "30 Days", description: "Average time from training completion to placement", icon: CheckCircle },
                { title: "Satisfaction Rate", value: "98%", description: "Healthcare professionals satisfied with their placements", icon: Award },
                { title: "Long-term Success", value: "85%", description: "Professionals continue with their placed organization after 1 year", icon: GraduationCap },
              ].map((metric, index) => (
                <motion.div key={index} initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }}
                  className="bg-gradient-to-br from-primary to-blue-800 text-white rounded-2xl p-8 text-center shadow-lg">
                  <metric.icon className="mx-auto mb-4 text-accent" size={48} />
                  <p className="text-5xl font-bold mb-3">{metric.value}</p>
                  <p className="text-xl font-bold mb-2">{metric.title}</p>
                  <p className="text-sm opacity-90">{metric.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Process */}
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-secondary rounded-3xl p-12 mb-16">
            <h3 className="text-3xl font-bold mb-8 text-center" style={{ fontFamily: "var(--font-display)" }}>Our Placement Process</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { icon: Briefcase, title: "Skill Enhancement", desc: "Comprehensive training programs" },
                { icon: GraduationCap, title: "Exam Preparation", desc: "IELTS, OET, NCLEX support" },
                { icon: CheckCircle, title: "Interview Readiness", desc: "Mock interviews & coaching" },
                { icon: MapPin, title: "Onboarding", desc: "Licensing & relocation support" },
              ].map((step, index) => (
                <div key={index} className="text-center">
                  <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <step.icon className="text-primary-foreground" size={32} />
                  </div>
                  <h4 className="text-xl font-bold mb-2">{step.title}</h4>
                  <p className="text-muted-foreground">{step.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Application Form ── */}
      <section className="py-24 bg-gradient-to-br from-blue-900 via-blue-800 to-slate-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
            <Mail className="mx-auto mb-6 text-accent" size={64} />
            <h2 className="text-4xl font-bold mb-4" style={{ fontFamily: "var(--font-display)" }}>Submit Your Application</h2>
            <p className="text-xl opacity-90">Take the first step towards your rewarding healthcare career</p>
          </motion.div>

          <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
            {status !== "idle" && status !== "error" ? (
              /* ── Step 2 / Complete screen ── */
              <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="py-10">

                {/* Step 1 — always done at this point */}
                <div className="flex items-start gap-4 bg-green-400/10 border border-green-400/30 rounded-2xl p-5 mb-4">
                  <div className="w-10 h-10 bg-green-400/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <CheckCircle2 size={22} className="text-green-300" />
                  </div>
                  <div className="text-left">
                    <p className="font-bold text-green-300">Step 1 Complete — Form Submitted</p>
                    <p className="text-sm opacity-80 mt-0.5">
                      Details received. Confirmation emails to <strong>{email}</strong> and admin will be sent after Step 2.
                    </p>
                  </div>
                </div>

                {/* Step 2 — send CV + trigger emails */}
                <div className={`flex items-start gap-4 border-2 rounded-2xl p-5 mb-6 ${
                  status === "complete"
                    ? "bg-green-400/10 border-green-400/40"
                    : "bg-accent/10 border-accent/50"
                }`}>
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${
                    status === "complete" ? "bg-green-400/20" : "bg-accent/20"
                  }`}>
                    {status === "complete"
                      ? <CheckCircle2 size={22} className="text-green-300" />
                      : <Mail size={20} className="text-accent" />
                    }
                  </div>
                  <div className="text-left flex-1">
                    {status === "complete" ? (
                      <>
                        <p className="font-bold text-green-300">Step 2 Complete — CV Sent &amp; Emails Delivered</p>
                        <p className="text-sm opacity-80 mt-1">
                          Confirmation emails have been sent to <strong>{email}</strong> and the admin. Your CV email is on its way to <span className="text-accent font-semibold">dschool@sims.healthcare</span>.
                        </p>
                      </>
                    ) : (
                      <>
                        <p className="font-bold text-accent">Step 2 — Send Your CV &amp; Trigger Notifications</p>
                        <p className="text-sm opacity-80 mt-1 mb-1">
                          Click below to open <strong>your email app</strong> pre-addressed to:
                        </p>
                        <p className="font-mono text-accent font-bold text-sm mb-2">dschool@sims.healthcare</p>
                        <p className="text-xs opacity-70 mb-4">
                          Attach your CV (PDF preferred) and click <strong>Send</strong>. This also triggers confirmation emails to both <strong>you</strong> and the <strong>admin</strong>.
                        </p>
                        <button
                          onClick={handleSendCV}
                          disabled={isNotifying}
                          className="inline-flex items-center gap-2 bg-accent text-primary px-6 py-3 rounded-full font-bold text-sm hover:bg-accent/90 transition-all shadow-lg disabled:opacity-60"
                        >
                          {isNotifying
                            ? <><Loader2 size={16} className="animate-spin" /> Sending Notifications…</>
                            : <><Mail size={16} /> Open My Email &amp; Send CV to Admin</>
                          }
                        </button>
                      </>
                    )}
                  </div>
                </div>

                <div className="text-center">
                  <button
                    onClick={() => {
                      setStatus("idle");
                      setFullName(""); setEmail(""); setPhone(""); setSpecialization("");
                      setErrorMsg(""); setFieldErrors({});
                    }}
                    className="px-6 py-2.5 rounded-full bg-white/15 hover:bg-white/25 text-sm font-semibold transition-all"
                  >
                    Submit Another Application
                  </button>
                </div>
              </motion.div>
            ) : (
              /* ── Form ── */
              <form onSubmit={handleSubmit} noValidate>
                <div className="space-y-4">
                  <div>
                    <input
                      type="text"
                      placeholder="Full Name *"
                      className={fieldCls(!!fieldErrors.fullName)}
                      value={fullName}
                      onChange={(e) => { setFullName(e.target.value); setFieldErrors((p) => ({ ...p, fullName: undefined })); }}
                    />
                    {fieldErrors.fullName && (
                      <p className="mt-1 text-sm text-red-300 flex items-center gap-1">
                        <AlertCircle size={13} /> {fieldErrors.fullName}
                      </p>
                    )}
                  </div>

                  <div>
                    <input
                      type="email"
                      placeholder="Email Address *"
                      className={fieldCls(!!fieldErrors.email)}
                      value={email}
                      onChange={(e) => { setEmail(e.target.value); setFieldErrors((p) => ({ ...p, email: undefined })); }}
                    />
                    {fieldErrors.email && (
                      <p className="mt-1 text-sm text-red-300 flex items-center gap-1">
                        <AlertCircle size={13} /> {fieldErrors.email}
                      </p>
                    )}
                  </div>

                  <div>
                    <input
                      type="tel"
                      placeholder="Phone Number *"
                      className={fieldCls(!!fieldErrors.phone)}
                      value={phone}
                      onChange={(e) => { setPhone(e.target.value); setFieldErrors((p) => ({ ...p, phone: undefined })); }}
                    />
                    {fieldErrors.phone && (
                      <p className="mt-1 text-sm text-red-300 flex items-center gap-1">
                        <AlertCircle size={13} /> {fieldErrors.phone}
                      </p>
                    )}
                  </div>

                  <div>
                    <select
                      className={fieldCls(!!fieldErrors.specialization)}
                      value={specialization}
                      onChange={(e) => { setSpecialization(e.target.value); setFieldErrors((p) => ({ ...p, specialization: undefined })); }}
                    >
                      {SPECIALIZATIONS.map((s) => (
                        <option key={s.value} value={s.value} className="text-slate-900">{s.label}</option>
                      ))}
                    </select>
                    {fieldErrors.specialization && (
                      <p className="mt-1 text-sm text-red-300 flex items-center gap-1">
                        <AlertCircle size={13} /> {fieldErrors.specialization}
                      </p>
                    )}
                  </div>

                  {/* CV note */}
                  <div className="flex items-start gap-3 bg-white/5 border border-white/15 rounded-xl px-4 py-3">
                    <Mail size={16} className="text-accent flex-shrink-0 mt-0.5" />
                    <p className="text-xs text-white/70">
                      Kindly Share yours resume to{" "}
                      <span className="text-accent font-semibold">dschool@sims.healthcare</span>.<strong>Our Team will get back to you soon.</strong><br />
                    </p>
                  </div>

                  {status === "error" && (
                    <p className="text-red-300 text-sm flex items-center gap-2">
                      <AlertCircle size={16} /> {errorMsg}
                    </p>
                  )}

                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full bg-white text-blue-900 px-6 py-4 rounded-lg hover:bg-white/90 transition-all font-bold text-lg flex items-center justify-center gap-2"
                  >
                    Submit Application
                  </motion.button>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
