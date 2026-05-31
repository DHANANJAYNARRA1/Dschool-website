import PETTemplate from "../../components/PETTemplate";

export default function IELTSProgram() {
  return (
    <PETTemplate
      title="IELTS Training"
      subtitle="International English Language Testing System"
      description="Comprehensive IELTS preparation program designed for healthcare professionals aiming to achieve the required English language proficiency scores for international opportunities."
      category="Language Training"
      durationOptions={["1 Month", "3 Months", "6 Months"]}
      trainingModes={["One-on-One Training", "Group Training Sessions"]}
      programId="ielts"
      price="Contact for Pricing"
      requireExperience={false}
      highlights={[
        {
          title: "All Four Skills Covered",
          description: "Comprehensive training in Listening, Reading, Writing, and Speaking"
        },
        {
          title: "Healthcare Context",
          description: "Medical and healthcare vocabulary integrated throughout the program"
        },
        {
          title: "Band Score Focus",
          description: "Targeted strategies to achieve band 7.0 and above required for healthcare migration"
        },
        {
          title: "Regular Mock Tests",
          description: "IELTS-format practice tests with detailed scoring and feedback"
        },
        {
          title: "Speaking Practice Sessions",
          description: "One-on-one speaking practice with certified IELTS instructors"
        },
        {
          title: "Writing Feedback",
          description: "Personalized feedback on Task 1 and Task 2 writing with improvement tips"
        }
      ]}
      curriculum={[
        "IELTS Test Format and Structure",
        "Listening Skills - Academic and General Training",
        "Reading Comprehension Strategies",
        "Academic Writing Task 1 - Graphs, Charts, and Diagrams",
        "Academic Writing Task 2 - Essay Writing",
        "General Training Writing - Letters and Essays",
        "Speaking Part 1 - Introduction and Interview",
        "Speaking Part 2 - Individual Long Turn",
        "Speaking Part 3 - Two-way Discussion",
        "Healthcare Vocabulary Building",
        "Grammar and Sentence Structure",
        "Pronunciation and Fluency Development",
        "Time Management Strategies",
        "Regular Practice Tests and Assessments"
      ]}
      outcomes={[
        "Achieve IELTS band scores of 7.0 or higher across all modules",
        "Master listening comprehension for academic and healthcare contexts",
        "Read and understand complex texts with speed and accuracy",
        "Write clear, well-structured essays and reports",
        "Speak fluently and confidently on various topics",
        "Meet English language requirements for international healthcare careers"
      ]}
    />
  );
}
