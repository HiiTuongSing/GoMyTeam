import React from "react";
import { Link } from "react-router-dom";

//arrays
const productArray = [
  { name: "Employee Engagement Platform", path: "/GoMyTeam/" },
  { name: "HR Management System", path: "/GoMyTeam/" },
  { name: "Team Collaboration Tools", path: "/GoMyTeam/" },
  { name: "Training & Development Resources", path: "/GoMyTeam/" },
  { name: "Customizable HR Templates", path: "/GoMyTeam/" },
  { name: "Data Analytic Dashboard", path: "/GoMyTeam/" },
];

const serviceArray = [
  { name: "Online Support", path: "/GoMyTeam/" },
  { name: "System Training", path: "/GoMyTeam/" },
  { name: "System Integration Training", path: "/GoMyTeam/" },
];

//functions
function printNavPath(navArray) {
  return navArray.map((nav, index) => (
    <li key={index}>
      <Link className="dropdown-item" to={nav.path}>
        {nav.name}
      </Link>
    </li>
  ));
}

//main jsx
export default function Navbar() {
  return (
    <>
      <nav class="navbar navbar-expand-xl fixed-top navbar-custom">
        <div class="container-fluid m-auto" style={{ maxWidth: "1300px" }}>
          <Link class="navbar-brand" to="/GoMyTeam/">
            <p className="display-6 fw-bold ms-3 mb-2 mb-lg-0 logo">
              <i class="fa-solid fa-lemon" /> GoMyTeam
            </p>
          </Link>

          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0 ms-3 ms-lg-5">
              <li class="nav-item dropdown ps-lg-3">
                <a
                  class="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Products
                </a>
                <ul class="dropdown-menu">{printNavPath(productArray)}</ul>
              </li>

              <li class="nav-item dropdown ps-lg-3">
                <a
                  class="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Services
                </a>
                <ul class="dropdown-menu">{printNavPath(serviceArray)}</ul>
              </li>

              <li class="nav-item ps-lg-3">
                <Link class="nav-link" to="/GoMyTeam/about">
                  About
                </Link>
              </li>

              <li class="nav-item ps-lg-3">
                <Link class="nav-link" to="/GoMyTeam/pricing">
                  Pricing
                </Link>
              </li>
            </ul>

            <ul className="navbar-nav mb-2 mb-lg-0">
              <li>
                <Link
                  className="btn btn-basic mx-3 mb-2 mb-lg-0"
                  to="/GoMyTeam/"
                >
                  Request for DEMO!
                </Link>
              </li>
              <li>
                <Link
                  className="btn btn-basic mx-3 mb-2 mb-lg-0"
                  to="/GoMyTeam/"
                >
                  Start your free trial now!
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="py-4"></div>
    </>
  );
}
