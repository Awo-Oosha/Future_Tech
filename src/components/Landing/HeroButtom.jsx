import { expert_icon, news_icon, global_icon } from "../../assets"
import RoundedButtons from "../RoundedButtons"
import { motion } from "framer-motion"
import { fadeIn } from "../../config/motion"


const data = [
  {
    img: news_icon,
    title: "Latest News Updates",
    desc: "Stay Current",
    insights: "Over 1,000 articles published monthly"
  },
   {
    img: expert_icon,
    title: "Expert Contributors",
    desc: "Trusted Insights",
    insights: "50+ renowned AI experts on our team"
  },
   {
    img: global_icon,
    title: "Global Readership",
    desc: "Worldwide Impact",
    insights: "2 million monthly readers"
  },
]

const HeroButtom = () => {
  return (
    <motion.section 
      className="w-full border-t border-dark15"
      variants={fadeIn("left", "spring", 0.2, 0.5 )}
      initial="hidden"
      whileInView="show"  
    >
      <div className="container mx-auto flex flex-row h-auto">
        {data.map((item, index) => (
          <motion.div 
            key={index} 
            className="py-[50px] flex flex-col gap-[30px] px-[70px] even:border-r even:border-l even:border-dark15"
            variants={fadeIn("right", "tween", 0.5 * index , 1)}
          >
            <img src={item.img} alt={item.title} width={50} height={50} />

            <div className="flex flex-row gap-[20px]">
              <div className="flex-col gap-[4px] min-w-[230px]">
                <h3 className="font-inter font-medium text-[20px] leading-[150%] tracking-[-0.6px] ">{item.title}</h3>
                <p className="font-inter font-normal text-[18px] leading-[150%] tracking-[-0.54px] text-grey">{item.desc}</p>
              </div>

              <RoundedButtons />
            </div>

            <p className="font-normal font-kumbh text-[15px] leading-[150%] tracking-[-0.6px] text-grey60">{item.insights}</p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  )
}

export default HeroButtom