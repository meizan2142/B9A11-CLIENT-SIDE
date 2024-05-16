import { MdDelete, MdEdit } from "react-icons/md";
import { Link, useLoaderData } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";
import Swal from 'sweetalert2'
const MyJobs = () => {
    useEffect(() => {
        AOS.init({})
    }, [])
    const myJobs = useLoaderData()
    console.log(myJobs);
    const {_id} = myJobs
    const handleDelete = id => {
        const proceed = confirm(Swal.fire({
            title: 'Success',
            text: 'Are you sure want to delete?',
            icon: 'success',
            confirmButtonText: 'OK'
        }))
        if (proceed) {
            fetch(`${import.meta.env.VITE_API_URL}/addedjobs/${id}`, {
                method: 'DELETE'
            })
            .then(res => res.json())
            .then(data => {
                console.log(data)
            })
        }
    }
    return (
        <div className="overflow-x-auto mt-8 lg:mt-10">
            <table className="table table-zebra" data-aos="fade-up"
                data-aos-duration="3000">
                <thead>
                    <tr>
                        <th></th>
                        <th>Job Title</th>
                        <th>Job Posting Date</th>
                        <th>Job Deadline</th>
                        <th>Job Category</th>
                        <th>Salary Range</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        myJobs.map(job => <tr key={job._id}>
                            <th></th>
                            <td>{job.title}</td>
                            <td>{job.date}</td>
                            <td>{job.deadline}</td>
                            <td>{job.category}</td>
                            <td>{job.range}</td>
                            <td><Link to='/updatejobs'><MdEdit className="w-9 h-6" /></Link></td>
                            <td><MdDelete onClick={() => handleDelete(_id)} className="w-9 h-6" /></td>
                        </tr>)
                    }
                </tbody>
            </table>
        </div>
    );
};

export default MyJobs;