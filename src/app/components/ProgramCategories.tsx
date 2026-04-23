import { motion } from "motion/react";
import { Link } from "react-router";
import { Heart, Briefcase, GraduationCap, Globe, Languages, Award, Crown } from "lucide-react";

const categories = [
  {
    icon: Heart,
    title: "Nursing Programs",
    description: "Specialized training for nursing professionals",
    programs: [
      { title: "LION Program", slug: "lion", duration: "3 Days", price: "₹10,000-12,000" },
      { title: "Nurse 360", slug: "nurse-360", duration: "3 Months", price: "₹15,000" },
      { title: "SOS Program", slug: "sos", duration: "3 Months", price: "₹12,000" },
      { title: "DALES Program", slug: "dales", duration: "6 Months", price: "₹18,000" },
      { title: "LANTERN", slug: "lantern", duration: "1 Day", price: "₹5,000" },
      { title: "LANG Program", slug: "lang", duration: "Weekly Sessions", price: "₹8,000" },
    ],
    color: "from-[#1E3A8A] to-[#0F1E4A]",
    iconBg: "bg-[#D4AF37]/10",
    iconColor: "text-[#D4AF37]",
  },
  {
    icon: Briefcase,
    title: "Management Programs",
    description: "Leadership and administration excellence",
    programs: [
      { title: "Hospital Manager Programs", slug: "hospital-manager", duration: "6-12 Months", price: "₹75,000" },
      { title: "Leadership Integrated Skills", slug: "leadership-integrated", duration: "1 Year", price: "₹65,000" },
      { title: "Digital Health Revolution", slug: "digital-health-revolution", duration: "3 Months + 3 Days", price: "₹45,000" },
    ],
    color: "from-[#D4AF37] to-[#B8941F]",
    iconBg: "bg-[#1E3A8A]/10",
    iconColor: "text-[#1E3A8A]",
  },
  {
    icon: Award,
    title: "Specialized Programs",
    description: "Unique learning experiences and workshops",
    programs: [
      { title: "DR. Tomorrow", slug: "dr-tomorrow", duration: "Varies", price: "Contact Us" },
    ],
    color: "from-[#1E3A8A] to-[#0F1E4A]",
    iconBg: "bg-[#D4AF37]/10",
    iconColor: "text-[#D4AF37]",
  },
];

export default function ProgramCategories() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ fontFamily: 'var(--font-display)' }}>
            Programs by <span className="text-primary">Category</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Choose from our comprehensive range of specialized programs designed for different healthcare career paths
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {categories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-2xl border-2 border-slate-200 overflow-hidden hover:border-primary transition-all group"
            >
              <div className={`bg-gradient-to-br ${category.color} p-8 text-white`}>
                <div className={`inline-flex items-center justify-center w-16 h-16 ${category.iconBg} rounded-xl mb-4`}>
                  <category.icon className={category.iconColor} size={32} />
                </div>
                <h3 className="text-2xl font-bold mb-2" style={{ fontFamily: 'var(--font-display)' }}>
                  {category.title}
                </h3>
                <p className="text-blue-100">{category.description}</p>
              </div>

              <div className="p-6">
                <div className="space-y-3">
                  {category.programs.map((program, pIndex) => (
                    <Link key={pIndex} to={`/programs/${program.slug}`}>
                      <div className="flex items-center justify-between p-4 rounded-xl border border-slate-200 hover:border-primary hover:bg-slate-50 transition-all group/item">
                        <div className="flex-1">
                          <h4 className="font-bold text-slate-900 group-hover/item:text-primary transition-colors">
                            {program.title}
                          </h4>
                          <p className="text-sm text-muted-foreground">{program.duration}</p>
                        </div>
                        <div className="text-right">
                          <p className="font-bold text-primary">{program.price}</p>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>

                <Link to="/programs" className="block mt-6">
                  <button className="w-full bg-slate-100 hover:bg-slate-200 text-slate-900 py-3 rounded-xl font-semibold transition-all">
                    View All Programs
                  </button>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
