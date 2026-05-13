import { createBrowserRouter } from "react-router";
import Root from "./pages/Root";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";

// Program Pages
import LIONProgram from "./pages/programs/LIONProgram";
import DHRProgram from "./pages/programs/DHRProgram";
import DALESProgram from "./pages/programs/DALESProgram";
import SOSProgram from "./pages/programs/SOSProgram";
import LANGProgram from "./pages/programs/LANGProgram";
import Nurse360Program from "./pages/programs/Nurse360Program";
import LANTERNProgram from "./pages/programs/LANTERNProgram";
import LeadershipProgram from "./pages/programs/LeadershipProgram";
import HospitalManagerProgram from "./pages/programs/HospitalManagerProgram";
import DrTomorrowProgram from "./pages/programs/DrTomorrowProgram";

// Workshop Pages
import PatientCareWorkshop from "./pages/workshops/PatientCareWorkshop";
import LeadershipManagementWorkshop from "./pages/workshops/LeadershipManagementWorkshop";
import DigitalHealthWorkshop from "./pages/workshops/DigitalHealthWorkshop";
import InfectionControlWorkshop from "./pages/workshops/InfectionControlWorkshop";
import MentalHealthWorkshop from "./pages/workshops/MentalHealthWorkshop";
import EvidenceBasedWorkshop from "./pages/workshops/EvidenceBasedWorkshop";

// Other Pages
import AboutPage from "./pages/AboutPage";
import AllPrograms from "./pages/AllPrograms";
import WorkshopsPage from "./pages/WorkshopsPage";
import PlacementsPage from "./pages/PlacementsPage";
import GalleryPage from "./pages/GalleryPage";
import ContactPage from "./pages/ContactPage";
import Registration from "./pages/Registration";
import Success from "./pages/Success";
import { TestimonialFrameGenerator } from "./components/TestimonialFrames";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Home },

      // Main Pages
      { path: "about", Component: AboutPage },
      { path: "programs", Component: AllPrograms },
      { path: "workshops", Component: WorkshopsPage },
      { path: "placements", Component: PlacementsPage },
      { path: "gallery", Component: GalleryPage },
      { path: "contact", Component: ContactPage },

      // Program Detail Pages
      { path: "programs/lion", Component: LIONProgram },
      { path: "programs/digital-health-revolution", Component: DHRProgram },
      { path: "programs/dales", Component: DALESProgram },
      { path: "programs/sos", Component: SOSProgram },
      { path: "programs/lang", Component: LANGProgram },
      { path: "programs/nurse-360", Component: Nurse360Program },
      { path: "programs/lantern", Component: LANTERNProgram },
      { path: "programs/leadership-integrated", Component: LeadershipProgram },
      { path: "programs/hospital-manager", Component: HospitalManagerProgram },
      { path: "programs/dr-tomorrow", Component: DrTomorrowProgram },

      // Workshop Detail Pages
      { path: "workshops/patient-care", Component: PatientCareWorkshop },
      { path: "workshops/leadership-management", Component: LeadershipManagementWorkshop },
      { path: "workshops/digital-health", Component: DigitalHealthWorkshop },
      { path: "workshops/infection-control", Component: InfectionControlWorkshop },
      { path: "workshops/mental-health", Component: MentalHealthWorkshop },
      { path: "workshops/evidence-based", Component: EvidenceBasedWorkshop },

      // Registration
      { path: "register/:programId", Component: Registration },
      { path: "success", Component: Success },

      // Testimonial Frame Generator (for creating branded testimonial images)
      { path: "testimonial-frames", Component: TestimonialFrameGenerator },

      { path: "*", Component: NotFound },
    ],
  },
]);
