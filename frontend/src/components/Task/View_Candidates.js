import React, { useEffect, useState } from "react";
import "./View_Candidates.css";

function View_Candidates() {
  const [candidates, setCandidates] = useState([]);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}/join-candidates`)
      .then(res => res.json())
      .then(data => setCandidates(data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="candidates-container">
      <h2 className="candidates-title">Join Us Candidates</h2>
      {candidates.map((c, index) => (
        <div key={index} className="candidate-card">
          <p><b>Name:</b> {c.name}</p>
          <p><b>Email:</b> {c.email}</p>
          <p><b>Contact:</b> {c.contact}</p>
          <p><b>Qualification:</b> {c.qualification}</p>
          <p><b>Experience:</b> {c.experience}</p>
          <p><b>Role:</b> {c.role}</p>
          <p><b>Location:</b> {c.location}</p>
          <a
            href={c.resume}
            target="_blank"
            rel="noreferrer"
            className="resume-link"
          >
            📄 View Resume
          </a>
        </div>
      ))}
    </div>
  );
}

export default View_Candidates;