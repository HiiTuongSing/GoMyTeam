import React from "react";

//components
import HeroBanner from "../../components/HeroBanner";
import FeaturePanel from "../../components/FeaturePanel";
// import Test from "../../components/Test";
import DescriptionPanel from "../../components/DescriptionPanel";
import ActionBanner from "../../components/ActionBanner";

//images
import HeroImage from "../../images/placeholder.jpg";

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

// const array = [
//   {
//     title: "test",
//     description: "test",
//     linkText: "test",
//     linkPath: "#",
//     imagePath: HeroImage,
//   },
//   {
//     title: "test",
//     description: "test",
//     linkText: "test",
//     linkPath: "#",
//     imagePath: HeroImage,
//   },
// ];

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

      <DescriptionPanel
        imagePath={HeroImage}
        title="Real-Time Recognition and Feedback"
        description="The app allows employees to give and receive real-time feedback and recognition from their peers and managers. This function fosters a culture of appreciation and transparency, empowering employees to feel valued and motivated in their work."
        buttonText="Get a free trial!"
      />

      <DescriptionPanel
        imagePath={HeroImage}
        title="Personalized Engagement Activities"
        description="The app offers personalized engagement activities and challenges tailored to each employee's preferences and interests. From wellness challenges to skill-building exercises, this function promotes employee growth and well-being while strengthening team cohesion and morale."
        buttonText="Get a free trial!"
        reverse="true"
      />

      <ActionBanner
        title="What are you waiting for?"
        description="Boost team morale and productivity with our Employee Engagement Platform!"
        buttonText="Sign up now!"
      />
    </>
  );
}
