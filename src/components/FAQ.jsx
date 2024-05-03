import React, { useState } from "react";

// 1. <FAQ FAQArray={} />
// 2. The array is as follows:
// const FAQArray = [{ title:'Question 1', description:'Answer 1'},]

export default function FAQ({ FAQArray }) {
  const [collapsed, setCollapsed] = useState(true);

  const toggleNavbar = () => {
    setCollapsed(!collapsed);
  };

  const closeNavbar = () => {
    setCollapsed(true);
  };
  return (
    <>
      <div className="faq-container" onClick={closeNavbar}>
        <div className="faq w-75 m-auto py-5">
          <h1 className="text-center mb-5">FAQ</h1>
          <div className="accordion" id="FAQAccordion">
            {FAQArray.map((FAQ, index) => (
              <div className="accordion-item" key={index}>
                <h2 className="accordion-header">
                  <button
                    className="accordion-button"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target={"#FAQ" + index}
                    aria-expanded="true"
                    aria-controls="collapseOne"
                    onClick={toggleNavbar}
                  >
                    {FAQ.title}
                  </button>
                </h2>
                <div
                  id={"FAQ" + index}
                  className="accordion-collapse collapse"
                  data-bs-parent="#FAQAccordion"
                >
                  <div className="accordion-body">{FAQ.description}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
