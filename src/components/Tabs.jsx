import React from "react";
import HeroImage from "../images/sea.jpg";

// const buttonArray = [
//   { tabId: "", tab: "", tabImagePath: "", descriptionId: "" },
//   { tabId: "", tab: "", tabImagePath: "", descriptionId: "" },
//   { tabId: "", tab: "", tabImagePath: "", descriptionId: "" },
// ];

// const displayArray = [
//   { tabId: "", description: "", descriptionId: "" },
//   { tabId: "", description: "", descriptionId: "" },
//   { tabId: "", description: "", descriptionId: "" },
// ];

// <Tabs buttonArray={} displayArray={} />

export default function Tabs({ buttonArray, displayArray }) {
  return (
    <>
      <ul className="nav nav-pills" id="myTab" role="tablist">
        {buttonArray.map((item, index) => (
          <li className="nav-item" role="presentation">
            <button
              key={index}
              className="nav-link btn btn-reverse nav-link-tab"
              id={item.tabId}
              data-bs-toggle="tab"
              data-bs-target={"#" + item.descriptionId}
              type="button"
              role="tab"
              aria-controls={item.descriptionId}
              aria-selected="true"
            >
              <img src={item.tabImagePath} width="100" height="100" />
              <p>{item.tab}</p>
            </button>
          </li>
        ))}
      </ul>

      <div className="tab-content" id="myTabContent">
        {displayArray.map((item, index) => (
          <div
            key={index}
            className="tab-pane fade"
            id={item.descriptionId}
            role="tabpanel"
            aria-labelledby={item.tabId}
            tabindex={index}
          >
            {item.description}
          </div>
        ))}
      </div>
    </>
  );
}
