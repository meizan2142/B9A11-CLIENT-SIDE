import { NavLink } from "react-router-dom";

const Navbar = () => {
    const navLinks = <>
        <NavLink className='lg:mr-7 font-bold text-base' to='/'>Home</NavLink>
        <NavLink className='lg:mr-7 font-bold text-base' to='/alljobs'>All Jobs</NavLink>
        <NavLink className='lg:mr-7 font-bold text-base' to='/appliedjobs'>Applied Jobs</NavLink>
        <NavLink className='lg:mr-7 font-bold text-base' to='/addjobs'>Add a Job</NavLink>
        <NavLink className='font-bold text-base' to='/myjobs'>My Jobs</NavLink>
    </>
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[10] shadow bg-base-100 rounded-box w-52 space-y-3">
                        {navLinks}
                    </ul>
                </div>
                <img className="w-20 md:w-32 lg:w-36" src="/jobhub-logo.svg" alt="" />
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navLinks}
                </ul>
            </div>
            <div className="navbar-end lg:gap-4 gap-2">
                <input type="checkbox" className="toggle toggle-md" />
                <div tabIndex={0} role="button" className="btn btn-circle avatar  hidden lg:flex">
                    <div className="w-10 rounded-full ">
                        <img alt="Tailwind CSS Navbar component" src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />  
                    </div>
                </div>
                <NavLink to='/login' className="btn btn-outline transition ease-in delay-150  btn-info hover:-translate-y-1 hover:scale-110 shadow-md">Login</NavLink>
            </div>
        </div>
    );
};

export default Navbar;
