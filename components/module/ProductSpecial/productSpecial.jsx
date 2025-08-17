import React, { useEffect } from 'react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import { PlaceHolder } from '@/components/ui/iconsAndImagrs';

function ProductSpecial({ data , addToCart  }) {
  return (
    <>
      <div className="mt-7 w-full max-w-[327px] mx-auto flex flex-col items-center">
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

        {/* کارت‌ها */}
        <div className="flex flex-wrap gap-3 justify-start w-full">
          <Swiper
            slidesPerView={2} // دو کارت در هر صفحه
            spaceBetween={10} // فاصله کم بین کارت‌ها
            loop={true}
            breakpoints={{
              0: { slidesPerView: 2, spaceBetween: 12 },
              480: { slidesPerView: 2, spaceBetween: 6 },
              768: { slidesPerView: 2, spaceBetween: 8 },
              1024: { slidesPerView: 2, spaceBetween: 10 },
            }}
            modules={[Pagination]}
            className="mySwiper"
          >
            {/* کارت ۱ */}
            {data.map((item, index) => (
              <>
                <SwiperSlide key={item.id}>
                  <div className="border-2 border-[#F5F2EF] rounded-2xl flex flex-col h-[299px] w-[156px] ">
                    {/* تصویر */}
                    <div className="w-full rounded-2xl overflow-hidden mb-2">
                      <img
                        src={item.image}
                        onError={(e) => {
                          e.currentTarget.src = PlaceHolder; // عکس جایگزین
                        }}
                        alt="logo"
                        className="w-full h-full object-cover"
                      />
                    </div>

                    {/* محتوا */}
                    <div className="flex flex-col flex-1 justify-between">
                      <div className="flex flex-col justify-around h-full">
                        <p
                          className="text-[14px] sm:text-[15px] font-medium mb-1 text-[#4F4C4B] text-right break-words pr-2"
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
                              %10
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
                        className="w-full bg-[#F7F7F7] border border-[#F5F2EF] text-[#787471] text-[12px] py-2 rounded-lg hover:bg-gray-100"
                        style={{ fontFamily: 'iranyekanExtrabold' }}
                        onClick={() => addToCart(item)}
                      >
                        افزودن به سبد خرید
                      </button>
                    </div>
                  </div>
                </SwiperSlide>
              </>
            ))}
          </Swiper>
        </div>
        <div className="flex flex-wrap gap-3 justify-start w-full mt-3.5">
          <Swiper
            slidesPerView={2} // دو کارت در هر صفحه
            spaceBetween={10} // فاصله کم بین کارت‌ها
            loop={true}
            breakpoints={{
              0: { slidesPerView: 2, spaceBetween: 12 },
              480: { slidesPerView: 2, spaceBetween: 6 },
              768: { slidesPerView: 2, spaceBetween: 8 },
              1024: { slidesPerView: 2, spaceBetween: 10 },
            }}
            modules={[Pagination]}
            className="mySwiper"
          >
            {/* کارت ۱ */}
            {data.map((item, index) => (
              <SwiperSlide>
                <div className="border-2 border-[#F5F2EF] rounded-2xl flex flex-col h-[299px] w-[156px] ">
                  {/* تصویر */}
                  <div className="w-full rounded-2xl overflow-hidden mb-2">
                    <img
                      src={item.image}
                      onError={(e) => {
                        e.currentTarget.src = '/Images/placeHolder.png'; // عکس جایگزین
                      }}
                      alt="logo"
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* محتوا */}
                  <div className="flex flex-col flex-1 justify-between">
                    <div className="flex flex-col justify-around h-full">
                      <p
                        className="text-[14px] sm:text-[15px] font-medium mb-1 text-[#4F4C4B] text-right break-words pr-2"
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
                            %10
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
    </>
  );
}

export default ProductSpecial;
