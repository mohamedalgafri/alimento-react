// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import p1 from '../../assets/image/p1.png'
import p2 from '../../assets/image/p2.png'
import p3 from '../../assets/image/p3.png'
import p4 from '../../assets/image/p4.png'
import p5 from '../../assets/image/p5.png'

const Swiperslide2 = () => {
  return (
    <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y]}
 
      spaceBetween={10}
      slidesPerView={2}
      breakpoints= {{

        640: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 4,
          spaceBetween: 40,
        },
        1024: {
          slidesPerView: 4,
          spaceBetween: 40,
        },
      }}

      

      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
      <SwiperSlide>
            <div className="swiper-slide"> 
                <a className="cardCategories">
                    <img src={p1} alt=""/>
                    <div className="textCardCategories">
                        <p>محاصيل طازجة</p>
                        <p>Fresh Produce</p>
                    </div>
                </a>
            </div>
      </SwiperSlide>
      <SwiperSlide>
            <div className="swiper-slide"> 
                <a className="cardCategories">
                    <img src={p2} alt=""/>
                    <div className="textCardCategories">
                        <p>محاصيل طازجة</p>
                        <p>Fresh Produce</p>
                    </div>
                </a>
            </div>
      </SwiperSlide>
      <SwiperSlide>
            <div className="swiper-slide"> 
                <a className="cardCategories">
                    <img src={p3} alt=""/>
                    <div className="textCardCategories">
                        <p>محاصيل طازجة</p>
                        <p>Fresh Produce</p>
                    </div>
                </a>
            </div>
      </SwiperSlide>
      <SwiperSlide>
            <div className="swiper-slide"> 
                <a className="cardCategories">
                    <img src={p4} alt=""/>
                    <div className="textCardCategories">
                        <p>محاصيل طازجة</p>
                        <p>Fresh Produce</p>
                    </div>
                </a>
            </div>
      </SwiperSlide>
      <SwiperSlide>
            <div className="swiper-slide"> 
                <a className="cardCategories">
                    <img src={p5} alt=""/>
                    <div className="textCardCategories">
                        <p>محاصيل طازجة</p>
                        <p>Fresh Produce</p>
                    </div>
                </a>
            </div>
      </SwiperSlide>


    </Swiper>
  )
}

export default Swiperslide2
