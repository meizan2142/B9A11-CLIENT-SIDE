import { NavLink, useLoaderData } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";
const AllJobs = () => {
    useEffect(() => {
        AOS.init({})
    }, [])
    const allJobs = useLoaderData()
    // console.log(allJobs);
    return (
        <div className="overflow-x-auto mt-8 lg:mt-10" data-aos="fade-up"
            data-aos-duration="3000">
            <table className="table table-zebra">
                {/* head */}
                <thead>
                    <tr>
                        <th></th>
                        <th>Job Title</th>
                        <th>Applicants Number</th>
                        <th>Job Posting Date</th>
                        <th>Application Deadline</th>
                        <th>Salary Range</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        allJobs.map(job => <tr key={job._id} >
                            <td></td>
                            <td>{job.job_title}</td>
                            <td>{job.applicants_number}</td>
                            <td>{job.posting_date}</td>
                            <td>{job.deadline}</td>
                            <td>{job.salary_range}</td>
                            <td><NavLink to={`/alljobsdetails/${job._id}`} className="btn btn-outline transition ease-in delay-150  btn-info hover:-translate-y-1 hover:scale-110 shadow-md">View Details</NavLink></td>
                        </tr>)
                    }
                </tbody>
            </table>
        </div>
    );
};

export default AllJobs;