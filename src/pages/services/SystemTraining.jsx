import React from "react";

//components
import HeroBanner from "../../components/HeroBanner";
import FeedbackForm from "../../components/FeedbackForm";

//images
import HeroImage from "../../images/sea.jpg";
import DocumentList from "../../components/DocumentList";

const documentArray = [
  {
    title: "Employee Engagement Platform",
    imagePath: HeroImage,
    linkPath: "/GoMyTeam/placeholder-page",
  },
  {
    title: "HR Management System",
    imagePath: HeroImage,
    linkPath: "/GoMyTeam/placeholder-page",
  },
  {
    title: "Team Collaboration Tools",
    imagePath: HeroImage,
    linkPath: "/GoMyTeam/placeholder-page",
  },
  {
    title: "Training and Development Resources",
    imagePath: HeroImage,
    linkPath: "/GoMyTeam/placeholder-page",
  },
  {
    title: "Customizable HR Templates",
    imagePath: HeroImage,
    linkPath: "/GoMyTeam/placeholder-page",
  },
  {
    title: "Data Analytic Dashboard",
    imagePath: HeroImage,
    linkPath: "/GoMyTeam/placeholder-page",
  },
];

export default function SystemTraining() {
  return (
    <>
      <HeroBanner
        title="System Training"
        description="Find all the training materials you need here!"
        buttonText="More info >>"
        imagePath={HeroImage}
      />
      <DocumentList title="Training Documents" documentArray={documentArray} />
      <FeedbackForm />
    </>
  );
}
