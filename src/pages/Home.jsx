import React from "react";

//components
import HeroBanner from "../components/HeroBanner";
import DescriptionPanel from "../components/DescriptionPanel";
import FeaturePanel from "../components/FeaturePanel";
import ActionBanner from "../components/ActionBanner";

//images
import HeroImage from "../images/sea.jpg";

const array = [
  {
    title: "Employee Engagement Platform",
    description:
      "Unlock the full potential of your team with EngagePlus. Foster a culture of collaboration, recognition, and success, and watch your business thrive.",
    linkText: "Learn more",
    linkPath: "/GoMyTeam/employee-engagement-platform",
    imagePath: HeroImage,
  },
  {
    title: "HR Management System",
    description:
      "Simplify HR management with HRProSuite. From hiring to payroll and beyond, streamline your processes and focus on what matters most: your people.",
    linkText: "Learn more",
    linkPath: "/GoMyTeam/hr-management-system",
    imagePath: HeroImage,
  },
  {
    title: "Team Collaboration Tools",
    description:
      "Collaborate smarter, not harder, with CollaboraHub. Empower your team to work together seamlessly and achieve exceptional results, every time.",
    linkText: "Learn more",
    linkPath: "/GoMyTeam/team-collaboration-tools",
    imagePath: HeroImage,
  },
  {
    title: "Training and Development Resources",
    description:
      "Invest in your team's growth with LearnPro360. Access a wealth of training resources and empower your employees to reach their full potential.",
    linkText: "Learn more",
    linkPath: "/GoMyTeam/training-and-development-resources",
    imagePath: HeroImage,
  },
  {
    title: "Customizable HR Templates",
    description:
      "Streamline your HR processes with HRDocsPro. Access customizable templates and documents, tailored to your business needs, and stay compliant effortlessly.",
    linkText: "Learn more",
    linkPath: "/GoMyTeam/customizable-hr-templates",
    imagePath: HeroImage,
  },
  {
    title: "Data Analytic Dashboard",
    description:
      "Gain valuable insights into your business with InsightPro360. Visualize key metrics and trends, make data-driven decisions, and propel your business forward.",
    linkText: "Learn more",
    linkPath: "/GoMyTeam/data-analytic-dashboard",
    imagePath: HeroImage,
  },
];

const featureArray = [
  {
    imagePath: HeroImage,
    title: " Online Support",
    description:
      "Need assistance or guidance? Our dedicated online support team is here to help you navigate any challenges or questions you may have. Get in touch with us anytime for quick and reliable support.",
  },
  {
    imagePath: HeroImage,
    title: " System Training",
    description:
      "Elevate your team's skills and proficiency with our comprehensive system training sessions. From onboarding to advanced features, our expert trainers will ensure you get the most out of our products.",
  },
  {
    imagePath: HeroImage,
    title: "System Integration Support",
    description:
      "Simplify the integration process and ensure seamless connectivity with our system integration support. Our experts will guide you through every step, helping you integrate our solutions with your existing systems effortlessly.",
  },
];

export default function Home() {
  return (
    <>
      <HeroBanner
        title="Empower Your Team, Elevate Your Business"
        description="Transforming Workplaces, One Team at a Time. Discover the Future of Employee Engagement and HR Management with GoMyTeam."
        buttonText="Get Started >>"
        imagePath={HeroImage}
      />
      <DescriptionPanel title="What We Offer" array={array} />
      <FeaturePanel title="Our Services" featureArray={featureArray} />
      <ActionBanner
        title="What are you waiting for?"
        description="Ready to revolutionize your workplace? Explore our suite of innovative solutions today and empower your team for success!"
        buttonText=" Get started now."
        buttonLink="/GoMyTeam/placeholder-page"
      />
    </>
  );
}
