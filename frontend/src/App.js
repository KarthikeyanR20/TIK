import "./App.css"
import React, { useState } from 'react'
import Home from './components/Pages/Home'
import Find_Jobs from "./components/Pages/Find_Jobs"
import Services from "./components/Pages/Services"
import About from "./components/Pages/About"
import Contact_Us from "./components/Pages/Contact_Us"
import Join_Us from "./components/Pages/Join_Us"
import Footer from "./components/Pages/Footer"
import Logo from './components/Images/Logo.png'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'
import Apply_Now from "./components/Pages/Apply_Now"
import CustomCursor from "./components/CustomCursor";

import AdminLogin from "./components/Pages/Login";
import AdminDashboard from "./components/Pages/AdminDashboard";
import ProtectedRoute from "./components/Pages/ProtectedRoute";

import Terms from "./components/Pages/Terms";
import PrivacyPolicy from "./components/Pages/PrivacyPolicy";

import Receipt from "./components/Pages/Receipt";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <CustomCursor />

      <Router>
        <div>
          <div className="container">
            <header className="navBar">
              <div className="logo">
                <Link to="/" onClick={() => setMenuOpen(false)}>
                  <img src={Logo} alt="TIK_Logo" />
                </Link>
              </div>

              <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)} aria-label="Menu">
                <span></span>
                <span></span>
                <span></span>
              </button>

              <nav className={menuOpen ? "nav-open" : ""}>
                <Link to="/" className="navigation" onClick={() => setMenuOpen(false)}>Home</Link>
                <Link to="/Find_Jobs" className="navigation" onClick={() => setMenuOpen(false)}>Find Jobs</Link>
                <Link to="/Services" className="navigation" onClick={() => setMenuOpen(false)}>Services</Link>
                <Link to="/About" className="navigation" onClick={() => setMenuOpen(false)}>About</Link>
                <Link to="/Contact_Us" className="navigation" onClick={() => setMenuOpen(false)}>Contact Us</Link>
                <div className="buttons mobile-buttons">
                  <Link to="/admin-login" className="login" onClick={() => setMenuOpen(false)}>Log In</Link>
                  <Link to="/Join_Us" className="join" onClick={() => setMenuOpen(false)}>Join Us</Link>
                </div>
              </nav>

              <div className="buttons desktop-buttons">
                <Link to="/admin-login" className="login">Log In</Link>
                <Link to="/Join_Us" className="join">Join Us</Link>
              </div>
            </header>
          </div>

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Find_Jobs" element={<Find_Jobs />} />
            <Route path="/Services" element={<Services />} />
            <Route path="/About" element={<About />} />
            <Route path="/Contact_Us" element={<Contact_Us />} />
            <Route path="/Join_Us" element={<Join_Us />} />
            <Route path="/Apply_Now" element={<Apply_Now />} />

            <Route path="/admin-login" element={<AdminLogin />} />
            <Route
              path="/dashboard"
              element={
                <ProtectedRoute>
                  <AdminDashboard />
                </ProtectedRoute>
              }
            />
            <Route path="/terms" element={<Terms />} />
            <Route path="/privacyPolicy" element={<PrivacyPolicy />} />

            <Route path="/receipt" element={<Receipt />} />
            
          </Routes>
        </div>
        <Footer />
      </Router>
    </>
  )
}

export default App