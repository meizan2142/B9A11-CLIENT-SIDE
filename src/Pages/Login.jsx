import { useContext, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import { FaGoogle } from "react-icons/fa";
import AOS from 'aos';
import 'aos/dist/aos.css';
const Login = () => {
    useEffect(() => {
        AOS.init({})
    }, [])
    const { signIn, googleLogIn } = useContext(AuthContext)
    const navigate = useNavigate()
    const location = useLocation()
    const handleSignIn = e => {
        e.preventDefault()
        const form = e.target;
        const password = form.password.value;
        const email = form.email.value;
        const user = { email, password }
        console.log(user);
        signIn(email, password)
            .then(res => {
                console.log(res.user)
                navigate(location?.state ? location?.state : '/')
            })
            .catch(err => console.log(err))
        // googleLogIn(email, password)
        // console.log(email, password);
        //     // .then(res => {
        //     //     console.log(res.user)
        //     //     navigate(location?.state ? location?.state : '/')
        //     // })
        //     // .catch(err => console.log(err))
    }
    return (
        <div className="mt-16 rounded-lg">
            <div className="hero-content flex-col space-y-3" data-aos="fade-up"
                data-aos-duration="3000">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold text-info">Login now!</h1>
                </div>
                <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleSignIn} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-bold">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="Email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-bold">Password</span>
                            </label>
                            <input type="password" name="password" placeholder="Password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover font-bold">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6 space-y-5">
                            <button className="btn btn-outline transition ease-in delay-150  btn-info hover:-translate-y-1 hover:scale-110 shadow-md">Login</button>
                            <button onClick={() => googleLogIn()} className="btn btn-outline transition ease-in delay-150  btn-info hover:-translate-y-1 hover:scale-110 shadow-md"><FaGoogle />
                                Sign In with Google</button>
                            <p>New to Here? Please, <Link to='/register' className="font-bold text-info">Register</Link></p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;