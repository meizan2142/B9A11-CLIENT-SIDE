import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css';
const AllJobDetails = () => {
    useEffect(() => {
        AOS.init({})
    }, [])
    const singleData = useLoaderData()
    const { id } = useParams()
    const [details, setDetails] = useState({})
    const { name, job_title, job_variant, salary_range, posting_date, deadline, applicants_number, img } = details
    useEffect(() => {
        const anyData = singleData.find(data => data._id == id)
        setDetails(anyData)
    }, [])
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
                        <div className="modal-box">
                            <h3 className="font-bold text-lg">Hello!</h3>
                            <p className="py-4">Press ESC key or click the button below to close</p>
                            <div className="modal-action">
                                <form method="dialog">
                                    <button className="btn">Close</button>
                                </form>
                            </div>
                        </div>
                    </dialog>
                </div>
            </div>
        </div>
    );
};

export default AllJobDetails;