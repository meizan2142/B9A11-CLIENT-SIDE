import { Outlet } from "react-router-dom";
import Navbar from "../Shared/Navbar";

const Root = () => {
    return (
        <div className="lg:w-[1192px] lg:mx-auto mt-5">
            <div><Navbar></Navbar></div>
            <Outlet></Outlet>
        </div>
    );
};

export default Root;