import React from "react";

//components
import HeroBanner from "../components/HeroBanner";
import PricingPanel from "../components/PricingPanel";
import ActionBanner from "../components/ActionBanner";

//images
import HeroImage from "../images/sea.jpg";

const pricingArray = [
  {
    title: "Starter Package",
    subtitle: "All the essentials perfect for managing 5-10 people.",
    price: "RM 8",
    linkPath: "/GoMyTeam/placeholder-page",
    features: [
      "Recruitment & onboarding tools",
      "Payroll & benefits management.",
      "Performance evaluation & tracking.",
      "Customizable HR Templates",
    ],
  },
  {
    title: "Premium Package",
    subtitle: "The crucial tools focused on management & team collaboration!",
    price: "RM 15",
    linkPath: "/GoMyTeam/placeholder-page",
    features: [
      "HR Management System",
      "Employee Engagement Platform",
      "Team Collaboration Tools",
      "Customizable HR Templates",
    ],
  },
  {
    title: "Deluxe Package",
    subtitle:
      "We got you covered from A to Z, ideal for managing 10-100 people.",
    price: "RM 45",
    linkPath: "/GoMyTeam/placeholder-page",
    features: [
      "HR Management System & Templates",
      "Engagement & Collaboration Platform",
      "Data Analytic & Training Resources",
    ],
  },
];

export default function Pricing() {
  return (
    <>
      <HeroBanner
        title="Pricing"
        description="Explore our transparent and flexible pricing options designed to meet the needs of businesses of all sizes. With clear pricing tiers and no hidden fees, you can choose the plan that best suits your requirements and budget. Get started today and experience the value of our products without any surprises."
        buttonText="More info >>"
        imagePath={HeroImage}
      />

      <PricingPanel title="Pricing" pricingArray={pricingArray} />

      <ActionBanner
        title="Need a more customized package?"
        description="No problem! Tell us more about your business and we'll direct you to the best plan based on your requirements."
        buttonText="Get started"
        buttonLink="/GoMyTeam/placeholder-page"
      />
    </>
  );
}
