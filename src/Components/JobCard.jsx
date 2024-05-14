import { NavLink } from "react-router-dom";
import PropTypes from 'prop-types';
const JobCard = ({ job }) => {
    const { name, job_title, _id, job_variant, salary_range } = job
    return (
        <div className="card card-compact lg:w-96 bg-base-100 shadow-xl">
            <div className="card-body">
                <h2 className="card-title font-bold">{name}</h2>
                <div className="flex justify-between items-center">
                    <p className="text-info font-bold">{job_title}</p>
                    <p className="font-bold text-green-500">#{job_variant}</p>
                </div>
                <div>
                    <p><span className="font-bold">Salary Range</span>: {salary_range}</p>
                </div>
                <div className="card-actions justify-end">
                    <NavLink to={`/jobdetails/${_id}`} className="btn btn-outline btn-info transition ease-in delay-150   hover:-translate-y-1 hover:scale-110 shadow-md">View Details</NavLink>
                </div>
            </div>
        </div>
    );
};

JobCard.propTypes = {
    job: PropTypes.object
}

export default JobCard;