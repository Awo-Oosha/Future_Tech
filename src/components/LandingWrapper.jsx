import { motion } from 'framer-motion';
import PropTypes from 'prop-types';
import { fadeIn } from '../config/motion';
import CTA from "./CTA.jsx";
const LandingWrapper = ({ children, subhead, head, motion_direction, cta, cta_text, cta_arrow, clickFunc }) => {
  return (
    <motion.section
      variants={fadeIn(motion_direction, "tween", 0.5, 1)}
      initial="hidden"
      whileInView="show"
    >
      <div className='py-[120px] border-t border-b border-dark15 bg-dark10'>
        <div className='container mx-auto flex flex-row items-center gap-[250px]'>
          <div className='flex flex-col  gap-[16px] justify-center'>
            <h6 className='font-inter text-[20px] font-medium leading-[150%] tracking-[-0.6px] w-fit bg-dark20 rounded-md px-[10px] py-[6px]'>{subhead}</h6>
            <h2 className='text-[58px] font-kumbh font-medium leading-[130%] tracking-[-1.74px]'>{head}</h2 >
          </div>
          {cta ? (
              <div>
                <CTA
                    text={cta_text}
                    style={"min-w-[200px] leading-[150%] tracking-[-0.54px] border rounded-[12px] border-dark15 bg-dark text-grey60 font-inter text-[18px]"}
                    arrow={cta_arrow}
                    handleClick={clickFunc}
                />
              </div>
          ) : ""}
        </div>
      </div>
      {children}
    </motion.section>
  );
};

LandingWrapper.propTypes = {
  children: PropTypes.node.isRequired,
  subhead: PropTypes.string.isRequired,
  head: PropTypes.string.isRequired,
  motion_direction: PropTypes.string.isRequired,
  cta: PropTypes.bool.isRequired,
  cta_text: PropTypes.string,
  cta_arrow: PropTypes.bool,
  clickFunc: PropTypes.func
};

export default LandingWrapper;
