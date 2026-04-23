import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Calendar, Users, Award, X, ChevronLeft, ChevronRight } from "lucide-react";

// ─── Workshop images (18 real files in public/assets/workshops/) ──────────────
const WORKSHOP_IMAGES = [
  "/assets/workshops/img3.jpeg",
  "/assets/workshops/img4.jpeg",
  "/assets/workshops/img5.jpeg",
  "/assets/workshops/img6.jpeg",
  "/assets/workshops/img7.jpeg",
  "/assets/workshops/img8.jpeg",
  "/assets/workshops/img9.jpeg",
  "/assets/workshops/img10.jpeg",
  "/assets/workshops/img11.jpeg",
  "/assets/workshops/img12.jpeg",
  "/assets/workshops/img13.jpeg",
  "/assets/workshops/img14.jpeg",
  "/assets/workshops/img15.jpeg",
  "/assets/workshops/img16.jpeg",
  "/assets/workshops/img17.jpeg",
  "/assets/workshops/img18.jpeg",
  "/assets/workshops/WhatsApp Image 2026-04-23 at 2.27.13 PM.jpeg",
  "/assets/workshops/WhatsApp Image 2026-04-23 at 2.27.14 PM.jpeg",
];

const GALLERY_ITEMS = [
  // ── Workshops ──────────────────────────────────────────────────────────────
  { id: 1,  category: "Workshops",    title: "Leadership Skills Workshop",       date: "March 2026",     image: WORKSHOP_IMAGES[0],  imgPosition: "center top" },
  { id: 2,  category: "Workshops",    title: "Clinical Excellence Workshop",     date: "March 2026",     image: WORKSHOP_IMAGES[1]  },
  { id: 3,  category: "Workshops",    title: "Patient Communication Workshop",   date: "February 2026",  image: WORKSHOP_IMAGES[2]  },
  { id: 4,  category: "Workshops",    title: "Critical Care Workshop",           date: "February 2026",  image: WORKSHOP_IMAGES[3],  imgPosition: "center top" },
  { id: 5,  category: "Workshops",    title: "Emergency Response Training",      date: "January 2026",   image: WORKSHOP_IMAGES[4],  imgPosition: "center top" },
  { id: 6,  category: "Workshops",    title: "Soft Skills Boot Camp",            date: "January 2026",   image: WORKSHOP_IMAGES[5],  imgPosition: "center top" },
  { id: 7,  category: "Workshops",    title: "Team Building Workshop",           date: "December 2025",  image: WORKSHOP_IMAGES[6]  },
  { id: 8,  category: "Workshops",    title: "Healthcare Finance Workshop",      date: "December 2025",  image: WORKSHOP_IMAGES[7]  },
  { id: 9,  category: "Workshops",    title: "Quality Improvement Workshop",     date: "November 2025",  image: WORKSHOP_IMAGES[8]  },
  { id: 10, category: "Workshops",    title: "Nursing Excellence Workshop",      date: "November 2025",  image: WORKSHOP_IMAGES[9]  },
  { id: 11, category: "Workshops",    title: "Medico-Legal Workshop",            date: "October 2025",   image: WORKSHOP_IMAGES[10] },
  { id: 12, category: "Workshops",    title: "OT Management Workshop",           date: "October 2025",   image: WORKSHOP_IMAGES[11] },
  { id: 13, category: "Workshops",    title: "Infection Control Workshop",       date: "September 2025", image: WORKSHOP_IMAGES[12] },
  { id: 14, category: "Workshops",    title: "Documentation Workshop",           date: "September 2025", image: WORKSHOP_IMAGES[13] },
  { id: 15, category: "Workshops",    title: "Triage & Prioritization",          date: "August 2025",    image: WORKSHOP_IMAGES[14] },
  { id: 16, category: "Workshops",    title: "Mentorship Skills Workshop",       date: "August 2025",    image: WORKSHOP_IMAGES[15] },
  { id: 17, category: "Workshops",    title: "Palliative Care Workshop",         date: "July 2025",      image: WORKSHOP_IMAGES[16] },
  { id: 18, category: "Workshops",    title: "Research Methodology Workshop",    date: "July 2025",      image: WORKSHOP_IMAGES[17] },
  { id: 50, category: "Workshops",    title: "Workshop Session",                 date: "July 2025",      image: "/assets/workshops/img19.jpeg" },

  // ── Webinars ───────────────────────────────────────────────────────────────
  { id: 19, category: "Webinars",     title: "Digital Health in Nursing",        date: "March 2026",     image: "/assets/webinars/img1.jpeg" },
  { id: 20, category: "Webinars",     title: "AI in Healthcare Webinar",         date: "February 2026",  image: "/assets/webinars/img2.jpeg" },
  { id: 21, category: "Webinars",     title: "Career Growth Webinar",            date: "February 2026",  image: "/assets/webinars/img3.jpeg" },
  { id: 22, category: "Webinars",     title: "Global Nursing Opportunities",     date: "January 2026",   image: "/assets/webinars/img4.jpeg" },
  { id: 23, category: "Webinars",     title: "IELTS & OET Prep Webinar",         date: "January 2026",   image: "/assets/webinars/img5.jpeg" },
  { id: 24, category: "Webinars",     title: "Hospital Management Webinar",      date: "December 2025",  image: "/assets/webinars/img6.jpeg" },

  // ── LION Program ───────────────────────────────────────────────────────────
  { id: 31, category: "LION Program", title: "LION Cohort – March 2026",         date: "March 2026",     image: "/assets/LION program/img3.jpeg"  },
  { id: 32, category: "LION Program", title: "Leadership Bootcamp Day 1",        date: "March 2026",     image: "/assets/LION program/img4.jpeg"  },
  { id: 33, category: "LION Program", title: "Leadership Bootcamp Day 2",        date: "March 2026",     image: "/assets/LION program/img6.jpeg"  },
  { id: 34, category: "LION Program", title: "Leadership Bootcamp Day 3",        date: "March 2026",     image: "/assets/LION program/img7.jpeg"  },
  { id: 35, category: "LION Program", title: "LION Cohort – January 2026",       date: "January 2026",   image: "/assets/LION program/img8.jpeg"  },
  { id: 36, category: "LION Program", title: "Graduation Ceremony Jan 2026",     date: "January 2026",   image: "/assets/LION program/img9.jpeg"  },
  { id: 37, category: "LION Program", title: "LION Cohort – October 2025",       date: "October 2025",   image: "/assets/LION program/img10.jpeg" },
  { id: 38, category: "LION Program", title: "Graduation Ceremony Oct 2025",     date: "October 2025",   image: "/assets/LION program/img11.jpeg" },
  { id: 51, category: "LION Program", title: "LION Program Session",             date: "October 2025",   image: "/assets/LION program/img12.jpeg" },

  // ── DHR Program ────────────────────────────────────────────────────────────
  { id: 39, category: "DHR Program",  title: "Digital Health Revolution 1.0",    date: "February 2026",  image: "/assets/DHR Programs/img1.jpeg", imgPosition: "center 30%" },
  { id: 40, category: "DHR Program",  title: "AI Tools Hands-On Session",        date: "February 2026",  image: "/assets/DHR Programs/img2.jpeg" },
  { id: 41, category: "DHR Program",  title: "DHR Graduation Ceremony",          date: "March 2026",     image: "/assets/DHR Programs/img3.jpeg" },
  { id: 42, category: "DHR Program",  title: "Data Analytics Workshop",          date: "January 2026",   image: "/assets/DHR Programs/img4.jpeg" },
  { id: 43, category: "DHR Program",  title: "Digital Health Expo",              date: "January 2026",   image: "/assets/DHR Programs/img5.jpeg" },
  { id: 44, category: "DHR Program",  title: "EHR Implementation Training",      date: "December 2025",  image: "/assets/DHR Programs/img6.jpeg" },
  { id: 49, category: "DHR Program",  title: "DHR Capstone Presentations",       date: "December 2025",  image: "/assets/DHR Programs/img7.jpeg" },

  // ── Events ─────────────────────────────────────────────────────────────────
  { id: 45, category: "Events",       title: "D School Annual Meet 2026",        date: "March 2026",     image: null },
  { id: 46, category: "Events",       title: "Healthcare Excellence Awards",     date: "February 2026",  image: null },
  { id: 47, category: "Events",       title: "ASCI Partnership Ceremony",        date: "January 2026",   image: null },
  { id: 48, category: "Events",       title: "Nurses Day Celebration 2025",      date: "May 2025",       image: null },
];

