import { useRef, useState } from "react";
import { motion } from "motion/react";
import { Play, Pause, Volume2, VolumeX } from "lucide-react";

const videos = [
  {
    src: "/assets/video/VID-20250317-WA0035.mp4",
    title: "D School in Action",
    subtitle: "Campus & Training Facilities",
  },
  {
    src: "/assets/video/VID-20250317-WA0035.mp4",
    title: "Healthcare Excellence",
    subtitle: "Our Programs & Community",
  },
];

function VideoPlayer({ src, title, subtitle, delay }: {
  src: string;
  title: string;
  subtitle: string;
  delay: number;
}) {
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
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay }}
      className="relative rounded-2xl overflow-hidden shadow-2xl group bg-slate-900"
    >
      <video
        ref={ref}
        src={src}
        muted
        loop
        playsInline
        className="w-full aspect-video object-cover"
        onEnded={() => setPlaying(false)}
      />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent pointer-events-none" />

      {/* Controls */}
      <div className="absolute inset-0 flex items-center justify-center">
        <button
          onClick={togglePlay}
          className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm border-2 border-white/40 flex items-center justify-center text-white hover:bg-white/30 transition-all opacity-100 group-hover:opacity-100 md:opacity-0 focus:opacity-100"
          aria-label={playing ? "Pause" : "Play"}
        >
          {playing ? <Pause size={28} fill="white" /> : <Play size={28} fill="white" className="ml-1" />}
        </button>
      </div>

      {/* Mute toggle */}
      <button
        onClick={toggleMute}
        className="absolute top-3 right-3 w-9 h-9 rounded-full bg-black/40 backdrop-blur-sm flex items-center justify-center text-white hover:bg-black/60 transition-all"
        aria-label={muted ? "Unmute" : "Mute"}
      >
        {muted ? <VolumeX size={16} /> : <Volume2 size={16} />}
      </button>

      {/* Caption */}
      <div className="absolute bottom-0 left-0 right-0 p-5">
        <p className="text-white font-bold text-lg leading-tight">{title}</p>
        <p className="text-white/70 text-sm mt-0.5">{subtitle}</p>
      </div>
    </motion.div>
  );
}

export default function VideoSection() {
  return (
    <section className="py-24 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <h2
            className="text-4xl md:text-5xl font-bold text-white mb-4"
            style={{ fontFamily: "var(--font-display)" }}
          >
            See D School <span className="text-accent">in Action</span>
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            Get a glimpse of our world-class training environment and the passionate healthcare professionals we develop.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {videos.map((v, i) => (
            <VideoPlayer key={v.src} {...v} delay={i * 0.15} />
          ))}
        </div>
      </div>
    </section>
  );
}
