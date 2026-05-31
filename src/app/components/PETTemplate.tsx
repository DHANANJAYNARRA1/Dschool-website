import { motion } from "motion/react";
import { Users, CheckCircle, BookOpen, Globe } from "lucide-react";
import { useState } from "react";
import {
  initPETEmailJS,
  sendPETUserConfirmationEmail,
  sendPETAdminNotificationEmail,
} from "../services/emailService";

initPETEmailJS();

interface PETHighlight {
  title: string;
  description: string;
}

interface PETTemplateProps {
  title: string;
  subtitle: string;
  description: string;
  category: "Licensed Examination" | "Language Training";
  duration?: string;
  trainingModes: string[];
  highlights: PETHighlight[];
  curriculum: string[];
  outcomes: string[];
  programId: string;
  price?: string;
  durationOptions?: string[];
  requireExperience?: boolean;
}

export default function PETTemplate({
  title,
  subtitle,
  description,
  category,
  duration,
  trainingModes,
  highlights,
  curriculum,
  outcomes,
  price,
  durationOptions,
  requireExperience = true,
}: PETTemplateProps) {
  const [selectedDuration, setSelectedDuration] = useState(durationOptions?.[0] || duration || "");
  const [selectedMonth, setSelectedMonth] = useState(new Date().getMonth());
  const [selectedYear] = useState(new Date().getFullYear());
  const [selectedDate, setSelectedDate] = useState<number | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    education: "",
    experience: "",
    preferredBatch: "",
    duration: selectedDuration,
    specialRequirements: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  const generateCalendar = (month: number, year: number) => {
    const firstDay = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const calendar = [];

    let day = 1;
    for (let i = 0; i < 6; i++) {
      const week = [];
      for (let j = 0; j < 7; j++) {
        if (i === 0 && j < firstDay) {
          week.push(null);
        } else if (day > daysInMonth) {
          week.push(null);
        } else {
          week.push(day);
          day++;
        }
      }
      calendar.push(week);
      if (day > daysInMonth) break;
    }
    return calendar;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError("");

    const batchDate = selectedDate
      ? `${months[selectedMonth]} ${selectedDate}, ${selectedYear}`
      : formData.preferredBatch;

    const emailData = {
      name       : formData.name,
      email      : formData.email,
      phone      : formData.phone,
      education  : formData.education,
      experience : requireExperience ? (formData.experience || undefined) : undefined,
      preferredDuration   : formData.duration || undefined,
      preferredBatch      : batchDate,
      specialRequirements : formData.specialRequirements,
      programTitle        : title,
      programCategory     : category,
    };

    const [userResult, adminResult] = await Promise.allSettled([
      sendPETUserConfirmationEmail(emailData),
      sendPETAdminNotificationEmail(emailData),
    ]);

    if (userResult.status === "rejected") {
      console.error("PET user email failed:", userResult.reason);
    }
    if (adminResult.status === "rejected") {
      console.error("PET admin email failed:", adminResult.reason);
    }

    if (userResult.status === "rejected" && adminResult.status === "rejected") {
      setSubmitError("Registration failed to send. Please try again or contact dschool@sims.healthcare directly.");
      setIsSubmitting(false);
      return;
    }

    setIsSubmitting(false);
    setSubmitted(true);

    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name       : "",
        email      : "",
        phone      : "",
        education  : "",
        experience : "",
        preferredBatch : "",
        duration : selectedDuration,
        specialRequirements : "",
      });
      setSelectedDate(null);
    }, 4000);
  };

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-blue-900 to-primary text-white py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 right-10 w-96 h-96 bg-white rounded-full blur-3xl" />
          <div className="absolute bottom-10 left-10 w-72 h-72 bg-white rounded-full blur-3xl" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="inline-block bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6 border border-white/30">
              <span className="text-sm font-semibold">{category} - PET Program</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold mb-4" style={{ fontFamily: 'var(--font-display)' }}>
              {title}
            </h1>

            <p className="text-xl mb-8 opacity-90">{subtitle}</p>

            <p className="text-lg mb-8 opacity-80 leading-relaxed">
              {description}
            </p>

            {durationOptions && durationOptions.length > 0 && (
              <div className="mb-6">
                <p className="text-sm opacity-75 mb-3">Available Duration Options:</p>
                <div className="flex gap-3 justify-center flex-wrap">
                  {durationOptions.map((dur) => (
                    <button
                      key={dur}
                      onClick={() => setSelectedDuration(dur)}
                      className={`px-6 py-2 rounded-full font-semibold transition-all ${
                        selectedDuration === dur
                          ? "bg-accent text-primary"
                          : "bg-white/20 backdrop-blur-sm hover:bg-white/30"
                      }`}
                    >
                      {dur}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {price && (
              <div className="text-3xl font-bold text-accent mb-6">
                {price}
              </div>
            )}

            <div className="flex flex-wrap gap-4 justify-center">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2 border border-white/20">
                <div className="flex items-center gap-2">
                  <Globe className="w-5 h-5" />
                  <span className="font-medium">International Recognition</span>
                </div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2 border border-white/20">
                <div className="flex items-center gap-2">
                  <BookOpen className="w-5 h-5" />
                  <span className="font-medium">Expert Faculty</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Training Modes */}
      <section className="py-20 bg-surface/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-12 text-center" style={{ fontFamily: 'var(--font-display)' }}>
            Training Modes Available
          </h2>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {trainingModes.map((mode, index) => (
              <motion.div
                key={mode}
                initial={{ opacity: 0, x: index === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-background rounded-xl p-6 border border-border hover:shadow-lg transition-shadow text-center"
              >
                <Users className="w-12 h-12 mx-auto mb-4 text-primary" />
                <h3 className="text-xl font-bold">{mode}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-12 text-center" style={{ fontFamily: 'var(--font-display)' }}>
            Program Highlights
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {highlights.map((highlight, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-card rounded-2xl p-6 shadow-sm border border-border hover:shadow-lg transition-all"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-primary to-blue-600 rounded-full flex items-center justify-center mb-4">
                  <CheckCircle className="text-white" size={24} />
                </div>
                <h3 className="text-xl font-bold mb-3" style={{ fontFamily: 'var(--font-display)' }}>
                  {highlight.title}
                </h3>
                <p className="text-muted-foreground">{highlight.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Curriculum Section */}
      <section className="py-24 bg-surface/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-12 text-center" style={{ fontFamily: 'var(--font-display)' }}>
            What You'll Learn
          </h2>

          <div className="max-w-3xl mx-auto bg-background rounded-2xl p-8 shadow-lg border border-border">
            <ul className="space-y-4">
              {curriculum.map((item, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="flex items-start gap-3"
                >
                  <CheckCircle className="text-primary flex-shrink-0 mt-1" size={20} />
                  <span className="text-foreground">{item}</span>
                </motion.li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Outcomes Section */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-12 text-center" style={{ fontFamily: 'var(--font-display)' }}>
            Learning Outcomes
          </h2>

          <div className="max-w-3xl mx-auto bg-card rounded-2xl p-8 shadow-lg border border-border">
            <ul className="space-y-4">
              {outcomes.map((outcome, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="flex items-start gap-3"
                >
                  <CheckCircle className="text-accent flex-shrink-0 mt-1" size={20} />
                  <span className="text-foreground">{outcome}</span>
                </motion.li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Batch Schedule Calendar */}
      <section className="py-20 bg-surface/30">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Select Your Preferred Batch Start Date
            </h2>
            <p className="text-lg text-muted-foreground">
              Choose your preferred date from the calendar below - we'll coordinate with you to confirm batch availability
            </p>
          </motion.div>

          <div className="bg-background rounded-2xl p-8 shadow-xl border border-border">
            <div className="flex justify-between items-center mb-8">
              <button
                onClick={() => setSelectedMonth((selectedMonth - 1 + 12) % 12)}
                className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                Previous
              </button>
              <h3 className="text-2xl font-bold text-foreground">
                {months[selectedMonth]} {selectedYear}
              </h3>
              <button
                onClick={() => setSelectedMonth((selectedMonth + 1) % 12)}
                className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                Next
              </button>
            </div>

            <div className="grid grid-cols-7 gap-2">
              {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
                <div key={day} className="text-center font-bold text-muted-foreground py-2">
                  {day}
                </div>
              ))}
              {generateCalendar(selectedMonth, selectedYear).map((week, weekIndex) => (
                week.map((day, dayIndex) => (
                  <button
                    key={`${weekIndex}-${dayIndex}`}
                    onClick={() => day && setSelectedDate(day)}
                    disabled={!day}
                    className={`text-center py-3 rounded-lg transition-all ${
                      day
                        ? selectedDate === day
                          ? "bg-primary text-white font-bold scale-105 shadow-lg"
                          : "bg-background hover:bg-primary/10 cursor-pointer border border-border hover:border-primary"
                        : ""
                    }`}
                  >
                    {day || ""}
                  </button>
                ))
              ))}
            </div>

            <div className="mt-6 bg-surface/50 rounded-lg p-4 border border-border text-center">
              <p className="text-sm text-muted-foreground">
                Click on any date to select your preferred batch start date
              </p>
            </div>

            {selectedDate && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-6 bg-primary/10 border border-primary/30 rounded-lg p-4 text-center"
              >
                <p className="text-foreground font-semibold">
                  Preferred Start Date: {months[selectedMonth]} {selectedDate}, {selectedYear}
                </p>
                <p className="text-sm text-muted-foreground mt-2">
                  This is your preferred date - our team will contact you to confirm batch availability and finalize the schedule
                </p>
              </motion.div>
            )}
          </div>
        </div>
      </section>

      {/* Registration Form Section */}
      <section className="py-24 bg-background">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-4 text-center" style={{ fontFamily: 'var(--font-display)' }}>
              Register for this Program
            </h2>
            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
              Fill out the form below to enroll. Limited seats available for each batch!
            </p>

            <div className="bg-card rounded-2xl p-8 shadow-xl border border-border">
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle className="text-white" size={40} />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">Registration Received!</h3>
                  <p className="text-muted-foreground">
                    Thank you for registering. We'll contact you shortly with batch confirmation and payment details.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Full Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                        placeholder="Enter your full name"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Email Address <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                        placeholder="your.email@example.com"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Phone Number <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                        placeholder="+91 XXXXX XXXXX"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Educational Qualification <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="education"
                        value={formData.education}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                        placeholder="e.g., B.Sc Nursing, MBBS"
                      />
                    </div>
                  </div>

                  {requireExperience && (
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Years of Experience <span className="text-red-500">*</span>
                      </label>
                      <select
                        name="experience"
                        value={formData.experience}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                      >
                        <option value="">Select experience level</option>
                        <option value="0-2">0-2 years</option>
                        <option value="3-5">3-5 years</option>
                        <option value="6-10">6-10 years</option>
                        <option value="10+">10+ years</option>
                      </select>
                    </div>
                  )}

                  {durationOptions && durationOptions.length > 0 && (
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Preferred Duration <span className="text-red-500">*</span>
                      </label>
                      <select
                        name="duration"
                        value={formData.duration}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                      >
                        {durationOptions.map((dur) => (
                          <option key={dur} value={dur}>{dur}</option>
                        ))}
                      </select>
                    </div>
                  )}

                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Preferred Batch Start Date {selectedDate && <span className="text-green-600">✓ Selected from calendar</span>}
                    </label>
                    <input
                      type="text"
                      name="preferredBatch"
                      value={selectedDate ? `${months[selectedMonth]} ${selectedDate}, ${selectedYear}` : formData.preferredBatch}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="Select from calendar above or type your preferred date"
                      readOnly={!!selectedDate}
                    />
                    <p className="text-xs text-muted-foreground mt-2">
                      We'll confirm batch availability and coordinate the final schedule with you
                    </p>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Special Requirements or Questions
                    </label>
                    <textarea
                      name="specialRequirements"
                      value={formData.specialRequirements}
                      onChange={handleChange}
                      rows={4}
                      className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                      placeholder="Any special requirements or questions about the program?"
                    />
                  </div>

                  {submitError && (
                    <p className="text-sm text-red-500 text-center bg-red-50 border border-red-200 rounded-lg px-4 py-3">
                      {submitError}
                    </p>
                  )}

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-primary to-blue-600 text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all font-bold disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? "Submitting..." : "Complete Registration"}
                  </button>

                  <p className="text-xs text-muted-foreground text-center">
                    By submitting this form, you agree to our terms and conditions. We'll contact you within 24 hours to confirm your enrollment and share payment details.
                  </p>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
