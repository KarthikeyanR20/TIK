import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./AdminDashboard.css";

function AdminDashboard() {
  const [activeTab, setActiveTab] = useState("candidates");
  const [candidates, setCandidates] = useState([]);
  const [joinApplications, setJoinApplications] = useState([]);
  const [messages, setMessages] = useState([]);
  const navigate = useNavigate();

  const token = localStorage.getItem("adminToken");

  const authFetch = async (url) => {
    const res = await fetch(url, {
      headers: { Authorization: `Bearer ${token}` }
    });
    if (res.status === 401 || res.status === 403) {
      localStorage.removeItem("adminToken");
      navigate("/admin-login");
      return [];
    }
    return res.json();
  };

  useEffect(() => {
    authFetch(`${process.env.REACT_APP_API_URL}/candidates`).then(setCandidates);
    authFetch(`${process.env.REACT_APP_API_URL}/join-candidates`).then(setJoinApplications);
    authFetch(`${process.env.REACT_APP_API_URL}/contact-messages`).then(setMessages);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("adminToken");
    navigate("/admin-login");
  };

  return (
    <div className="dashboard-container">
      <div className="dashboard-header">
        <h2>Admin Dashboard</h2>
        <button onClick={handleLogout} className="logout-btn">Logout</button>
      </div>

      <div className="tabs">
        <button className={activeTab === "candidates" ? "active" : ""} onClick={() => setActiveTab("candidates")}>
          Apply Now Candidates ({candidates.length})
        </button>
        <button className={activeTab === "join" ? "active" : ""} onClick={() => setActiveTab("join")}>
          Join Applications ({joinApplications.length})
        </button>
        <button className={activeTab === "messages" ? "active" : ""} onClick={() => setActiveTab("messages")}>
          Messages ({messages.length})
        </button>
      </div>

      {activeTab === "candidates" && (
        <div className="tab-content">
          {candidates.map((c, i) => (
            <div key={i} className="candidate-card">
              <p><b>Name:</b> {c.name || "N/A"}</p>
              <p><b>Email:</b> {c.email || "N/A"}</p>
              <p><b>Contact:</b> {c.contact || "N/A"}</p>
              <p><b>Qualification:</b> {c.qualification || "N/A"}</p>
              <p><b>Experience:</b> {c.experience || "N/A"}</p>
              <p><b>Job Title:</b> {c.jobTitle || "N/A"}</p>
              <p><b>Referral:</b> {c.referral || "N/A"}</p>
              <a href={c.resume} target="_blank" rel="noreferrer">📄 View Resume</a>
            </div>
          ))}
        </div>
      )}

      {activeTab === "join" && (
        <div className="tab-content">
          {joinApplications.map((c, i) => (
            <div key={i} className="candidate-card">
              <p><b>Name:</b> {c.name || "N/A"}</p>
              <p><b>Email:</b> {c.email || "N/A"}</p>
              <p><b>Contact:</b> {c.contact || "N/A"}</p>
              <p><b>Qualification:</b> {c.qualification || "N/A"}</p>
              <p><b>Experience:</b> {c.experience || "N/A"}</p>
              <p><b>Role:</b> {c.role || "N/A"}</p>
              <p><b>Location:</b> {c.location || "N/A"}</p>
              <p><b>Referral:</b> {c.referral || "N/A"}</p>
              <a href={c.resume} target="_blank" rel="noreferrer">📄 View Resume</a>
            </div>
          ))}
        </div>
      )}

      {activeTab === "messages" && (
        <div className="tab-content">
          {messages.map((m, i) => (
            <div key={i} className="candidate-card">
              <p><b>Name:</b> {m.name || "N/A"}</p>
              <p><b>Email:</b> {m.email || "N/A"}</p>
              <p><b>Message:</b> {m.message || "N/A"}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default AdminDashboard;