import { Link } from "react-router-dom";

const MyCode = () => {
    return (
        <div
            data-aos="fade-up"
            data-aos-duration="3000"
            className="grid grid-cols-2 lg:p-20 p-5 justify-center">
            <div className='space-y-3'>
            <h1 className='font-bold text-2xl'>TABLE OF CONTENTS</h1>
                <div className='space-y-3 grid grid-cols-1'>
                    <Link to='/access' className='hover:font-bold'>Access Token</Link>
                    <Link to='/refresh' className='hover:font-bold'>Refresh Token</Link>
                    <Link to='/express' className='hover:font-bold'>Express JS</Link>
                    <Link to='/nextjs' className='hover:font-bold'>Next JS</Link>
                    <Link to='/mycode' className='hover:font-bold'>About My Code</Link>
                </div>
            </div>
            <div className="space-y-3">
                <h1 className="text-4xl">About My Code</h1>
                <p className="leading-9">
                    Hello, I am Saif! Today I will tell you about my assignment project. I implemented react packages such as: Tootip, Framer Motion Animation, AOS Animation etc.
                    This assignment is fully responsived.
                    Some private route are included such as : Blogs, Applied Jobs, Add Jobs, My Jobs etc. When user logged in he will visit these private route otherwise not. 
                    This assignment is based on specially Firebase and Mongodb.
                    Such a great assignment project I have ever made. Thank You!
                </p>
            </div>
        </div>
    );
};

export default MyCode;