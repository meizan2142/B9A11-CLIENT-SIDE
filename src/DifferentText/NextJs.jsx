import { Link } from "react-router-dom";

const NextJs = () => {
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
                <h1 className="text-4xl">What is NextJs.?</h1>
                <p className="leading-9">Next.js is a React framework for building full-stack web applications. You use React Components to build user interfaces, and Next.js for additional features and optimizations.

                    Under the hood, Next.js also abstracts and automatically configures tooling needed for React, like bundling, compiling, and more. This allows you to focus on building your application instead of spending time with configuration.

                    Whether you are an individual developer or part of a larger team, Next.js can help you build interactive, dynamic, and fast React applications.</p>
            </div>
        </div>
    );
};

export default NextJs;