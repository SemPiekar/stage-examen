import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  return (
    <>
    <nav className="nav vh-100">
      <div className="d-flex flex-column flex-shrink-0 p-3 text-bg-dark bg-dark-subtle" style={{ width: '280px' }}>
        <Link to="/" className="text-white text-decoration-none">
          <span className="fs-4"><i class="fa-sharp fa-solid fa-signal"></i> iTeachers</span>
        </Link>
        <hr/>
        <ul className="nav nav-pills flex-column mb-auto mw-8" >
          <CustomLink to="/student" ><i class="fa-solid fa-user"></i> Student</CustomLink>
          <CustomLink to="/leraar"><i class="fa-solid fa-chalkboard-user"></i> Leraar</CustomLink>
          <CustomLink to="/organisator"><i class="fa-solid fa-user-gear"></i> Organisator</CustomLink>
        </ul> 
        <hr/>
        <div class="dropdown">
      <a href="#" class="d-flex flex-column align-items-center text-white text-decoration-none " data-bs-toggle="dropdown" aria-expanded="false">
        <strong><i class="fa-solid fa-arrow-right-from-bracket"></i> Uitloggen</strong>
      </a>
    </div>
      </div>
    </nav>
    </>
  );
}

function CustomLink({ to, icon, children }) {
  const location = useLocation();
  const isActive = location.pathname === to;

  return (
    <li className="nav-item">
      <Link to={to} className={`nav-link ${isActive ? 'active' : ''} text-white`}>
        {children}
      </Link>
    </li>
  );
}
