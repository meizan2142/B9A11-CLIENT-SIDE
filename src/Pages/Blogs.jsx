import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
const Blogs = () => {
    useEffect(() => {
        AOS.init({})
    }, [])
    return (
        <div
            data-aos="fade-up"
            data-aos-duration="3000"
        >
            <div className='grid grid-cols-2 lg:p-20 p-5 justify-center items-center'>
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
                <div className='text-2xl font-bold'>
                    Choose Anything From the Left what are given.
                    What you will choose, will be shown here.
                </div>
            </div>
        </div>
    );
};

export default Blogs;