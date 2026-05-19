import React, { useState } from 'react';
import './Join_Us.css';

function Join_Us() {

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    qualification: "",
    experience: "",
    role: "",
    location: "",
    referral: ""
  });

  const [file, setFile] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData();

    data.append("name", formData.name);
    data.append("contact", formData.phone);
    data.append("email", formData.email);
    data.append("qualification", formData.qualification);
    data.append("experience", formData.experience);
    data.append("role", formData.role);
    data.append("location", formData.location);
    data.append("referral", formData.referral);
    data.append("resume", file);

    try {
      const response = await fetch(`${process.env.REACT_APP_API_URL}/join`, {
        method: "POST",
        body: data
      });

      const result = await response.json();

      if (response.ok) {
        alert("✅ Application submitted successfully!");

        setFormData({
          name: "",
          phone: "",
          email: "",
          qualification: "",
          experience: "",
          role: "",
          location: "",
          referral: ""
        });

        setFile(null);
        e.target.reset();

      } else {
        alert("❌ Error submitting form");
      }

    } catch (error) {
      console.error(error);
      alert("❌ Server error");
    }
  };

  return (
    <div className='join-container'>
      <h2>Apply Now & Start Your Career</h2>

      <form className='form' onSubmit={handleSubmit}>

        <input type="text" name="name" value={formData.name} placeholder="Full Name" onChange={handleChange} required />
        <input type="tel" name="phone" value={formData.phone} placeholder="Phone Number" onChange={handleChange} required />
        <input type="email" name="email" value={formData.email} placeholder="Email Address" onChange={handleChange} required />
        <input type="text" name="qualification" value={formData.qualification} placeholder="Qualification" onChange={handleChange} required />
        <input type="text" name="experience" value={formData.experience} placeholder="Experience" onChange={handleChange} required />
        <input type="text" name="role" value={formData.role} placeholder="Preferred Job Role" onChange={handleChange} required />
        <input type="text" name="location" value={formData.location} placeholder="Location" onChange={handleChange} required />
        <input type="text" name="referral" value={formData.referral} placeholder="Referral Number" onChange={handleChange} required />

        <input type="file" onChange={handleFileChange} required />

        <button type="submit">Submit Application</button>

      </form>
    </div>
  );
}

export default Join_Us;