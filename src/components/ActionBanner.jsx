import React from "react";

export default function ActionBanner({ title, description, buttonText }) {
  return (
    <div className="action-banner-container py-5 text-center">
      <div className="action-banner m-auto">
        <div className="action-banner-title">
          <p className="display-5 fw-bold">{title}</p>
        </div>
        <div className="action-banner-description">
          <p className="mx-md-5 my-0 pb-3 fs-4">{description}</p>
        </div>

        <a className="btn btn-basic btn-lg">{buttonText}</a>
      </div>
    </div>
  );
}
