import ProgramTemplate from "../../components/ProgramTemplate";

export default function Nurse360Program() {
  return (
    <ProgramTemplate
      title="Nurse 360"
      subtitle="Nursing Finishing School Program"
      duration="3 Months"
      eligibility="Fresher Nurses"
      price="₹15,000"
      description="A comprehensive development program specially designed for fresher nurses to build a strong foundation in clinical practice and professional readiness, bridging the gap between academic learning and real-world practice."
      programId="nurse-360"
      color="bg-gradient-to-br from-[#1E3A8A] to-[#0F1E4A]"
      features={[
        {
          title: "OSCE-Based Assessments",
          description: "Structured clinical evaluation for comprehensive skill development",
        },
        {
          title: "Hands-On Training",
          description: "Essential clinical skills practice in simulated environments",
        },
        {
          title: "Professional Etiquette",
          description: "Workplace readiness and professional behavior training",
        },
        {
          title: "Career Guidance",
          description: "Development support for successful healthcare career launch",
        },
        {
          title: "Clinical Competence",
          description: "Build confidence in patient care procedures",
        },
        {
          title: "Job Readiness",
          description: "Prepare for successful transition to professional practice",
        },
      ]}
      curriculum={[
        "Clinical Assessment Skills",
        "Vital Signs Monitoring and Documentation",
        "Medication Administration and Safety",
        "Infection Control and Aseptic Techniques",
        "IV Cannulation and Catheterization",
        "Wound Care and Dressing",
        "Basic Life Support (BLS)",
        "Patient Positioning and Mobility",
        "Professional Communication",
        "Healthcare Documentation",
        "Medical Equipment Handling",
        "Emergency Response Protocols",
      ]}
      outcomes={[
        "Perform essential clinical procedures confidently",
        "Pass OSCE assessments successfully",
        "Demonstrate professional workplace behavior",
        "Communicate effectively with patients and teams",
        "Handle medical emergencies appropriately",
        "Transition smoothly to professional nursing practice",
      ]}
    />
  );
}