const CATEGORIES = ["All", "Workshops", "Webinars", "LION Program", "DHR Program", "Events"];

const highlights = [
  { icon: Calendar, title: "50+ Events",          description: "Workshops, webinars, and training programs conducted" },
  { icon: Users,    title: "2000+ Participants",   description: "Healthcare professionals trained and empowered"      },
  { icon: Award,    title: "100% Satisfaction",    description: "Rated excellent by our program participants"         },
];

// ─── Lightbox ─────────────────────────────────────────────────────────────────
function Lightbox({
  items,
  startIndex,
  onClose,
}: {
  items: typeof GALLERY_ITEMS;
  startIndex: number;
  onClose: () => void;
}) {
  const [idx, setIdx] = useState(startIndex);
  const current = items[idx];

  function prev() { setIdx((i) => (i - 1 + items.length) % items.length); }
  function next() { setIdx((i) => (i + 1) % items.length); }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
      onClick={onClose}
    >
      {/* Close */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors z-10"
      >
        <X size={22} />
      </button>

      {/* Prev */}
      <button
        onClick={(e) => { e.stopPropagation(); prev(); }}
        className="absolute left-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors z-10"
      >
        <ChevronLeft size={26} />
      </button>

      {/* Image / placeholder */}
      <motion.div
        key={idx}
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.2 }}
        className="max-w-4xl w-full max-h-[80vh] flex flex-col items-center gap-4"
        onClick={(e) => e.stopPropagation()}
      >
        {current.image ? (
          <img
            src={current.image}
            alt={current.title}
            className="max-h-[70vh] max-w-full rounded-xl object-contain shadow-2xl"
          />
        ) : (
          <div className="w-full aspect-video max-h-[70vh] rounded-xl bg-slate-800 flex flex-col items-center justify-center gap-3 text-slate-500">
            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <rect width="18" height="18" x="3" y="3" rx="2" ry="2"/><circle cx="9" cy="9" r="2"/><path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"/>
            </svg>
            <p className="text-sm">Image coming soon</p>
          </div>
        )}
      </motion.div>

      {/* Next */}
      <button
        onClick={(e) => { e.stopPropagation(); next(); }}
        className="absolute right-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors z-10"
      >
        <ChevronRight size={26} />
      </button>
    </motion.div>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────
