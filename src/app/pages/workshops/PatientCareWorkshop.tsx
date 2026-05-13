import WorkshopTemplate from "../../components/WorkshopTemplate";

export default function PatientCareWorkshop() {
  return (
    <WorkshopTemplate
      title="Advanced Patient Care Techniques"
      date="June 15, 2026"
      time="9:00 AM - 4:00 PM"
      duration="1 Day"
      capacity="30 Participants"
      level="Intermediate"
      instructor="Dr. Deepti G"
      price="₹5,000"
      description="Master advanced patient care methodologies including critical care protocols, emergency response, and compassionate communication."
      workshopId="patient-care"
      category="Clinical Skills"
      image="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=500&fit=crop"
      highlights={[
        {
          title: "Critical Care Protocols",
          description: "Learn advanced techniques for managing critically ill patients with evidence-based protocols"
        },
        {
          title: "Emergency Response",
          description: "Master rapid assessment and intervention strategies for emergency situations"
        },
        {
          title: "Compassionate Communication",
          description: "Develop skills to communicate effectively with patients and families during difficult times"
        },
        {
          title: "Pain Management",
          description: "Advanced approaches to assessing and managing patient pain across different scenarios"
        },
        {
          title: "Wound Care Excellence",
          description: "Latest techniques in wound assessment, treatment, and prevention of complications"
        },
        {
          title: "Practical Simulations",
          description: "Hands-on practice with realistic patient care scenarios and equipment"
        }
      ]}
      curriculum={[
        "Advanced Patient Assessment Techniques",
        "Critical Care Monitoring and Interventions",
        "Emergency Situation Management",
        "Effective Pain Assessment and Management",
        "Advanced Wound Care and Dressing Techniques",
        "Patient and Family Communication Skills",
        "Documentation and Record Keeping Best Practices",
        "Infection Control in Critical Care Settings"
      ]}
      outcomes={[
        "Demonstrate proficiency in advanced patient assessment",
        "Apply critical care protocols confidently in emergency situations",
        "Communicate compassionately with patients and families",
        "Implement evidence-based pain management strategies",
        "Execute advanced wound care techniques safely",
        "Maintain accurate and comprehensive patient documentation"
      ]}
    />
  );
}
