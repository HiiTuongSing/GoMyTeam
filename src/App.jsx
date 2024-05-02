import React from "react";
import { Routes, Route } from "react-router-dom";

//pages
import Home from "./pages/Home";
import About from "./pages/About";
import Pricing from "./pages/Pricing";
import EmployeeEngagementPlatform from "./pages/products/EmployeeEngagementPlatform.jsx";
import HRManagementSystem from "./pages/products/HRManagementSystem.jsx";
import TeamCollaborationTools from "./pages/products/TeamCollaborationTools.jsx";
import TrainingAndDevelopmentResources from "./pages/products/TrainingAndDevelopmentResources.jsx";
import CustomizableHRTemplates from "./pages/products/CustomizableHRTemplates.jsx";
import DataAnalyticDashboard from "./pages/products/DataAnalyticDashboard.jsx";

//components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/GoMyTeam/" element={<Home />} />
        <Route path="/GoMyTeam/about" element={<About />} />
        <Route path="/GoMyTeam/pricing" element={<Pricing />} />
        <Route
          path="/GoMyTeam/employee-engagement-platform"
          element={<EmployeeEngagementPlatform />}
        />
        <Route
          path="/GoMyTeam/hr-management-system"
          element={<HRManagementSystem />}
        />
        <Route
          path="/GoMyTeam/team-collaboration-tools"
          element={<TeamCollaborationTools />}
        />
        <Route
          path="/GoMyTeam/training-and-development-resources"
          element={<TrainingAndDevelopmentResources />}
        />
        <Route
          path="/GoMyTeam/customizable-hr-templates"
          element={<CustomizableHRTemplates />}
        />
        <Route
          path="/GoMyTeam/data-analytic-dashboard"
          element={<DataAnalyticDashboard />}
        />
      </Routes>
      <Footer />
    </>
  );
}
