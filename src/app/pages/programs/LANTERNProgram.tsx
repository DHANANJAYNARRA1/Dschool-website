import ProgramTemplate from "../../components/ProgramTemplate";

export default function LANTERNProgram() {
  return (
    <ProgramTemplate
      title="LANTERN"
      subtitle="Nightingale Champions Program"
      duration="One Day Workshop"
      eligibility="All LION Graduates"
      price="₹5,000"
      description="Leadership-Advancement-Nightingale-Training-Empowering-Recognizing-Nurses. A one-day workshop designed to empower and recognize nursing leaders committed to excellence in healthcare."
      programId="lantern"
      color="bg-gradient-to-br from-[#D4AF37] to-[#C5A029]"
      features={[
        {
          title: "Leadership Advancement",
          description: "Build on your LION foundation with advanced leadership concepts",
        },
        {
          title: "Nightingale-Inspired Training",
          description: "Celebrate the spirit and legacy of Florence Nightingale",
        },
        {
          title: "Nurse Empowerment",
          description: "Strengthen your role as a change-maker in modern healthcare",
        },
        {
          title: "Recognition of Excellence",
          description: "Acknowledge outstanding contributions to nursing leadership",
        },
        {
          title: "Capacity Building",
          description: "Enhance skills to mentor and inspire future leaders",
        },
        {
          title: "Community Building",
          description: "Network with fellow nursing champions",
        },
      ]}
      curriculum={[
        "The Legacy of Florence Nightingale in Modern Nursing",
        "Advanced Leadership Strategies",
        "Creating a Culture of Excellence",
        "Mentorship and Succession Planning",
        "Innovation in Nursing Practice",
        "Advocacy for the Nursing Profession",
        "Personal Branding and Professional Presence",
        "Sustaining Leadership Impact",
      ]}
      outcomes={[
        "Lead with purpose and compassion",
        "Mentor and develop future nursing leaders",
        "Champion excellence in your organization",
        "Advocate effectively for the nursing profession",
        "Inspire positive change in healthcare",
        "Build a lasting leadership legacy",
      ]}
    />
  );
}