export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filtered = activeCategory === "All"
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter((item) => item.category === activeCategory);

  const countFor = (cat: string) =>
    cat === "All" ? GALLERY_ITEMS.length : GALLERY_ITEMS.filter((i) => i.category === cat).length;

  return (
    <div className="min-h-screen pt-20">
      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-slate-900 text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold mb-6" style={{ fontFamily: "var(--font-display)" }}>
              Gallery
            </h1>
            <p className="text-xl opacity-90">
              Explore snapshots from our webinars, workshops, and D School initiatives –
              capturing moments of learning, collaboration, and growth.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Highlights */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {highlights.map((h, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }}
                className="bg-card rounded-2xl p-6 shadow-sm border border-border text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <h.icon className="text-primary" size={32} />
                </div>
                <h3 className="text-2xl font-bold mb-2" style={{ fontFamily: "var(--font-display)" }}>{h.title}</h3>
                <p className="text-muted-foreground">{h.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Category Filter Bar */}
      <section className="py-5 bg-secondary sticky top-20 z-40 border-b border-border shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex gap-3 overflow-x-auto pb-1 scrollbar-hide">
            {CATEGORIES.map((cat) => {
              const isActive = activeCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-5 py-2.5 rounded-full whitespace-nowrap font-semibold transition-all flex-shrink-0 ${
                    isActive
                      ? "bg-primary text-primary-foreground shadow-md"
                      : "bg-card border border-border text-muted-foreground hover:border-primary hover:text-foreground"
                  }`}
                >
                  {cat} <span className={`ml-1 text-xs ${isActive ? "opacity-80" : "opacity-60"}`}>({countFor(cat)})</span>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.25 }}
              className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
            >
              {filtered.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, scale: 0.92 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.03, duration: 0.2 }}
                  whileHover={{ scale: 1.04, zIndex: 10 }}
                  onClick={() => setLightboxIndex(index)}
                  className="aspect-square rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all cursor-pointer group relative bg-slate-100 border border-slate-200"
                >
                  {item.image ? (
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover"
                      style={'imgPosition' in item && item.imgPosition ? { objectPosition: item.imgPosition as string } : undefined}
                      loading="lazy"
                    />
                  ) : (
                    <>
                      <div className="w-full h-full flex flex-col items-center justify-center gap-2 text-slate-400">
                        <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                          <rect width="18" height="18" x="3" y="3" rx="2" ry="2"/><circle cx="9" cy="9" r="2"/><path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"/>
                        </svg>
                        <span className="text-xs font-medium">{item.category}</span>
                      </div>
                      {/* Hover overlay only on placeholder cards */}
                      <div className="absolute inset-0 bg-slate-900/75 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center p-4">
                        <div className="text-center text-white">
                          <p className="font-bold text-sm leading-snug mb-1">{item.title}</p>
                          <p className="text-xs text-white/70">{item.date}</p>
                        </div>
                      </div>
                    </>
                  )}
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>

          {filtered.length === 0 && (
            <p className="text-center text-muted-foreground py-24">No photos in this category yet.</p>
          )}
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <Lightbox
            items={filtered}
            startIndex={lightboxIndex}
            onClose={() => setLightboxIndex(null)}
          />
        )}
      </AnimatePresence>
    </div>
  );
}
