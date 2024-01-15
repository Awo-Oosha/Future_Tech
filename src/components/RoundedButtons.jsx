import { arrow_top_right_black } from "../assets"
import { motion } from "framer-motion"
import PropTypes from 'prop-types';


const RoundedButtons = ({handleClick}) => {
  return (
    <motion.button className="bg-yellow rounded-full w-[52px] h-[52px] flex justify-center items-center"
      whileTap={{
        scale: 0.8
      }}

      onClick={handleClick}
    >
      <img src={arrow_top_right_black} alt="" width={30} height={30}/> 
    </motion.button>
  )
}

RoundedButtons.propTypes = {
  handleClick: PropTypes.string,
};

export default RoundedButtons