import { useState, useRef } from "react";
import { motion } from "motion/react";
import {
  Users, Award, CheckCircle, Upload, Briefcase, GraduationCap,
  MapPin, FileText, X, CheckCircle2, AlertCircle, Loader2,
} from "lucide-react";
import {
  initEmailJS,
  uploadCVToCloudinary,
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
];

const ALLOWED_TYPES = [
  "application/pdf",
  "application/msword",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
];

type Status = "idle" | "uploading" | "sending" | "success" | "error";

type FieldErrors = {
  fullName?: string;
  email?: string;
  phone?: string;
  specialization?: string;
};

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
  const [cvFile, setCvFile] = useState<File | null>(null);
  const [fileError, setFileError] = useState("");
  const [fieldErrors, setFieldErrors] = useState<FieldErrors>({});
  const [dragOver, setDragOver] = useState(false);
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const fileInputRef = useRef<HTMLInputElement>(null);

  function applyFile(file: File | undefined) {
    if (!file) return;
    if (!ALLOWED_TYPES.includes(file.type)) {
      setFileError("Only PDF, DOC, or DOCX files are accepted.");
      setCvFile(null);
      return;
    }
    if (file.size > 5 * 1024 * 1024) {
      setFileError("File must be smaller than 5 MB.");
      setCvFile(null);
      return;
    }
    setFileError("");
    setCvFile(file);
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    applyFile(e.target.files?.[0]);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setDragOver(false);
    const file = e.dataTransfer.files?.[0];
    if (file) {
      applyFile(file);
      if (fileInputRef.current) {
        const dt = new DataTransfer();
        dt.items.add(file);
        fileInputRef.current.files = dt.files;
      }
    }
  };

  const removeFile = () => {
    setCvFile(null);
    setFileError("");
    if (fileInputRef.current) fileInputRef.current.value = "";
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const errs = validatePlacement(fullName, email, phone, specialization);
    if (Object.keys(errs).length > 0) {
      setFieldErrors(errs);
      return;
    }
    if (!cvFile) {
      setFileError("Please upload your CV before submitting.");
      return;
    }

    setFieldErrors({});
    setErrorMsg("");

    // Step 1 — upload CV to Cloudinary (permanent, free)
    setStatus("uploading");
    let cvLink = "";
    try {
      cvLink = await uploadCVToCloudinary(cvFile);
    } catch (err) {
      console.error("CV upload failed:", err);
      setStatus("error");
      setErrorMsg("CV upload failed. Please check your internet connection and try again.");
      return;
    }

    // Step 2 — send both emails in parallel
    setStatus("sending");
    const [userResult, adminResult] = await Promise.allSettled([
      sendPlacementUserEmail({ fullName, email, phone, specialization }),
      sendPlacementAdminEmail({ fullName, email, phone, specialization, cvLink, cvFilename: cvFile.name }),
    ]);

    if (userResult.status === "rejected") console.error("User email failed:", userResult.reason);
    if (adminResult.status === "rejected") console.error("Admin email failed:", adminResult.reason);

    if (userResult.status === "fulfilled" || adminResult.status === "fulfilled") {
      setStatus("success");
    } else {
      setStatus("error");
      setErrorMsg("Submission failed. Please try again or email us at dschool@sims.healthcare.");
    }
  };

  const isBusy = status === "uploading" || status === "sending";
  const buttonLabel =
    status === "uploading" ? "Uploading CV…" :
    status === "sending"   ? "Sending Application…" :
                             "Submit Application";

  const features = [
    { icon: Users, title: "500+ Placements", description: "Successfully facilitated placements for radiographers, nurses, and doctors across leading healthcare institutions" },
    { icon: Award, title: "Industry Partners", description: "Strong network with top-tier hospitals, healthcare facilities, and medical institutions" },
    { icon: CheckCircle, title: "End-to-End Support", description: "Skill enhancement, exam prep, interview readiness, licensing, and onboarding" },
    { icon: Briefcase, title: "Career Development", description: "Comprehensive training and continuous professional development throughout your career journey" },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-slate-900 text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
                className="relative rounded-2xl p-8 shadow-lg border border-border text-center hover:shadow-xl transition-all overflow-hidden">
                {index === 0 && (
                  <>
                    <img
                      src="/assets/placements.jpeg"
                      alt=""
                      aria-hidden="true"
                      className="absolute inset-0 w-full h-full object-cover scale-110"
                      style={{ filter: "blur(6px)" }}
                    />
                    <div className="absolute inset-0 bg-blue-900/75" />
                  </>
                )}
                {index !== 0 && <div className="absolute inset-0 bg-card" />}
                <div className="relative z-10">
                  <div className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 ${index === 0 ? "bg-white/20" : "bg-primary/10"}`}>
                    <feature.icon className={index === 0 ? "text-white" : "text-primary"} size={32} />
                  </div>
                  <h3 className={`text-xl font-bold mb-3 ${index === 0 ? "text-white" : ""}`} style={{ fontFamily: "var(--font-display)" }}>{feature.title}</h3>
                  <p className={index === 0 ? "text-white/80" : "text-muted-foreground"}>{feature.description}</p>
                </div>
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
            <Upload className="mx-auto mb-6" size={64} />
            <h2 className="text-4xl font-bold mb-4" style={{ fontFamily: "var(--font-display)" }}>Upload Your CV</h2>
            <p className="text-xl opacity-90">Take the first step towards your rewarding healthcare career</p>
          </motion.div>

          <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
            {status === "success" ? (
              /* ── Success ── */
              <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="text-center py-12">
                <div className="w-24 h-24 bg-green-400/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle2 size={52} className="text-green-300" />
                </div>
                <h3 className="text-3xl font-bold mb-4" style={{ fontFamily: "var(--font-display)" }}>Application Submitted!</h3>
                <p className="text-lg opacity-90 mb-2">Thank you for submitting your application to D School.</p>
                <p className="opacity-75 mb-8">
                  A confirmation has been sent to <strong>{email}</strong>. Our placement team will review your CV and reach out within 2–3 business days.
                </p>
                <div className="bg-white/10 rounded-2xl p-6 text-left max-w-md mx-auto mb-8">
                  <p className="font-semibold mb-2">What happens next?</p>
                  <ul className="space-y-2 text-sm opacity-90 list-disc list-inside">
                    <li>Our team reviews your CV</li>
                    <li>You'll receive a call for a brief screening</li>
                    <li>We match you with suitable openings</li>
                    <li>Interview preparation & placement support</li>
                  </ul>
                </div>
                <button
                  onClick={() => {
                    setStatus("idle");
                    setFullName(""); setEmail(""); setPhone(""); setSpecialization("");
                    setCvFile(null); setFileError(""); setErrorMsg(""); setFieldErrors({});
                  }}
                  className="px-8 py-3 rounded-full bg-white/20 hover:bg-white/30 font-semibold transition-all"
                >
                  Submit Another Application
                </button>
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

                  {/* CV Upload */}
                  <div>
                    <input ref={fileInputRef} type="file" accept=".pdf,.doc,.docx" className="hidden" onChange={handleFileChange} />

                    {cvFile ? (
                      <div className="flex items-center gap-3 p-4 rounded-lg bg-white/10 border border-white/30">
                        <FileText size={24} className="text-green-300 flex-shrink-0" />
                        <span className="flex-1 text-sm truncate">{cvFile.name}</span>
                        <span className="text-xs opacity-60 flex-shrink-0">
                          {(cvFile.size / 1024 / 1024).toFixed(2)} MB
                        </span>
                        <button type="button" onClick={removeFile} className="text-white/60 hover:text-white transition-colors flex-shrink-0">
                          <X size={18} />
                        </button>
                      </div>
                    ) : (
                      <div
                        onClick={() => fileInputRef.current?.click()}
                        onDragOver={(e) => { e.preventDefault(); setDragOver(true); }}
                        onDragLeave={() => setDragOver(false)}
                        onDrop={handleDrop}
                        className={`border-2 border-dashed rounded-lg p-8 text-center cursor-pointer transition-all ${
                          dragOver ? "border-white bg-white/20" : "border-white/30 hover:border-white/60 hover:bg-white/10"
                        }`}
                      >
                        <Upload className="mx-auto mb-2 opacity-80" size={32} />
                        <p className="font-semibold">Click or drag to upload your CV</p>
                        <p className="text-sm opacity-70 mt-1">PDF, DOC, DOCX — Max 5 MB</p>
                      </div>
                    )}

                    {fileError && (
                      <p className="mt-2 text-red-300 text-sm flex items-center gap-1">
                        <AlertCircle size={14} /> {fileError}
                      </p>
                    )}
                  </div>

                  {/* Progress hint while busy */}
                  {isBusy && (
                    <div className="flex items-center gap-2 text-sm opacity-80">
                      <Loader2 size={16} className="animate-spin" />
                      {status === "uploading" ? "Uploading your CV securely…" : "Sending your application…"}
                    </div>
                  )}

                  {status === "error" && (
                    <p className="text-red-300 text-sm flex items-center gap-2">
                      <AlertCircle size={16} /> {errorMsg}
                    </p>
                  )}

                  <motion.button
                    type="submit"
                    disabled={isBusy}
                    whileHover={{ scale: isBusy ? 1 : 1.02 }}
                    whileTap={{ scale: isBusy ? 1 : 0.98 }}
                    className="w-full bg-white text-blue-900 px-6 py-4 rounded-lg hover:bg-white/90 transition-all font-bold text-lg disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                  >
                    {isBusy && <Loader2 size={20} className="animate-spin" />}
                    {buttonLabel}
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
