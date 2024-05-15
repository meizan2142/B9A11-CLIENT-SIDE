import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
const AppliedJobs = () => {
    useEffect(() => {
        AOS.init({})
    }, [])
    return (
        <div className="overflow-x-auto mt-8 lg:mt-10" data-aos="fade-up"
            data-aos-duration="3000">
            <div className="flex items-center justify-center mb-8">
                <select className="select rounded-md select-bordered p-2 border">
                    <option disabled selected>Job Category</option>
                    <option>OnSite</option>
                    <option>Part Time</option>
                    <option>Hybrid</option>
                    <option>Remote</option>
                </select>
            </div>
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
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default AppliedJobs;