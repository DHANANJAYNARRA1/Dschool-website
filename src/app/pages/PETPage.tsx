import { motion } from "motion/react";
import { BookOpen, Globe, Users, Award, Calendar, ArrowRight, GraduationCap, CheckCircle } from "lucide-react";
import { Link, useLocation } from "react-router";

export default function PETPage() {
  const location = useLocation();
  const isWorkshopsTab = location.pathname === "/workshops";

  const licensedExamPrograms = [
    {
      id: "neet",
      title: "NEET Coaching",
      subtitle: "National Eligibility cum Entrance Test",
      description: "Comprehensive coaching for India's most competitive medical entrance examination with expert guidance.",
      duration: "6-12 Months",
      category: "Licensed Examination",
      icon: BookOpen,
      image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800&h=500&fit=crop"
    },
    {
      id: "nclex",
      title: "NCLEX Preparation",
      subtitle: "National Council Licensure Examination",
      description: "Specialized preparation for nurses qualifying for licensure in USA, Canada, and other NCLEX countries.",
      duration: "3-6 Months",
      category: "Licensed Examination",
      icon: Globe,
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=500&fit=crop"
    },
    {
      id: "cbt",
      title: "CBT Training",
      subtitle: "Computer-Based Test for International Nursing",
      description: "Focused CBT preparation for nurses planning to work in UK, Australia, New Zealand and other countries.",
      duration: "2-4 Months",
      category: "Licensed Examination",
      icon: Users,
      image: "https://images.unsplash.com/photo-1516534775068-ba3e7458af70?w=800&h=500&fit=crop"
    },
    {
      id: "osce",
      title: "OSCE Preparation",
      subtitle: "Objective Structured Clinical Examination",
      description: "Practical training to demonstrate clinical competence through simulated scenarios for international licensure.",
      duration: "1-3 Months",
      category: "Licensed Examination",
      icon: Award,
      image: "https://images.unsplash.com/photo-1581595220892-b0739db3ba8c?w=800&h=500&fit=crop"
    }
  ];

  const languagePrograms = [
    {
      id: "ielts",
      title: "IELTS Training",
      subtitle: "International English Language Testing System",
      description: "Comprehensive IELTS preparation for healthcare professionals aiming for band 7.0+ scores.",
      durationOptions: ["1 Month", "3 Months", "6 Months"],
      category: "Language Training",
      icon: Globe,
      image: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=800&h=500&fit=crop"
    },
    {
      id: "oet",
      title: "OET Training",
      subtitle: "Occupational English Test",
      description: "Healthcare-specific English language training for nurses, doctors, and healthcare professionals.",
      durationOptions: ["1 Month", "3 Months", "6 Months"],
      category: "Language Training",
      icon: BookOpen,
      image: "https://images.unsplash.com/photo-1513258496099-48168024aec0?w=800&h=500&fit=crop"
    }
  ];

  const keyFeatures = [
    "Expert faculty and mentorship",
    "Comprehensive study materials",
    "Mock tests and assessment sessions",
    "Personalized learning support",
    "Flexible scheduling options",
    "Interactive and practical learning methods"
  ];

  const whyChoose = [
    { title: "Industry-focused training approach", icon: Award },
    { title: "Flexible learning formats", icon: Calendar },
    { title: "Experienced trainers and mentors", icon: Users },
    { title: "Career-oriented preparation strategies", icon: Globe },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-primary via-blue-900 to-primary overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <div className="inline-flex items-center gap-2 bg-accent/20 text-accent px-4 py-2 rounded-full mb-6">
              <GraduationCap className="w-5 h-5" />
              <span className="text-sm font-medium">Professional Examination Training</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              PET – Professional Examination Training
            </h1>
            <p className="text-2xl text-white/90 max-w-4xl mx-auto mb-4">
              Empowering Healthcare Professionals for Global Career Success
            </p>
            <p className="text-lg text-white/80 max-w-4xl mx-auto">
              Specialized training platform designed to support healthcare professionals in achieving their international career goals through expert-led licensed exam preparation and language training programs.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Sub Navigation Tabs */}
      <section className="bg-background border-b border-border sticky top-16 md:top-20 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex gap-1">
            <Link
              to="/workshops"
              className={`px-6 py-4 font-semibold transition-all relative ${
                isWorkshopsTab
                  ? "text-primary"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              <div className="flex items-center gap-2">
                <Award className="w-5 h-5" />
                <span>Workshops</span>
              </div>
              {isWorkshopsTab && (
                <motion.div
                  layoutId="workshopTab"
                  className="absolute bottom-0 left-0 right-0 h-1 bg-primary"
                  transition={{ duration: 0.3 }}
                />
              )}
            </Link>
            <Link
              to="/workshops/pet"
              className={`px-6 py-4 font-semibold transition-all relative ${
                !isWorkshopsTab
                  ? "text-primary"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              <div className="flex items-center gap-2">
                <GraduationCap className="w-5 h-5" />
                <span>PET - Professional Examination Training</span>
              </div>
              {!isWorkshopsTab && (
                <motion.div
                  layoutId="workshopTab"
                  className="absolute bottom-0 left-0 right-0 h-1 bg-primary"
                  transition={{ duration: 0.3 }}
                />
              )}
            </Link>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <p className="text-lg text-muted-foreground leading-relaxed">
              With flexible learning options, personalized guidance, and structured training pathways, PET helps participants prepare confidently for global healthcare opportunities. Our programs are designed to strengthen clinical knowledge, examination readiness, communication skills, and international healthcare competencies.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Licensed Examination Training Programs */}
      <section className="py-20 bg-surface/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Licensed Examination Training
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Structured preparation programs for internationally recognized healthcare licensing examinations
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            {licensedExamPrograms.map((program, index) => (
              <motion.div
                key={program.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-background rounded-xl overflow-hidden hover:shadow-xl transition-shadow group"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={program.image}
                    alt={program.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4 bg-primary/90 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs font-medium">
                    {program.category}
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary to-blue-600 rounded-full flex items-center justify-center">
                      <program.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                        {program.title}
                      </h3>
                      <p className="text-sm text-muted-foreground">{program.subtitle}</p>
                    </div>
                  </div>

                  <p className="text-muted-foreground mb-4">
                    {program.description}
                  </p>

                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                    <Calendar className="w-4 h-4 text-primary" />
                    <span>Duration: {program.duration}</span>
                  </div>

                  <Link
                    to={`/workshops/pet/${program.id}`}
                    className="inline-flex items-center gap-2 bg-gradient-to-r from-primary to-blue-600 text-white px-6 py-2 rounded-lg hover:shadow-lg transition-shadow group/btn w-full justify-center"
                  >
                    <span>View Details & Register</span>
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Training Modes & Features */}
          <div className="grid md:grid-cols-2 gap-8 mt-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-background rounded-xl p-8 border border-border"
            >
              <h3 className="text-2xl font-bold text-foreground mb-6">Training Modes</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="text-primary flex-shrink-0 mt-1" size={20} />
                  <div>
                    <h4 className="font-semibold text-foreground">One-on-One Training</h4>
                    <p className="text-sm text-muted-foreground">Personalized attention with dedicated mentor</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="text-primary flex-shrink-0 mt-1" size={20} />
                  <div>
                    <h4 className="font-semibold text-foreground">Group Training Sessions</h4>
                    <p className="text-sm text-muted-foreground">Collaborative learning with peer interaction</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-background rounded-xl p-8 border border-border"
            >
              <h3 className="text-2xl font-bold text-foreground mb-6">Key Features</h3>
              <ul className="space-y-3">
                {keyFeatures.slice(0, 4).map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="text-primary flex-shrink-0 mt-1" size={20} />
                    <span className="text-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Language Training Programs */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Language Training Programs
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Improve professional communication skills and meet international healthcare career requirements
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {languagePrograms.map((program, index) => (
              <motion.div
                key={program.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-card rounded-xl overflow-hidden hover:shadow-xl transition-shadow group"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={program.image}
                    alt={program.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4 bg-accent/90 backdrop-blur-sm text-primary px-3 py-1 rounded-full text-xs font-bold">
                    {program.category}
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-accent to-yellow-600 rounded-full flex items-center justify-center">
                      <program.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                        {program.title}
                      </h3>
                      <p className="text-sm text-muted-foreground">{program.subtitle}</p>
                    </div>
                  </div>

                  <p className="text-muted-foreground mb-4">
                    {program.description}
                  </p>

                  <div className="mb-4">
                    <p className="text-sm font-semibold text-foreground mb-2">Duration Options:</p>
                    <div className="flex gap-2 flex-wrap">
                      {program.durationOptions.map((duration) => (
                        <span key={duration} className="bg-surface/50 text-foreground px-3 py-1 rounded-full text-xs font-medium border border-border">
                          {duration}
                        </span>
                      ))}
                    </div>
                  </div>

                  <Link
                    to={`/workshops/pet/${program.id}`}
                    className="inline-flex items-center gap-2 bg-gradient-to-r from-accent to-yellow-600 text-primary px-6 py-2 rounded-lg hover:shadow-lg transition-shadow group/btn w-full justify-center font-semibold"
                  >
                    <span>View Details & Register</span>
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Language Features */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-12 bg-card rounded-xl p-8 border border-border"
          >
            <h3 className="text-2xl font-bold text-foreground mb-6 text-center">Language Training Features</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                "Listening, Reading, Writing & Speaking practice",
                "Healthcare-focused communication training",
                "Mock examinations and evaluation",
                "Pronunciation and fluency development",
                "Personalized progress tracking",
                "Professional communication skills"
              ].map((feature, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle className="text-accent flex-shrink-0 mt-1" size={20} />
                  <span className="text-foreground">{feature}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why Choose PET */}
      <section className="py-20 bg-gradient-to-br from-surface/50 to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Why Choose PET?
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChoose.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-background rounded-xl p-6 border border-border hover:shadow-lg transition-shadow text-center"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-primary to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-lg font-bold text-foreground">{item.title}</h3>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-12 text-center"
          >
            <div className="inline-block bg-accent/10 border border-accent/30 rounded-xl p-6">
              <p className="text-lg font-medium text-foreground">
                Supportive learning environment for healthcare professionals
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary via-blue-900 to-primary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Begin Your Global Healthcare Career Journey with PET
            </h2>
            <p className="text-xl text-white/90 mb-8">
              We are committed to helping healthcare professionals build confidence, achieve examination success, and advance toward international career opportunities through structured learning and professional guidance.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-accent text-primary px-8 py-4 rounded-lg hover:bg-yellow-400 transition-colors text-lg font-semibold"
            >
              <span>Contact Us for More Information</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
