import "./App.css"
import React from 'react'
import Home from './components/Task/Home'
import Find_Jobs from "./components/Task/Find_Jobs"
import Services from "./components/Task/Services"
import About from "./components/Task/About"
import Contact_Us from "./components/Task/Contact_Us"
import Login from "./components/Task/Login"
import Join_Us from "./components/Task/Join_Us"
import Footer from "./components/Task/Footer"
import Logo from './components/Images/Logo.png'
import { BrowserRouter as Router, Route, Routes, Link, useNavigate } from 'react-router-dom'
import View_Candidates from "./components/Task/View_Candidates";
import Apply_Now from "./components/Task/Apply_Now";
import View_Application from "./components/Task/View_Application";

function App() {
  return (
    <>
      <Router>
        <div>
          <div className="container">
            <header className="navBar">
              <div className="logo">
                <Link to="/"><img src={Logo} alt="TIK_Logo" /></Link>
              </div>

              <nav>
                <Link to="/" className="navigation">Home</Link>
                <Link to="/Find_Jobs" className="navigation">Find Jobs</Link>
                <Link to="/Services" className="navigation">Services</Link>
                <Link to="/About" className="navigation">About</Link>
                <Link to="/Contact_Us" className="navigation">Contact Us</Link>
              </nav>

              <div className="buttons">
                <Link to="/Login" className="login">Log In</Link>
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
            <Route path="/Login" element={<Login />} />
            <Route path="/Join_Us" element={<Join_Us />} />
            <Route path="/candidates" element={<View_Candidates />} />
            <Route path="/Apply_Now" element={<Apply_Now />} />
            <Route path="/application" element={<View_Application />} />
          </Routes>
        </div>
        <Footer></Footer>
      </Router>
    </>
  )
}

export default App