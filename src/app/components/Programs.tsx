import { motion } from "motion/react";
import { Link } from "react-router";
import { Calendar, Users, Monitor, Heart, DollarSign, Award, Languages, Lightbulb } from "lucide-react";

export default function Programs() {
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
    <section id="programs" className="py-24 bg-background">
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
            <Link key={index} to={`/programs/${program.slug}`}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ y: -5 }}
                className={`bg-card rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all border h-full ${
                  program.featured ? "border-primary ring-2 ring-primary/20" : "border-border"
                } relative overflow-hidden group cursor-pointer`}
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
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
