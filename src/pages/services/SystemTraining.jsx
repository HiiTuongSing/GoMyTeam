import React from "react";

//components
import HeroBanner from "../../components/HeroBanner";
import FeedbackForm from "../../components/FeedbackForm";
import DocumentList from "../../components/DocumentList";

//images
import HeroImage from "../../images/sea.jpg";
import FileImage from "../../images/file.svg";

const documentArray = [
  {
    title: "Employee Engagement Platform",
    imagePath: FileImage,
    linkPath: "/GoMyTeam/placeholder-page",
  },
  {
    title: "HR Management System",
    imagePath: FileImage,
    linkPath: "/GoMyTeam/placeholder-page",
  },
  {
    title: "Team Collaboration Tools",
    imagePath: FileImage,
    linkPath: "/GoMyTeam/placeholder-page",
  },
  {
    title: "Training and Development Resources",
    imagePath: FileImage,
    linkPath: "/GoMyTeam/placeholder-page",
  },
  {
    title: "Customizable HR Templates",
    imagePath: FileImage,
    linkPath: "/GoMyTeam/placeholder-page",
  },
  {
    title: "Data Analytic Dashboard",
    imagePath: FileImage,
    linkPath: "/GoMyTeam/placeholder-page",
  },
];

export default function SystemTraining() {
  return (
    <>
      <HeroBanner
        title="System Training"
        description="Elevate your team's skills and expertise with our comprehensive system training sessions. Led by industry experts, our training programs are designed to empower you with the knowledge and skills needed to maximize the potential of our products. From onboarding to advanced features, we're committed to helping you succeed."
        buttonText="More info >>"
        imagePath={HeroImage}
      />
      <DocumentList title="Training Documents" documentArray={documentArray} />
      <FeedbackForm />
    </>
  );
}
