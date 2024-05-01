import React from "react";

//1. The css is located at styles/components.css

export default function Footer() {
  return (
    <>
      <div className="footer-container m-auto py-5">
        <div className="row">
          <div className="col-6 pe-0">
            <h3>
              <i class="fa-solid fa-jet-fighter-up"></i> GoMyTeam
            </h3>
          </div>
          <div className="col-6 ps-0">
            <h3 className="text-end">
              <a href="#">
                <i className="fa-brands fa-square-facebook me-3"></i>
              </a>
              <a href="#">
                <i className="fa-brands fa-linkedin me-3"></i>
              </a>
              <a href="#">
                <i className="fa-brands fa-youtube me-3"></i>
              </a>
            </h3>
          </div>
        </div>
        <hr />
        <div className="row">
          <div className="col-12 col-md-4 pb-5 pb-md-0">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
            <p className="fw-light">
              <em>Designed by Hii Tuong Sing</em>
            </p>
            <p className="fw-light">
              <em>© GoMyTeam.com 2024 All rights reserved</em>
            </p>
          </div>
          <div className="col-md-1"></div>

          <div className="col-12 col-md-3 pb-5 pb-md-0">
            <p className="mb-4 h5">Products</p>
            <ul className="p-0 m-0">
              <li>
                <a href="#">Employee Engagement Platform</a>
              </li>
              <li>
                <a href="#">HR Management System</a>
              </li>
              <li>
                <a href="#">Team Collaboration Tools</a>
              </li>
              <li>
                <a href="#">Training & Development Resources</a>
              </li>
              <li>
                <a href="#">Customizable HR Templates</a>
              </li>
              <li>
                <a href="#">Data Analytic Dashboard</a>
              </li>
            </ul>
          </div>

          <div className="col-6 col-md-2">
            <p className="mb-4 h5">Supports</p>
            <ul className="p-0 m-0">
              <li>
                <a href="#">Online Support</a>
              </li>
              <li>
                <a href="#">System Training</a>
              </li>
              <li>
                <a href="#">System Integration Support</a>
              </li>
            </ul>
          </div>

          <div className="col-6 col-md-2">
            <p className="mb-4 h5">Others</p>
            <ul className="p-0 m-0">
              <li>
                <a href="#">Pricing</a>
              </li>
              <li>
                <a href="#">About Us</a>
              </li>
              <li>
                <a href="#">Contact Us</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
