// testimonial data
const testimonialData = [
  {
    image: '/t-avt-1.png',
    name: 'Anne Smith',
    position: 'Customer',
    message:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum expedita odit beatae, cupiditate saepe quam officia aut placeat quas neque!',
  },
  {
    image: '/t-avt-2.png',
    name: 'Jane Doe',
    position: 'Customer',
    message:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum expedita odit beatae, cupiditate saepe quam officia aut placeat quas neque!',
  },
  {
    image: '/t-avt-3.png',
    name: 'Jhon Doe',
    position: 'Customer',
    message:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum expedita odit beatae, cupiditate saepe quam officia aut placeat quas neque!',
  },
];

import {
  
FaQuoteLeft
} from "react-icons/fa";

import Image from "next/image";

import {Swiper,SwiperSlide}from 'swiper/react'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

import {  Navigation, Pagination } from "swiper";
// import { Navigation } from 'swiper';

const TestimonialSlider = () => {
  return (<Swiper navigation={true} spaceBetween={10} pagination={{clickable:true}} 
  modules={[Navigation ,Pagination]}
  className=" h-[400px] "
  >
  
 {testimonialData.map((ele , index)=>{
  return <SwiperSlide key={index}>

   <div className=" flex flex-col items-center md:flex-row gap-x-8 h-full px-16 ">

<div className=" w-full max-w-[300px] flex flex-col xl:justify-normal items-center
 relative mx-auto xl:mx-0    ">
  <div className=" flex flex-col justify-center text-center ">
    <div className="  mb-2 mx-auto ">
      <Image src={ele.image} width={100} height={100} alt="img"/>
    </div>
    <div className=" text-lg">
      {ele.name}
    </div>
    <div className=" text-[12px] uppercase font-extralight tracking-widest">
      {ele.position}
    </div>
  </div>
</div>


 <div className="  flex-1 flex flex-col  
 justify-center before:w-[1px] xl:before:bg-white/20  xl:before:absolute 
 xl:before:left-0 xl:before:h-[200px] relative xl:pl-20 ">
  <div className=" mb-4">
    <FaQuoteLeft className=" text-4xl xl:text-6xl text-white/20 mx-auto md:mx-0"/>
  </div>

  <div className=" xl:text-lg text-center md:text-left ">{ele.message}</div>


 </div>

   </div>

  </SwiperSlide>
 })} 
 
  
  
  </Swiper>)
};




export default TestimonialSlider;



{/* <div className="grid grid-cols-2 grid-rows-2 gap-4  cursor-pointer  " >
{ele.image.map((img, inx)=>{

  return <div key={inx} className=" relative rounded-lg overflow-hidden flex items-center justify-start 
  group">

    <div className=" flex items-center justify-center relative overflow-hidden group  ">

      <Image  src={img.path} width={500} height={300} alt="image"/>

      <div className=" absolute  inset-0 bg-gradient-to-l from-transparent via-[#e838cc]
      to-[#4a22bd] opacity-0 group-hover:opacity-80  transition-all duration-300 "></div>

      <div className=" absolute bottom-0  translate-y-full group-hover:-translate-y-10 group-hover:xl:-translate-y-20  transition-all duration-300 ">
      <div className=" flex items-center gap-x-2 text-[13px] tracking-[0.2em]">
      <div className=" delay-100 "> Live</div>
      <div className=" translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-150"> Project</div>
      <div className='text-xl  translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-200'> <BsArrowRight/></div>

      </div>

      </div>


    </div>


  </div>

})}
</div> */}
