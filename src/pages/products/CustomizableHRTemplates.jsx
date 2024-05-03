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
    title: "Ready-to-Use Templates",
    description:
      "Save time and effort with our library of pre-designed templates for HR policies, procedures, forms, and agreements.",
  },
  {
    imagePath: HeroImage,
    title: "Customization Flexibility",
    description:
      "Tailor templates to your organization's specific needs and branding guidelines with easy-to-use editing tools.",
  },
  {
    imagePath: HeroImage,
    title: "Compliance Assurance",
    description:
      "Rest assured knowing that our templates are up-to-date with the latest legal requirements and industry best practices, minimizing risks and ensuring accuracy.",
  },
];

const functionArray = [
  {
    title: "Document Repository",
    description:
      "Access a centralized repository of HR documents, categorized for easy navigation and retrieval.",
    linkText: "More Info >>",
    linkPath: "/GoMyTeam/placeholder-page",
    imagePath: HeroImage,
  },
  {
    title: "Template Customization",
    description:
      "Customize templates with your company logo, colors, and content to align with your brand identity and requirements.",
    linkText: "<< More Info",
    linkPath: "/GoMyTeam/placeholder-page",
    imagePath: HeroImage,
  },
  {
    title: "Version Control & Document History",
    description:
      "Track changes, maintain version control, and review document history to ensure accuracy and accountability.",
    linkText: "More Info >>",
    linkPath: "/GoMyTeam/placeholder-page",
    imagePath: HeroImage,
  },
];

export default function CustomizableHRTemplates() {
  return (
    <>
      <HeroBanner
        title="The Ultimate Toolkit for HR Efficiency"
        description="Access a comprehensive collection of customizable templates and documents designed to streamline your HR processes effortlessly."
        buttonText="Try it for free!"
        imagePath={HeroImage}
      />
      <FeaturePanel title="No More Hassle!" featureArray={featureArray} />

      <DescriptionPanel title="Core Functions" array={functionArray} />

      <ActionBanner
        title="Ready to streamline your HR documentation process? "
        description="Unlock the power of templates today and simplify your HR operations with ease!"
        buttonText="Sign up now!"
        buttonLink="/GoMyTeam/placeholder-page"
      />
    </>
  );
}
