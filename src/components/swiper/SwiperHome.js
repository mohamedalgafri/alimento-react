
import React from 'react'
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


import imgshadowsl from '../../assets/image/Rectangle 3491.png';
import imgswip from '../../assets/image/pexels-ella-olsson-1640770.png';

const SwiperHome = () => {
    return (
        <Swiper


        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={0}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}
        >
          <SwiperSlide>
                <div class="slideheader">
                    <img src={imgshadowsl} alt=""/>
                    <img src={imgswip} alt=""/>
        
                    <div class="textslide">
                        <h1>قصة ALIMENTO  </h1>
                        <p>شغفنا الذي لا ينضب لحياة أفضل هو المكان الذي تبدأ منه قصتنا. مقرها في غزة ، مدينة الحمضيات ، بدأت Alimento برؤية لتعزيز أسلوب حياة أكثر صحة للسكان المحليين</p>
                       <a href=""><div class="btnheader"> <p>عرض المزيد</p></div></a> 
                    </div>
                  </div>
          </SwiperSlide>

          <SwiperSlide>
                <div class="slideheader">
                <img src={imgshadowsl} alt=""/>
                <img src={imgswip} alt=""/>
        
                    <div class="textslide">
                        <h1>قصة ALIMENTO  </h1>
                        <p>شغفنا الذي لا ينضب لحياة أفضل هو المكان الذي تبدأ منه قصتنا. مقرها في غزة ، مدينة الحمضيات ، بدأت Alimento برؤية لتعزيز أسلوب حياة أكثر صحة للسكان المحليين</p>
                       <a href=""><div class="btnheader"> <p>عرض المزيد</p></div></a> 
                    </div>
                  </div>
          </SwiperSlide>

          <SwiperSlide>
                <div class="slideheader">
                <img src={imgshadowsl} alt=""/>
                <img src={imgswip} alt=""/>
        
                    <div class="textslide">
                        <h1>قصة ALIMENTO  </h1>
                        <p>شغفنا الذي لا ينضب لحياة أفضل هو المكان الذي تبدأ منه قصتنا. مقرها في غزة ، مدينة الحمضيات ، بدأت Alimento برؤية لتعزيز أسلوب حياة أكثر صحة للسكان المحليين</p>
                       <a href=""><div class="btnheader"> <p>عرض المزيد</p></div></a> 
                    </div>
               
                  </div>
          </SwiperSlide>

          <SwiperSlide>
                <div class="slideheader">
                <img src={imgshadowsl} alt=""/>
                <img src={imgswip} alt=""/>
        
                    <div class="textslide">
                        <h1>قصة ALIMENTO  </h1>
                        <p>شغفنا الذي لا ينضب لحياة أفضل هو المكان الذي تبدأ منه قصتنا. مقرها في غزة ، مدينة الحمضيات ، بدأت Alimento برؤية لتعزيز أسلوب حياة أكثر صحة للسكان المحليين</p>
                       <a href=""><div class="btnheader"> <p>عرض المزيد</p></div></a> 
                    </div>
                  </div>
          </SwiperSlide>
          
      
        </Swiper>
      );
}

export default SwiperHome


