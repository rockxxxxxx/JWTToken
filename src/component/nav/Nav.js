import React from "react";
import { NavLink, Outlet } from "react-router-dom";

export default function Nav() {
  return (
    <div className="ui container">
      <div className="ui secondary  menu">
        <NavLink
          className={({ isActive }) => (isActive ? "active item" : "item")}
          to="/"
        >
          Home
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? "active item" : "item")}
          to="/user"
        >
          User
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? "active item" : "item")}
          to="/video"
        >
          Video
        </NavLink>
        <div className="right menu">
          <div className="item">
            <div className="ui icon input">
              <input type="text" placeholder="Search..." />
              <i className="search link icon"></i>
            </div>
          </div>
          <NavLink
            className={({ isActive }) => (isActive ? "active item" : "item")}
            to="/logout"
          >
            Logout
          </NavLink>
        </div>
      </div>
      <Outlet />
    </div>
  );
}
