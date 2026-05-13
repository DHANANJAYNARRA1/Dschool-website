import { motion } from "motion/react";
import { Calendar, Clock, Users, Award, CheckCircle, User } from "lucide-react";
import { useState } from "react";
import {
  initWorkshopEmailJS,
  sendWorkshopUserConfirmationEmail,
  sendWorkshopAdminNotificationEmail,
} from "../services/emailService";

initWorkshopEmailJS();

interface WorkshopHighlight {
  title: string;
  description: string;
}

interface WorkshopTemplateProps {
  title: string;
  date: string;
  time: string;
  duration: string;
  capacity: string;
  level: string;
  instructor: string;
  price: string;
  description: string;
  highlights: WorkshopHighlight[];
  curriculum: string[];
  outcomes: string[];
  workshopId: string;
  category: string;
  image: string;
}

export default function WorkshopTemplate({
  title,
  date,
  time,
  capacity,
  level,
  instructor,
  price,
  description,
  highlights,
  curriculum,
  outcomes,
  category,
  image,
}: WorkshopTemplateProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    organization: "",
    experience: "",
    specialRequirements: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError("");

    const emailData = {
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      organization: formData.organization,
      experience: formData.experience,
      specialRequirements: formData.specialRequirements,
      workshopTitle: title,
      workshopDate: date,
      workshopTime: time,
      workshopPrice: price,
    };

    const [userResult, adminResult] = await Promise.allSettled([
      sendWorkshopUserConfirmationEmail(emailData),
      sendWorkshopAdminNotificationEmail(emailData),
    ]);

    if (userResult.status === "rejected") {
      console.error("Workshop user email failed:", userResult.reason);
    }
    if (adminResult.status === "rejected") {
      console.error("Workshop admin email failed:", adminResult.reason);
    }

    // Only show error if BOTH failed — if at least one succeeded, treat as success
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
        name: "",
        email: "",
        phone: "",
        organization: "",
        experience: "",
        specialRequirements: "",
      });
    }, 4000);
  };

  return (
    <div className="min-h-screen pt-16 md:pt-24">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-blue-900 to-primary text-white py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 right-10 w-96 h-96 bg-white rounded-full blur-3xl" />
          <div className="absolute bottom-10 left-10 w-72 h-72 bg-white rounded-full blur-3xl" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <div className="inline-block bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6 border border-white/30">
                <span className="text-sm font-semibold">{category} Workshop</span>
              </div>

              <h1 className="text-4xl md:text-6xl font-bold mb-6" style={{ fontFamily: 'var(--font-display)' }}>
                {title}
              </h1>

              <p className="text-xl mb-8 opacity-90 leading-relaxed">
                {description}
              </p>

              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                  <Calendar className="mb-2" size={20} />
                  <div className="text-sm opacity-75">Date</div>
                  <div className="font-semibold">{date}</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                  <Clock className="mb-2" size={20} />
                  <div className="text-sm opacity-75">Time</div>
                  <div className="font-semibold">{time}</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                  <Users className="mb-2" size={20} />
                  <div className="text-sm opacity-75">Capacity</div>
                  <div className="font-semibold">{capacity}</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                  <Award className="mb-2" size={20} />
                  <div className="text-sm opacity-75">Level</div>
                  <div className="font-semibold">{level}</div>
                </div>
              </div>

              <div className="flex items-center gap-4 mb-6">
                <div className="flex items-center gap-2">
                  <User className="opacity-75" size={20} />
                  <span className="font-medium">{instructor}</span>
                </div>
                <div className="h-6 w-px bg-white/30"></div>
                <div className="text-2xl font-bold text-accent">{price}</div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="relative"
            >
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src={image}
                  alt={title}
                  className="w-full h-[400px] object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-12 text-center" style={{ fontFamily: 'var(--font-display)' }}>
            Workshop Highlights
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
      <section className="py-24 bg-secondary/50">
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

      {/* Registration Form Section */}
      <section className="py-24 bg-gradient-to-br from-secondary to-background">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-4 text-center" style={{ fontFamily: 'var(--font-display)' }}>
              Register for this Workshop
            </h2>
            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
              Fill out the form below to secure your spot. Limited seats available!
            </p>

            <div className="bg-background rounded-2xl p-8 shadow-xl border border-border">
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
                    Thank you for registering. We'll contact you shortly with confirmation details.
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
                        Organization
                      </label>
                      <input
                        type="text"
                        name="organization"
                        value={formData.organization}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                        placeholder="Hospital/Clinic name"
                      />
                    </div>
                  </div>

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
                      <option value="0-2 years">0-2 years</option>
                      <option value="3-5 years">3-5 years</option>
                      <option value="6-10 years">6-10 years</option>
                      <option value="10+ years">10+ years</option>
                    </select>
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
                      placeholder="Any special accommodations or questions about the workshop?"
                    />
                  </div>

                  <div className="bg-secondary rounded-lg p-4 border border-border">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium">Workshop Fee:</span>
                      <span className="text-2xl font-bold text-primary">{price}</span>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Payment details will be shared upon confirmation
                    </p>
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
                    By submitting this form, you agree to our terms and conditions. We'll contact you within 24 hours to confirm your registration.
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
