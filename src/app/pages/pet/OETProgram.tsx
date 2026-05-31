import PETTemplate from "../../components/PETTemplate";

export default function OETProgram() {
  return (
    <PETTemplate
      title="OET Training"
      subtitle="Occupational English Test for Healthcare Professionals"
      description="Specialized OET preparation for nurses, doctors, and healthcare professionals seeking to demonstrate English language proficiency in healthcare settings for international practice."
      category="Language Training"
      durationOptions={["1 Month", "3 Months", "6 Months"]}
      trainingModes={["One-on-One Training", "Group Training Sessions"]}
      programId="oet"
      price="Contact for Pricing"
      highlights={[
        {
          title: "Healthcare-Specific English",
          description: "Focused on medical and healthcare communication scenarios"
        },
        {
          title: "Profession-Specific Content",
          description: "Training tailored to nursing, medicine, and healthcare professions"
        },
        {
          title: "Clinical Communication",
          description: "Real-world patient interaction and healthcare workplace scenarios"
        },
        {
          title: "Grade B+ Focus",
          description: "Strategies to achieve Grade B or higher required for registration"
        },
        {
          title: "Mock OET Tests",
          description: "Full-length practice tests with professional marking and feedback"
        },
        {
          title: "Personalized Coaching",
          description: "Individual attention to strengthen weak areas in each sub-test"
        }
      ]}
      curriculum={[
        "OET Test Format and Assessment Criteria",
        "Listening - Healthcare Consultation Extracts",
        "Listening - Healthcare Workplace Talks and Lectures",
        "Reading Part A - Expeditious Reading",
        "Reading Part B - Careful Reading",
        "Reading Part C - Multiple Texts on Single Topic",
        "Writing - Nursing/Medical Referral Letters",
        "Writing - Discharge Summaries and Case Notes",
        "Speaking - Role-play Scenarios with Patients",
        "Speaking - Providing Information and Reassurance",
        "Speaking - Discussing Treatment Options",
        "Medical and Healthcare Vocabulary",
        "Professional Communication Skills",
        "Cultural Sensitivity in Healthcare Communication"
      ]}
      outcomes={[
        "Achieve OET Grade B or higher across all sub-tests",
        "Understand healthcare consultations and workplace communication",
        "Read and comprehend medical texts and healthcare literature",
        "Write professional referral letters and healthcare documentation",
        "Communicate effectively with patients in role-play scenarios",
        "Meet English language requirements for international healthcare registration"
      ]}
    />
  );
}
