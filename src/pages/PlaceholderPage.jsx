import React from "react";
import { useNavigate } from "react-router-dom";
import ActionBanner from "../components/ActionBanner";

export default function PlaceholderPage() {
  const navigate = useNavigate();

  const goBack = () => {
    return navigate(-1);
  };

  return (
    <>
      <div className="pt-5"></div>
      <ActionBanner
        title="This is a placeholder page."
        description="Some pages such as login page to get free trial, the purchase page, and the social links will link to here."
        buttonText="<< Go Back"
        onClick={goBack}
      />
    </>
  );
}
