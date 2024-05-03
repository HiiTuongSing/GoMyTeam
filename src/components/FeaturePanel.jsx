import React from "react";

// 1. <FeaturePanel title="" featureArray={} />
// 2. FeatureArray should look like this:
// const featureArray = [
//   { imagePath: "x", title: "x", description: "x" },
//   { imagePath: "x", title: "x", description: "x" },
//   { imagePath: "x", title: "x", description: "x" },
// ];
// 3. The css is included in the src/styles/component.css

export default function FeaturePanel({ title, featureArray }) {
  return (
    <div className="feature-panel-container pb-5 d-flex justify-content-center">
      <div className="feature-panel">
        <p className="display-5 fw-bold pt-5 text-center">{title}</p>
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
