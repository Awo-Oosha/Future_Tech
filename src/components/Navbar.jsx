import {motion} from "framer-motion";
import { SlideIn } from "../config/motion";
import { nav_data } from "../config/contants";
import { Link } from "react-router-dom";
import CTA from "./CTA";
import { useLocation } from "react-router-dom";
import { logo } from "../assets";


const Navbar = () => {

  const Location = useLocation()

  return (
    <motion.header
      variants={SlideIn("down", "spring", 0.5, 1 )}
      initial="hidden"
      animate="show"
      className="bg-dark10"
    >
      <div className="container mx-auto flex flex-col lg:flex-row justify-between items-center py-[24px]">

        <div className="logo">
          <img src={logo} alt="logo" className="w-full h-full object-contain" />
        </div>

        <nav
          className="flex flex-col lg:flex-row"
        >
          <ul
            className="flex flex-col lg:flex-row items-center lg:gap-[40px] list-none p-0 m-0"
          >
            {nav_data.map((item, index) => (
              <li key={index} className={`py-[14px] px-[24px] font-inter text-grey text-[18px] ${Location.pathname === item.link ? "bg-dark border border-[#333] rounded-lg text-white" : ""} `}>
                <Link to={item.link}>{item.name}</Link>
              </li>
            ))}
          </ul>
        </nav>

         <div>
            <CTA
              text = "Contact us"
              style = {"bg-yellow font-inter border-none"}
            />
          </div>
      </div>
    </motion.header>
  )
}

export default Navbar