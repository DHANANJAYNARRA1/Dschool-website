import { motion } from "motion/react";
import { Link } from "react-router";
import { CheckCircle, Calendar, Mail, Phone, User, GraduationCap, MapPin } from "lucide-react";

export default function Success() {
  const raw = sessionStorage.getItem("registrationData");
  const data = raw ? JSON.parse(raw) : null;

  const name: string = data?.fullName ?? "";
  const email: string = data?.email ?? "";
  const phone: string = data?.phone ?? "";
  const city: string = data?.city ?? "";
  const state: string = data?.state ?? "";
  const programName: string = data?.program?.name ?? "";
  const qualification: string = data?.qualification ?? "";
  const experience: string = data?.experience ?? "";

  const registrationDate = new Date().toLocaleDateString("en-IN", {
    day: "numeric", month: "long", year: "numeric",
  });

  return (
    <div className="min-h-screen pt-20 bg-gradient-to-br from-primary/5 to-accent/5">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-16">

        {/* Success header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-8"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.15, type: "spring" }}
            className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-5"
          >
            <CheckCircle className="text-white" size={44} />
          </motion.div>

          <h1
            className="text-4xl md:text-5xl font-bold mb-3"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Registration Successful!
          </h1>
          <p className="text-muted-foreground text-lg">
            Welcome to the D School family
            {name ? <>, <span className="font-semibold text-foreground">{name}</span></> : ""}!
          </p>
        </motion.div>

        {/* Registration card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-card rounded-2xl shadow-xl border border-border overflow-hidden mb-6"
        >
          {/* Card header */}
          <div className="bg-primary px-6 py-4">
            <p className="text-primary-foreground/70 text-xs uppercase tracking-widest mb-0.5">Registration Confirmed</p>
            <h2 className="text-primary-foreground font-bold text-lg">{programName}</h2>
          </div>

          {/* Card body */}
          <div className="p-6 space-y-5">

            {/* Personal */}
            <div>
              <div className="flex items-center gap-2 mb-3">
                <User size={16} className="text-primary" />
                <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Personal Details</span>
              </div>
              <div className="grid grid-cols-2 gap-x-6 gap-y-2 text-sm">
                <div>
                  <p className="text-muted-foreground text-xs">Full Name</p>
                  <p className="font-medium">{name || "—"}</p>
                </div>
                <div>
                  <p className="text-muted-foreground text-xs">Phone</p>
                  <p className="font-medium">{phone || "—"}</p>
                </div>
                <div className="col-span-2">
                  <p className="text-muted-foreground text-xs">Email</p>
                  <p className="font-medium">{email || "—"}</p>
                </div>
              </div>
            </div>

            <div className="border-t border-border" />

            {/* Location */}
            <div>
              <div className="flex items-center gap-2 mb-3">
                <MapPin size={16} className="text-primary" />
                <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Location</span>
              </div>
              <p className="text-sm font-medium">{[city, state].filter(Boolean).join(", ") || "—"}</p>
            </div>

            <div className="border-t border-border" />

            {/* Professional */}
            <div>
              <div className="flex items-center gap-2 mb-3">
                <GraduationCap size={16} className="text-primary" />
                <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Professional</span>
              </div>
              <div className="grid grid-cols-2 gap-x-6 gap-y-2 text-sm">
                <div>
                  <p className="text-muted-foreground text-xs">Qualification</p>
                  <p className="font-medium">{qualification || "—"}</p>
                </div>
                <div>
                  <p className="text-muted-foreground text-xs">Experience</p>
                  <p className="font-medium">{experience || "—"}</p>
                </div>
              </div>
            </div>

            <div className="border-t border-border" />

            {/* Date */}
            <div className="flex items-center justify-between text-sm">
              <div className="flex items-center gap-2 text-muted-foreground">
                <Calendar size={14} />
                <span>Registered on {registrationDate}</span>
              </div>
              <span className="inline-flex items-center gap-1.5 bg-green-100 text-green-700 text-xs font-semibold px-3 py-1 rounded-full">
                <CheckCircle size={12} /> Confirmed
              </span>
            </div>
          </div>
        </motion.div>

        {/* What happens next */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-card rounded-2xl border border-border p-6 mb-6"
        >
          <h3 className="font-bold mb-4">What happens next?</h3>
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <Mail size={18} className="text-primary mt-0.5 flex-shrink-0" />
              <div>
                <p className="font-semibold text-sm">Confirmation Email</p>
                <p className="text-sm text-muted-foreground">
                  A confirmation has been sent to <span className="text-foreground font-medium">{email || "your email"}</span>
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Phone size={18} className="text-primary mt-0.5 flex-shrink-0" />
              <div>
                <p className="font-semibold text-sm">We'll call you</p>
                <p className="text-sm text-muted-foreground">A coordinator will reach out within 24 hours with next steps</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Calendar size={18} className="text-primary mt-0.5 flex-shrink-0" />
              <div>
                <p className="font-semibold text-sm">Program Schedule</p>
                <p className="text-sm text-muted-foreground">Schedule and joining instructions sent 1 week before start</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Contact + buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <div className="bg-gradient-to-br from-blue-900 via-blue-800 to-slate-900 text-white rounded-2xl p-5 mb-6 text-center">
            <p className="font-semibold mb-1">Need help?</p>
            <p className="text-sm opacity-80 mb-3">Our support team is always available</p>
            <div className="flex flex-col sm:flex-row gap-2 justify-center text-sm opacity-90">
              <span>📧 dschool@sims.healthcare</span>
              <span className="hidden sm:inline">·</span>
              <span>📞 +91 91007 77107</span>
            </div>
          </div>

          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              to="/"
              className="bg-primary text-primary-foreground px-8 py-3 rounded-full hover:bg-primary/90 transition-all font-semibold"
            >
              Back to Home
            </Link>
            <Link
              to="/programs"
              className="border-2 border-primary text-primary px-8 py-3 rounded-full hover:bg-primary hover:text-primary-foreground transition-all font-semibold"
            >
              Explore More Programs
            </Link>
          </div>
        </motion.div>

      </div>
    </div>
  );
}
