import React from "react";
import { Link } from "react-router-dom";

export default function FeedbackForm() {
  return (
    <>
      <div className="feedback-form-container w-75 pb-5 mb-5 mx-auto">
        <h1 className="text-center">Feedback Form</h1>
        <p className="text-center">Let us know what you think about us!</p>
        <form id="user-contact" className="p-5">
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
            className="btn btn-reverse w-100"
            to="/GoMyTeam/placeholder-page"
          >
            Submit
          </Link>
        </form>
      </div>
    </>
  );
}
