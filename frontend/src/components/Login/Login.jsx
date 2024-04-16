import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import usersData from "../../data/users.json";
import Footer from "../footer/footer";
import { Button } from "react-bootstrap";

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
    // <div>
    //   <div className="container mt-5 col-2 d-flex flex-column justify-content-center">
    //     <h2>iTeachers</h2>
    //     <form onSubmit={handleSubmit}>
    //       <div className="input-group mb-3">
    //         <span className="input-group-text" id="basic-addon1">
    //           @
    //         </span>
    //         <input
    //           type="text"
    //           className="form-control"
    //           id="username"
    //           value={username}
    //           placeholder="Username"
    //           aria-label="Username"
    //           aria-describedby="basic-addon1"
    //           onChange={(e) => setUsername(e.target.value)}
    //         ></input>
    //       </div>
    //       <div className="mb-3">
    //         <label htmlFor="password" className="form-label">
    //           Password
    //         </label>
    //         <input
    //           type="password"
    //           className="form-control"
    //           id="password"
    //           value={password}
    //           onChange={(e) => setPassword(e.target.value)}
    //         />
    //       </div>
    //       <Button className="w-100" type="submit" variant="primary" size="lg">
    //         Inloggen
    //       </Button>
    //     </form>
    //     {showWarning && (
    //       <div className="alert alert-warning mt-3" role="alert">
    //         Ongeldige gebruikersnaam of wachtwoord
    //       </div>
    //     )}
    //   </div>
    //   <Footer />
    // </div>
    <main class="form-signin col-2 m-auto vh-100 d-flex flex-column justify-content-center">
    <form>
      <h1 class="h3 mb-3 fw-normal">Please sign in</h1>
  
      <div class="form-floating">
        <input type="email" class="form-control rounded-bottom-0" id="floatingInput" placeholder="name@example.com"></input>
        <label for="floatingInput">Email address</label>
      </div>
      <div class="form-floating">
        <input type="password" class="form-control rounded-top-0" id="floatingPassword" placeholder="Password"></input>
        <label for="floatingPassword">Password</label>
      </div>
  
      <div class="form-check text-start my-3">
        <input class="form-check-input" type="checkbox" value="remember-me" id="flexCheckDefault"></input>
        <label class="form-check-label" for="flexCheckDefault">
          Remember me
        </label>
      </div>
      <button class="btn btn-primary w-100 py-2" type="submit">Sign in</button>
      <p class="mt-5 mb-3 text-body-secondary">&copy; 2017–2024</p>
    </form>
    <Footer />
  </main>
  );
}
