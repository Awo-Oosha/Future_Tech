import LandingWrapper from "../LandingWrapper";
import {feature_icon1, feature_icon2} from "../../assets/index.jsx";
import {motion} from "framer-motion";
import {zoomIn} from "../../config/motion.js";

const data = [
    {
        title: "Quantity",
        desc: "Over 1,000 articles on emerging tech trends and breakthroughs."
    },
    {
        title: "Variety",
        desc: "Articles cover fields like AI, robotics, biotechnology, and more."
    },
    {
        title: "Frequency",
        desc: "Fresh content added daily to keep you up to date."
    },
    {
        title: "Authoritative",
        desc: "Written by our team of tech experts and industry professionals."
    },

];

const data_two = [
    {
        title: "Depth",
        desc: "500+ research articles for in-depth understanding."
    },
    {
        title: "Graphics",
        desc: "Visual aids and infographics to enhance comprehension."
    },
    {
        title: "Trends",
        desc: "Explore emerging trends in future technology research."
    },
    {
        title: "Contributors",
        desc: "Contributions from tech researchers and academics."
    },
]

const Features = () => {
    return (
        <LandingWrapper
            subhead = "Unlock the Power of"
            head = "FutureTech Features"
            motion_direction="left"
            cta={false}
        >
            <div className="container mx-auto">
                <div className="flex flex-row gap-[80px] items-center">

                    <div className="flex flex-col gap-[50px]">
                        <img src={feature_icon1} alt="" width={80} height={80}/>
                        <div className="flex flex-col gap-[16px]">
                            <h6 className="font-kumbh text-[40px] font-semibold leading-[150%] tracking[-1.2px]">Future Technology Blog</h6>
                            <p className="font-inter text-[18px] font-normal leading-[150%] tracking[-0.54px] text-grey60 w-[400px]">Stay informed with our blog section dedicated to future technology.</p>
                        </div>
                    </div>

                    <div
                        className="pl-[80px] py-[80px] border-l border-dark15 grid grid-cols-2 grid-rows-2 gap-[30px]"
                    >
                        {data.map((item, index) => (
                            <motion.div
                                key={index}
                                className="p-[40px] flex flex-col gap-[20px] rounded-[12px] border border-dark15 bg-dark10"
                                variants={zoomIn(0.2 * index, 0.5 )}
                                initial="hidden"
                                whileInView="show"
                            >
                                <p className="font-inter text-24 font-medium leading-[150%] tracking-wide">{item.title}</p>
                                <p className="text-grey60 font-Inter text-base font-normal leading-150 tracking-wide">{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
            <div className="border-t border-dark15">
                <div className="container mx-auto">
                    <div className="flex flex-row gap-[80px] items-center">

                        <div className="flex flex-col gap-[50px] ">
                            <img src={feature_icon2} alt="" width={80} height={80}/>
                            <div className="flex flex-col gap-[16px]">
                                <h6 className="font-kumbh text-[40px] font-semibold leading-[150%] tracking[-1.2px]">Research Insights Blogs</h6>
                                <p className="font-inter text-[18px] font-normal leading-[150%] tracking[-0.54px] text-grey60 w-[400px]">Dive deep into future technology concepts with our research section.</p>
                            </div>
                        </div>

                        <div className="pl-[80px] py-[80px] border-l border-dark15 grid grid-cols-2 grid-rows-2 gap-[30px]">
                            {data_two.map((item, index) => (
                                <motion.div
                                    key={index}
                                    className="p-[40px] flex flex-col gap-[20px] rounded-[12px] border border-dark15 bg-dark10"
                                    variants={zoomIn( 0.2 * index, 0.5 )}
                                    initial="hidden"
                                    whileInView="show"
                                >
                                    <p className="font-inter text-24 font-medium leading-[150%] tracking-wide">{item.title}</p>
                                    <p className="text-grey60 font-Inter text-base font-normal leading-150 tracking-wide">{item.desc}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </LandingWrapper>
    )
}

export default Features