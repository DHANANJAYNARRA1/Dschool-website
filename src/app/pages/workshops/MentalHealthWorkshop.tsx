import WorkshopTemplate from "../../components/WorkshopTemplate";

export default function MentalHealthWorkshop() {
  return (
    <WorkshopTemplate
      title="Mental Health First Aid for Healthcare Workers"
      date="July 20, 2026"
      time="10:00 AM - 4:00 PM"
      duration="1 Day"
      capacity="30 Participants"
      level="All Levels"
      instructor="Licensed Mental Health Counselors"
      price="₹5,500"
      description="Learn to recognize and respond to mental health crises, support colleagues, and maintain your own mental wellbeing."
      workshopId="mental-health"
      category="Wellbeing"
      image="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=800&h=500&fit=crop"
      highlights={[
        {
          title: "Crisis Recognition",
          description: "Identify signs of mental health crises in patients and colleagues"
        },
        {
          title: "De-escalation Techniques",
          description: "Learn effective strategies to de-escalate mental health emergencies"
        },
        {
          title: "Self-Care Strategies",
          description: "Develop resilience and maintain your own mental wellbeing"
        },
        {
          title: "Compassionate Support",
          description: "Provide empathetic support to those experiencing mental health challenges"
        },
        {
          title: "Resource Navigation",
          description: "Connect individuals with appropriate mental health resources and services"
        },
        {
          title: "Burnout Prevention",
          description: "Recognize and prevent burnout in high-stress healthcare environments"
        }
      ]}
      curriculum={[
        "Understanding Mental Health and Mental Illness",
        "Recognizing Signs of Mental Health Crises",
        "Suicide Risk Assessment and Intervention",
        "Anxiety and Panic Disorder Management",
        "Depression Recognition and Response",
        "Trauma-Informed Care Principles",
        "De-escalation and Crisis Communication",
        "Supporting Colleagues in Distress",
        "Self-Care and Stress Management for Healthcare Workers",
        "Burnout Recognition and Prevention",
        "Mental Health Resource Navigation"
      ]}
      outcomes={[
        "Recognize signs and symptoms of common mental health conditions",
        "Respond appropriately to mental health crises",
        "Provide initial support to individuals in mental distress",
        "Use de-escalation techniques effectively",
        "Connect individuals with appropriate mental health resources",
        "Implement self-care strategies to prevent burnout"
      ]}
    />
  );
}
