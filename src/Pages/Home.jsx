
import AllTabs from "../Components/AllTabs";
import TeamSection from "../Components/ExtraSection/TeamSection";
import Hero from "../Components/Hero";

const Home = () => {
    return (
        <div>
            <div>
                <Hero></Hero>
            </div>
            <div>
                <AllTabs></AllTabs>
            </div>
            <div>
                <TeamSection></TeamSection>
            </div>
        </div>
    );
};

export default Home;