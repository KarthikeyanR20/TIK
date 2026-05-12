import React, { useState } from 'react'
import './Contact_Us.css'

function Contact_Us() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    });
    const [status, setStatus] = useState("");

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus("sending");

        try {
            const res = await fetch(`${process.env.REACT_APP_API_URL}/contact`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData)
            });

            const data = await res.json();

            if (res.ok) {
                setStatus("success");
                setFormData({ name: "", email: "", message: "" });
            } else {
                setStatus("error");
            }
        } catch (err) {
            console.error(err);
            setStatus("error");
        }
    };

    return (
        <>
            <div className='contact'>
                <h2>Contact Us</h2>
                <p className='subText'>We'd love to hear from you. Reach out to us anytime.</p>
                <div className='contact_info'>
                    <p>+91 80561 13955</p>
                    <p>info@tikhr.com</p>
                    <p>Chennai, India</p>
                </div>
                <form className="contact-form" onSubmit={handleSubmit}>
                    <input
                        type="text"
                        name="name"
                        placeholder="Your Name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                    <input
                        type="email"
                        name="email"
                        placeholder="Your Email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                    <textarea
                        name="message"
                        placeholder="Your Message"
                        rows="4"
                        value={formData.message}
                        onChange={handleChange}
                        required
                    ></textarea>
                    <button type="submit" disabled={status === "sending"}>
                        {status === "sending" ? "Sending..." : "Send Message"}
                    </button>
                    {status === "success" && <p className="success-msg">✅ Message sent successfully!</p>}
                    {status === "error" && <p className="error-msg">❌ Something went wrong. Try again.</p>}
                </form>
            </div>
        </>
    )
}

export default Contact_Us