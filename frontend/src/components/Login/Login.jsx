import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import usersData from "../../data/users.json";
import Footer from "../footer/footer";

export default function Login({ onLogin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showWarning, setShowWarning] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const user = usersData.users.find(
      (user) => user.username === username && user.password === password
    );
    if (user) {
      onLogin(user);
      navigate(`/${user.role}/dashboard`);
    } else {
      setShowWarning(true);
    }
  };

  return (
    <main className=" form-signin col-2 m-auto vh-100 d-flex flex-column justify-content-center">
      <form onSubmit={handleSubmit}>
        <h1 className="mb-3 fw-normal"><i className="fa-sharp fa-solid fa-signal"></i> iTeachers</h1>
        <div className="form-floating">
          <input
            type="text"
            id="username, floatingInput"
            value={username}
            className="form-control rounded-bottom-0"
            placeholder="Gebruikersnaam"
            onChange={(e) => setUsername(e.target.value)}
          ></input>
          <label for="floatingInput">Gebruikersnaam</label>
        </div>
        <div className="form-floating">
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            id="password, floatingPassword"
            className="form-control rounded-top-0"
            placeholder="Wachtwoord"
          ></input>
          <label for="floatingPassword">Wachtwoord</label>
        </div>

        <div className="form-check text-start my-3">
          <input
            className="form-check-input"
            type="checkbox"
            value="remember-me"
            id="flexCheckDefault"
          ></input>
          <label className="form-check-label" for="flexCheckDefault">
            Onthoud mij
          </label>
        </div>
        <button className="btn btn-primary w-100 py-2" type="submit">
          Inloggen
        </button>
        {showWarning && (
          <div className="mt-3 alert alert-warning alert-dismissible fade show" role="alert">
          <strong>Holy guacamole!</strong> lijkt erop dat er iets misging met inloggen... groetjes Salah & Sem c:
        </div>
        )}
      </form>
      <Footer />
    </main>
  );
}
