
import Image from "next/image";

import ParticlesContainer from './../components/ParticlesContainer';
import Avatar from './../components/Avatar';
import ProjectsBtn from './../components/ProjectsBtn';
import {motion} from 'framer-motion'
import { fadeIn } from './../variants';
const Home = () => {
  return(
    <div className=" bg-primary/60 h-full">

      <div className=" w-full h-full  bg-gradient-to-r from-primary/10 via-black/30" >
        <div className=" text-center flex flex-col  justify-center xl:pt-40  xl:text-left h-full container  mx-auto ">

          <motion.h3 variants={fadeIn('down' ,0.2)} initial='hidden' animate='show' exit='hidden' className='h3' style={{ fontSize: '45px' }}>
            Hi I'm
          </motion.h3>
            <motion.h1  variants={fadeIn('down' ,0.2)}  initial='hidden' animate='show' exit='hidden' className=" h1">
                OUTIS <br style={{marginTop: '0'}} />
            </motion.h1>
            <span className="text-accent" style={{ fontSize: '35px', marginTop: '-40px' }}> Community Manager & Writer</span>

            <br />
            <br />
            <br />
            <br />
            <br />
        </div>
      </div>
      <div className=" w-[1200px] h-full absolute right-0 bottom-5 ">
        <div className=" bg-none xl:bg-explosion xl:bg-cover xl:bg-right xl:bg-no-repeat w-full h-full  absolute mix-blend-color-dodge translate-z-0 "></div>
        <ParticlesContainer/>
        <motion.div variants={fadeIn('up' ,0.5)}  transition={{duration:1 , ease:'easeInOut'}}  initial='hidden' animate='show' exit='hidden'  className= "absolute bottom-32 lg:bottom-0  lg:right-[8%] w-full h-full max-w-[737px] max-h-[678px] ">
          
      <Avatar />
        
        </motion.div>
      </div>


      

      
    </div>
    
  )
};

export default Home;
