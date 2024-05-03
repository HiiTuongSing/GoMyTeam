import React from "react";
import { Link } from "react-router-dom";

// 1. Use the tag below:
// <PricingPanel title="" pricingArray={pricingArray} />
// 2. Use the following array:
// const pricingArray = [
//   {
//     title: "XX Package",
//     subtitle: "Pick me!",
//     price: "RMXX",
//     linkPath: "/GoMyTeam/placeholder-page",
//     features: ["feature 1", "feature 2", "feature 3"],
//   },
// ];
// 3. The css is located at src/styles/components.css

export default function PricingPanel({ title, pricingArray }) {
  return (
    <div className="pricing-panel-container pt-5">
      <h1 className="text-center">{title}</h1>
      <div className="row w-75 m-auto">
        {pricingArray.map((item, index) => (
          <div key={index} className="col">
            <div className="pricing-panel rounded m-auto text-center p-5 my-5">
              <h5>{item.title}</h5>
              <p className="fw-light">{item.subtitle}</p>
              <div className="price-box rounded p-4 mb-3">
                <h1 className="m-0">{item.price}</h1>
                <p className="m-0">Per Employee/Month</p>
              </div>
              <Link
                className="btn btn-reverse btn-lg w-100 mb-3"
                to={item.linkPath}
              >
                Purchase
              </Link>
              <h5>Feature includes</h5>
              {item.features.map((feature, index) => (
                <p key={index} className="fw-light">
                  {feature}
                </p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
