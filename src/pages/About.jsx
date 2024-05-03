import React from "react";
import { Link } from "react-router-dom";

//components
import ActionBanner from "../components/ActionBanner";

//images
import HeroImage from "../images/sea.jpg";

export default function About() {
  return (
    <>
      <div className="about-hero-banner-container pt-5">
        <div className="row p-0 m-0 reverse">
          <div className="col-12 col-lg-6 d-flex flex-column justify-content-center align-items-center py-5 p-lg-0 m-0 ">
            <h1 className="mb-lg-5">Our Story</h1>
            <p className="mx-5 fw-light">
              At GoMyTeam, we believe in the power of teamwork to drive success
              and innovation in the workplace. Founded in 2020, our journey
              began with a simple yet ambitious goal: to revolutionize employee
              engagement and HR management for businesses of all sizes. Over the
              years, we've grown from a small startup to a leading provider of
              comprehensive solutions that empower teams to thrive.
            </p>
          </div>
          <div className="col-12 col-lg-6 p-0 m-0">
            <img src={HeroImage} alt="img" />
          </div>
        </div>
      </div>

      <div className="about-hero-banner-container">
        <div className="row p-0 m-0">
          <div className="col-12 col-lg-6 p-0 m-0">
            <img src={HeroImage} alt="img" />
          </div>
          <div className="col-12 col-lg-6 d-flex flex-column justify-content-center align-items-center py-5 p-lg-0 m-0">
            <h1 className="mb-lg-5">Our Mission & Values</h1>
            <p className="mx-5 fw-light">
              Our mission at GoMyTeam is to empower businesses and teams to
              achieve their full potential through innovative technology and
              unparalleled support. We're guided by a set of core values that
              shape everything we do:
            </p>
            <ul className="fw-light mx-5 mb-5">
              <li>
                Customer-Centricity: We prioritize the needs and success of our
                customers above all else.
              </li>
              <li>
                Innovation: We continuously strive to push the boundaries of
                what's possible and embrace new ideas.
              </li>
              <li>
                Integrity: We conduct ourselves with honesty, transparency, and
                ethical behavior in all interactions.
              </li>
              <li>
                Collaboration: We believe in the power of collaboration, both
                internally and with our customers, to achieve mutual success.
              </li>
              <li>
                Continuous Improvement: We're committed to learning, growing,
                and evolving as individuals and as a company.
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="about-hero-banner-container">
        <div className="row p-0 m-0 reverse">
          <div className="col-12 col-lg-6 d-flex flex-column justify-content-center align-items-center py-5 p-lg-0 m-0">
            <h1 className="mb-lg-5">Meet the Team</h1>
            <p className="mx-5 fw-light">
              Behind every success story at GoMyTeam is a team of dedicated
              professionals who are passionate about making a difference.
            </p>
          </div>
          <div className="col-12 col-lg-6 p-0 m-0">
            <img src={HeroImage} alt="img" />
          </div>
        </div>
      </div>

      <div className="about-hero-banner-container">
        <div className="row p-0 m-0">
          <div className="col-12 col-lg-6 p-0 m-0">
            <img src={HeroImage} alt="img" />
          </div>
          <div className="col-12 col-lg-6 d-flex flex-column justify-content-center align-items-center p-0 m-0">
            <h1 className="my-5">Join Our Team</h1>
            <p className="mx-5 mb-5 fw-light">
              Are you passionate about driving positive change in the workplace?
              Join us on our mission to empower teams and businesses to succeed.
              Explore career opportunities and become part of the GoMyTeam
              family today!
            </p>
            <Link
              className="btn btn-basic btn-lg mb-5"
              to="/GoMyTeam/placeholder-page"
            >
              Join now!
            </Link>
          </div>
        </div>
      </div>

      <ActionBanner
        title="Contact Us"
        description="Ready to learn more about GoMyTeam or get started with our solutions? Don't hesitate to reach out to us! "
        buttonText="Send us a message!"
        buttonLink="/GoMyTeam/placeholder-page"
      />
    </>
  );
}
