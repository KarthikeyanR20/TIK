import React from 'react'
import './Contact_Us.css'

function Contact_Us() {
    return (
        <>
            <div className='contact'>
                <h2>Contact Us</h2>
                <p className='subText'>We’d love to hear from you. Reach out to us anytime.</p>
                <div className='contact_info'>
                    <p>+91 XXXXX XXXXX</p>
                    <p>info@tikhr.com</p>
                    <p>Chennai, India</p>
                </div>
                <form className="contact-form">
                    <input type="text" placeholder="Your Name" required />
                    <input type="email" placeholder="Your Email" required />
                    <textarea placeholder="Your Message" rows="4"></textarea>
                    <button type="submit">Send Message</button>
                </form>
            </div>
        </>
    )
}

export default Contact_Us