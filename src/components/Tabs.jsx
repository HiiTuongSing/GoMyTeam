import React from "react";

// const buttonArray = [
//   { tabId:"", tab: "", tabImagePath: "" },
//   { tabId:"", tab: "", tabImagePath: "" },
//   { tabId:"", tab: "", tabImagePath: "" },
// ];

// const displayArray = [
//   {  tabId:"", description: "" },
//   {  tabId:"", description: "" },
//   {  tabId:"", description: "" },
// ];

// <Tabs tabId="" buttonArray={buttonArray} displayArray={displayArray} />

export default function Tabs({ buttonArray, displayArray }) {
  return (
    <>
      <ul
        className="nav nav-tabs justify-content-center"
        id="myTab"
        role="tablist"
      >
        {buttonArray.map((item, index) => (
          <li className="nav-item" role="presentation">
            <button
              key={index}
              className="nav-link btn btn-reverse nav-link-tab"
              id={item.tabId}
              data-bs-toggle="tab"
              data-bs-target={"#" + item.tabId + "-des"}
              type="button"
              role="tab"
              aria-controls={item.tabId + "-des"}
              aria-selected="true"
            >
              <img src={item.tabImagePath} width="100" height="100" />
              <p>{item.tab}</p>
            </button>
          </li>
        ))}
      </ul>

      <div className="tab-content w-100" id="myTabContent">
        {displayArray.map((item, index) => (
          <div
            key={index}
            className="tab-pane fade"
            id={item.tabId + "-des"}
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
