import { motion } from "motion/react";
import { GraduationCap, Globe2, Users2, TrendingUp, Shield, Zap } from "lucide-react";
import { GridPattern } from "./BackgroundPattern";

export default function WhyChooseUs() {
  const features = [
    {
      icon: GraduationCap,
      title: "ASCI Partnership",
      description: "All programs delivered in association with Administrative Staff College of India, ensuring world-class education standards and recognized certification.",
    },
    {
      icon: Users2,
      title: "Expert Faculty",
      description: "Learn from seasoned healthcare professionals and industry leaders with 6+ years of combined clinical and administrative experience.",
    },
    {
      icon: TrendingUp,
      title: "Career Advancement",
      description: "Transform from qualified professionals to competent experts ready for leadership roles in top-tier healthcare institutions.",
    },
    {
      icon: Shield,
      title: "Proven Excellence",
      description: "98% satisfaction rate from over 2,000 healthcare professionals who have completed our comprehensive training programs.",
    },
    {
      icon: Zap,
      title: "Practical Focus",
      description: "Hands-on training, real-world case studies, and scenario-based learning designed for immediate workplace application.",
    },
    {
      icon: Globe2,
      title: "Industry Network",
      description: "Access to our extensive network of 20+ healthcare partners including leading hospitals and medical institutions across India.",
    },
  ];

  return (
    <section className="py-24 bg-slate-50 relative overflow-hidden">
      <GridPattern />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ fontFamily: 'var(--font-display)' }}>
            Why Choose <span className="text-primary">D School?</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We bridge the gap between traditional healthcare education and real-world industry demands
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all border border-slate-200 group"
            >
              <div className="w-14 h-14 bg-gradient-to-br from-blue-900 to-blue-700 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <feature.icon className="text-white" size={28} />
              </div>
              <h3 className="text-xl font-bold mb-3 text-slate-900" style={{ fontFamily: 'var(--font-display)' }}>
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
