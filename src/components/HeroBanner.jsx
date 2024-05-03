import React from "react";
import { Link } from "react-router-dom";

// 1. The css is included in the src/styles/component.css
// 2. <HeroBanner title='' description='' buttonText='' imagePath='' />
// 3. Margin top is added to fill space beneath fixed-top navbar.

export default function ({ title, description, buttonText, imagePath }) {
  return (
    <div className="hero-banner-container d-flex align-items-center py-5 mt-5">
      <div className="hero-banner row">
        <div className="d-flex flex-column justify-content-center col-12 col-lg-6 mb-5 mb-lg-0">
          <p className="display-5 fw-bold ">{title}</p>
          <p className="lead ">{description}</p>
          <Link
            className="btn btn-basic btn-lg fw-bolder"
            role="button"
            to="/GoMyTeam/placeholder-page"
          >
            {buttonText}
          </Link>
        </div>

        <div className="col-12 col-lg-6 d-flex justify-content-center">
          <img className="mb-3 mb-lg-0 rounded" src={imagePath} alt="x" />
        </div>
      </div>
    </div>
  );
}
