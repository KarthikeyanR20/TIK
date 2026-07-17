import React from 'react'
import './Footer.css'
import { BrowserRouter as Router, Route, Routes, Link, useNavigate } from 'react-router-dom'

function Footer() {
    return (
        <>
            <footer className='footer'>
                <div className='footer-top'>
                    <div className='footer-column'>
                        <h4>Get to Know Us</h4>
                        <Link to="/About" className='link'>About Us</Link>
                        <Link to="/Find_Jobs" className='link'>Careers</Link>
                        <Link to="/Services" className='link'>Contact Us</Link>
                    </div>
                    <div className='footer-column'>
                        <h4>For Candidates</h4>
                        <Link to="/Join_Us" className='link'>Apply Now</Link>
                        <Link to="/Find_Jobs" className='link'>Job Openings</Link>
                        <Link to="/Services" className='link'>Career Support</Link>
                    </div>
                    <div className='footer-column'>
                        <h4>For Employers</h4>
                        <Link to="/Contact_Us" className='link'>Hire Talent</Link>
                        <Link to="/Contact_Us" className='link'>Post a Job</Link>
                        <Link to="/Services" className='link'>Staffing Solutions</Link>
                    </div>
                    <div className='footer-column'>
                        <h4>Legal</h4>
                        <Link to="/terms" className='link'>Terms & Conditions</Link>
                        <Link to="/privacyPolicy" className='link'>Privacy Policy</Link>
                        <Link to="/refundPolicy" className='link'>Refund Policy</Link>
                    </div>
                </div>
                <div className='footer-divider'></div>
                <div className='footer-bottom'>
                    <h3>TIK HR Consultancy</h3>
                    <p>Connecting Talent with Opportunity</p>
                    <p className="copyright">© 2026 TIK HR Consultancy. All rights reserved.</p>
                </div>
            </footer>
        </>
    )
}

export default Footer