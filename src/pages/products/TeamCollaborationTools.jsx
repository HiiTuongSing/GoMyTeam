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

const functionArray = [
  {
    title: "Document Sharing & Editing",
    description:
      " Collaborate on documents, spreadsheets, and presentations in real-time, with version control and commenting features.",
    linkText: "More Info >>",
    linkPath: "/GoMyTeam/placeholder-page",
    imagePath: HeroImage,
  },
  {
    title: "Task Management",
    description:
      " Organize tasks, assign responsibilities, and track progress effortlessly with intuitive task management tools.",
    linkText: "<< More Info",
    linkPath: "/GoMyTeam/placeholder-page",
    imagePath: HeroImage,
  },
  {
    title: "Communication Channels",
    description:
      "Stay connected with your team through instant messaging, video conferencing, and virtual meeting rooms.",
    linkText: "More Info >>",
    linkPath: "/GoMyTeam/placeholder-page",
    imagePath: HeroImage,
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

      <DescriptionPanel title="Core Functions" array={functionArray} />

      <ActionBanner
        title="Ready to revolutionize the way your team works together?"
        description="Join CollaboraHub today and take collaboration to new heights!"
        buttonText="Sign up now!"
        buttonLink="/GoMyTeam/placeholder-page"
      />
    </>
  );
}
