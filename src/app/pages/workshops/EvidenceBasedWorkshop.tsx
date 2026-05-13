import WorkshopTemplate from "../../components/WorkshopTemplate";

export default function EvidenceBasedWorkshop() {
  return (
    <WorkshopTemplate
      title="Evidence-Based Practice in Nursing"
      date="August 3, 2026"
      time="9:00 AM - 5:00 PM"
      duration="1 Day"
      capacity="25 Participants"
      level="Intermediate"
      instructor="Research Nursing Faculty"
      price="₹5,000"
      description="Master the art of integrating research evidence into clinical practice for improved patient outcomes and professional development."
      workshopId="evidence-based"
      category="Professional Development"
      image="https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?w=800&h=500&fit=crop"
      highlights={[
        {
          title: "Research Literacy",
          description: "Develop skills to critically read and evaluate healthcare research"
        },
        {
          title: "Evidence Appraisal",
          description: "Learn to assess the quality and applicability of research evidence"
        },
        {
          title: "Clinical Integration",
          description: "Translate research findings into practical clinical applications"
        },
        {
          title: "Quality Improvement",
          description: "Use evidence to drive quality improvement initiatives"
        },
        {
          title: "Database Navigation",
          description: "Master healthcare databases and literature search techniques"
        },
        {
          title: "Practice Guidelines",
          description: "Understand and implement evidence-based clinical practice guidelines"
        }
      ]}
      curriculum={[
        "Introduction to Evidence-Based Practice",
        "Formulating Clinical Questions (PICO Framework)",
        "Healthcare Database Navigation and Literature Searching",
        "Critical Appraisal of Research Studies",
        "Understanding Research Methodologies",
        "Evaluating Levels of Evidence",
        "Applying Evidence to Clinical Decision-Making",
        "Developing Evidence-Based Policies and Procedures",
        "Quality Improvement Using Evidence",
        "Disseminating Evidence in Clinical Practice",
        "Overcoming Barriers to Evidence Implementation"
      ]}
      outcomes={[
        "Formulate well-structured clinical questions",
        "Conduct effective literature searches in healthcare databases",
        "Critically appraise research evidence",
        "Determine the strength and applicability of evidence",
        "Integrate research evidence into clinical decision-making",
        "Lead evidence-based practice initiatives in your organization"
      ]}
    />
  );
}
