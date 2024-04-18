import React from "react";

// Footer component
const Footer = () => {
  return (
    <div className="container fixed-bottom">
      {/* Footer section */}
      <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
        {/* Left section of the footer */}
        <div className="col-md-4 d-flex align-items-center">
          <a
            href="/"
            className="mb-3 me-2 mb-md-0 text-body-secondary text-decoration-none lh-1"
          >
            {/* Placeholder link */}
          </a>
          <span className="mb-3 mb-md-0 text-body-secondary">
            &copy; Salah and Sem waren hier - sinds 2024
          </span>
        </div>

        {/* Right section of the footer */}
        <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
          <li className="ms-3">
            {/* Twitter link */}
            <a className="text-body-secondary" href="#">
              <i className="fa-brands fa-twitter"></i>
            </a>
          </li>
          <li className="ms-3">
            {/* Instagram link */}
            <a className="text-body-secondary" href="#">
              <i className="fa-brands fa-instagram"></i>
            </a>
          </li>
          <li className="ms-3">
            {/* Facebook link */}
            <a className="text-body-secondary" href="#">
              <i className="fa-brands fa-facebook"></i>
            </a>
          </li>
        </ul>
      </footer>
    </div>
  );
};

export default Footer;
