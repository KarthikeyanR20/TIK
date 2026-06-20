import React from 'react'
import "./Home.css";
import image from '../Images/TIK.png';
import { BrowserRouter as Router, Route, Routes, Link, useNavigate } from 'react-router-dom';

function Home() {
  return (
    <>
      <div className="container">
        <section className="content">
          <div className="left-content">
            <h1>Find Your <br /> Job Here!</h1>
            <p>TIK HR Consultancy is a trusted provider of manpower solutions, supporting both local and international staffing needs. <br />
              We specialise in recruitment, training, and delivering reliable HR services with professionalism and integrity.</p>

            <Link to="/Join_Us" className="joinNow">JOIN NOW</Link>
          </div>

          <div className="right-content">
            <img src={image} alt="TIK"></img>
          </div>
        </section>

      </div>

    </>
  )
}

export default Home