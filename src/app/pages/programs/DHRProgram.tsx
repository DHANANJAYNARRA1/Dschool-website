import ProgramTemplate from "../../components/ProgramTemplate";

export default function DHRProgram() {
  return (
    <ProgramTemplate
      title="Digital Health Revolution 2.0"
      subtitle="Management Development Program"
      duration="3-Month Online + 3-Day Immersion"
      eligibility="Healthcare Professionals"
      price="₹45,000"
      description="Equip yourself with knowledge of emerging digital health technologies and practical insights through real-world case studies, enabling you to implement and lead Digital Health initiatives in your organization."
      programId="digital-health-revolution"
      color="bg-gradient-to-br from-[#D4AF37] via-[#C5A029] to-[#B8941F]"
      features={[
        {
          title: "Comprehensive Online Learning",
          description: "3-month structured online program with expert-led sessions and interactive modules",
        },
        {
          title: "ASCI Campus Immersion",
          description: "Exclusive 3-day in-person experience at the prestigious ASCI campus",
        },
        {
          title: "Real-World Case Studies",
          description: "Learn from actual digital health implementations across healthcare organizations",
        },
        {
          title: "Emerging Technologies",
          description: "AI, IoT, telemedicine, wearables, and healthcare data analytics",
        },
        {
          title: "Implementation Frameworks",
          description: "Practical tools and methodologies for digital transformation",
        },
        {
          title: "Global Perspectives",
          description: "International best practices and innovative digital health models",
        },
      ]}
      curriculum={[
        "Introduction to Digital Health Ecosystem",
        "Healthcare Data Analytics and AI Applications",
        "Telemedicine and Remote Patient Monitoring",
        "Electronic Health Records (EHR) Systems",
        "Healthcare IoT and Wearable Technologies",
        "Cybersecurity in Healthcare",
        "Digital Health Regulations and Compliance",
        "Change Management for Digital Transformation",
        "ROI and Business Models in Digital Health",
        "Future Trends: Genomics, Precision Medicine, Blockchain",
      ]}
      outcomes={[
        "Lead digital health initiatives in your organization",
        "Implement AI and data analytics solutions",
        "Design and deploy telemedicine programs",
        "Evaluate and select digital health technologies",
        "Manage digital transformation projects effectively",
        "Stay ahead of emerging healthcare technology trends",
      ]}
    />
  );
}
