import React from "react";

//components
import HeroBanner from "../components/HeroBanner";

//images
import HeroImage from "../images/sea.jpg";

export default function Pricing() {
  return (
    <HeroBanner
      title="Pricing"
      description="Compatibility issues? We got you covered!"
      buttonText="More info >>"
      imagePath={HeroImage}
    />
  );
}
