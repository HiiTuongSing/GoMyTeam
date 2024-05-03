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
    title: "User-Friendly Interface",
    description: "Ensures easy adoption with minimal training.",
  },
  {
    imagePath: HeroImage,
    title: "Data Driven Insights",
    description: "Make informed decisions with advanced analytics features.",
  },
  {
    imagePath: HeroImage,
    title: "Comprehensive Tools",
    description: "All the tools, in one place.",
  },
];

const functionArray = [
  {
    title: "Survey & Feedback Tools",
    description:
      "Gather valuable insights through customizable surveys and feedback mechanisms.",
    linkText: "More Info >>",
    linkPath: "/GoMyTeam/placeholder-page",
    imagePath: HeroImage,
  },
  {
    title: "Recognition & Rewards",
    description:
      "Facilitate peer-to-peer recognition and incentivize high performance with rewards and badges.",
    linkText: "<< More Info",
    linkPath: "/GoMyTeam/placeholder-page",
    imagePath: HeroImage,
  },
  {
    title: "Communication Channels",
    description:
      "Foster open communication and collaboration through integrated messaging and discussion forums.",
    linkText: "More Info >>",
    linkPath: "/GoMyTeam/placeholder-page",
    imagePath: HeroImage,
  },
];

export default function EmployeeEngagementPlatform() {
  return (
    <>
      <HeroBanner
        title="Complete Engagement Solution"
        description="Your all-in-one Employee Engagement Suite designed to elevate your team's performance. Effortlessly connect with your employees, recognize their achievements, and empower them to reach new heights."
        buttonText="Try it for free!"
        imagePath={HeroImage}
      />
      <FeaturePanel
        title=" Boost Employee Engagement"
        featureArray={featureArray}
      />
      <DescriptionPanel title="Core Functions" array={functionArray} />
      <ActionBanner
        title="What are you waiting for?"
        description="Boost team morale and productivity with our Employee Engagement Platform!"
        buttonText="Sign up now!"
        buttonLink="/GoMyTeam/placeholder-page"
      />
    </>
  );
}
