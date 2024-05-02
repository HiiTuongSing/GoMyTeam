import React from "react";
import { Link } from "react-router-dom";

//arrays
const productArray = [
  {
    name: "Employee Engagement Platform",
    path: "/GoMyTeam/employee-engagement-platform",
  },
  { name: "HR Management System", path: "/GoMyTeam/hr-management-system" },
  {
    name: "Team Collaboration Tools",
    path: "/GoMyTeam/team-collaboration-tools",
  },
  {
    name: "Training & Development Resources",
    path: "/GoMyTeam/training-and-development-resources",
  },
  {
    name: "Customizable HR Templates",
    path: "/GoMyTeam/customizable-hr-templates",
  },
  {
    name: "Data Analytic Dashboard",
    path: "/GoMyTeam/data-analytic-dashboard",
  },
];

const serviceArray = [
  { name: "Online Support", path: "/GoMyTeam/online-support" },
  { name: "System Training", path: "/GoMyTeam/system-training" },
  { name: "System Integration", path: "/GoMyTeam/system-integration" },
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
      <nav className="navbar navbar-expand-xl fixed-top navbar-custom">
        <div className="container-fluid m-auto" style={{ maxWidth: "1300px" }}>
          <Link className="navbar-brand" to="/GoMyTeam/">
            <p className="display-6 fw-bold ms-3 mb-2 mb-lg-0 logo">
              <i className="fa-solid fa-lemon lemon" /> GoMyTeam
            </p>
          </Link>

          <button
            className="navbar-toggler btn-nav"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i class="fa-solid fa-grip-lines"></i>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-3 ms-lg-5">
              <li className="nav-item dropdown ps-lg-3">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Products
                </a>
                <ul className="dropdown-menu">{printNavPath(productArray)}</ul>
              </li>

              <li className="nav-item dropdown ps-lg-3">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Services
                </a>
                <ul className="dropdown-menu">{printNavPath(serviceArray)}</ul>
              </li>

              <li className="nav-item ps-lg-3">
                <Link className="nav-link" to="/GoMyTeam/about">
                  About
                </Link>
              </li>

              <li className="nav-item ps-lg-3">
                <Link className="nav-link" to="/GoMyTeam/pricing">
                  Pricing
                </Link>
              </li>
            </ul>

            <ul className="navbar-nav mb-2 mb-lg-0">
              <li>
                <Link
                  className="btn btn-basic mx-3 mb-2 mb-lg-0"
                  to="/GoMyTeam/placeholder-page"
                >
                  Request for DEMO!
                </Link>
              </li>
              <li>
                <Link
                  className="btn btn-basic mx-3 mb-2 mb-lg-0"
                  to="/GoMyTeam/placeholder-page"
                >
                  Start your free trial now!
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
