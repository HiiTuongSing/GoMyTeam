import React from "react";
import { Link } from "react-router-dom";

//1. The css is located at styles/components.css
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

const otherArray = [
  { name: "Pricing", path: "/GoMyTeam/pricing" },
  { name: "About Us", path: "/GoMyTeam/about" },
];

function printNavPath(navArray) {
  return navArray.map((nav, index) => (
    <li key={index}>
      <Link to={nav.path}>{nav.name}</Link>
    </li>
  ));
}

export default function Footer() {
  return (
    <>
      <div className="footer-container">
        <div className="footer m-auto py-5">
          <div className="row">
            <div className="col-6 pe-0">
              <h3>
                <Link className="navbar-brand" to="/GoMyTeam/">
                  <i className="fa-solid fa-lemon" /> GoMyTeam
                </Link>
              </h3>
            </div>
            <div className="col-6 ps-0">
              <h3 className="text-end">
                <Link className="social-link" to="/GoMyTeam/placeholder-page">
                  <i className="fa-brands fa-square-facebook me-3"></i>
                </Link>
                <Link className="social-link" to="/GoMyTeam/placeholder-page">
                  <i className="fa-brands fa-linkedin me-3"></i>
                </Link>
                <Link className="social-link" to="/GoMyTeam/placeholder-page">
                  <i className="fa-brands fa-youtube me-3"></i>
                </Link>
              </h3>
            </div>
          </div>
          <hr />
          <div className="row">
            <div className="col-12 col-md-4 pb-5 pb-md-0">
              <p>
                GoMyTeam is your ally in revolutionizing workplace dynamics. We
                specialize in empowering businesses with streamlined HR
                solutions and fostering unparalleled employee engagement.
              </p>
              <p className="fw-light">
                <em>Designed by Hii Tuong Sing</em>
              </p>
              <p className="fw-light">
                The photo is by{" "}
                <a href="https://www.pexels.com/@fabianwiktor/">
                  Pexels | Fabian Wiktor
                </a>
              </p>
              <p className="fw-light">
                <em>© GoMyTeam.com 2024 All rights reserved</em>
              </p>
            </div>
            <div className="col-md-1"></div>

            <div className="col-12 col-md-3 pb-5 pb-md-0">
              <p className="mb-4 h5">Products</p>
              <ul className="p-0 m-0">{printNavPath(productArray)}</ul>
            </div>

            <div className="col-6 col-md-2">
              <p className="mb-4 h5">Supports</p>
              <ul className="p-0 m-0">{printNavPath(serviceArray)}</ul>
            </div>

            <div className="col-6 col-md-2">
              <p className="mb-4 h5">Others</p>
              <ul className="p-0 m-0">{printNavPath(otherArray)}</ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
