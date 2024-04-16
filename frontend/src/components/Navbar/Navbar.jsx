import React from "react";
import { Link, NavLink, useLocation } from "react-router-dom";

export default function Navbar({ role }) {
  const handleLogout = () => {
    // Redirect the user to the login page
    window.location.href = "/login";
  };

  return (
    <nav className="nav vh-100">
      <div
        className="d-flex flex-column flex-shrink-0 p-3 text-bg-dark bg-dark-subtle"
        style={{ width: "280px" }}
      >
        <Link to="/" className="text-white text-decoration-none">
          <span className="fs-1">
            <i className="fa-sharp fa-solid fa-signal"></i> iTeachers
          </span>
        </Link>
        <hr />
        <ul className="nav nav-pills flex-column mb-auto mw-8">
          <CustomLink to={`/${role}/dashboard`}>
            <i className="fa-solid fa-user"></i> Dashboard
          </CustomLink>
          <CustomLink to={`/${role}/lessons`}>
            <i className="fa-solid fa-chalkboard-user"></i> Lessen
          </CustomLink>
          <CustomLink to={`/${role}/games`}>
            <i className="fa-solid fa-user-gear"></i> Games
          </CustomLink>
          {role === "leraar" && (
            <CustomLink to="/leraar/maak-les">
              <i className="fa-solid fa-user-gear"></i> Maak een les aan
            </CustomLink>
          )}
          {role === "organisator" && (
            <CustomLink to="/organisator/acces-teachers">
              <i className="fa-solid fa-user-gear"></i> Toegang tot leraren
            </CustomLink>
          )}
        </ul>
        <hr />
        {/* Attach handleLogout to the onClick event of the button */}
        <button className="text-white btn" type="button" onClick={handleLogout}>
          <strong>
            <i className="fa-solid fa-arrow-right-from-bracket"></i> Uitloggen
          </strong>
        </button>
      </div>
    </nav>
  );
}

function CustomLink({ to, children }) {
  const location = useLocation();
  const isActive = location.pathname === to;

  return (
    <li className="nav-item">
      <NavLink
        to={to}
        className={`nav-link ${isActive ? "active" : ""} text-white`}
        activeClassName="active"
      >
        {children}
      </NavLink>
    </li>
  );
}
