// data
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
          // url: 'https://twitter.com/blacklabelcx',
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

import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import 'swiper/css/navigation'; // Import Swiper navigation styles
import { Pagination } from "swiper"; // Import Swiper pagination module

import { Bs0Circle, BsArrowRight, BsDisplay } from "react-icons/bs";
import Image from "next/image";

const WorkSlider = () => {
  return (
    <Swiper
      spaceBetween={10}
      pagination={{
        clickable: true,
        renderBullet: function (index, className) {
          return '<span class="' + className + '">' + (index + 1) + '</span>';
        }
      }}
      modules={[Pagination]}
      className="h-[280px] sm:h-[480px]"
    >
      {workSlides.slides.map((item, index) => {
        return (
          <SwiperSlide key={index}>
            <div className="grid grid-cols-2 grid-rows-2 gap-4 cursor-pointer">
              {item.images.map((img, inx) => {
                return (
                  <a key={inx} href={img.url} target="_blank" rel="noopener noreferrer" className="relative rounded-lg overflow-hidden flex items-center justify-start group">
                    <div className="flex items-center justify-center relative overflow-hidden group">
                      <Image src={img.path} width={500} height={300} alt="image" />
                      <div className="absolute inset-0 bg-gradient-to-l from-transparent via-[#e838cc] to-[#4a22bd] opacity-0 group-hover:opacity-80 transition-all duration-300"></div>
                      <div className="absolute bottom-0 translate-y-full group-hover:-translate-y-10 group-hover:xl:-translate-y-20 transition-all duration-300">
                        {img.name && <div>{img.name}</div>} {/* Display name */}
                        {img.role && <div>{img.role}</div>} {/* Display role */}
                        <div className="flex items-center gap-x-2 text-[13px] tracking-[0.2em]">
                          {img.year && <div>{img.year}</div>} {/* Display year */}
                        </div>
                      </div>
                    </div>
                  </a>
                );
              })}
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default WorkSlider;
