import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation'; // Import Swiper navigation styles
import 'swiper/css/pagination'; // Import Swiper pagination styles
import { Navigation, Pagination } from "swiper"; // Import Swiper navigation and pagination modules
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import Image from "next/image";

// Sample data
const workSlides = {
  slides: [
    {
      images: [
        {
          title: 'ROX Collectives',
          path: '/ROX.png',
          name: 'ROX Collective',
          role: 'Moderator',
          year: '2021',
          url: 'https://twitter.com/ROXcollective',
        },
        {
          title: 'Black Label',
          path: '/BlackLabel.png',
          name: 'Black Label',
          role: 'Community Manager',
          year: '2021',
          url: 'https://twitter.com/blacklabelcx',
        },
      ],
    },
    {
      images: [
        {
          title: 'NFT Arsenal',
          path: '/NFTArsenal.jpg',
          name: 'NFT Arsenal',
          role: 'Community Manager',
          year: '2021',
        },
        {
          title: 'Polychain Monsters',
          path: '/PolychainMonsters.png',
          name: 'Polychain Monsters',
          role: 'Marketing',
          year: '2022',
          url: 'https://twitter.com/polychainmon',
        },
      ],
    },
    {
      images: [
        {
          title: 'Candy Pay',
          path: '/CandyPay.png',
          name: 'Candy Pay',
          role: 'Manager',
          year: '2022',
          url: 'https://twitter.com/candypayfun',
        },
        {
          title: 'CLLCTV',
          path: '/TheCLLCTV.png',
          name: 'CLLCTV',
          role: 'Community Manager',
          year: '2022',
          url: 'https://twitter.com/cllctvSOL',
        },
      ],
    },
    {
      images: [
        {
          title: 'Legends of SOL',
          path: '/LegendsofSOL.png',
          name: 'Legends of SOL',
          role: 'Discord Admin',
          year: '2024',
          url: 'https://twitter.com/Legends_of_SOL',
        },
        {
          title: 'SDrive',
          path: '/SDrive.png',
          name: 'SDrive',
          role: 'Marketing',
          year: '2024',
          url: 'https://twitter.com/sdrive_app',
        },
      ],
    },
    {
      images: [
        {
          title: 'Webacy',
          path: '/Webacy.png',
          name: 'Webacy',
          role: 'Marketing Partner',
          year: '2024',
          url: 'https://twitter.com/mywebacy',
        },
      ],
    },
  ],
};

const WorkSlider = () => {
  return (
    <div className="relative">
      <Swiper
        spaceBetween={10}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Navigation, Pagination]}
        className="h-[280px] sm:h-[480px]"
      >
        {workSlides.slides.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="grid grid-cols-2 grid-rows-2 gap-4 cursor-pointer">
              {item.images.map((img, inx) => (
                <a key={inx} href={img.url} target="_blank" rel="noopener noreferrer" className="relative rounded-lg overflow-hidden flex items-center justify-start group">
                  <div className="flex items-center justify-center relative overflow-hidden group">
                    <Image src={img.path} width={500} height={300} alt={img.name} />
                    <div className="absolute inset-0 bg-gradient-to-l from-transparent via-[#e838cc] to-[#4a22bd] opacity-0 group-hover:opacity-80 transition-all duration-300"></div>
                    <div className="absolute bottom-0 translate-y-full group-hover:-translate-y-10 group-hover:xl:-translate-y-20 transition-all duration-300">
                      {img.name && <div>{img.name}</div>}
                      {img.role && <div>{img.role}</div>}
                      <div className="flex items-center gap-x-2 text-[13px] tracking-[0.2em]">
                        {img.year && <div>{img.year}</div>}
                      </div>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="swiper-button-prev bottom-0 left-0">
        <BsArrowLeft className="text-2xl text-gray-700 hover:text-gray-900" />
      </div>
      <div className="swiper-button-next bottom-0 right-0">
        <BsArrowRight className="text-2xl text-gray-700 hover:text-gray-900" />
      </div>
      <style jsx>{`
        .swiper-button-prev, .swiper-button-next {
          position: absolute;
          top: 100%;
          transform: translateY(-50%);
        }
        .swiper-button-prev {
          left: 10px;
        }
        .swiper-button-next {
          right: 10px;
        }
      `}</style>
    </div>
  );
};

export default WorkSlider;
