import React from "react";
import { Link } from "react-router-dom";
import HeroImage from "../images/sea.jpg";

// <DocumentList documentArray={} />
// const documentArray = [{ title: "", imagePath: "", linkPath: "" },];

export default function DocumentList({ title, documentArray }) {
  return (
    <>
      <div className="document-list-container mb-5 mx-auto">
        <h1 className="text-center my-5">{title}</h1>
        <div className="row justify-content-center">
          {documentArray.map((document, index) => (
            <div key={index} className="document-link-container col m-3">
              <Link className="document-link" to={document.linkPath}>
                <div className="document-link-border rounded d-flex flex-column align-items-center justify-content-center p-3">
                  <img
                    width="100"
                    height="100"
                    src={document.imagePath}
                    alt={document.title}
                    className="rounded"
                  />
                  <p className="text-center pt-3">{document.title}</p>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
