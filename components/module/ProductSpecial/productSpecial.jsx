import React, { useEffect } from 'react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Pagination } from 'swiper/modules';
import { PlaceHolder } from '@/components/ui/iconsAndImagrs';

function ProductSpecial({ data, addToCart }) {
  return (
    <div className="px-4">
      {' '}
      {/* فاصله از چپ و راست */}
      <div className="mt-7 w-full max-w-[500px] mx-auto flex flex-col items-center">
        {/* عنوان و توضیح */}
        <div className="flex items-center justify-between w-full mb-3">
          <p
            className="font-bold text-[#BA400B]"
            style={{ fontFamily: 'iranyekanExtrabold' }}
          >
            محصولات ویژه
          </p>
          <p
            className="text-[13px] text-[#C15323] font-medium"
            style={{ fontFamily: 'iranyekanExtrabold' }}
          >
            انتخاب سریع محصولات
          </p>
        </div>

        {/* کارت‌ها - همان دو Swiper */}
        <div className="w-full max-w-[500px] mx-auto px-4">
          <Swiper
            slidesPerView={3}
            spaceBetween={16} // فاصله بین کارت‌ها
            freeMode={true}
            loop={true}
            breakpoints={{
              0: { slidesPerView: 1.5, spaceBetween: 12 },
              375: { slidesPerView: 2, spaceBetween: 12 },
              480: { slidesPerView: 2.5, spaceBetween: 14 },
              // 768: { slidesPerView: 3, spaceBetween: 10 },
              // 1024: { slidesPerView: 3, spaceBetween: 1 },
            }}
            modules={[FreeMode, Pagination]}
            className="mySwiper"
          >
            {data.map((item) => (
              <SwiperSlide key={item.id}>
                <div className="border-2 border-[#F5F2EF] rounded-2xl flex flex-col h-[299px] w-[156px]">
                  {/* تصویر */}
                  <div className="w-full rounded-2xl overflow-hidden mb-2">
                    <img
                      src={item.image}
                      onError={(e) => {
                        e.currentTarget.src = PlaceHolder;
                      }}
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* محتوا */}
                  <div className="flex flex-col flex-1 justify-between">
                    <div className="flex flex-col justify-around h-full">
                      <p
                        className="text-[14px] sm:text-[15px] font-medium mb-1 text-[#4F4C4B] text-right pr-2 line-clamp-2 h-[40px]"
                        style={{ fontFamily: 'iranyekanExtrabold' }}
                      >
                        {item.name}
                      </p>
                      <div>
                        <div className="flex items-center justify-start gap-2 mb-1">
                          <span
                            className="text-[12px] line-through text-gray-400 pr-2"
                            style={{ fontFamily: 'iranyekanExtrabold' }}
                          >
                            {item.price.toLocaleString('fa-IR')}
                          </span>
                          <span
                            className="text-[12px] bg-[#C50F1F] text-white px-2 py-0.5 rounded-full"
                            style={{ fontFamily: 'iranyekanExtrabold' }}
                          >
                            {item.off.toLocaleString('fa-IR')}%
                          </span>
                        </div>
                        <span
                          className="text-[14px] font-bold mb-2 text-[#BA400B] text-right pr-2"
                          style={{ fontFamily: 'iranyekanExtrabold' }}
                        >
                          {item.priceAfterDiscount.toLocaleString('fa-IR')}{' '}
                          تومان
                        </span>
                      </div>
                    </div>

                    {/* دکمه */}
                    <button
                      className="w-full border bg-[#F7F7F7] border-[#F5F2EF] text-[#787471] text-[12px] py-2 rounded-lg hover:bg-gray-100"
                      style={{ fontFamily: 'iranyekanExtrabold' }}
                      onClick={() => addToCart(item)}
                    >
                      افزودن به سبد خرید
                    </button>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* دومین Swiper */}
        <div className="w-full max-w-[500px] mx-auto px-4 mt-5">
          <Swiper
            slidesPerView={3}
            spaceBetween={16} // فاصله بین کارت‌ها
            freeMode={true}
            loop={true}
            breakpoints={{
              0: { slidesPerView: 1.5, spaceBetween: 12 },
              375: { slidesPerView: 2, spaceBetween: 12 },
              480: { slidesPerView: 2.5, spaceBetween: 14 },
              // 768: { slidesPerView: 3, spaceBetween: 16 },   
              // 1024: { slidesPerView: 3, spaceBetween: 20 },
            }}
            modules={[FreeMode, Pagination]}
            className="mySwiper"
          >
            {data.map((item) => (
              <SwiperSlide key={item.id}>
                <div className="border-2 border-[#F5F2EF] rounded-2xl flex flex-col h-[299px] w-[156px]">
                  {/* تصویر */}
                  <div className="w-full rounded-2xl overflow-hidden mb-2">
                    <img
                      src={item.image}
                      onError={(e) => {
                        e.currentTarget.src = PlaceHolder;
                      }}
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* محتوا */}
                  <div className="flex flex-col flex-1 justify-between">
                    <div className="flex flex-col justify-around h-full">
                     <p
                        className="text-[14px] sm:text-[15px] font-medium mb-1 text-[#4F4C4B] text-right pr-2 line-clamp-2 h-[40px]"
                        style={{ fontFamily: 'iranyekanExtrabold' }}
                      >
                        {item.name}
                      </p>
                      <div>
                        <div className="flex items-center justify-start gap-2 mb-1">
                          <span
                            className="text-[12px] line-through text-gray-400 pr-2"
                            style={{ fontFamily: 'iranyekanExtrabold' }}
                          >
                            {item.price.toLocaleString('fa-IR')}
                          </span>
                          <span
                            className="text-[12px] bg-[#C50F1F] text-white px-2 py-0.5 rounded-full"
                            style={{ fontFamily: 'iranyekanExtrabold' }}
                          >
                            {item.off.toLocaleString('fa-IR')}%
                          </span>
                        </div>
                        <span
                          className="text-[14px] font-bold mb-2 text-[#BA400B] text-right pr-2"
                          style={{ fontFamily: 'iranyekanExtrabold' }}
                        >
                          {item.priceAfterDiscount.toLocaleString('fa-IR')}{' '}
                          تومان
                        </span>
                      </div>
                    </div>

                    {/* دکمه */}
                    <button
                      className="w-full border bg-[#F7F7F7] border-[#F5F2EF] text-[#787471] text-[12px] py-2 rounded-lg hover:bg-gray-100"
                      style={{ fontFamily: 'iranyekanExtrabold' }}
                      onClick={() => addToCart(item)}
                    >
                      افزودن به سبد خرید
                    </button>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
}

export default ProductSpecial;
