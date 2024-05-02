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
    title: "Seamless Integration",
    description:
      "Integrate your favorite productivity apps seamlessly with CollaboraHub, ensuring a smooth workflow without switching between multiple platforms.",
  },
  {
    imagePath: HeroImage,
    title: "Real-time Collaboration",
    description:
      "Work together in real-time on documents, projects, and tasks, fostering creativity and driving results faster.",
  },
  {
    imagePath: HeroImage,
    title: "Customizable Workspaces",
    description:
      "Tailor CollaboraHub to suit your team's unique needs with customizable workspaces, project boards, and task lists.",
  },
];

export default function TeamCollaborationTools() {
  return (
    <>
      <HeroBanner
        title="Innovative Teamwork"
        description="Our suite of collaboration tools is designed to bring your team together, streamline workflows, and boost productivity like never before."
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
        title="Ready to revolutionize the way your team works together?"
        description="Join CollaboraHub today and take collaboration to new heights!"
        buttonText="Sign up now!"
      />
    </>
  );
}
