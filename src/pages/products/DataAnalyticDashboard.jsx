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
        title="Ready to harness the power of data to drive your business forward?"
        description="Experience the transformative potential of InsightPro360 today and stay ahead of the curve!"
        buttonText="Sign up now!"
      />
    </>
  );
}
