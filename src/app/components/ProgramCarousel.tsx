import { motion } from "motion/react";
import { Link } from "react-router";
import { useRef, useEffect } from "react";

const programs = [
  { title: "LION Program", subtitle: "Nursing Leadership Bootcamp", slug: "lion", gradient: "from-[#D4AF37] via-[#B8941F] to-[#A68419]" },
  { title: "Digital Health Revolution", subtitle: "Lead the Digital Era", slug: "digital-health-revolution", gradient: "from-[#1E3A8A] via-[#1E40AF] to-[#1E3A8A]" },
  { title: "DALES Program", subtitle: "Excellence in Services", slug: "dales", gradient: "from-[#D4AF37] via-[#C5A029] to-[#B8941F]" },
  { title: "SOS Program", subtitle: "Soft Skills for Outstanding Service", slug: "sos", gradient: "from-[#1E3A8A] via-[#1E40AF] to-[#0F1E4A]" },
  { title: "LANG Program", subtitle: "Medical English Training", slug: "lang", gradient: "from-[#D4AF37] via-[#C5A029] to-[#B8941F]" },
  { title: "NURSE 360", subtitle: "Nursing Finishing School Program", slug: "nurse-360", gradient: "from-[#1E3A8A] via-[#172F6E] to-[#0F1E4A]" },
  { title: "L.A.N.T.E.R.N", subtitle: "Nightingale Champions", slug: "lantern", gradient: "from-[#D4AF37] via-[#E5C451] to-[#C5A029]" },
  { title: "Leadership Integrated", subtitle: "One Year Transformation", slug: "leadership-integrated", gradient: "from-[#1E3A8A] via-[#172F6E] to-[#0F1E4A]" },
  { title: "Hospital Manager", subtitle: "Competency Programs", slug: "hospital-manager", gradient: "from-[#1E3A8A] via-[#0F1E4A] to-[#0A1428]" },
];

export default function ProgramCarousel() {
  const trackRef = useRef<HTMLDivElement>(null);
  const posRef = useRef(0);
  const pausedRef = useRef(false);
  const rafRef = useRef<number>(0);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const tick = () => {
      if (!pausedRef.current) {
        posRef.current += 0.6;
        // reset when one full set has scrolled past
        const setWidth = track.scrollWidth / 2;
        if (posRef.current >= setWidth) {
          posRef.current = 0;
        }
        track.style.transform = `translateX(-${posRef.current}px)`;
      }
      rafRef.current = requestAnimationFrame(tick);
    };

    rafRef.current = requestAnimationFrame(tick);

    const pause = () => { pausedRef.current = true; };
    const resume = () => { pausedRef.current = false; };
    track.addEventListener("mouseenter", pause);
    track.addEventListener("mouseleave", resume);

    return () => {
      cancelAnimationFrame(rafRef.current);
      track.removeEventListener("mouseenter", pause);
      track.removeEventListener("mouseleave", resume);
    };
  }, []);

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
          <p className="text-base md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Explore our comprehensive range of programs designed to transform your healthcare career
          </p>
        </motion.div>
      </div>

      {/* Scrolling strip */}
      <div className="relative overflow-hidden">
        {/* 2 copies — JS resets position at exactly one set width */}
        <div ref={trackRef} className="flex will-change-transform">
          {[...programs, ...programs].map((program, index) => (
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
    </section>
  );
}
