import React from "react";
import { Link } from "react-router-dom";

//1. <Test title='' array={} />
//2. const array = [{ title: "", description: "", linkText: "", linkPath: "", imagePath: {} }]

export default function Test({ title, array }) {
  return (
    <>
      <div className="description-panel-container w-100">
        <div className="description-panel-title">
          <p className="display-3">{title}</p>
        </div>
        {array.map((item, index) => (
          <div className="description-panel row align-items-center mb-5 mx-auto">
            <div
              key={index}
              className="description-panel col d-flex flex-column justify-content-center mx-5"
            >
              <p className="display-5">{item.title}</p>
              <p>{item.description}</p>
              <Link className="btn btn-basic" to={item.linkPath}>
                {item.linkText}
              </Link>
            </div>
            <div key={index} className="description-panel col">
              <img
                className="rounded mx-5"
                src={item.imagePath}
                alt={item.title}
              />
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
