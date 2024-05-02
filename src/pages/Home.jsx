import React from "react";
import HeroBanner from "../components/HeroBanner";
import HeroImage from "../images/sea.jpg";
import FeaturePanel from "../components/FeaturePanel";
import ActionBanner from "../components/ActionBanner";

const featureArray = [
  {
    imagePath: HeroImage,
    title: "Feedback Mechanisms",
    description:
      "Offers channels for employees to provide feedback, such as suggestion boxes, open forums, or one-on-one feedback sessions with managers.",
  },
  {
    imagePath: HeroImage,
    title: "Recognition Tools",
    description:
      "Provides tools for managers and peers to recognize and appreciate employee contributions, achievements, and milestones.",
  },
  {
    imagePath: HeroImage,
    title: "Team Building Activities",
    description:
      "Facilitates the planning and execution of team-building events, workshops, or initiatives aimed at fostering camaraderie, collaboration, and trust among team members.",
  },
];

// const buttonArray = [
//   {
//     tabId: "employee-engagement-platform",
//     tab: "Employee Engagement Platform",
//     tabImagePath: HeroImage,
//     descriptionId: "employee-engagement-platform-des",
//   },
//   {
//     tabId: "hr-management-system",
//     tab: "HR Management System",
//     tabImagePath: HeroImage,
//     descriptionId: "hr-management-system-des",
//   },
//   {
//     tabId: "team-collaboration-tools",
//     tab: "Team Collaboration Tools",
//     tabImagePath: HeroImage,
//     descriptionId: "team-collaboration-tools-des",
//   },
//   {
//     tabId: "training-and-development-resources",
//     tab: "Training and Development Resources",
//     tabImagePath: HeroImage,
//     descriptionId: "training-and-development-resources-des",
//   },
//   {
//     tabId: "customizable-hr-templates",
//     tab: "Customizable HR Templates",
//     tabImagePath: HeroImage,
//     descriptionId: "customizable-hr-templates-des",
//   },
//   {
//     tabId: "data-analytic-dashboard",
//     tab: "Data Analytic Dashboard",
//     tabImagePath: HeroImage,
//     descriptionId: "data-analytic-dashboard-des",
//   },
// ];

// const displayArray = [
//   {
//     tabId: "employee-engagement-platform",
//     description: "Gad fucking damn it that took way too long",
//     descriptionId: "employee-engagement-platform-des",
//   },
//   {
//     tabId: "hr-management-system",
//     description: "At least it is done now... Right?",
//     descriptionId: "hr-management-system-des",
//   },
//   {
//     tabId: "team-collaboration-tools",
//     description: "This is team collaboration tools",
//     descriptionId: "team-collaboration-tools-des",
//   },
//   {
//     tabId: "training-and-development-resources",
//     description: "This is training and development resources",
//     descriptionId: "training-and-development-resources-des",
//   },
//   {
//     tabId: "customizable-hr-templates",
//     description: "customizable hr templates",
//     descriptionId: "customizable-hr-templates-des",
//   },
//   {
//     tabId: "data-analytic-dashboard",
//     description: "data analytic dashboard",
//     descriptionId: "data-analytic-dashboard-des",
//   },
// ];

export default function Home() {
  return (
    <>
      const [currentProduct, setCurrentProduct] = useState( "Employee Engagement
      Platform" );
      <HeroBanner
        title="Empower Your Team, Elevate Your Business"
        description="Transforming Workplaces, One Team at a Time. Discover the Future of Employee Engagement and HR Management with GoMyTeam."
        buttonText="Get Started >>"
        imagePath={HeroImage}
      />
      {/* <Tabs buttonArray={buttonArray} displayArray={displayArray} /> */}
      <FeaturePanel title="Features" featureArray={featureArray} />
      <ActionBanner
        title="What are you waiting for?"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        buttonText="Try For Free"
        buttonLink="/GoMyTeam/placeholder-page"
      />
    </>
  );
}
