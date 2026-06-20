import { useLocation } from "react-router-dom";
import './Apply_Now.css';

function Apply_Now() {
    const location = useLocation();

    const job = location.state?.job;
    const jobs = location.state?.jobs || [];

    if (!job) {
        return <h2>Please select a job from Find Jobs page.</h2>;
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData(e.target);

        try {
            const res = await fetch(`${process.env.REACT_APP_API_URL}/upload`, {
                method: "POST",
                body: formData
            });

            const data = await res.json();
            alert(data.message);

            e.target.reset();

        } catch (err) {
            console.error(err);
            alert("Something went wrong");
        }
    };

    return (
        <div className="container">
            <div className="apply-container">

                <div className="left-section">
                    <img src={job.logo} alt="job" className="job-image" />
                    <h2>{job.title}</h2>
                </div>

                <div className="right-section">
                    <form className="apply-form" onSubmit={handleSubmit}>

                        <input name="name" placeholder="Full Name" required />
                        <input name="qualification" placeholder="Qualification" required />
                        <input name="passedout" placeholder="Year of Passing" required />
                        <input name="experience" placeholder="Experience" required />

                        <select name="jobTitle" defaultValue={job.title} required>
                            <option value={job.title}>{job.title}</option>
                            {jobs
                                .filter(j => j.title !== job.title)
                                .map((j, i) => (
                                    <option key={i} value={j.title}>{j.title}</option>
                                ))}
                        </select>

                        <input name="contact" placeholder="Contact Number" required />
                        <input name="email" placeholder="Email ID" required />
                        <input name="referral" placeholder="Referral Number" />
                        
                        <input type="file" name="resume" required />

                        <button type="submit">Submit</button>

                    </form>
                </div>

            </div>
        </div>
    );
}

export default Apply_Now;
