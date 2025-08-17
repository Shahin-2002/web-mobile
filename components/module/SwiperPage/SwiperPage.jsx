import React from 'react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';

function SwiperPage() {
  return (
    <>
      <div className="border-2 border-white shadow-2xl w-[347px] rounded-[12px] mx-auto mt-6 h-[160px]">
        <Swiper
          pagination={true}
          modules={[Pagination]}
          loop={true}
          className="mySwiper h-full"
        >
          <SwiperSlide>
            <div className="h-full w-full bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 rounded-lg flex items-center justify-center text-white font-bold">
              Slide 1
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="h-full w-full bg-gradient-to-r from-green-400 via-blue-500 to-purple-500 rounded-lg flex items-center justify-center text-white font-bold">
              Slide 2
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="h-full w-full bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 rounded-lg flex items-center justify-center text-white font-bold">
              Slide 3
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
}

export default SwiperPage;
