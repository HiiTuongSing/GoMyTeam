import React from "react";

//components
import HeroBanner from "../../components/HeroBanner";
import DocumentList from "../../components/DocumentList";
import FeedbackForm from "../../components/FeedbackForm";

//images
import HeroImage from "../../images/sea.jpg";

const accountingArray = [
  {
    title: "Xero",
    imagePath: HeroImage,
    linkPath: "/GoMyTeam/placeholder-page",
  },
  {
    title: "Netsuite",
    imagePath: HeroImage,
    linkPath: "/GoMyTeam/placeholder-page",
  },
  {
    title: "Zoho Books",
    imagePath: HeroImage,
    linkPath: "/GoMyTeam/placeholder-page",
  },
  {
    title: "Dynamics 365 Business Central",
    imagePath: HeroImage,
    linkPath: "/GoMyTeam/placeholder-page",
  },
];

const workforceArray = [
  {
    title: "Simpro via SyncEzy",
    imagePath: HeroImage,
    linkPath: "/GoMyTeam/placeholder-page",
  },
  {
    title: "Square",
    imagePath: HeroImage,
    linkPath: "/GoMyTeam/placeholder-page",
  },
];

const otherArray = [
  {
    title: "GO1",
    imagePath: HeroImage,
    linkPath: "/GoMyTeam/placeholder-page",
  },
  {
    title: "Slack",
    imagePath: HeroImage,
    linkPath: "/GoMyTeam/placeholder-page",
  },
  {
    title: "NoahFace",
    imagePath: HeroImage,
    linkPath: "/GoMyTeam/placeholder-page",
  },
  {
    title: "Power BI via SyncEzy",
    imagePath: HeroImage,
    linkPath: "/GoMyTeam/placeholder-page",
  },
  {
    title: "Google Workspace Account",
    imagePath: HeroImage,
    linkPath: "/GoMyTeam/placeholder-page",
  },
  {
    title: "Microsoft 365 Account",
    imagePath: HeroImage,
    linkPath: "/GoMyTeam/placeholder-page",
  },
];

export default function SystemIntegration() {
  return (
    <>
      <HeroBanner
        title="System Integration"
        description="Compatibility issues? We got you covered!"
        buttonText="More info >>"
        imagePath={HeroImage}
      />
      <DocumentList
        title="Accounting Integration"
        documentArray={accountingArray}
      />
      <DocumentList
        title="Workforce Integration"
        documentArray={workforceArray}
      />
      <DocumentList title="Workforce Integration" documentArray={otherArray} />
      <FeedbackForm />
    </>
  );
}
