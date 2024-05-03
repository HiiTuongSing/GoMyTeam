import React from "react";

//components
import HeroBanner from "../../components/HeroBanner";
import FeaturePanel from "../../components/FeaturePanel";
import DescriptionPanel from "../../components/DescriptionPanel";
import ActionBanner from "../../components/ActionBanner";

//images
import HeroImage from "../../images/sea.jpg";

const featureArray = [
  {
    imagePath: HeroImage,
    title: "Efficiency & Automation",
    description:
      "Say goodbye to manual paperwork and repetitive tasks with our automated HR processes, saving you time and resources.",
  },
  {
    imagePath: HeroImage,
    title: "Compliance Assurance",
    description:
      "Stay up-to-date with ever-changing labor laws and regulations, minimizing risks and ensuring legal compliance.",
  },
  {
    imagePath: HeroImage,
    title: "Scalability & Flexibility",
    description:
      "Whether you're a small startup or a growing enterprise, HRProSuite scales effortlessly to meet your evolving needs without breaking a sweat.",
  },
];

const functionArray = [
  {
    title: "Recruitment & Onboarding",
    description:
      "Streamline the hiring process from job posting to candidate selection and onboarding.",
    linkText: "More Info >>",
    linkPath: "/GoMyTeam/placeholder-page",
    imagePath: HeroImage,
  },
  {
    title: "Payroll & Benefits Management",
    description:
      " Simplify payroll processing, tax calculations, and benefits administration for a hassle-free experience.",
    linkText: "<< More Info",
    linkPath: "/GoMyTeam/placeholder-page",
    imagePath: HeroImage,
  },
  {
    title: "Performance Evaluation & Tracking",
    description:
      "Set objectives, conduct performance appraisals, and track employee progress with intuitive performance management tools.",
    linkText: "More Info >>",
    linkPath: "/GoMyTeam/placeholder-page",
    imagePath: HeroImage,
  },
];

export default function HRManagementSystem() {
  return (
    <>
      <HeroBanner
        title="Seamless HR Operation"
        description="From recruitment to payroll, we've got you covered every step of the way."
        buttonText="Try it for free!"
        imagePath={HeroImage}
      />
      <FeaturePanel title="Smooth like Butter" featureArray={featureArray} />

      <DescriptionPanel title="Core Functions" array={functionArray} />

      <ActionBanner
        title="Ready to revolutionize your HR operations?"
        description="Experience the power of our system today and unlock the true potential of your workforce!"
        buttonText="Sign up now!"
        buttonLink="/GoMyTeam/placeholder-page"
      />
    </>
  );
}
