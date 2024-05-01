import React from "react";

// 1. The css is included in the src/styles/component.css
// 2. <HeroBanner title='' description='' buttonText='' imagePath='' />

export default function ({ title, description, buttonText, imagePath }) {
  return (
    <div className="hero-banner-container p-lg-5 d-flex align-items-center">
      <div className="hero-banner row px-lg-5">
        <div className="d-flex flex-column justify-content-center col-12 col-lg-6 mb-5 mb-lg-0 ">
          <p className="display-2 fw-bold">{title}</p>
          <p className="lead">{description}</p>
          <a
            className="btn btn-outline-primary fw-bolder"
            role="button"
            href="#"
          >
            {buttonText}
          </a>
        </div>

        <div className="col-12 col-lg-6 d-flex justify-content-center">
          <img className="mb-3 mb-lg-0 rounded" src={imagePath} alt="x" />
        </div>
      </div>
    </div>
  );
}
