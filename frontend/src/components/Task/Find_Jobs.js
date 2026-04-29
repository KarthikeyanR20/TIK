import './Find_Jobs.css'
import Arrow from '../Images/right-arrow.png'
import Logo1 from '../Images/JOBS/1.png'
import Logo2 from '../Images/JOBS/2.png'
import Logo3 from '../Images/JOBS/3.png'
import Logo4 from '../Images/JOBS/4.png'
import Logo5 from '../Images/JOBS/5.png'
import Logo6 from '../Images/JOBS/6.png'
import { Link } from 'react-router-dom'

function Find_Jobs() {
    const jobs = [
        { title: "Web Developer", logo: Logo1 },
        { title: "Software Developer", logo: Logo2 },
        { title: "Game Developer", logo: Logo3 },
        { title: "Cyber Security", logo: Logo4 },
        { title: "AIDS", logo: Logo5 },
        { title: "HR Manager", logo: Logo6 },
        { title: "Web Developer", logo: Logo1 },
        { title: "Software Developer", logo: Logo2 },
        { title: "Game Developer", logo: Logo3 },
        { title: "Cyber Security", logo: Logo4 },
        { title: "AIDS", logo: Logo5 },
        { title: "HR Manager", logo: Logo6 },
        { title: "Web Developer", logo: Logo1 },
        { title: "Software Developer", logo: Logo2 },
        { title: "Game Developer", logo: Logo3 },
        { title: "Cyber Security", logo: Logo4 },
        { title: "AIDS", logo: Logo5 },
        { title: "HR Manager", logo: Logo6 },
    ]
    return (
        <>
            <div className='job-container'>
                {jobs.map((job, index) => (
                    <div className='card' key={index}>
                        <img src={job.logo} alt='logo' className='job-logo'></img>
                        <h2>{job.title}</h2>
                        <p>Apply Now</p>
                        {/* <button className='button'><img src={Arrow} alt='arrow' className='arrow'></img></button> */}
                        <Link
                            to="/Apply_Now"
                            state={{ job, jobs }}
                            className='button'
                        >
                            <img src={Arrow} alt='arrow' className='arrow' />
                        </Link>
                    </div>
                ))}

            </div>
        </>
    )
}

export default Find_Jobs