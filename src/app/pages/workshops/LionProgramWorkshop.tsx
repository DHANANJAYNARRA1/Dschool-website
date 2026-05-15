import WorkshopTemplate from "../../components/WorkshopTemplate";

export default function LionProgramWorkshop() {
  return (
    <WorkshopTemplate
      title="LION Program"
      date="July 2026, 1st Week (TBC)"
      time="To Be Confirmed"
      duration="TBC"
      capacity="30 Members"
      level="Nursing Leaders"
      instructor="Healthcare Leaders & Expert Mentors"
      price="₹10,000"
      description="Designed exclusively for nursing leaders, this program equips professionals with the essential skills required to meet evolving industry demands. It enables participants to lead effectively, communicate with clarity, and create lasting impact in today's dynamic healthcare environment."
      workshopId="lion-program"
      category="Leadership"
      image="/assets/workshops-new/lion.png"
      imageHeight="h-[560px]"
      highlights={[
        {
          title: "Leadership and Decision-Making",
          description: "Leadership and decision-making"
        },
        {
          title: "Communication and Professional Excellence",
          description: "Communication and professional excellence"
        },
        {
          title: "Team Management and Collaboration",
          description: "Team management and collaboration"
        },
        {
          title: "Innovation in Healthcare and Digital Transformation",
          description: "Innovation in healthcare and digital transformation"
        },
        {
          title: "Career Growth and Personal Development",
          description: "Career growth and personal development"
        }
      ]}
      curriculum={[
        "Leadership and Decision-Making in Healthcare",
        "Communication and Professional Excellence",
        "Team Management and Collaboration Strategies",
        "Innovation in Healthcare and Digital Transformation",
        "Career Growth and Personal Development",
        "Strategic Thinking in Professional Environments",
        "Case-Based Discussions and Problem-Solving Activities",
        "Building Meaningful Networks with Peers and Mentors"
      ]}
      outcomes={[
        "Developed a deeper understanding of teamwork, collaboration, and strategic thinking in professional environments.",
        "Gained exposure to current healthcare trends, innovation, and emerging industry practices.",
        "Strengthened confidence in handling real-world challenges through case-based discussions and problem-solving activities.",
        "Acquired industry-oriented knowledge from experienced mentors, healthcare leaders, and subject experts.",
        "Improved adaptability, critical thinking, and professional mindset required in today's evolving healthcare ecosystem.",
        "Built meaningful connections with peers, mentors, and professionals, fostering long-term learning and collaboration opportunities."
      ]}
    />
  );
}
