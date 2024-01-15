import PropTypes from 'prop-types';
import {arrow_top_right} from "../assets/index.jsx";
import {motion} from "framer-motion";

const CTA = ({ text, style, arrow, handleClick }) => {
    return (
        <motion.button
            className={`${style} flex flex-row items-center gap-[10px]`}
            whileTap = {{
                scale: 0.8,
                transition:{duration: 0.1}
            }}
            onClick={handleClick}
        >
            <span>{text}</span> {arrow ? (<><img src={arrow_top_right} alt={""} width={24} height={24}/></>) : ""}
        </motion.button>
    );
};

CTA.propTypes = {
    text: PropTypes.string.isRequired,
    style: PropTypes.string,
    arrow: PropTypes.bool,
    handleClick: PropTypes.func
};

export default CTA;
