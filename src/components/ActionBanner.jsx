import React from "react";
import { Link } from "react-router-dom";

// 1. <ActionBanner title="" description="" buttonText="" buttonLink=""/>

export default function ActionBanner({
  title,
  description,
  buttonText,
  buttonLink,
}) {
  return (
    <div className="action-banner-container py-5 text-center">
      <div className="action-banner m-auto">
        <div className="action-banner-title">
          <p className="display-5 fw-bold">{title}</p>
        </div>
        <div className="action-banner-description">
          <p className="mx-md-5 my-0 pb-3 fs-4">{description}</p>
        </div>

        <Link to={buttonLink} className="btn btn-basic btn-lg">
          {buttonText}
        </Link>
      </div>
    </div>
  );
}
