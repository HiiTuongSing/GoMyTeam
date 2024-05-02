import React from "react";

//components
import HeroBanner from "../../components/HeroBanner";

//images
import HeroImage from "../../images/sea.jpg";

export default function OnlineSupport() {
  return (
    <>
      <HeroBanner
        title="Online Support"
        description="We provide support to you, no matter where and when!"
        buttonText="More info >>"
        imagePath={HeroImage}
      />
    </>
  );
}
