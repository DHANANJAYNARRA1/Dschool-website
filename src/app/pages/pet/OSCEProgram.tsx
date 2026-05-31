import PETTemplate from "../../components/PETTemplate";

export default function OSCEProgram() {
  return (
    <PETTemplate
      title="OSCE Preparation"
      subtitle="Objective Structured Clinical Examination Training"
      description="Practical OSCE preparation program to help healthcare professionals demonstrate clinical competence through simulated patient scenarios and skills assessments required for international licensure."
      category="Licensed Examination"
      duration="1-3 Months"
      trainingModes={["One-on-One Training", "Group Training Sessions"]}
      programId="osce"
      price="Contact for Pricing"
      highlights={[
        {
          title: "Practical Skills Focus",
          description: "Hands-on training in clinical skills, communication, and patient assessment"
        },
        {
          title: "Simulated Scenarios",
          description: "Practice with realistic patient scenarios and standardized patient interactions"
        },
        {
          title: "Station-Based Training",
          description: "Systematic preparation for all OSCE station types and formats"
        },
        {
          title: "Communication Skills",
          description: "Master therapeutic communication and patient interaction techniques"
        },
        {
          title: "Video Recording & Feedback",
          description: "Record practice sessions and receive detailed performance feedback"
        },
        {
          title: "Mock OSCE Examinations",
          description: "Full-length mock OSCE with multiple stations and expert evaluation"
        }
      ]}
      curriculum={[
        "Clinical Assessment Skills",
        "Vital Signs Measurement and Interpretation",
        "Medication Administration Techniques",
        "Wound Care and Dressing",
        "Patient Safety and Infection Control",
        "Therapeutic Communication",
        "Breaking Bad News",
        "Cultural Sensitivity and Diversity",
        "Documentation and Record Keeping",
        "Emergency Response Procedures",
        "Health Education and Patient Teaching",
        "Professional Behavior and Ethics",
        "OSCE Station Management and Time Control"
      ]}
      outcomes={[
        "Perform clinical skills with precision and confidence",
        "Communicate effectively with patients in diverse scenarios",
        "Demonstrate cultural sensitivity and professional behavior",
        "Manage time efficiently across OSCE stations",
        "Handle emergency scenarios with appropriate interventions",
        "Pass OSCE assessments for international nursing registration"
      ]}
    />
  );
}
