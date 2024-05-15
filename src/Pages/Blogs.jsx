import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
const Blogs = () => {
    useEffect(() => {
        AOS.init({})
    }, [])
    return (
        <div  data-aos="fade-up"
        data-aos-duration="3000">
            
        </div>
    );
};

export default Blogs;