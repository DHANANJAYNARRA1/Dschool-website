import { motion } from "motion/react";
import { Link } from "react-router";

const programs = [
  {
    title: "LION Program",
    subtitle: "Nursing Leadership Bootcamp",
    slug: "lion",
    gradient: "from-[#D4AF37] via-[#B8941F] to-[#A68419]",
  },
  {
    title: "Digital Health Revolution",
    subtitle: "Lead the Digital Era",
    slug: "digital-health-revolution",
    gradient: "from-[#1E3A8A] via-[#1E40AF] to-[#1E3A8A]",
  },
  {
    title: "DALES Program",
    subtitle: "Excellence in Services",
    slug: "dales",
    gradient: "from-[#D4AF37] via-[#C5A029] to-[#B8941F]",
  },
  {
    title: "SOS Program",
    subtitle: "Soft Skills for Outstanding Service",
    slug: "sos",
    gradient: "from-[#1E3A8A] via-[#1E40AF] to-[#0F1E4A]",
  },
  {
    title: "LANG Program",
    subtitle: "Medical English Training",
    slug: "lang",
    gradient: "from-[#D4AF37] via-[#C5A029] to-[#B8941F]",
  },
  {
    title: "Nurse 360",
    subtitle: "Finishing School Program",
    slug: "nurse-360",
    gradient: "from-[#1E3A8A] via-[#172F6E] to-[#0F1E4A]",
  },
  {
    title: "LANTERN",
    subtitle: "Nightingale Champions",
    slug: "lantern",
    gradient: "from-[#D4AF37] via-[#E5C451] to-[#C5A029]",
  },
  {
    title: "Leadership Integrated",
    subtitle: "One Year Transformation",
    slug: "leadership-integrated",
    gradient: "from-[#1E3A8A] via-[#172F6E] to-[#0F1E4A]",
  },
  {
    title: "Hospital Manager",
    subtitle: "Competency Programs",
    slug: "hospital-manager",
    gradient: "from-[#1E3A8A] via-[#0F1E4A] to-[#0A1428]",
  },
];

export default function ProgramCarousel() {

  return (
    <section className="py-24 bg-secondary overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ fontFamily: 'var(--font-display)' }}>
            Featured <span className="text-primary">Programs</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Explore our comprehensive range of programs designed to transform your healthcare career
          </p>
        </motion.div>
      </div>

      {/* Infinite Scrolling Strip - Single Scrolling Element */}
      <div className="relative overflow-hidden">
        <div className="flex animate-scroll-left">
          {[...programs, ...programs, ...programs].map((program, index) => (
            <Link
              key={index}
              to={`/programs/${program.slug}`}
              className="flex-shrink-0 w-96 mx-4"
            >
              <motion.div
                whileHover={{ y: -5, scale: 1.02 }}
                className={`bg-gradient-to-br ${program.gradient} rounded-2xl p-10 h-80 flex flex-col items-center justify-center shadow-2xl cursor-pointer relative overflow-hidden group`}
              >
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all"></div>
                <div className="text-center text-white relative z-10">
                  <h4 className="text-3xl font-bold mb-3" style={{ fontFamily: 'var(--font-display)' }}>
                    {program.title}
                  </h4>
                  <p className="text-lg opacity-90 mb-6">{program.subtitle}</p>
                  <span className="inline-block bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-semibold">
                    Explore Program →
                  </span>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>

      {/* View All Programs Button */}
      <div className="text-center mt-12">
        <Link to="/programs">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-primary text-primary-foreground px-8 py-4 rounded-full hover:bg-primary/90 transition-all font-bold shadow-lg"
          >
            View All Programs
          </motion.button>
        </Link>
      </div>

      <style>{`
        @keyframes scroll-left {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-33.333%);
          }
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
