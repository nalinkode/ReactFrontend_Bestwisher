import React from "react";
import { NavLink, Outlet, Link } from "react-router-dom";
import Gallery from "./gallery/Gallery";
import "./Photo.css";

export default function Photo() {
  return (
    <div className="mt-2">
      <div className="row mb-3">
        <ul className="nav nav-tabs">
          <li className="nav-item">
            <NavLink
              className="nav-link"
              activeClassName="active"
              to=""
              end={true}
            >
              Profile Images
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              className="nav-link"
              activeClassName="active"
              to="cover"
              end={true}
            >
              Cover Images
            </NavLink>
          </li>
        </ul>
      </div>
      <Outlet />
    </div>
  );
}
