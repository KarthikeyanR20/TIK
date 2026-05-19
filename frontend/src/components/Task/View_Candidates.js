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
          <p><b>Name:</b> {c.name || "N/A"}</p>
          <p><b>Email:</b> {c.email || "N/A"}</p>
          <p><b>Contact:</b> {c.contact || "N/A"}</p>
          <p><b>Qualification:</b> {c.qualification || "N/A"}</p>
          <p><b>Experience:</b> {c.experience || "N/A"}</p>
          <p><b>Role:</b> {c.role || "N/A"}</p>
          <p><b>Location:</b> {c.location || "N/A"}</p>
          <p><b>Referral Number:</b> {c.referral || "N/A"}</p>
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