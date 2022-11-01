import React from 'react'
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import CardProdact from '../CardProdact';

import pp1 from '../../assets/image/pp1.png'
import pp2 from '../../assets/image/pp2.png'
import pp3 from '../../assets/image/pp3.png'
import pp4 from '../../assets/image/pp4.png'
import pp5 from '../../assets/image/pp5.png'
import pp6 from '../../assets/image/pp6.png'




const SwiperPro = () => {
  return (
    <Swiper



      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      navigation
      spaceBetween={10}
      slidesPerView={1}
      breakpoints={{
        470: {
          slidesPerView: 2,
          spaceBetween: 15,
        },
        991: {
          slidesPerView: 3,
          spaceBetween: 15,
        },
        1200: {
          slidesPerView: 4,
          spaceBetween: 15,
        },
      }}
    >
      <SwiperSlide>
        <CardProdact imgpro={pp1}/>
      </SwiperSlide>
      <SwiperSlide>
         <CardProdact imgpro={pp2}/>
      </SwiperSlide>
      <SwiperSlide>
         <CardProdact imgpro={pp3}/>
      </SwiperSlide>

      <SwiperSlide>
         <CardProdact imgpro={pp4}/>
      </SwiperSlide>
      <SwiperSlide>
         <CardProdact imgpro={pp5}/>
      </SwiperSlide>
      <SwiperSlide>
         <CardProdact imgpro={pp6}/>
      </SwiperSlide>

    </Swiper>
  )
}

export default SwiperPro
