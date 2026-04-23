import { motion } from "motion/react";
import { Users, Award, BookOpen, GraduationCap, Briefcase, TrendingUp } from "lucide-react";
import { GeometricPattern } from "./BackgroundPattern";

export default function Stats() {
  const stats = [
    {
      icon: GraduationCap,
      value: "500+",
      label: "Placements",
      description: "Successful career placements",
    },
    {
      icon: Briefcase,
      value: "20+",
      label: "Industry Partners",
      description: "Top-tier healthcare institutions",
    },
    {
      icon: Users,
      value: "2000+",
      label: "Professionals Trained",
      description: "Healthcare experts upskilled",
    },
    {
      icon: BookOpen,
      value: "10",
      label: "Specialized Programs",
      description: "Comprehensive training paths",
    },
    {
      icon: Award,
      value: "100%",
      label: "ASCI Certified",
      description: "Premium accreditation",
    },
    {
      icon: TrendingUp,
      value: "98%",
      label: "Satisfaction Rate",
      description: "Student feedback & success",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-blue-900 via-blue-800 to-slate-900 relative overflow-hidden">
      <GeometricPattern />
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-yellow-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-yellow-400 to-amber-500 rounded-full mb-4">
                <stat.icon className="text-blue-900" size={32} />
              </div>
              <h3 className="text-4xl font-bold text-white mb-2" style={{ fontFamily: 'var(--font-display)' }}>
                {stat.value}
              </h3>
              <p className="text-lg font-semibold text-yellow-300 mb-1">{stat.label}</p>
              <p className="text-sm text-blue-200">{stat.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
