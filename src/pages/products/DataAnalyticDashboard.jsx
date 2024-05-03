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
    title: "Real-time Data Visualization",
    description:
      "Visualize key metrics and trends in real-time through interactive charts, graphs, and dashboards, empowering informed decision-making.",
  },
  {
    imagePath: HeroImage,
    title: "Customizable Reports",
    description:
      "Create customized reports and dashboards tailored to your specific business objectives and KPIs, with drag-and-drop simplicity.",
  },
  {
    imagePath: HeroImage,
    title: "Predictive Analytics",
    description:
      "Leverage advanced analytics and machine learning algorithms to predict future trends, identify patterns, and make proactive decisions for organizational success.",
  },
];

const functionArray = [
  {
    title: "Data Aggregation & Integration",
    description:
      "Collect and aggregate data from multiple sources, including HR systems, collaboration tools, and surveys, for comprehensive analysis.",
    linkText: "More Info >>",
    linkPath: "/GoMyTeam/placeholder-page",
    imagePath: HeroImage,
  },
  {
    title: "Performance Metrics Tracking",
    description:
      "Monitor employee engagement, productivity, turnover rates, and other key performance indicators (KPIs) to identify areas for improvement.",
    linkText: "<< More Info",
    linkPath: "/GoMyTeam/placeholder-page",
    imagePath: HeroImage,
  },
  {
    title: "Benchmarking & Comparative Analysis",
    description:
      "Compare your organization's performance against industry benchmarks and peer groups to gain insights and competitive advantage.",
    linkText: "More Info >>",
    linkPath: "/GoMyTeam/placeholder-page",
    imagePath: HeroImage,
  },
];

export default function DataAnalyticDashboard() {
  return (
    <>
      <HeroBanner
        title="The Window to Data-driven Decision-making!"
        description=" Gain valuable insights into your organization's performance, engagement levels, and HR metrics with our intuitive analytics dashboard."
        buttonText="Try it for free!"
        imagePath={HeroImage}
      />
      <FeaturePanel
        title="Experience the Power of Data!"
        featureArray={featureArray}
      />

      <DescriptionPanel title="Core Functions" array={functionArray} />

      <ActionBanner
        title="Ready to harness the power of data to drive your business forward?"
        description="Experience the transformative potential of InsightPro360 today and stay ahead of the curve!"
        buttonText="Sign up now!"
        buttonLink="/GoMyTeam/placeholder-page"
      />
    </>
  );
}
