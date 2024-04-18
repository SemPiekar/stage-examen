import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import usersData from "../../data/users.json";
import Footer from "../Footer/Footer";

// Login component
export default function Login({ onLogin }) {
  // State variables htmlFor username, password, and warning visibility
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showWarning, setShowWarning] = useState(false);
  const navigate = useNavigate();

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Check if the provided username and password match any user in the data
    const user = usersData.users.find(
      (user) => user.username === username && user.password === password
    );
    if (user) {
      // If user exists, perform login actions
      onLogin(user);
      navigate(`/${user.role}/dashboard`);
    } else {
      // If user does not exist, show a warning
      setShowWarning(true);
    }
  };

  return (
    <main className=" form-signin col-2 m-auto vh-100 d-flex flex-column justify-content-center">
      {/* Login form */}
      <form onSubmit={handleSubmit}>
        <h1 className="mb-3 fw-normal">
          <i className="fa-sharp fa-solid fa-signal"></i> iTeachers
        </h1>
        {/* Username input */}
        <div className="form-floating">
          <input
            type="text"
            id="username, floatingInput"
            value={username}
            className="form-control rounded-bottom-0"
            placeholder="Gebruikersnaam"
            onChange={(e) => setUsername(e.target.value)}
          ></input>
          <label htmlFor="floatingInput">Gebruikersnaam</label>
        </div>
        {/* Password input */}
        <div className="form-floating">
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            id="password, floatingPassword"
            className="form-control rounded-top-0"
            placeholder="Wachtwoord"
          ></input>
          <label htmlFor="floatingPassword">Wachtwoord</label>
        </div>

        {/* Remember me checkbox */}
        <div className="form-check text-start my-3">
          <input
            className="form-check-input"
            type="checkbox"
            value="remember-me"
            id="flexCheckDefault"
          ></input>
          <label className="form-check-label" htmlFor="flexCheckDefault">
            Onthoud mij
          </label>
        </div>
        {/* Login button */}
        <button className="btn btn-primary w-100 py-2" type="submit">
          Inloggen
        </button>
        {/* Warning message if login fails */}
        {showWarning && (
          <div
            className="mt-3 alert alert-warning alert-dismissible fade show"
            role="alert"
          >
            <strong>Holy guacamole!</strong> lijkt erop dat er iets misging met
            inloggen... groetjes Salah & Sem c:
          </div>
        )}
      </form>
      {/* Footer component */}
      <Footer />
    </main>
  );
}
