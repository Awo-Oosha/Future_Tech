import LandingWrapper from "../LandingWrapper.jsx";
import {useState} from "react";
import {motion} from "framer-motion";
import {fadeIn} from "../../config/motion.js";
import {img1, img2, img3} from "../../assets/index.jsx";

const data = ["All", "Quantum Computing", "AI Ethics", "Space Exploration", "Biotechnology", "Renewable Energy"]

const all_post = [
    {
        author_img: img1,
        author_name: "John Techson",
        topic: "Quantum Computing",
        date: "October 15, 2023",
        title: "The Quantum Leap in Computing",
        desc: "Explore the revolution in quantum computing, its applications, and its potential impact on various industries.",
        like_count: "24.5k",
        comment_count: "50",
        share_count: "20"
    },
    {
        author_img: img2,
        author_name: "Sarah Ethicist",
        topic: "Quantum Computing",
        date: "November 5, 2023",
        title: "The Ethical Dilemmas of AI",
        desc: "A deep dive into ethical challenges posed by AI, including bias, privacy, and transparency.",
        like_count: "32k",
        comment_count: "72",
        share_count: "18"
    },
    {
        author_img: img3,
        author_name: "Astronomer X",
        topic: "Space Exploration",
        date: "December 10, 2023",
        title: "The Mars Colonization Challenge",
        desc: "Exploring the technical and logistical challenges of human colonization on Mars.",
        like_count: "20k",
        comment_count: "31",
        share_count: "12"
    }

]

function Explore() {
    const [clickedItem, setClickedItem] = useState("All")

    const handleClickedItem = (item) => {
        setClickedItem(item)
    }

    return (
        <LandingWrapper
            head={"Explore FutureTech's In-Depth Blog Posts"}
            subhead={"A Knowledge Treasure Trove"}
            motion_direction={"right"}
            cta
            cta_text={"View All Blogs"}
            cta_arrow
        >
            <div
                className="py-[50px] border-b border-dark15 flex items-center"
            >
                <div
                    className="container mx-auto flex flex-row gap-[20px] justify-evenly"
                >
                    {data.map((item, index) => (
                        <motion.div
                            key={index}
                            className={`${clickedItem === item ? "bg-dark10 cursor-not-allowed" : ""} cursor-pointer font-inter text-grey60 min-w-[170px] border-dark15 rounded-[8px] text-[18px] flex flex-row items-center justify-center py-[25px] px-[24px] border`}
                            onClick={() => handleClickedItem(item)}
                            variants={fadeIn("left", "spring", 0.2 * index, 0.5)}
                        >
                            {item}
                        </motion.div>
                    ))}
                </div>
            </div>

            <div>
                <div className="container mx-auto">
                    {all_post.map((item, index) => {
                        return (
                            <div key={index}>
                                {item.author_name}
                            </div>
                        )
                    })}
                </div>
            </div>
        </LandingWrapper>
    );
}

export default Explore;