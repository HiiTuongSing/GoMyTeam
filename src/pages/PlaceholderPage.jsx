import React from "react";
import ActionBanner from "../components/ActionBanner";

export default function PlaceholderPage() {
  return (
    <>
      <div className="pt-5"></div>
      <ActionBanner
        title="This is a placeholder page."
        description="Some pages such as login page to get free trial, the purchase page, and the social links will link to here."
        buttonText="Back to homepage"
        buttonLink="/GoMyTeam/"
      />
    </>
  );
}
