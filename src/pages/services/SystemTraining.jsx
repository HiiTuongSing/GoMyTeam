import React from "react";

//components
import HeroBanner from "../../components/HeroBanner";

//images
import HeroImage from "../../images/sea.jpg";

export default function SystemTraining() {
  return (
    <>
      <HeroBanner
        title="System Training"
        description="Find all the training materials you need here!"
        buttonText="More info >>"
        imagePath={HeroImage}
      />
    </>
  );
}
