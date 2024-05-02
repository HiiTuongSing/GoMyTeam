import React from "react";

//components
import HeroBanner from "../../components/HeroBanner";

//images
import HeroImage from "../../images/sea.jpg";

export default function SystemIntegration() {
  return (
    <>
      <HeroBanner
        title="System Integration"
        description="Compatibility issues? We got you covered!"
        buttonText="More info >>"
        imagePath={HeroImage}
      />
    </>
  );
}
