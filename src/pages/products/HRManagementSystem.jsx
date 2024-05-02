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

// const array = [

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
        title="Ready to revolutionize your HR operations?"
        description="Experience the power of HRProSuite today and unlock the true potential of your workforce!"
        buttonText="Sign up now!"
      />
    </>
  );
}
