import { motion } from "motion/react";
import { Link } from "react-router";
import { Users, Lightbulb } from "lucide-react";

const featuredCards = [
  {
    icon: Users,
    title: "NURSE 360",
    subtitle: "Nursing Finishing School Program",
    description:
      "A 3-month comprehensive program for fresher nurses featuring OSCE-based assessments, hands-on clinical training, and professional development modules to build job-ready competence.",
    slug: "nurse-360",
    gradient: "from-[#1E3A8A] via-[#172F6E] to-[#0F1E4A]",
    badge: "Fresher Nurses",
  },
  {
    icon: Lightbulb,
    title: "L.A.N.T.E.R.N",
    subtitle: "Nightingale Champions",
    description:
      "A one-day intensive workshop empowering nursing leaders committed to excellence. Build leadership capacity, reignite nursing purpose, and champion quality patient care at every level.",
    slug: "lantern",
    gradient: "from-[#D4AF37] via-[#C5A029] to-[#A68419]",
    badge: "Leadership",
  },
];

const programs = [
  { title: "LION Program", subtitle: "Nursing Leadership Bootcamp", slug: "lion", gradient: "from-[#D4AF37] via-[#B8941F] to-[#A68419]" },
  { title: "Digital Health Revolution", subtitle: "Lead the Digital Era", slug: "digital-health-revolution", gradient: "from-[#1E3A8A] via-[#1E40AF] to-[#1E3A8A]" },
  { title: "DALES Program", subtitle: "Excellence in Services", slug: "dales", gradient: "from-[#D4AF37] via-[#C5A029] to-[#B8941F]" },
  { title: "SOS Program", subtitle: "Soft Skills for Outstanding Service", slug: "sos", gradient: "from-[#1E3A8A] via-[#1E40AF] to-[#0F1E4A]" },
  { title: "LANG Program", subtitle: "Medical English Training", slug: "lang", gradient: "from-[#D4AF37] via-[#C5A029] to-[#B8941F]" },
  { title: "Nurse 360", subtitle: "Finishing School Program", slug: "nurse-360", gradient: "from-[#1E3A8A] via-[#172F6E] to-[#0F1E4A]" },
  { title: "LANTERN", subtitle: "Nightingale Champions", slug: "lantern", gradient: "from-[#D4AF37] via-[#E5C451] to-[#C5A029]" },
  { title: "Leadership Integrated", subtitle: "One Year Transformation", slug: "leadership-integrated", gradient: "from-[#1E3A8A] via-[#172F6E] to-[#0F1E4A]" },
  { title: "Hospital Manager", subtitle: "Competency Programs", slug: "hospital-manager", gradient: "from-[#1E3A8A] via-[#0F1E4A] to-[#0A1428]" },
];

export default function ProgramCarousel() {
  return (
    <section className="py-16 md:py-24 bg-secondary overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10 md:mb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4 md:mb-6" style={{ fontFamily: "var(--font-display)" }}>
            Featured <span className="text-primary">Programs</span>
          </h2>
          <p className="text-base md:text-xl text-muted-foreground max-w-3xl mx-auto mb-10 md:mb-12">
            Explore our comprehensive range of programs designed to transform your healthcare career
          </p>
        </motion.div>

        {/* Two highlighted static cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 md:gap-6 mb-10 md:mb-14">
          {featuredCards.map((card, i) => (
            <Link key={card.slug} to={`/programs/${card.slug}`}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                whileHover={{ y: -4, scale: 1.01 }}
                className={`bg-gradient-to-br ${card.gradient} rounded-2xl p-6 md:p-8 shadow-2xl cursor-pointer relative overflow-hidden group h-full`}
              >
                {/* Badge */}
                <span className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm text-white text-xs font-semibold px-3 py-1 rounded-full">
                  {card.badge}
                </span>

                <div className="w-12 h-12 md:w-14 md:h-14 bg-white/20 rounded-full flex items-center justify-center mb-4 md:mb-5">
                  <card.icon className="text-white" size={26} />
                </div>

                <h3 className="text-2xl md:text-3xl font-bold text-white mb-1" style={{ fontFamily: "var(--font-display)" }}>
                  {card.title}
                </h3>
                <p className="text-white/80 font-semibold text-sm md:text-base mb-3 md:mb-4">
                  {card.subtitle}
                </p>
                <p className="text-white/70 text-sm leading-relaxed mb-5 md:mb-6">
                  {card.description}
                </p>

                <span className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-white text-sm font-semibold group-hover:bg-white/30 transition-all">
                  Explore Program →
                </span>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>

      {/* Infinite scrolling strip */}
      <div className="relative overflow-hidden">
        <div className="flex animate-scroll-left">
          {[...programs, ...programs, ...programs].map((program, index) => (
            <Link
              key={index}
              to={`/programs/${program.slug}`}
              className="flex-shrink-0 w-60 sm:w-72 md:w-80 lg:w-96 mx-3 md:mx-4"
            >
              <motion.div
                whileHover={{ y: -5, scale: 1.02 }}
                className={`bg-gradient-to-br ${program.gradient} rounded-2xl p-6 md:p-10 h-56 md:h-80 flex flex-col items-center justify-center shadow-2xl cursor-pointer relative overflow-hidden group`}
              >
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all" />
                <div className="text-center text-white relative z-10">
                  <h4 className="text-xl md:text-3xl font-bold mb-2 md:mb-3" style={{ fontFamily: "var(--font-display)" }}>
                    {program.title}
                  </h4>
                  <p className="text-sm md:text-lg opacity-90 mb-4 md:mb-6">{program.subtitle}</p>
                  <span className="inline-block bg-white/20 backdrop-blur-sm px-3 md:px-4 py-1.5 md:py-2 rounded-full text-xs md:text-sm font-semibold">
                    Explore Program →
                  </span>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>

      {/* View All */}
      <div className="text-center mt-10 md:mt-12 px-4">
        <Link to="/programs">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full sm:w-auto bg-primary text-primary-foreground px-8 py-4 rounded-full hover:bg-primary/90 transition-all font-bold shadow-lg"
          >
            View All Programs
          </motion.button>
        </Link>
      </div>

      <style>{`
        @keyframes scroll-left {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.333%); }
        }
        .animate-scroll-left {
          animation: scroll-left 25s linear infinite;
        }
        .animate-scroll-left:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}
