import WorkshopTemplate from "../../components/WorkshopTemplate";

export default function DigitalHealthRevolutionWorkshop() {
  return (
    <WorkshopTemplate
      title="Digital Health Revolution"
      date="July 2026, 3rd Week (TBC)"
      time="To Be Confirmed"
      duration="3 Months Online + 3-Day Immersion"
      capacity="30 Members"
      level="Working professionals with minimum of three (3) years of experience in the health domain. Healthcare Administrators, Managers, Health Tech Entrepreneurs & Enthusiasts."
      instructor="Industry Leaders & Digital Health Specialists"
      price="₹25,000 - ₹30,000"
      description="Designed for healthcare professionals aspiring to lead in the digital era, the program offers advanced insights, practical frameworks, and global perspectives on digital health transformation."
      workshopId="digital-health-revolution"
      category="Digital Health"
      image="/assets/workshops-new/Digital health.png"
      highlights={[
        {
          title: "3-Month Online Learning Journey",
          description: "Comprehensive 3-month online learning journey designed for working healthcare professionals."
        },
        {
          title: "3-Day Immersion at ASCI Campus",
          description: "Exclusive 3-day immersion program at the ASCI campus enabling experiential learning, networking, and practical engagement."
        },
        {
          title: "Expert-Led Sessions",
          description: "Expert-led sessions delivered by industry leaders, healthcare innovators, and digital transformation specialists."
        },
        {
          title: "Emerging Healthcare Technologies",
          description: "In-depth exploration of emerging healthcare technologies, digital transformation strategies, and innovation-driven healthcare models."
        },
        {
          title: "Real-World Case Studies",
          description: "Practical learning through real-world case studies, interactive discussions, and application-oriented frameworks."
        },
        {
          title: "Global Trends and Best Practices",
          description: "Exposure to global trends and best practices shaping the future of digital healthcare delivery."
        }
      ]}
      curriculum={[
        "Emerging Healthcare Technologies and Digital Tools",
        "Digital Transformation Strategies in Healthcare",
        "Healthcare Data, Analytics, and Operational Excellence",
        "Patient Engagement and Care Delivery Systems",
        "Electronic Health Records and Telemedicine Platforms",
        "Innovation-Driven Healthcare Models",
        "Global Trends in Digital Healthcare Delivery",
        "Leadership for Digital Transformation Initiatives"
      ]}
      outcomes={[
        "Enhanced ability to adapt to the rapidly changing digital healthcare environment with confidence and strategic clarity.",
        "Acquired practical knowledge on integrating technology into healthcare operations, patient engagement, and care delivery systems.",
        "Strengthened leadership capabilities required to manage and lead digital transformation initiatives.",
        "Improved decision-making skills through exposure to real-world healthcare challenges and technology-driven solutions.",
        "Gained insights into healthcare data, analytics, and digital tools supporting operational excellence and patient-centered care.",
        "Built strategic thinking, innovation mindset, and problem-solving capabilities aligned with modern healthcare demands.",
        "Expanded professional network through interactions with industry experts, mentors, and healthcare professionals from diverse backgrounds.",
        "Enhanced career readiness for emerging opportunities in digital health, healthcare innovation, and healthcare management."
      ]}
    />
  );
}
