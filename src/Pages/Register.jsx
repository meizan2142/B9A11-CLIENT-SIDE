// import { Link } from "react-router-dom";

const Register = () => {
    const handleSignUp = e => {
        e.preventDefault()
        const form = e.target
        const name = form.name.value
        const email = form.name.value;
        const photo = form.photo.value;
        const password = form.password.value;
        const newUser = {name, email, photo, password}
        console.log(newUser);
    }
    return (
        <div className="mt-16 rounded-lg">
            <div className="hero-content flex-col space-y-3">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold text-info">Register!</h1>
                </div>
                <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleSignUp} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-bold">Name</span>
                            </label>
                            <input type="text" placeholder="Name" name="name" className="input input-bordered" required />
                        </div>
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
                            <input type="password" placeholder="Password" name="password" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-bold">Photo URL</span>
                            </label>
                            <input type="text" name="photo" placeholder="Photo URL" className="input input-bordered" required />
                        </div>
                        <div className="form-control mt-6 space-y-5">
                            <button className="btn btn-outline transition ease-in delay-150  btn-info hover:-translate-y-1 hover:scale-110 shadow-md">Register</button>
                        </div>
                        {/* <p>Already Have an Account? Please, <Link to='/login' className="font-bold text-info">Login</Link></p> */}
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;