import { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import AOS from 'aos';
import 'aos/dist/aos.css';
const AddJobs = () => {
    useEffect(() => {
        AOS.init({})
    }, [])
    const [selectedDate, setSelectedDate] = useState(null)
    const handleAddJobs = e => {
        e.preventDefault()
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const picture = form.picture.value;
        const title = form.title.value;
        const category = form.category.value;
        const range = form.range.value;
        const description = form.description.value;
        const date = form.date.value;
        const deadline = form.deadline.value;
        const applicants = form.applicants.value;
        const newCandidate = { name, email, picture, title, description, date, category, range, deadline, applicants }
        console.log(newCandidate);
    }
    return (
        <section className="p-6 shadow-lg rounded-lg lg:mt-10 mt-5">
            <form onSubmit={handleAddJobs} className="container flex flex-col mx-auto space-y-12" data-aos="fade-up"
                data-aos-duration="3000">
                <div className="grid grid-cols-4 gap-6 p-6">
                    <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-4 ">
                        <div className="col-span-full sm:col-span-3">
                            <label htmlFor="firstname" className="text-sm font-bold">Name</label>
                            <input type="text" placeholder="Your Name" name="name" className="w-full rounded-md p-2 border" />
                        </div>
                        <div className="col-span-full sm:col-span-3">
                            <label htmlFor="lastname" className="text-sm font-bold">Email</label>
                            <input type="email" placeholder="Email" name="email" className="w-full rounded-md p-2 border" />
                        </div>
                        <div className="col-span-full sm:col-span-3">
                            <label htmlFor="firstname" className="text-sm font-bold">Picture URL</label>
                            <input type="text" placeholder="Picture URL" name="picture" className="w-full rounded-md p-2 border" />
                        </div>
                        <div className="col-span-full sm:col-span-3">
                            <label htmlFor="lastname" className="text-sm font-bold">Job Title</label>
                            <input type="text" placeholder="Job Title" name="title" className="w-full rounded-md p-2 border" />
                        </div>
                        <div className="col-span-full sm:col-span-3">
                            <label htmlFor="firstname" className="text-sm font-bold">Job Category</label>
                            <select name="category" className="select select-bordered w-full rounded-md p-2 border">
                                <option value="Onsite">Onsite</option>
                                <option value="Remote">Remote</option>
                                <option value="Hybrid">Hybrid</option>
                                <option value="Part Time">Part Time</option>
                            </select>
                        </div>
                        <div className="col-span-full sm:col-span-3">
                            <label htmlFor="firstname" className="text-sm font-bold">Salary Range</label>
                            <select name="range" className="select select-bordered w-full rounded-md p-2 border">
                                <option value="$200-300">$200-300</option>
                                <option value="$300-400">$300-400</option>
                                <option value="$500-600">$500-600</option>
                            </select>
                        </div>
                        <div className="col-span-full sm:col-span-3">
                            <label htmlFor="firstname" className="text-sm font-bold">Job Description</label>
                            <input type="text" placeholder="Job Description" name="description" className="w-full rounded-md p-2 border" />
                        </div>
                        <div className="col-span-full sm:col-span-3">
                            <label htmlFor="lastname" className="text-sm font-bold">Job Posting Date</label>
                            <input type="date" name="date" className="w-full rounded-md p-2 border" />
                        </div>
                        <div className="col-span-full sm:col-span-3">
                            <label htmlFor="firstname" className="text-sm font-bold">Application Deadline</label>
                            <div>
                                <DatePicker selected={selectedDate} onChange={(date) => setSelectedDate(date)} name="deadline" className="w-full rounded-md p-2 border" />
                            </div>
                        </div>
                        <div className="col-span-full sm:col-span-3">
                            <label htmlFor="lastname" className="text-sm font-bold">Job Applicants Number</label>
                            <input type="Number" placeholder="Job Applicants Number" name="applicants" className="w-full rounded-md p-2 border" />
                        </div>
                    </div>
                    <div className="col-span-full">
                        <button className="btn btn-block transition ease-in delay-150 btn-info hover:-translate-y-1 hover:scale-100 shadow-md">Add</button>
                    </div>
                </div>
            </form>
        </section>
    );
};

export default AddJobs;