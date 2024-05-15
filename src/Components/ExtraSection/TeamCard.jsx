import PropTypes from 'prop-types';
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion"

const cardVariants = {
    hidden: { opacity: 0 }, show: { opacity: 1 }
}
const TeamCard = ({ team }) => {
    const { name, position, img } = team
    return (
        <motion.div variants={cardVariants} className="w-full max-w-xs overflow-hidden bg-white rounded-lg shadow-lg">
            <img className="object-cover w-full h-56" src={img} alt="avatar" />
            <div className="py-5 text-center">
                <a href="#" className="block text-xl font-bold " role="link">{name}</a>
                <span className="text-sm ">{position}</span>
            </div>
            <div className='flex justify-center items-center gap-3 mb-5'>
                <FaFacebook />
                <FaInstagram />
                <FaTwitter />
                <FaLinkedin />
            </div>
        </motion.div>
    );
};

TeamCard.propTypes = {
    team: PropTypes.object
}
export default TeamCard;