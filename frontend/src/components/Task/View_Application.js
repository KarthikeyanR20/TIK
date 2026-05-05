import { useEffect, useState } from "react";
import "./View_Application.css";

function View_Application() {
  const [application, setApplication] = useState([]);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}/candidates`)
      .then(res => res.json())
      .then(data => setApplication(data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="container">
      <h2 className="title">Candidate List</h2>
      <table className="application-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Job</th>
            <th>Qualification</th>
            <th>Year</th>
            <th>Experience</th>
            <th>Contact</th>
            <th>Email</th>
            <th>Referral</th>
            <th>Resume</th>
          </tr>
        </thead>
        <tbody>
          {application.map((c, index) => (
            <tr key={index}>
              <td>{c.name}</td>
              <td>{c.jobTitle}</td>
              <td>{c.qualification}</td>
              <td>{c.passedout}</td>
              <td>{c.experience}</td>
              <td>{c.contact}</td>
              <td>{c.email}</td>
              <td>{c.referral || "N/A"}</td>
              <td>
                <a href={c.resume} target="_blank" rel="noreferrer">
                  View
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default View_Application;