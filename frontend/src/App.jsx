import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Login from "./components/Login/Login";
import Dashboard from "./components/Dashboard/Dashboard";
import AdminTools from "./components/Admin/Admintools";
import usersData from "./data/users.json"; // Import users data

export default function App() {
  const [currentUser, setCurrentUser] = useState(null);

  const handleLogin = (user) => {
    setCurrentUser(user);
  };

  return (
    <div>
      {!currentUser ? (
        <Login onLogin={handleLogin} />
      ) : (
        <main className="d-flex">
          <Navbar
            role={currentUser.role}
            username={currentUser.username}
            profilePicUrl={currentUser.profilePicUrl}
            classCode={
              currentUser.role === "student" ? currentUser.class : "Dashboard"
            }
          />
          <Routes>
            <Route
              path={`/${currentUser.role}/dashboard`}
              element={<Dashboard role={currentUser.role} users={usersData.users} />}
            />
            <Route
              path="/organisator/admintools"
              element={<AdminTools role={currentUser.role} users={usersData.users} />}
            />
          </Routes>
        </main>
      )}
    </div>
  );
}
