import { useEffect, useState } from "react";
import { useLoaderData, useLocation, useNavigate, useParams } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css';
import Swal from 'sweetalert2'
const AllJobDetails = () => {
    useEffect(() => {
        AOS.init({})
    }, [])
    const singleData = useLoaderData()
    const { id } = useParams()
    const [details, setDetails] = useState({})
    const navigate = useNavigate()
    const location = useLocation()
    const { name, job_title, job_variant, salary_range, posting_date, deadline, applicants_number, img } = details
    useEffect(() => {
        const anyData = singleData.find(data => data._id == id)
        setDetails(anyData)
    }, [])
    const handleApply = e => {
        e.preventDefault()
        const form = e.target;
        const name = form.name.value
        const email = form.email.value
        const newCandidate = { name, email }
        console.log(newCandidate);
        if (newCandidate) {
            Swal.fire({
                title: 'Success',
                text: 'Submitted Successfully',
                icon: 'success',
                confirmButtonText: 'OK'
            })
            navigate(location?.state ? location?.state : '/alljobs')
        }
    }
    return (
        <div className="card card-compact lg:w-96 bg-base-100 shadow-xl mt-10">
            <div className="card-body" data-aos="fade-up"
                data-aos-duration="3000">
                <div>
                    <img className="lg:w-96" src={img} alt="" />
                </div>
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
                    <p><span className="font-bold">Posting Date</span>: {posting_date}</p>
                    <p><span className="font-bold">Deadline</span>: {deadline}</p>
                </div>
                <div className="card-actions justify-end">
                    <button className="btn btn-outline btn-info transition ease-in delay-150   hover:-translate-y-1 hover:scale-110 shadow-md" onClick={() => document.getElementById('my_modal_1').showModal()}>Apply</button>
                    <dialog id="my_modal_1" className="modal">
                        <form onSubmit={handleApply} className="modal-box">
                            <div className="col-span-full sm:col-span-3">
                                <label htmlFor="firstname" className="text-sm font-bold">Name</label>
                                <input type="text" placeholder="Your Name" name="name" className="w-full rounded-md p-2 border" />
                            </div>
                            <div className="col-span-full sm:col-span-3">
                                <label htmlFor="lastname" className="text-sm font-bold">Email</label>
                                <input type="email" placeholder="Email" name="email" className="w-full rounded-md p-2 border" />
                            </div>
                            <div className="modal-action">
                                <div method="dialog" className="space-x-5">
                                    <button className="btn">Submit</button>
                                </div>
                            </div>
                        </form>
                    </dialog>
                </div>
            </div>
        </div>
    );
};

export default AllJobDetails;