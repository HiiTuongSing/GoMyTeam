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
    title: "Personalized Learning Paths",
    description:
      "Tailor learning experiences to individual needs and career aspirations, fostering a culture of continuous improvement and professional growth.",
  },
  {
    imagePath: HeroImage,
    title: "Expert-Led Content",
    description:
      "Access high-quality training materials and courses curated by industry experts and thought leaders, ensuring relevance and practicality.",
  },
  {
    imagePath: HeroImage,
    title: "Progress Tracking & Certifications",
    description:
      "Monitor employee progress, track completion rates, and reward achievements with certifications and badges, motivating ongoing learning.",
  },
];

const functionArray = [
  {
    title: "On-Demand Learning",
    description:
      "Access a diverse library of on-demand courses, tutorials, and resources covering various topics and skills.",
    linkText: "More Info >>",
    linkPath: "/GoMyTeam/placeholder-page",
    imagePath: HeroImage,
  },
  {
    title: "Skill Assessments & Gap Analysis",
    description:
      " Identify skill gaps and training needs through comprehensive assessments and personalized learning recommendations.",
    linkText: "<< More Info",
    linkPath: "/GoMyTeam/placeholder-page",
    imagePath: HeroImage,
  },
  {
    title: "Collaborative Learning Communities",
    description:
      "Engage with peers, mentors, and subject matter experts through discussion forums, webinars, and virtual workshops.",
    linkText: "More Info >>",
    linkPath: "/GoMyTeam/placeholder-page",
    imagePath: HeroImage,
  },
];

export default function TrainingAndDevelopmentResources() {
  return (
    <>
      <HeroBanner
        title="Your Gateway to Continuous Growth"
        description="Our platform offers a vast array of training resources and learning modules to empower your team to thrive in today's dynamic workplace."
        buttonText="Try it for free!"
        imagePath={HeroImage}
      />
      <FeaturePanel title="Connecting Everyone" featureArray={featureArray} />

      <DescriptionPanel title="Core Functions" array={functionArray} />

      <ActionBanner
        title="Ready to invest in your team's future success?"
        description="Enroll today and empower your employees to thrive in an ever-evolving world!"
        buttonText="Sign up now!"
        buttonLink="/GoMyTeam/placeholder-page"
      />
    </>
  );
}
