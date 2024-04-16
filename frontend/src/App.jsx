import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Login from "./components/Login/Login";
import Dashboard from "./components/StudentDashboard/StudentDashboard";
// Import other components as needed

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
        <>
          <Navbar role={currentUser.role} />
          <Routes>
            <Route path={`/${currentUser.role}/dashboard`} element={<Dashboard />} />
            {/* Add routes for other components */}
          </Routes>
        </>
      )}
    </div>
  );
}
