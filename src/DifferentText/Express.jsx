import { Link } from "react-router-dom";

const Express = () => {
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
                <h1 className="text-4xl">What is an Express?</h1>
                <p className="leading-9">Express is a node js web application framework that provides broad features for building web and mobile applications. It is used to build a single page, multipage, and hybrid web application.

                    It is a layer built on the top of the Node js that helps manage servers and routes.</p>
            </div>
        </div>
    );
};

export default Express;