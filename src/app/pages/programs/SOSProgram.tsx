import ProgramTemplate from "../../components/ProgramTemplate";

export default function SOSProgram() {
  return (
    <ProgramTemplate
      title="SOS Program"
      subtitle="Soft Skills for Outstanding Services"
      duration="Weekly Sessions for 3 Months"
      eligibility="All Nurses"
      price="₹12,000"
      description="A comprehensive soft skills development initiative designed specifically for nurses, focusing on enhancing interpersonal effectiveness and delivering outstanding patient-centered care."
      programId="sos"
      color="bg-gradient-to-br from-[#1E3A8A] to-[#0F1E4A]"
      features={[
        {
          title: "Communication Skills",
          description: "Master verbal and non-verbal communication for patient interactions",
        },
        {
          title: "Emotional Intelligence",
          description: "Develop self-awareness and empathy for better patient relationships",
        },
        {
          title: "Conflict Resolution",
          description: "Handle challenging situations with confidence and professionalism",
        },
        {
          title: "Interactive Sessions",
          description: "Full-day weekly training with practical exercises",
        },
        {
          title: "Real-World Scenarios",
          description: "Practice with actual patient care situations",
        },
        {
          title: "Personal Development",
          description: "Build confidence and professional presence",
        },
      ]}
      curriculum={[
        "Foundations of Effective Communication",
        "Active Listening and Empathy",
        "Non-Verbal Communication Skills",
        "Understanding Emotional Intelligence",
        "Managing Emotions in Healthcare Settings",
        "Conflict Identification and Resolution",
        "Difficult Conversations and Feedback",
        "Cultural Sensitivity and Diversity",
        "Stress Management Techniques",
        "Building Professional Relationships",
        "Patient and Family Communication",
        "Team Communication and Collaboration",
      ]}
      outcomes={[
        "Communicate effectively with patients and families",
        "Manage emotions and stressful situations",
        "Resolve conflicts professionally",
        "Demonstrate empathy and compassion",
        "Build trust with patients and colleagues",
        "Enhance overall patient satisfaction",
      ]}
    />
  );
}
