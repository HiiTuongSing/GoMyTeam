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
        title="Ready to streamline your HR documentation process? "
        description="Unlock the power of HRDocsPro today and simplify your HR operations with ease!"
        buttonText="Sign up now!"
      />
    </>
  );
}
