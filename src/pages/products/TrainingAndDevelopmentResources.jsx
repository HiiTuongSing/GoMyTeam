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
        title="Ready to invest in your team's future success?"
        description="Enroll in LearnPro360 today and empower your employees to thrive in an ever-evolving world!"
        buttonText="Sign up now!"
      />
    </>
  );
}
