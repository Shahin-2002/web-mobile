import React from 'react';
import { Smart } from '@/components/ui/iconsAndImagrs';
function banerFooter() {
  return (
    <div className="border rounded-2xl p-4 mt-7 mx-auto w-[347px] flex justify-around items-center bg-gradient-to-r from-[#4AD3FF] to-[#D1F4FF]">
      <p className="text-[#01366A] text-sm sm:text-base leading-snug text-right font-bold" style={{ fontFamily: 'iranyekanExtrabold' }}>
        ساعت مچی <br /> دیـــجیتـــال
      </p>
      <div className="w-[40px] h-[60px] sm:w-14 sm:h-14 flex-shrink-0">
        <img src={Smart} alt="logo" className="w-full h-full object-contain " />
      </div>
    </div>
  );
}

export default banerFooter;
