import { useContext, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import { Tooltip } from 'react-tooltip'

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext)
    // console.log(user);
    // Theme Conditions
    const [theme, setTheme] = useState('light')
    useEffect(() => {
        localStorage.setItem('theme', theme)
        const localTheme = localStorage.getItem('theme')
        document.querySelector('html').setAttribute('data-theme', localTheme)
    }, [theme])
    const handleToggle = (e) => {
        if (e.target.checked) {
            setTheme('dark')
        } else {
            setTheme('light')
        }
    }

    const navLinks = <>
        <NavLink className='lg:mr-7 font-bold text-base hover:text-[#FECA16]' to='/'>Home</NavLink>
        <NavLink className='lg:mr-7 font-bold text-base hover:text-[#FECA16]' to='/alljobs'>All Jobs</NavLink>
        {
            user ?
                <div className="grid grid-cols-1 gap-2 lg:flex">
                    <NavLink className='lg:mr-7 font-bold text-base hover:text-[#FECA16]' to='/appliedjobs'>Applied Jobs</NavLink>
                    <NavLink className='lg:mr-7 font-bold text-base hover:text-[#FECA16]' to='/addjobs'>Add a Job</NavLink>
                    <NavLink className='lg:mr-7 font-bold text-base hover:text-[#FECA16]' to='/myjobs'>My Jobs</NavLink>
                    <NavLink className='font-bold text-base hover:text-[#FECA16]' to='/blogs'>Blogs</NavLink>
                </div>
                :
                <li></li>
        }
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
                <input onChange={handleToggle} type="checkbox" className="toggle toggle-md" />
                {
                    user ?
                        <div className="flex gap-5 items-center">
                            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                                <div className="w-10 rounded-full" data-tooltip-id="my-tooltip" data-tooltip-content={`${user.displayName}  ||  ${user.email}`}>
                                    <img className="h-10 w-10 rounded-full" alt="" src={user.photoURL} />
                                    <Tooltip id="my-tooltip" />
                                </div>
                            </div>
                            <NavLink onClick={logOut} className='btn btn-outline transition ease-in delay-150  btn-info hover:-translate-y-1 hover:scale-110 shadow-md'>SignOut</NavLink>
                        </div>
                        :
                        <NavLink to="/login" className='btn btn-outline transition ease-in delay-150  btn-info hover:-translate-y-1 hover:scale-110 shadow-md'>LogIn</NavLink>
                }
            </div>
        </div>
    );
};

export default Navbar;
