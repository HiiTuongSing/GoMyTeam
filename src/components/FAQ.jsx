import React from "react";

// 1. <FAQ FAQArray={} />
// 2. The array is as follows:
// const FAQArray = [{ title:'Question 1', description:'Answer 1'},]

export default function FAQ({ FAQArray }) {
  return (
    <>
      <div className="faq-container w-75 m-auto py-5">
        <h1 className="text-center mb-5">FAQ</h1>
        <div class="accordion" id="FAQAccordion">
          {FAQArray.map((FAQ, index) => (
            <div class="accordion-item" key={index}>
              <h2 class="accordion-header">
                <button
                  class="accordion-button"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target={"#FAQ" + index}
                  aria-expanded="true"
                  aria-controls="collapseOne"
                >
                  {FAQ.title}
                </button>
              </h2>
              <div
                id={"FAQ" + index}
                class="accordion-collapse collapse"
                data-bs-parent="#FAQAccordion"
              >
                <div class="accordion-body">{FAQ.description}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
