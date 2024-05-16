import { Link } from "react-router-dom";

const Access = () => {
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
                <h1 className="text-4xl">What is an Access Token?</h1>
                <p className="leading-9">When a user logins in, the authorization server issues an access token, which is an artifact that client applications can use to make secure calls to an API server. When a client application needs to access protected resources on a server on behalf of a user, the access token lets the client signal to the server that it has received authorization by the user to perform certain tasks or access certain resources.
                    OAuth 2.0 does not define a format for access tokens. At Auth0, for example, access tokens issued for the Management API and access tokens issued for any custom API that you have registered with Auth0 follow the JSON Web Token (JWT) standard. Their basic structure conforms to the typical JWT structure, and they contain standard JWT claims asserted about the token itself.</p>
            </div>
        </div>
    );
};

export default Access;