import { motion } from "motion/react";
import { Link } from "react-router";
import { useState, ElementType } from "react";
import {
  Monitor, Heart, Award, Languages, Lightbulb, GraduationCap,
  Briefcase, ArrowRight, Crown, Stethoscope, HeartPulse, ClipboardList, LayoutGrid,
} from "lucide-react";

export default function AllPrograms() {
  const [activeCategory, setActiveCategory] = useState("all");

  const programCategories = [
    {
      id: "nursing",
      icon: Heart,
      title: "Nursing Programs",
      description: "Specialized training programs designed to elevate nursing professionals at every career stage",
      color: "from-[#1E3A8A] to-[#0F1E4A]",
      iconBg: "bg-[#D4AF37]/10",
      iconColor: "text-[#D4AF37]",
      programs: [
        {
          icon: Crown,
          title: "LION Program",
          slug: "lion",
          duration: "3 Days",
          price: "₹10,000-12,000",
          description: "Leadership bootcamp covering strategic leadership, medico-legal competence, and digital health.",
          eligibility: "Min 2 years Nursing Incharge",
          featured: true,
        },
        {
          icon: Stethoscope,
          title: "Nurse 360",
          slug: "nurse-360",
          duration: "3 Months",
          price: "₹15,000",
          description: "Comprehensive finishing school with OSCE assessment and clinical skills enhancement.",
          eligibility: "Fresher Nurses",
          featured: false,
        },
        {
          icon: HeartPulse,
          title: "SOS Program",
          slug: "sos",
          duration: "3 Months",
          price: "₹12,000",
          description: "Soft Skills for Outstanding Service - communication and emotional intelligence mastery.",
          eligibility: "All Nurses",
          featured: false,
        },
        {
          icon: ClipboardList,
          title: "DALES Program",
          slug: "dales",
          duration: "6 Months",
          price: "₹18,000",
          description: "Daily Activities Leading to Excellence - patient care standards and team collaboration.",
          eligibility: "Healthcare Professionals",
          featured: false,
        },
        {
          icon: Lightbulb,
          title: "LANTERN",
          slug: "lantern",
          duration: "1 Day",
          price: "₹5,000",
          description: "Nightingale Champions - advanced leadership empowerment for nursing excellence.",
          eligibility: "LION Graduates",
          featured: false,
        },
        {
          icon: Languages,
          title: "LANG Program",
          slug: "lang",
          duration: "Weekly Sessions",
          price: "₹8,000",
          description: "Medical English training with focus on professional healthcare communication.",
          eligibility: "Nurses with Basic English",
          featured: false,
        },
      ],
    },
    {
      id: "management",
      icon: Briefcase,
      title: "Management Programs",
      description: "Executive leadership and healthcare administration programs for senior professionals",
      color: "from-[#D4AF37] to-[#B8941F]",
      iconBg: "bg-[#1E3A8A]/10",
      iconColor: "text-[#1E3A8A]",
      programs: [
        {
          icon: Briefcase,
          title: "Hospital Manager Programs",
          slug: "hospital-manager",
          duration: "6-12 Months",
          price: "₹75,000",
          description: "Comprehensive management: data analytics, quality improvement, and operations excellence.",
          eligibility: "Healthcare Managers",
          featured: true,
        },
        {
          icon: GraduationCap,
          title: "Leadership Integrated Skills",
          slug: "leadership-integrated",
          duration: "1 Year",
          price: "₹65,000",
          description: "Year-long program combining language, soft skills, leadership, and integration modules.",
          eligibility: "Healthcare Professionals",
          featured: true,
        },
        {
          icon: Monitor,
          title: "Digital Health Revolution",
          slug: "digital-health-revolution",
          duration: "3 Months + 3 Days",
          price: "₹45,000",
          description: "Master AI, digital health technologies, and lead transformation initiatives in healthcare.",
          eligibility: "Healthcare Professionals",
          featured: true,
        },
      ],
    },
    {
      id: "specialized",
      icon: Award,
      title: "Specialized Programs",
      description: "Unique learning experiences and workshops for diverse audiences",
      color: "from-[#1E3A8A] to-[#0F1E4A]",
      iconBg: "bg-[#D4AF37]/10",
      iconColor: "text-[#D4AF37]",
      programs: [
        {
          icon: Award,
          title: "DR. Tomorrow",
          slug: "dr-tomorrow",
          duration: "Varies",
          price: "Contact Us",
          description: "Specialized program designed to inspire young minds and provide early exposure to healthcare concepts.",
          eligibility: "Children",
          featured: true,
        },
      ],
    },
  ];

  const currentCategory = programCategories.find((c) => c.id === activeCategory);

  return (
    <div className="min-h-screen pt-16 md:pt-24 bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#1E3A8A] via-[#172F6E] to-[#0F1E4A] text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6" style={{ fontFamily: "var(--font-display)" }}>
              Our Programs
            </h1>
            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              Industry-aligned professional development programs delivered in association with
              the Administrative Staff College of India (ASCI)
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl px-6 py-4 border border-white/20">
                <p className="text-4xl font-bold mb-1">10</p>
                <p className="text-sm text-blue-100">Programs</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl px-6 py-4 border border-white/20">
                <p className="text-4xl font-bold mb-1">3</p>
                <p className="text-sm text-blue-100">Categories</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl px-6 py-4 border border-white/20">
                <p className="text-4xl font-bold mb-1">ASCI</p>
                <p className="text-sm text-blue-100">Certified</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Horizontal Category Tab Bar */}
      <div className="bg-white border-b border-slate-200 sticky top-16 md:top-24 z-40 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12">
          <div className="flex items-center gap-3 py-4 overflow-x-auto scrollbar-hide px-2">
            <button
              onClick={() => setActiveCategory("all")}
              className={`flex items-center gap-2 px-7 py-3 rounded-full font-semibold whitespace-nowrap transition-all ${
                activeCategory === "all"
                  ? "bg-[#1E3A8A] text-white shadow-lg"
                  : "bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-slate-900"
              }`}
            >
              <LayoutGrid size={18} />
              All
            </button>
            {programCategories.map((category) => {
              const isActive = activeCategory === category.id;
              return (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`flex items-center gap-2 px-7 py-3 rounded-full font-semibold whitespace-nowrap transition-all ${
                    isActive
                      ? "bg-[#1E3A8A] text-white shadow-lg"
                      : "bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-slate-900"
                  }`}
                >
                  <category.icon size={18} />
                  {category.title}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Programs Content */}
      <motion.section
        key={activeCategory}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="py-24 bg-white"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {activeCategory === "all" ? (
            programCategories.map((category, catIndex) => (
              <div key={category.id} className={catIndex > 0 ? "mt-16" : ""}>
                <div className="flex items-center gap-4 mb-12">
                  <div className={`w-16 h-16 ${category.iconBg} rounded-2xl flex items-center justify-center flex-shrink-0`}>
                    <category.icon className={category.iconColor} size={32} />
                  </div>
                  <div>
                    <h2 className="text-4xl md:text-5xl font-bold" style={{ fontFamily: "var(--font-display)" }}>
                      {category.title}
                    </h2>
                    <p className="text-xl text-muted-foreground mt-2">{category.description}</p>
                  </div>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {category.programs.map((program, index) => (
                    <ProgramCard key={program.slug} program={program} category={category} index={index} />
                  ))}
                </div>
              </div>
            ))
          ) : currentCategory ? (
            <>
              <div className="flex items-center gap-4 mb-12">
                <div className={`w-16 h-16 ${currentCategory.iconBg} rounded-2xl flex items-center justify-center flex-shrink-0`}>
                  <currentCategory.icon className={currentCategory.iconColor} size={32} />
                </div>
                <div>
                  <h2 className="text-4xl md:text-5xl font-bold" style={{ fontFamily: "var(--font-display)" }}>
                    {currentCategory.title}
                  </h2>
                  <p className="text-xl text-muted-foreground mt-2">{currentCategory.description}</p>
                </div>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {currentCategory.programs.map((program, index) => (
                  <ProgramCard key={program.slug} program={program} category={currentCategory} index={index} />
                ))}
              </div>
            </>
          ) : null}
        </div>
      </motion.section>
    </div>
  );
}

function ProgramCard({
  program,
  category,
  index,
}: {
  program: { icon: ElementType; title: string; slug: string; duration: string; price: string; description: string; eligibility: string; featured: boolean };
  category: { color: string };
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.08 }}
      className="group"
    >
      <Link to={`/programs/${program.slug}`}>
        <div
          className={`bg-card rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all border ${
            program.featured
              ? "border-primary/50 ring-2 ring-primary/20"
              : "border-slate-200"
          } h-full flex flex-col group-hover:-translate-y-2 relative`}
        >
          {program.featured && (
            <div className="absolute top-4 right-4 bg-accent text-primary px-3 py-1 rounded-full text-xs font-bold z-10">
              Featured
            </div>
          )}

          <div className={`bg-gradient-to-br ${category.color} p-8 text-white relative overflow-hidden`}>
            <div className="absolute top-0 right-0 w-24 h-24 bg-white/10 rounded-full -mr-12 -mt-12" />
            <div className="relative z-10">
              <div className="w-14 h-14 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center mb-4">
                <program.icon size={28} />
              </div>
              <h3 className="text-2xl font-bold mb-2" style={{ fontFamily: "var(--font-display)" }}>
                {program.title}
              </h3>
              <div className="flex items-center gap-3 text-sm opacity-90">
                <span>⏱️ {program.duration}</span>
                <span>•</span>
                <span className="font-bold">{program.price}</span>
              </div>
            </div>
          </div>

          <div className="p-6 flex-1 flex flex-col">
            <p className="text-muted-foreground mb-4 leading-relaxed flex-1">
              {program.description}
            </p>

            <div className="space-y-3">
              <div className="text-sm text-muted-foreground">
                <span className="font-semibold text-foreground">Eligibility:</span>{" "}
                {program.eligibility}
              </div>

              <button className="text-primary font-bold flex items-center gap-2 group-hover:gap-3 transition-all">
                View Program Details
                <ArrowRight size={18} />
              </button>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
