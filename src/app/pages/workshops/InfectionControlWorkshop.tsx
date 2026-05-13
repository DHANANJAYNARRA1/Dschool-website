import WorkshopTemplate from "../../components/WorkshopTemplate";

export default function InfectionControlWorkshop() {
  return (
    <WorkshopTemplate
      title="Infection Control & Safety Protocols"
      date="July 12, 2026"
      time="8:30 AM - 4:30 PM"
      duration="1 Day"
      capacity="35 Participants"
      level="All Levels"
      instructor="Certified Safety Officers"
      price="₹4,000"
      description="Comprehensive training on infection prevention, safety protocols, and maintaining sterile environments in healthcare settings."
      workshopId="infection-control"
      category="Safety"
      image="https://images.unsplash.com/photo-1584982751601-97dcc096659c?w=800&h=500&fit=crop"
      highlights={[
        {
          title: "Infection Prevention",
          description: "Evidence-based strategies to prevent healthcare-associated infections"
        },
        {
          title: "Sterilization Techniques",
          description: "Proper methods for sterilizing equipment and maintaining sterile fields"
        },
        {
          title: "PPE Usage",
          description: "Correct selection, donning, doffing, and disposal of personal protective equipment"
        },
        {
          title: "Hand Hygiene",
          description: "Master the gold standard of infection prevention through proper hand hygiene"
        },
        {
          title: "Outbreak Management",
          description: "Protocols for identifying and managing infectious disease outbreaks"
        },
        {
          title: "Environmental Safety",
          description: "Maintaining safe and clean healthcare environments"
        }
      ]}
      curriculum={[
        "Fundamentals of Infection Control",
        "Hand Hygiene Best Practices",
        "Personal Protective Equipment Selection and Use",
        "Sterilization and Disinfection Techniques",
        "Isolation Precautions and Protocols",
        "Healthcare-Associated Infections Prevention",
        "Bloodborne Pathogen Safety",
        "Waste Management and Disposal",
        "Environmental Cleaning and Maintenance",
        "Outbreak Investigation and Response"
      ]}
      outcomes={[
        "Implement evidence-based infection prevention practices",
        "Demonstrate proper hand hygiene and PPE usage",
        "Execute sterilization and disinfection procedures correctly",
        "Apply appropriate isolation precautions",
        "Prevent healthcare-associated infections",
        "Respond effectively to infectious disease outbreaks"
      ]}
    />
  );
}
