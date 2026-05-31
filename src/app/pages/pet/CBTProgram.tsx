import PETTemplate from "../../components/PETTemplate";

export default function CBTProgram() {
  return (
    <PETTemplate
      title="CBT Training"
      subtitle="Computer-Based Test Preparation for International Nursing"
      description="Focused CBT preparation for nurses planning to work in the UK, Australia, New Zealand, and other countries requiring computer-based nursing competency assessments."
      category="Licensed Examination"
      duration="2-4 Months"
      trainingModes={["One-on-One Training", "Group Training Sessions"]}
      programId="cbt"
      price="Contact for Pricing"
      highlights={[
        {
          title: "CBT Exam Expertise",
          description: "Specialized training from instructors with extensive CBT examination experience"
        },
        {
          title: "Computer-Based Practice",
          description: "Extensive practice with CBT-style questions and exam interface"
        },
        {
          title: "UK/Australia Focus",
          description: "Content aligned with NMC (UK) and AHPRA (Australia) requirements"
        },
        {
          title: "Nursing Competencies",
          description: "Comprehensive coverage of all nursing competency areas tested in CBT"
        },
        {
          title: "Mock CBT Examinations",
          description: "Regular mock tests simulating actual CBT exam conditions"
        },
        {
          title: "Performance Tracking",
          description: "Detailed analytics to monitor progress across all competency domains"
        }
      ]}
      curriculum={[
        "Professional Values and Communication",
        "Nursing Practice and Decision Making",
        "Leadership, Management and Team Working",
        "Safeguarding and Protection",
        "Infection Prevention and Control",
        "Pharmacology and Medicines Management",
        "Adult Nursing Competencies",
        "Mental Health Nursing Competencies",
        "Children's and Young People's Nursing",
        "Learning Disabilities Nursing",
        "CBT Exam Format and Navigation",
        "Time Management for CBT",
        "Test-Taking Strategies"
      ]}
      outcomes={[
        "Demonstrate competency across all CBT nursing domains",
        "Navigate computer-based testing platforms confidently",
        "Apply evidence-based nursing knowledge to clinical scenarios",
        "Master pharmacology and medicines management for CBT",
        "Achieve passing scores on CBT examinations",
        "Qualify for nursing registration in UK, Australia, or target country"
      ]}
    />
  );
}
