import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";
const Footer = () => {
    return (
        <div className="bg-white lg:mt-28 mt-14 p-4">
            <div className="lg:flex">
                <div className="w-full -mx-6 lg:w-2/5">
                    <div className="px-6">
                        <a href="#">
                            <img className="w-auto h-7 mb-9" src="/jobhub-logo.svg" alt="" />
                        </a>
                        <p className="max-w-sm mt-2 text-gray-500">Jobhub is the heart of the developers community and the best resource to discover and connect with web developers and jobs worldwide.</p>
                    </div>
                </div>
                <div className="mt-6 lg:mt-0 lg:flex-1">
                    <div className="grid grid-cols-2 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                        <div>
                            <h3 className="uppercase text-gray-500 mb-9">Company</h3>
                            <a href="#" className="block mt-2 text-sm text-gray-500 hover:underline">About Us</a>
                            <a href="#" className="block mt-2 text-sm text-gray-500 hover:underline">Our Team</a>
                            <a href="#" className="block mt-2 text-sm text-gray-500 hover:underline">Product</a>
                            <a href="#" className="block mt-2 text-sm text-gray-500 hover:underline">Contact</a>
                        </div>

                        <div>
                            <h3 className="uppercase text-gray-500 mb-9">Product</h3>
                            <a href="#" className="block mt-2 text-sm text-gray-500 hover:underline">Feature</a>
                            <a href="#" className="block mt-2 text-sm text-gray-500 hover:underline">Pricing</a>
                            <a href="#" className="block mt-2 text-sm text-gray-500 hover:underline">Credit</a>
                            <a href="#" className="block mt-2 text-sm text-gray-500 hover:underline">FAQ</a>
                        </div>

                        <div>
                            <h3 className="uppercase text-gray-500 mb-9">Download</h3>
                            <a href="#" className="block mt-2 text-sm text-gray-500 hover:underline">iOS</a>
                            <a href="#" className="block mt-2 text-sm text-gray-500 hover:underline">Android</a>
                            <a href="#" className="block mt-2 text-sm text-gray-500 hover:underline">Microsoft</a>
                            <a href="#" className="block mt-2 text-sm text-gray-500 hover:underline">Desktop</a>
                        </div>

                        <div>
                            <h3 className="uppercase text-gray-500 mb-9">Support</h3>
                            <span className="block mt-2 text-sm text-gray-500 hover:underline">Privacy</span>
                            <span className="block mt-2 text-sm text-gray-500 hover:underline">Help</span>
                            <span className="block mt-2 text-sm text-gray-500 hover:underline">Terms</span>
                            <span className="block mt-2 text-sm text-gray-500 hover:underline">FAQ</span>
                        </div>
                    </div>
                </div>
            </div>

            <hr className="h-px my-6 bg-gray-200 border-none dark:bg-info-700 mt-10"/>

            <div className="grid lg:flex lg:justify-between items-center grid-cols-1 text-center">
                <p className="text-center text-gray-500">Copyright ©2021 <span className="text-info">Jobhub</span>. All Rights Reserved</p>
                <div className="flex mt-6 justify-center items-center gap-4">
                    <a href="#"
                        className="transition ease-in delay-150  btn-info hover:-translate-y-1 hover:scale-110 shadow-md"
                        aria-label="Reddit">
                        <FaFacebook />
                    </a>

                    <a href="#"
                        className="transition ease-in delay-150  btn-info hover:-translate-y-1 hover:scale-110 shadow-md"
                        aria-label="Facebook">
                        <FaInstagram />
                    </a>

                    <a href="#"
                        className="transition ease-in delay-150  btn-info hover:-translate-y-1 hover:scale-110 shadow-md"
                        aria-label="Github">
                        <FaTwitter />
                    </a>
                    <a href="#"
                        className="transition ease-in delay-150  btn-info hover:-translate-y-1 hover:scale-110 shadow-md"
                        aria-label="Github">
                        <FaLinkedin />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Footer;
