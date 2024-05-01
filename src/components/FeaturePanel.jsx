import React from "react";

// 1. This component displays 3 features of a subject
// 2. FeatureArray should look like this:
// featureArray = [
//   { imagePath: "x", title: "x", description: "x" },
//   { imagePath: "x", title: "x", description: "x" },
//   { imagePath: "x", title: "x", description: "x" },
// ];
// 3. The css is included in the src/styles/component.css

export default function FeaturePanel({ title, featureArray }) {
  return (
    <div className="feature-panel-container py-5 d-flex justify-content-center">
      <div className="feature-panel">
        <h1 className="mb-5">{title}</h1>
        <div className="row">
          {featureArray.map((element, index) => (
            <div key={index} className="col-12 col-lg-4 p-2 p-lg-3">
              <img
                className="mb-3 rounded"
                width="200"
                height="200"
                src={element.imagePath}
                alt={element.title}
              />
              <h3>{element.title}</h3>
              <p>{element.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
