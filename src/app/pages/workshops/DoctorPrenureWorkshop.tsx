import WorkshopTemplate from "../../components/WorkshopTemplate";

export default function DoctorPrenureWorkshop() {
  return (
    <WorkshopTemplate
      title="DR Prenure"
      date="October 2026 (TBC)"
      time="To Be Confirmed"
      duration="To Be Confirmed"
      capacity="To Be Updated"
      level="Experienced Doctors"
      instructor="Healthcare Experts & Industry Leaders"
      price="To Be Updated"
      description="DR Prenure is an exclusive professional development program specially designed for experienced doctors who aspire to enhance their clinical excellence, leadership capabilities, patient engagement, and professional impact in today's evolving healthcare environment."
      workshopId="doctor-prenure"
      category="Leadership"
      image="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=800&h=500&fit=crop"
      highlights={[
        {
          title: "Advanced Professional Development",
          description: "Advanced professional development sessions tailored exclusively for experienced doctors."
        },
        {
          title: "Leadership & Decision-Making",
          description: "Leadership and decision-making enhancement sessions to strengthen clinical leadership."
        },
        {
          title: "Patient Experience Strategies",
          description: "Strategies to improve patient experience and healthcare delivery quality."
        },
        {
          title: "Communication & Relationship-Building",
          description: "Communication and relationship-building skills for effective clinical practice."
        },
        {
          title: "Innovation & Modern Healthcare",
          description: "Exposure to innovation and modern healthcare approaches for a future-ready practice."
        },
        {
          title: "Personal Branding & Professional Presence",
          description: "Personal branding and professional presence development for greater industry influence."
        }
      ]}
      curriculum={[
        "Advanced Leadership and Decision-Making in Healthcare",
        "Patient Communication and Relationship Management",
        "Innovation and Modern Healthcare Approaches",
        "Personal Branding and Professional Presence",
        "Operational Excellence and Service Quality",
        "Strategic Thinking and Healthcare Management",
        "Networking and Collaborative Leadership",
        "Future-Ready Healthcare: Trends and Challenges"
      ]}
      outcomes={[
        "Strengthen leadership and professional decision-making skills.",
        "Enhance patient communication and relationship management.",
        "Improve healthcare service quality and patient experience.",
        "Apply innovative approaches in clinical and healthcare practice.",
        "Develop a strong professional identity and personal brand.",
        "Build confidence in leadership, collaboration, and strategic thinking.",
        "Adapt effectively to evolving healthcare trends and challenges.",
        "Strengthen operational understanding and service excellence.",
        "Expand professional networks and collaborative opportunities.",
        "Create a lasting and meaningful impact in healthcare delivery and patient care."
      ]}
    />
  );
}
