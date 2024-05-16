import { Link } from "react-router-dom";

const Refresh = () => {
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
                <h1 className="text-4xl">What is an Refresh Token?</h1>
                <p className="leading-9">As mentioned, for security purposes, access tokens may be valid for a short amount of time. Once they expire, client applications can use a refresh token to refresh the access token. That is, a refresh token is a credential artifact that lets a client application get new access tokens without having to ask the user to log in again. The client application can get a new access token as long as the refresh token is valid and unexpired. Consequently, a refresh token that has a very long lifespan could theoretically give infinite power to the token bearer to get a new access token to access protected resources anytime. The bearer of the refresh token could be a legitimate user or a malicious user. As such, security companies, such as Auth0, create mechanisms to ensure that this powerful token is mainly held and used continuously by the intended parties.</p>
            </div>
        </div>
    );
};

export default Refresh;