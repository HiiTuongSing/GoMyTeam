import React from "react";
import { Link } from "react-router-dom";

//1. <Test title='' array={} />
//2. const array = [{ title: "", description: "", linkText: "", linkPath: "", imagePath: {} }]

export default function Test({ title, array }) {
  return (
    <>
      <div className="description-panel-container w-100">
        <div className="description-panel-title">
          <p className="display-3 text-center my-5">{title}</p>
        </div>
        {array.map((item, index) => (
          <div
            key={index}
            className="description-panel row rounded mb-5 p-5 mx-auto"
          >
            <div className="description-panel-description col-12 col-md-6 d-flex flex-column justify-content-center">
              <p className="display-5">{item.title}</p>
              <p>{item.description}</p>
              <Link className="btn btn-basic btn-lg" to={item.linkPath}>
                {item.linkText}
              </Link>
            </div>
            <div className="description-panel-image col-12 col-md-6 pb-2 pb-lg-0 ">
              <img className="rounded" src={item.imagePath} alt={item.title} />
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
