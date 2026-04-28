import { motion } from "motion/react";
import { useState } from "react";
import { Calendar, Users, Monitor, Heart, Award, Languages, Lightbulb, X } from "lucide-react";

const carouselPrograms = [
  { title: "LION Program", subtitle: "Nursing Leadership Bootcamp", gradient: "from-[#D4AF37] via-[#B8941F] to-[#A68419]" },
  { title: "Digital Health Revolution", subtitle: "Lead the Digital Era", gradient: "from-[#1E3A8A] via-[#1E40AF] to-[#1E3A8A]" },
  { title: "DALES Program", subtitle: "Excellence in Services", gradient: "from-[#D4AF37] via-[#C5A029] to-[#B8941F]" },
  { title: "SOS Program", subtitle: "Soft Skills for Outstanding Service", gradient: "from-[#1E3A8A] via-[#1E40AF] to-[#0F1E4A]" },
  { title: "LANG Program", subtitle: "Medical English Training", gradient: "from-[#D4AF37] via-[#C5A029] to-[#B8941F]" },
  { title: "NURSE 360", subtitle: "Nursing Finishing School", gradient: "from-[#1E3A8A] via-[#172F6E] to-[#0F1E4A]" },
  { title: "L.A.N.T.E.R.N", subtitle: "Nightingale Champions", gradient: "from-[#D4AF37] via-[#E5C451] to-[#C5A029]" },
  { title: "Leadership Integrated", subtitle: "One Year Transformation", gradient: "from-[#1E3A8A] via-[#172F6E] to-[#0F1E4A]" },
];

export default function Programs() {
  const [selectedProgram, setSelectedProgram] = useState<string | null>(null);

  const programs = [
    {
      icon: Heart,
      title: "Nursing Leadership Program LION",
      slug: "lion",
      description: "3-day intensive program covering Leadership, Medico-Legal Competence, and Digital Health. Next cohort: June.",
      color: "bg-[#D4AF37]/10 text-[#D4AF37]",
      featured: true,
    },
    {
      icon: Monitor,
      title: "Digital Health Revolution (DHR) 2.0",
      slug: "digital-health-revolution",
      description: "3-month online program culminating in 3-day immersion at ASCI campus. Lead in the digital era.",
      color: "bg-[#1E3A8A]/10 text-[#1E3A8A]",
      featured: true,
    },
    {
      icon: Calendar,
      title: "DALES Program",
      slug: "dales",
      description: "6-month structured development initiative focusing on patient care standards and team collaboration.",
      color: "bg-[#D4AF37]/10 text-[#D4AF37]",
    },
    {
      icon: Award,
      title: "SOS Program",
      slug: "sos",
      description: "3-month soft skills development for nurses: Communication, Emotional Intelligence, Conflict Resolution.",
      color: "bg-[#1E3A8A]/10 text-[#1E3A8A]",
    },
    {
      icon: Languages,
      title: "LANG Program",
      slug: "lang",
      description: "Online Medical English Proficiency Program with interview preparation for global opportunities.",
      color: "bg-[#D4AF37]/10 text-[#D4AF37]",
    },
    {
      icon: Users,
      title: "Nurse 360",
      slug: "nurse-360",
      description: "3-month comprehensive program for fresher nurses with OSCE-based assessments and hands-on training.",
      color: "bg-[#1E3A8A]/10 text-[#1E3A8A]",
    },
    {
      icon: Lightbulb,
      title: "LANTERN",
      slug: "lantern",
      description: "Nightingale Champion Program - One-day workshop empowering nursing leaders committed to excellence.",
      color: "bg-[#D4AF37]/10 text-[#D4AF37]",
    },
    {
      icon: Users,
      title: "Leadership Integrated Skills",
      slug: "leadership-integrated",
      description: "One-year comprehensive program combining Language, Soft Skills, LEAD, and Integration modules.",
      color: "bg-[#1E3A8A]/10 text-[#1E3A8A]",
      featured: true,
    },
  ];

  return (
    <section id="programs" className="py-24 bg-background relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ fontFamily: 'var(--font-display)' }}>
            Our <span className="text-primary">Programs</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            All programs delivered in association with the Administrative Staff College of India (ASCI),
            ensuring industry-aligned, globally relevant, and practical learning experiences.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {programs.map((program, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ y: -5 }}
              onClick={() => setSelectedProgram(program.slug)}
              className={`bg-card rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all border h-full cursor-pointer ${program.featured ? "border-primary ring-2 ring-primary/20" : "border-border"} relative overflow-hidden group`}
            >
              {program.featured && (
                <div className="absolute top-4 right-4 bg-gradient-to-r from-yellow-500 to-amber-600 text-white px-3 py-1 rounded-full text-xs font-semibold shadow-lg">
                  Featured
                </div>
              )}

              <div className={`w-14 h-14 rounded-full flex items-center justify-center mb-6 ${program.color}`}>
                <program.icon size={28} />
              </div>

              <h3 className="text-xl font-bold mb-3" style={{ fontFamily: 'var(--font-display)' }}>
                {program.title}
              </h3>

              <p className="text-muted-foreground mb-6 leading-relaxed">
                {program.description}
              </p>

              <span className="text-primary font-semibold hover:underline flex items-center gap-1 group-hover:gap-2 transition-all">
                Learn More
                <span>→</span>
              </span>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Top-right popup: only the vertically moving gradient cards */}
      {selectedProgram && (
        <div
          className="fixed inset-0 z-50"
          onClick={() => setSelectedProgram(null)}
        >
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 60 }}
            onClick={(e) => e.stopPropagation()}
            className="absolute top-24 right-4 w-56"
          >
            <button
              onClick={() => setSelectedProgram(null)}
              className="absolute -top-3 -right-3 z-10 w-7 h-7 rounded-full bg-foreground text-background flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
              aria-label="Close"
            >
              <X size={14} />
            </button>

            <div className="overflow-hidden h-80 rounded-2xl shadow-2xl">
              <div className="animate-vertical-scroll space-y-2 p-2">
                {[...carouselPrograms, ...carouselPrograms].map((fp, i) => (
                  <div
                    key={i}
                    className={`bg-gradient-to-br ${fp.gradient} rounded-xl p-4 text-white cursor-pointer`}
                  >
                    <p className="text-sm font-bold leading-tight">{fp.title}</p>
                    <p className="text-xs opacity-80 mt-0.5">{fp.subtitle}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </section>
  );
}
