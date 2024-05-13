import { NavLink } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div className="lg:w-[1192px] lg:mx-auto text-center grid justify-center items-center">
            <img src="https://github.com/ProgrammingHero1/coffee-store-espresso-emporium/blob/main/images/404/404.gif?raw=true" alt="" />
            <NavLink to='/' className="btn btn-outline transition ease-in delay-150  btn-info hover:-translate-y-1 hover:scale-110 shadow-md">Back To Home</NavLink>
        </div>
    );
};

export default ErrorPage;