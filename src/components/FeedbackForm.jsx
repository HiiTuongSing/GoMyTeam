import React from "react";
import { Link } from "react-router-dom";

export default function FeedbackForm() {
  return (
    <>
      <div className="feedback-form-container py-lg-3 ">
        <div className="feedback-form rounded my-lg-5 mx-lg-auto">
          <p className="display-5 fw-bold pt-5 text-center">Feedback Form</p>
          <p className="text-center">Let us know what you think about us!</p>
          <form id="user-contact" className="pb-5 w-75 m-auto">
            <div className="form-group mb-3">
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                className="form-control"
                id="name"
                placeholder="Enter your name"
                required
              />
            </div>
            <div className="form-group mb-3">
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="Enter your email"
                required
              />
            </div>
            <div className="form-group mb-3">
              <label htmlFor="company">Company:</label>
              <input
                type="text"
                className="form-control"
                id="company"
                placeholder="Enter your company name"
              />
            </div>
            <div className="form-group mb-3">
              <label htmlFor="feedback">Your feedback:</label>
              <textarea
                className="form-control"
                id="feedback"
                rows="5"
                placeholder="Enter feedback here"
                style={{ resize: "none" }}
                required
              ></textarea>
            </div>

            <Link
              type="submit"
              className="btn btn-basic w-100"
              to="/GoMyTeam/placeholder-page"
            >
              Submit
            </Link>
          </form>
        </div>
      </div>
    </>
  );
}
