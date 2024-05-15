
import { useEffect } from "react";
import AllTabs from "../Components/AllTabs";
import BlogSection from "../Components/ExtraSection/BlogSection";
import TeamSection from "../Components/ExtraSection/TeamSection";
import Hero from "../Components/Hero";
import AOS from 'aos';
import 'aos/dist/aos.css';
const Home = () => {
    useEffect(() => {
        AOS.init({})
    }, [])
    return (
        <div>
            <div data-aos="fade-up"
                data-aos-duration="3000">
                <Hero></Hero>
            </div>
            <div data-aos="fade-up"
                data-aos-duration="3000">
                <AllTabs></AllTabs>
            </div>
            <div data-aos="fade-up"
                data-aos-duration="3000">
                <TeamSection></TeamSection>
            </div>
            <div data-aos="fade-up"
                data-aos-duration="3000">
                <BlogSection></BlogSection>
            </div>
        </div>
    );
};

export default Home;