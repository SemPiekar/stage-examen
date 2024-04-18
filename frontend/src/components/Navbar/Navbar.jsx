import React from "react";
import { Link, NavLink, useLocation } from "react-router-dom";

// Component htmlFor the Navbar
export default function Navbar({ role, username, profilePicUrl, classCode }) {
  // Function to handle logout
  const handleLogout = () => {
    // Redirect the user to the login page
    window.location.href = "/login";
  };

  return (
    <nav className="nav vh-100 sticky-top">
      <div
        className="d-flex flex-column flex-shrink-0 p-3 text-bg-dark bg-dark-subtle"
        style={{ width: "280px" }}
      >
        {/* Logo */}
        <Link to="/" className="text-white text-decoration-none">
          <span className="fs-1">
            <i className="fa-sharp fa-solid fa-signal"></i> iTeachers
          </span>
        </Link>
        <hr />
        {/* Navigation links */}
        <ul className="nav nav-pills flex-column mb-auto mw-8">
          <div className="d-flex align-items-center mb-3">
            {/* Profile picture */}
            <div className="profile-picture me-2">
              <img
                className="rounded-circle"
                style={{ width: "4em", height: "4em", objectFit: "cover" }}
                src={profilePicUrl}
                alt={username}
              />
            </div>
            {/* Username */}
            <div className="d-flex flex-column m-0">
              <span className="badge text-bg-primary text-capitalize">
                {role}
              </span>
              <span className="username">{username}</span>
            </div>
          </div>
          {role === "student" && (
            <>
              <CustomLink to={`/student/dashboard`}>
              <i className="me-1 fa-solid fa-users"></i> Klas: {classCode}
              </CustomLink>
            </>
          )}
          {/* Conditional links based on the user's role */}
          {role === "leraar" && (
            <>
              <CustomLink to={`/leraar/dashboard`}>
                <i className="me-1 fa-solid fa-user"></i> Dashboard
              </CustomLink>
              {/* <CustomLink to="/leraar/progressie">
                <i className="me-1 fa-solid fa-bars-progress"></i> Progressie
              </CustomLink>
              <CustomLink to={`/leraar/lessons`}>
                <i className="me-1 fa-solid fa-chalkboard-user"></i> Lessen
              </CustomLink>
              <CustomLink to={`/leraar/games`}>
                <i className="me-1 fa-solid fa-gamepad"></i> Games
              </CustomLink> */}
            </>
          )}
          {role === "organisator" && (
            <>
              <CustomLink to={`/organisator/dashboard`}>
                <i className="me-1 fa-solid fa-user"></i> Dashboard
              </CustomLink>
              <CustomLink to="/organisator/admintools">
                <i className="me-1 fa-solid fa-hammer"></i> Admin Tools
              </CustomLink>
              {/* <CustomLink to={`/organisator/lessons`}>
                <i className="me-1 fa-solid fa-chalkboard-user"></i> Lessen
              </CustomLink> */}
            </>
          )}
        </ul>
        <hr />
        {/* Logout button */}
        <button className="text-white btn" type="button" onClick={handleLogout}>
          <strong>
            <i className="me-1 fa-solid fa-arrow-right-from-bracket"></i> Uitloggen
          </strong>
        </button>
      </div>
    </nav>
  );
}

// Custom NavLink component to handle active links
function CustomLink({ to, children }) {
  const location = useLocation();
  const isActive = location.pathname === to;

  return (
    <li className="nav-item">
      {/* Using NavLink from react-router-dom */}
      <NavLink
        to={to}
        className={`nav-link ${isActive ? "active" : ""} text-white`}
        activeclassname="active"
      >
        {children}
      </NavLink>
    </li>
  );
}
