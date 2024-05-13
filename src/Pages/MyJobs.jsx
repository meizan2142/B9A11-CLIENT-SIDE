import { MdDelete, MdEdit } from "react-icons/md";
import { Link } from "react-router-dom";
const MyJobs = () => {
    return (
        <div className="overflow-x-auto mt-8 lg:mt-10">
            <table className="table table-zebra">
                <thead>
                    <tr>
                        <th></th>
                        <th>Job Title</th>
                        <th>Job Posting Date</th>
                        <th>Job Category</th>
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
                        <td><Link to='/updatejobs'><MdEdit className="w-9 h-6" /></Link></td>
                        <td><MdDelete className="w-9 h-6" /></td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default MyJobs;