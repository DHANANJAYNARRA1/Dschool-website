import { useRef, useState } from "react";
import { motion } from "motion/react";
import { Quote, Play, Pause, Volume2, VolumeX } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

// ─── Video player used inside video testimonial cards ─────────────────────────
function VideoPlayer({ src, poster }: { src: string; poster?: string }) {
  const ref = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);
  const [muted, setMuted] = useState(true);

  function togglePlay() {
    const v = ref.current;
    if (!v) return;
    if (v.paused) { v.play(); setPlaying(true); }
    else { v.pause(); setPlaying(false); }
  }

  function toggleMute() {
    const v = ref.current;
    if (!v) return;
    v.muted = !v.muted;
    setMuted(v.muted);
  }

  return (
    <div className="relative aspect-video bg-slate-900 group cursor-pointer">
      <video
        ref={ref}
        src={src}
        muted
        loop
        playsInline
        {...(poster ? { poster } : {})}
        className="w-full h-full object-cover"
        onEnded={() => setPlaying(false)}
      />

      {/* Centre play/pause button */}
      <div
        className="absolute inset-0 flex items-center justify-center"
        onClick={togglePlay}
      >
        <div className="w-20 h-20 bg-gradient-to-br from-yellow-500 to-amber-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-all shadow-2xl">
          {playing
            ? <Pause className="text-blue-900" size={32} />
            : <Play  className="text-blue-900 ml-1" size={32} />}
        </div>
      </div>

      {/* Mute toggle */}
      <button
        onClick={toggleMute}
        className="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/50 flex items-center justify-center text-white hover:bg-black/70 transition-all z-10"
        aria-label={muted ? "Unmute" : "Mute"}
      >
        {muted ? <VolumeX size={15} /> : <Volume2 size={15} />}
      </button>
    </div>
  );
}

// ─── Testimonial data ─────────────────────────────────────────────────────────
const testimonials = [
  {
    quote: "D School's leadership workshop helped me step into a senior role with confidence. The sessions were highly practical and insightful.",
    author: "Dr. Priya Sharma",
    role: "Senior Nursing Leader",
    image: "/assets/DJI_20251114115506_0779_D.jpg",
    video: null,
    type: "image" as const,
  },
  {
    quote: "The Nurse 360 program offered a well-rounded learning experience, strengthening both my clinical understanding and professional development.",
    author: "Sanjay Patel",
    role: "Fresher Nurse",
    image: "/assets/WhatsApp Image 2026-04-03 at 12.52.17 PM.jpg",
    video: null,
    type: "image" as const,
  },
  {
    quote: "The LION Program transformed my approach to healthcare leadership. I now lead my team with confidence and strategic thinking.",
    author: "Meera Joseph",
    role: "Ward Manager",
    image: null,
    video: "/assets/video/VID-20250317-WA0035.mp4",
    poster: undefined,
    type: "video" as const,
  },
  {
    quote: "The Digital Health Revolution program enabled me to upgrade my skills in AI tools and key digital health practices, which are now directly helping me in my professional role.",
    author: "Rajesh Kumar",
    role: "Digital Health Specialist",
    image: null,
    video: "/assets/video/VID-20250317-WA0035.mp4",
    poster: "/assets/thumbnail.jpeg",
    type: "video" as const,
  },
  {
    quote: "The soft skills training provided by D School, especially during my time at Basavatarakam, significantly enhanced my communication and patient-handling abilities.",
    author: "Anjali Reddy",
    role: "Clinical Nurse",
    image: null,
    video: null,
    type: "text" as const,
  },
  {
    quote: "The Hospital Manager program equipped me with essential tools for efficient healthcare administration and patient care management.",
    author: "Vikram Singh",
    role: "Hospital Administrator",
    image: null,
    video: null,
    type: "text" as const,
  },
];

// ─── Component ────────────────────────────────────────────────────────────────
export default function Testimonials() {
  return (
    <section className="py-24 bg-gradient-to-br from-primary/5 to-accent/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ fontFamily: 'var(--font-display)' }}>
            Our Impact - <span className="text-primary">Voices from Our Community</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Hear from healthcare professionals who have transformed their careers with D School
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-card rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all border border-border"
            >
              {/* Video testimonial */}
              {testimonial.type === "video" && testimonial.video && (
                <div className="border-8 border-blue-900 rounded-t-2xl overflow-hidden">
                  <VideoPlayer src={testimonial.video} poster={testimonial.poster} />
                  <div className="bg-blue-900 px-4 py-2 flex items-center justify-between">
                    <span className="text-white text-sm font-semibold">Video Testimonial</span>
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 bg-gradient-to-br from-yellow-500 to-amber-600 rounded-sm transform rotate-45" />
                      <span className="text-white text-xs">D School</span>
                    </div>
                  </div>
                </div>
              )}

              {/* Image testimonial */}
              {testimonial.type === "image" && testimonial.image && (
                <div className="border-8 border-blue-900 rounded-t-2xl overflow-hidden">
                  <div className="aspect-video bg-slate-100 relative">
                    <ImageWithFallback
                      src={testimonial.image}
                      alt={testimonial.author}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-blue-900/95 to-transparent p-6">
                      <p className="text-white text-lg font-semibold italic">
                        "{testimonial.quote.substring(0, 80)}..."
                      </p>
                    </div>
                  </div>
                  <div className="bg-blue-900 px-4 py-2 flex items-center justify-between">
                    <span className="text-white text-sm font-semibold">Success Story</span>
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 bg-gradient-to-br from-yellow-500 to-amber-600 rounded-sm transform rotate-45" />
                      <span className="text-white text-xs">D School</span>
                    </div>
                  </div>
                </div>
              )}

              {/* Quote content */}
              <div className={`p-8 relative ${testimonial.type === "text" ? "border-t-8 border-blue-900" : ""}`}>
                {testimonial.type === "text" && (
                  <>
                    <Quote className="text-blue-900/20 absolute top-6 right-6" size={64} />
                    <div className="absolute top-0 right-8 w-12 h-12 bg-gradient-to-br from-yellow-500 to-amber-600 rounded-sm transform rotate-45 -translate-y-6" />
                  </>
                )}

                <div className="relative z-10">
                  <p className="text-lg text-foreground mb-6 leading-relaxed italic">
                    "{testimonial.quote}"
                  </p>

                  <div className="border-t-2 border-blue-900 pt-4 flex items-center gap-4">
                    <div className="w-14 h-14 bg-gradient-to-br from-blue-900 to-blue-700 rounded-full flex items-center justify-center flex-shrink-0 border-4 border-yellow-500">
                      <span className="text-white font-bold text-lg">
                        {testimonial.author.charAt(0)}
                      </span>
                    </div>
                    <div>
                      <p className="font-bold text-foreground text-lg">{testimonial.author}</p>
                      <p className="text-sm text-blue-700 font-semibold">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
