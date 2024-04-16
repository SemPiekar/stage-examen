import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate instead of useHistory
import usersData from "../../data/users.json";
import Footer from "../footer/footer";
import { Button } from "react-bootstrap";

export default function Login({ onLogin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate(); // Use useNavigate hook for navigation

  const handleSubmit = (e) => {
    e.preventDefault();
    const user = usersData.users.find(
      (user) => user.username === username && user.password === password
    );
    if (user) {
      onLogin(user);
      navigate(`/${user.role}/dashboard`); // Use navigate function to redirect
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <div>
      <div className="container mt-5 col-2 d-flex flex-column justify-content-center">
        <h2>iTeachers</h2>
        <form onSubmit={handleSubmit}>
          <div class="input-group mb-3">
            <span class="input-group-text" id="basic-addon1">
              @
            </span>
            <input
              type="text"
              class="form-control"
              id="username"
              value={username}
              placeholder="Username"
              aria-label="Username"
              aria-describedby="basic-addon1"
              onChange={(e) => setUsername(e.target.value)}
            ></input>
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <Button className="w-100" type="submit" variant="primary" size="lg">
            Inloggen
          </Button>
        </form>
      </div>
      <Footer />
    </div>
  );
}
