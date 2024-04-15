import Navbar from "./components/Navbar/Navbar.jsx"
import StudentDashboard from "./components/StudentDashboard/StudentDashboard.jsx"
import LeraarDashboard from "./components/LeraarDashboard/LeraarDashboard.jsx"
import OrganisatorDashboard from "./components/OrganisatorDashboard/OrganisatorDashboard.jsx"
import { Route, Routes } from "react-router-dom"

function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/student" element={<StudentDashboard />} />
          <Route path="/leraar" element={<LeraarDashboard />} />
          <Route path="/organisator" element={<OrganisatorDashboard />} />
        </Routes>
      </div>
    </>
  )
}

export default App