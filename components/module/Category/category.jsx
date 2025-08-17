import React from 'react';
import { Headphone } from '@/components/ui/iconsAndImagrs';

function Category({data}) {

  return (
    <div className="mt-7 w-full max-w-[327px] mx-auto flex flex-col items-center">
      {/* عنوان و توضیح */}
      <div className="flex items-center justify-between w-full">
        <p className="font-bold text-[#BA400B]" style={{ fontFamily: 'iranyekanExtrabold' }}>دسته‌بندی‌ها</p>
        <p className="text-[13px] text-[#C15323] font-medium" style={{ fontFamily: 'iranyekanExtrabold' }}>انتخاب سریع محصولات</p>
      </div>

      {/* لیست دسته‌بندی‌ها */}
      <div className="grid grid-cols-4 w-full mt-3 gap-y-6 gap-x-2">
        {data.map((cat, index) => (
          <div key={index} className="flex flex-col items-center text-[12px] font-medium text-center cursor-pointer">
            <div className="w-[73px] h-[76px] rounded-xl bg-gradient-to-b from-[#FFF7F5] to-[#FFEBE5] flex items-center justify-center">
              <img src={cat.image} alt={cat.name} className="w-[55px] h-[55px]" />
            </div>
            <span className="mt-1 text-[#787471] text-[16px] leading-tight break-words whitespace-normal" style={{ fontFamily: 'iranyekanLight' }}>
              {cat.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Category;
