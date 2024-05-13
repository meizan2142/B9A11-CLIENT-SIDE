import { NavLink } from "react-router-dom";

const BlogSection = () => {
    return (
        <div className="mt-32 text-center space-y-7">
            <div className="space-y-4">
                <h1 className="font-bold text-5xl">How To Get Started</h1>
                <p className="text-gray-500">Set up a comprehensive profile highlighting your skills, experience, and aspirations. <br /> Make a strong first impression on potential employers.</p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-3">
                <div className="card w-96 hover:bg-green-500 hover:text-white border transition ease-in delay-150 hover:-translate-y-1 hover:scale-100 ">
                    <div className="card-body items-center text-center space-y-2">
                        <img src="https://i.ibb.co/jwtRDc0/icon-1.webp" alt="" />
                        <h2 className="card-title">Need Any Job</h2>
                        <p>But must expla to you how all this mistaken idea of denouncing pleure and praising pain was born.</p>
                        <NavLink to='/addjobs' className="btn btn-outline  transition ease-in delay-150   hover:-translate-y-1 hover:scale-110 shadow-md">Apply Now</NavLink>
                    </div>
                </div>
                <div className="card w-96 hover:bg-green-500 hover:text-white border transition ease-in delay-150   hover:-translate-y-1 hover:scale-100 ">
                    <div className="card-body items-center text-center space-y-2">
                        <img src="https://i.ibb.co/G5r8FwT/icon-2.webp" alt="" />
                        <h2 className="card-title">Post Your Job</h2>
                        <p>But must expla to you how all this mistaken idea of denouncing pleure and praising pain was born.</p>
                        <NavLink to='/addjobs' className="btn btn-outline  transition ease-in delay-150   hover:-translate-y-1 hover:scale-110 shadow-md">Apply Now</NavLink>
                    </div>
                </div>
                <div className="card w-96 hover:bg-green-500 hover:text-white border transition ease-in delay-150   hover:-translate-y-1 hover:scale-100 ">
                    <div className="card-body items-center text-center space-y-2">
                        <img src="https://i.ibb.co/Pj2YsdB/icon-3.webp" alt="" />
                        <h2 className="card-title">Job Market Data</h2>
                        <p>But must expla to you how all this mistaken idea of denouncing pleure and praising pain was born.</p>
                        <NavLink to='/addjobs' className="btn btn-outline transition ease-in delay-150   hover:-translate-y-1 hover:scale-110 shadow-md">Apply Now</NavLink>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BlogSection;