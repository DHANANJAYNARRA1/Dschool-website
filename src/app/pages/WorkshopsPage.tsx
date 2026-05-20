import { motion } from "motion/react";
import { Calendar, Clock, Users, Award, ArrowRight, MapPin } from "lucide-react";
import { Link } from "react-router";

export default function WorkshopsPage() {
  const upcomingWorkshops = [
    {
      id: "finance-workshop",
      title: "Finance Workshop",
      date: "June 20, 2026",
      time: "To Be Confirmed",
      duration: "1 Day",
      capacity: "100 Participants",
      level: "Hospital Managers · Nurse Managers · HOD · Any Hospital Background Managers",
      instructor: "Experienced Healthcare & Finance Professionals",
      description: "Curious to understand the financial side of healthcare? Gain expert insights, enhance financial awareness, and build confidence in managing financial aspects of hospital operations effectively.",
      category: "Finance",
      price: "₹599",
      image: "/assets/workshops-new/finance.png",
      mode: "Online"
    },
    {
      id: "lion-program",
      title: "LION Program",
      date: "July 2026, 1st Week (TBC)",
      time: "To Be Confirmed",
      duration: "TBC",
      capacity: "30 Members",
      level: "Nursing Leaders",
      instructor: "Healthcare Leaders & Expert Mentors",
      description: "Designed exclusively for nursing leaders, this program equips professionals with the essential skills required to meet evolving industry demands. Lead effectively, communicate with clarity, and create lasting impact.",
      category: "Leadership",
      price: "₹10,000",
      image: "/assets/workshops-new/lion.png",
      mode: "Offline"
    },
    {
      id: "digital-health-revolution",
      title: "Digital Health Revolution",
      date: "July 2026, 3rd Week (TBC)",
      time: "To Be Confirmed",
      duration: "3 Months Online + 3-Day Immersion",
      capacity: "30 Members",
      level: "Working professionals with minimum of three (3) years of experience in the health domain.Healthcare Administrators, Managers, Health Tech Entrepreneurs & Enthusiasts.",
      instructor: "Industry Leaders & Digital Health Specialists",
      description: "Designed for healthcare professionals aspiring to lead in the digital era, offering advanced insights, practical frameworks, and global perspectives on digital health transformation.",
      category: "Digital Health",
      price: "₹25,000 - ₹30,000",
      image: "/assets/workshops-new/Digital health.png",
      mode: "Hybrid"
    },
     {
      id: "hr-workshop",
      title: "HR Workshop",
      date: "September 2026 (TBC)",
      time: "To Be Confirmed",
      duration: "TBC",
      capacity: "To Be Updated",
      level: "HR Professionals · Hospital Administrators · Healthcare Managers · Talent Acquisition Teams · Operations & Administrative Professionals",
      instructor: "Administrative Staff College of India",
      description: "A specialized Human Resources Excellence Program in collaboration with Administrative Staff College of India, focusing on modern HR strategies, workforce management, and leadership development for healthcare settings.",
      category: "Human Resources",
      price: "To Be Updated",
      image: "/assets/workshops-new/Hr workshop .png",
      mode: "To Be Updated"
    },
    {
      id: "dr-tomorrow",
      title: "DR Tomorrow",
      date: "October 2026 (TBC)",
      time: "To Be Confirmed",
      duration: "TBC",
      capacity: "20–30 Participants",
      level: "Students (Age 13–16 Years)",
      instructor: "Healthcare Professionals & Medical Experts",
      description: "An engaging and interactive healthcare awareness program for children aged 13–16 years, exploring the world of healthcare, medicine, and health sciences through fun activities and career exposure sessions.",
      category: "Youth Program",
      price: "₹6,000",
      image: "/assets/workshops-new/DR Tomorrow.png",
      mode: "Offline"
    },
    {
      id: "doctor-prenure",
      title: "DR Prenure",
      date: "October 2026 (TBC)",
      time: "To Be Confirmed",
      duration: "TBC",
      capacity: "To Be Updated",
      level: "Experienced Doctors",
      instructor: "Healthcare Experts & Industry Leaders",
      description: "An exclusive professional development program for experienced doctors to enhance clinical excellence, leadership capabilities, patient engagement, and professional impact in today's evolving healthcare environment.",
      category: "Leadership",
      price: "To Be Updated",
      image: "/assets/workshops-new/drprenure.png",
      mode: "To Be Updated"
    },
  ];

  return (
    <div className="min-h-screen pt-16 md:pt-24 bg-background">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-primary via-blue-900 to-primary overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <div className="inline-flex items-center gap-2 bg-accent/20 text-accent px-4 py-2 rounded-full mb-6">
              <Award className="w-5 h-5" />
              <span className="text-sm font-medium">Professional Development Workshops</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Elevate Your Skills
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto mb-8">
              Join our expertly-crafted workshops designed to enhance your healthcare expertise and advance your career
            </p>
          </motion.div>
        </div>
      </section>

      {/* Workshops Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Upcoming Workshops
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Enroll in our upcoming workshops and take your career to the next level
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {upcomingWorkshops.map((workshop, index) => (
              <motion.div
                key={workshop.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group"
              >
                <Link to={`/workshops/${workshop.id}`}>
                  <div className="bg-card rounded-xl overflow-hidden hover:shadow-xl transition-all border border-border h-full flex flex-col group-hover:-translate-y-1">
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={workshop.image}
                        alt={workshop.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                      <div className="absolute top-4 right-2 bg-accent text-primary px-2 py-0.5 rounded-full text-[10px] font-semibold">
                        {workshop.price}
                      </div>
                      <div className="absolute bottom-4 left-4 bg-primary/90 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs font-medium">
                        {workshop.category}
                      </div>
                    </div>

                    <div className="p-6 flex-1 flex flex-col">
                      <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                        <Calendar className="w-4 h-4" />
                        <span>{workshop.date}</span>
                      </div>

                      <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                        {workshop.title}
                      </h3>

                      <p className="text-muted-foreground text-sm mb-4 line-clamp-2 flex-1">
                        {workshop.description}
                      </p>

                      <div className="space-y-2 mb-4">
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Clock className="w-4 h-4 text-primary" />
                          <span>{workshop.time} • {workshop.duration}</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Users className="w-4 h-4 text-primary" />
                          <span>{workshop.capacity}</span>
                        </div>
                        <div className="flex items-start gap-2 text-sm text-muted-foreground">
                          <Award className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                          <span className="line-clamp-2">Level: {workshop.level}</span>
                        </div>
                        {'mode' in workshop && workshop.mode && (
                          <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <MapPin className="w-4 h-4 text-primary" />
                            <span>Mode: {workshop.mode}</span>
                          </div>
                        )}
                      </div>

                      <div className="pt-4 border-t border-border">
                        <p className="text-sm text-muted-foreground mb-3">
                          <span className="font-medium text-foreground">Instructor:</span> {workshop.instructor}
                        </p>
                        <div className="inline-flex items-center gap-2 bg-gradient-to-r from-primary to-blue-600 text-white px-6 py-2 rounded-lg w-full justify-center font-medium">
                          <span>View Details & Register</span>
                          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gradient-to-br from-surface/50 to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Why Attend Our Workshops?
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Award,
                title: "Expert Instructors",
                description: "Learn from industry leaders and certified professionals"
              },
              {
                icon: Users,
                title: "Hands-On Learning",
                description: "Interactive sessions with practical applications"
              },
              {
                icon: Calendar,
                title: "Flexible Schedule",
                description: "Weekend and weekday options available"
              },
              {
                icon: Clock,
                title: "Certificate",
                description: "Receive a certificate of completion"
              }
            ].map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">{benefit.title}</h3>
                <p className="text-muted-foreground">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary via-blue-900 to-primary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Enhance Your Skills?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Join thousands of healthcare professionals who have advanced their careers through our workshops
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-accent text-primary px-8 py-4 rounded-lg hover:bg-yellow-400 transition-colors text-lg font-semibold"
            >
              <span>Contact Us for More Information</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
