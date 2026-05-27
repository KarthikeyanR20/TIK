import './Find_Jobs.css'
import Arrow from '../Images/right-arrow.png'
import Logo1 from '../Images/JOBS/1.png'
import Logo2 from '../Images/JOBS/2.png'
import Logo3 from '../Images/JOBS/3.png'
import Logo4 from '../Images/JOBS/4.png'
import Logo5 from '../Images/JOBS/5.png'
import Logo6 from '../Images/JOBS/6.png'
import Logo7 from '../Images/JOBS/7.png'
import Logo8 from '../Images/JOBS/8.png'
import Logo9 from '../Images/JOBS/9.png'
import Logo10 from '../Images/JOBS/10.png'
import Logo11 from '../Images/JOBS/11.png'
import Logo12 from '../Images/JOBS/12.png'
import Logo13 from '../Images/JOBS/13.png'
import Logo14 from '../Images/JOBS/14.png'
import Logo15 from '../Images/JOBS/15.png'
import Logo16 from '../Images/JOBS/16.png'
import Logo17 from '../Images/JOBS/17.png'
import Logo18 from '../Images/JOBS/18.png'
import Logo19 from '../Images/JOBS/19.png'
import Logo20 from '../Images/JOBS/20.png'
import Logo21 from '../Images/JOBS/21.png'
import Logo22 from '../Images/JOBS/22.png'
import Logo23 from '../Images/JOBS/23.png'
import Logo24 from '../Images/JOBS/24.png'
import Logo25 from '../Images/JOBS/25.png'
import Logo26 from '../Images/JOBS/26.png'
import Logo27 from '../Images/JOBS/27.png'
import Logo28 from '../Images/JOBS/28.png'
import Logo29 from '../Images/JOBS/29.png'
import Logo30 from '../Images/JOBS/30.png'

import { Link } from 'react-router-dom'

function Find_Jobs() {
    const jobs = [
        { title: "Software Development", logo: Logo1 },
        { title: "Data Science", logo: Logo2 },
        { title: "Cyber Security", logo: Logo3 },
        { title: "Marine Engineer", logo: Logo4 },
        { title: "Cloud & Devops", logo: Logo5 },
        { title: "Port Operations", logo: Logo6 },
        { title: "Logistics & Freight Handling", logo: Logo7 },
        { title: "Captain & Deck Officer", logo: Logo8 },
        { title: "HR Operations", logo: Logo9 },
        { title: "Reqruiter (Talent Acquisition)", logo: Logo10 },
        { title: "Manufacturing", logo: Logo11 },
        { title: "Civil Engineering", logo: Logo12 },
        { title: "Mechanical Engineering", logo: Logo13 },
        { title: "Production and Quality", logo: Logo14 },
        { title: "Maintenance", logo: Logo15 },
        { title: "Voice Process (Domestic & Intenational)", logo: Logo16 },
        { title: "Non-Voice Process", logo: Logo17 },
        { title: "Technical Support", logo: Logo18 },
        { title: "Desktop Support Engineer", logo: Logo19 },
        { title: "Network Engineer", logo: Logo20 },
        { title: "System Administrator", logo: Logo21 },
        { title: "Hardware & Infrastructure Support", logo: Logo22 },
        { title: "Ground Staff", logo: Logo23 },
        { title: "Cabin Crew", logo: Logo24 },
        { title: "Cargo Handling", logo: Logo25 },
        { title: "Oversea Jobs (UK, Europe, Germany, Canada, Australia & Gulf)", logo: Logo26 },
        { title: "Nursing Overseas", logo: Logo27 },
        { title: "Banking & Finance", logo: Logo28 },
        { title: "Warehouse Executive", logo: Logo29 },
        { title: "Railways Private Jobs", logo: Logo30 }
    ]
    return (
        <>
            <div className='job-container'>
                {jobs.map((job, index) => (
                  <Link to="/Apply_Now" state={{ job, jobs }} className='jobs'>   
                    <div className='card' key={index}>
                        <img src={job.logo} alt='logo' className='job-logo'></img>
                        <h2>{job.title}</h2>
                        <p>Apply Now</p>
                        <div
                            to="/Apply_Now"
                            state={{ job, jobs }}
                            className='button'
                        >
                            <img src={Arrow} alt='arrow' className='arrow' />
                        </div>
                    </div>
                    </Link>
                ))}

            </div>
        </>
    )
}

export default Find_Jobs