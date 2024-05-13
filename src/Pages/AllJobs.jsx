import { NavLink } from "react-router-dom";

const AllJobs = () => {
    return (
        <div className="overflow-x-auto mt-8 lg:mt-10">
            <table className="table table-zebra">
                {/* head */}
                <thead>
                    <tr>
                        <th></th>
                        <th>Job Title</th>
                        <th>Job Posting Date</th>
                        <th>Application Deadline</th>
                        <th>Salary Range</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th>1</th>
                        <td>Cy Ganderton</td>
                        <td>Quality Control Specialist</td>
                        <td>Blue</td>
                        <td>$200-300</td>
                        <td><NavLink className="btn btn-outline transition ease-in delay-150  btn-info hover:-translate-y-1 hover:scale-110 shadow-md">View Details</NavLink></td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default AllJobs;