import { useLoaderData } from "react-router-dom";
import TeamCard from "./TeamCard";
import { motion } from "framer-motion"
const containerVariants = {
    hidden: { opacity: 0 },
    show: {opacity: 1, 
        transition: {
            staggerChildren: 0.40
        },
    },
}
const TeamSection = () => {
    const teamInfo = useLoaderData()
    return (
        <div className="mt-32 text-center space-y-7">
            <div className="space-y-5">
                <h1 className="font-bold text-5xl">Meet Our Team</h1>
                <p className="text-base">Find the type of work you need, clearly defined and ready to start. Work begins as soon as you purchase <br /> and provide requirements.</p>
            </div>
            <motion.section
            variants={containerVariants}
            initial="hidden"
            animate="show"
            className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 gap-5 lg:p-0 p-8">
                {
                    teamInfo.map(team => <TeamCard key={team.id} team={team}></TeamCard>)
                }
            </motion.section>
        </div>
    );
};

export default TeamSection;