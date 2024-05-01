import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div>
      <Link to="/GoMyTeam/">Home</Link>
      <Link to="/GoMyTeam/about">About</Link>
      <Link to="/GoMyTeam/pricing">Pricing</Link>
    </div>
  );
}
