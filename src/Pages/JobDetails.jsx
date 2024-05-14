import { NavLink, useLoaderData, useParams } from "react-router-dom";
import PropTypes from 'prop-types';
import { useEffect, useState } from "react";
const JobDetails = () => {
    const singleData = useLoaderData()
    // console.log(singleData);
    const { id } = useParams()
    const [details, setDetails] = useState({})
    const { name, job_title, job_variant, salary_range, posting_date, deadline, applicants_number } = details
    useEffect(() => {
        const anyData = singleData.find(data => data._id == id)
        setDetails(anyData)
    }, [])
    return (
        <div className="card card-compact lg:w-96 bg-base-100 shadow-xl">
            <div className="card-body">
                <h2 className="card-title font-bold">{name}</h2>
                <div className="flex justify-between items-center">
                    <p className="text-info font-bold">{job_title}</p>
                    <p className="font-bold text-green-500">#{job_variant}</p>
                </div>
                <div className="space-y-2">
                    <p><span className="font-bold">Applicants Number</span>: {applicants_number}</p>
                    <p><span className="font-bold">Salary Range</span>: {salary_range}</p>
                </div>
                <div className="space-y-2">
                    {/* <p>Posting Date: {posting_date}</p>
                    <p>Deadline: {deadline}</p>
                    <p>Applicants Number: {applicants_number}</p> */}
                    <p><span className="font-bold">Posting Date</span>: {posting_date}</p>
                    <p><span className="font-bold">Deadline</span>: {deadline}</p>
                </div>
                <div className="card-actions justify-end">
                    <NavLink to={'/'} className="btn btn-outline btn-info transition ease-in delay-150   hover:-translate-y-1 hover:scale-110 shadow-md">Back To Home</NavLink>
                </div>
            </div>
        </div>
    );
};

JobDetails.propTypes = {
    job: PropTypes.object
}

export default JobDetails;