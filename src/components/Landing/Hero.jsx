import { motion } from "framer-motion"
import { fadeIn } from "../../config/motion"
import { arrow_top_right, abstract_design, img1, img2, img3, img4 } from "../../assets"

const Hero = () => {
  return (
    <motion.section
      variants={fadeIn("right", "spring", 0.5, 1 )}
      initial="hidden"
      whileInView="show"
    >
      <div className="container mx-auto flex flex-row h-auto">
        
        <div className="flex flex-col gap-[60px] pt-[100px]">

          <div className="flex flex-col items-start gap-[30px]">
            <h6
              className="text-dark40 font-kumbh text-[30px] font-medium leading-[120%] tracking-[-0.9px]"
            >
              Your Journey to Tomorrow Begins Here
            </h6>

            <h2
              className="text-white font-kumbh text-[70px] font-medium leading-[120%] tracking-[-2.1px]"
            >
              Explore the Frontiers of Artificial Intelligence
            </h2>
            <p 
              className="text-grey font-kumbh text-[18xp] font-normal leading-[150%] tracking-[-0.54px]"
            >
              Welcome to the epicenter of AI innovation. 
              FutureTech AI News is your passport to a world where machines think, learn, and reshape the future. 
              Join us on this visionary expedition into the heart of AI.
            </p>
          </div>

          <div className="flex flex-row gap-[50px] w-full border-t border-dark15">

            <div className="py-[20px] px-[50px] flex flex-col gap-[10px] justify-start border-r border-dark15">
              <p className="font-inter font-bold text-[40px] leading-[150%] tracking-[-1.2px]">300 <span className="text-yellow">+</span></p>
              <p className="font-inter text-grey60 text-[18px] leading-[150%] tracking-[-0.54px]">Resources available</p>
            </div>

            <div className="py-[20px] px-[50px] flex flex-col gap-[10px] justify-center border-r border-dark15">
              <p className="font-inter font-bold text-[40px] leading-[150%] tracking-[-1.2px]">12k <span>+</span></p>
              <p className="font-inter text-grey60 text-[18px] leading-[150%] tracking-[-0.54px]">Total Downloads</p>
            </div>

            <div className="py-[20px] px-[50px] flex flex-col gap-[10px] justify-center ">
              <p className="font-inter font-bold text-[40px] leading-[150%] tracking-[-1.2px]">10k <span className="text-yellow">+</span></p>
              <p className="font-inter text-grey60 text-[18px] leading-[150%] tracking-[-0.54px]">Active Users</p>
            </div>

          </div>

        </div>


        <div
          className="border-l border-dark15 relative overflow-clip pl-[80px] pb-[80px] pt-[150px] flex items-end"
        >
          <img src={abstract_design} alt="Hero Image" className="w-full h-full absolute top-[-70px] left-0 opacity-[0.25]" />

          <div className="flex flex-col gap-[30px]">

            <div className="flex flex-row p-[10px] bg-dark10 border border-dark15 w-fit max-w-[225px] rounded-full relative">
              <img src={img1} alt="" className=""/>
              <img src={img2} alt="" className="-translate-x-3" width={60} height={60}/>
              <img src={img3} alt="" className="-translate-x-6" width={60} height={60}/>
              <img src={img4} alt="" className="-translate-x-9" width={60} height={60}/>
            </div>

            <div className="flex flex-col gap-[14px]">
              <p className="font-inter text-[24px] font-medium leading-[150%] tracking-[-0.72px]">Explore 1000+ resources</p>
              <p className="text-[18px] text-grey60 font-inter leading-[150%] tracking-[-0.54px] ">Over 1,000 articles on emerging tech trends and breakthroughs.</p>
            </div>

            <button className="border cursor-pointer relative border-dark15 rounded-[12px] flex flex-row items-center gap-10 py-[18px] px-[24px] bg-dark">
              <p className="text-grey60 text-[18px] leading-[150%] tracking-[-0.54px] font-inter">Explore Resources</p>
              <img src={arrow_top_right} alt="" />
            </button>

          </div>
        </div>

      </div>
    </motion.section>
  )
}

export default Hero