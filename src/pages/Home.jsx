import React from "react";
import HeroBanner from "../components/HeroBanner";
import HeroImage from "../images/sea.jpg";
import FeaturePanel from "../components/FeaturePanel";
import DescriptionPanel from "../components/DescriptionPanel";
import ActionBanner from "../components/ActionBanner";
import Carousel from "../components/Carousel";

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

export default function Home() {
  return (
    <>
      <HeroBanner
        title="Lorem Ipsum"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        buttonText="Lorem ipsum dolor!"
        imagePath={HeroImage}
      />
      <FeaturePanel title="Features" featureArray={featureArray} />
      <Carousel />
      <ActionBanner
        title="What are you waiting for?"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        buttonText="Try For Free"
      />
    </>
  );
}
