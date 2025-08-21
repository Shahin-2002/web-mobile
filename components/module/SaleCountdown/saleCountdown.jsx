import React from 'react';
import { Fire, Arrow } from '../../ui/iconsAndImagrs.jsx';
import { useState, useEffect } from 'react';

function SaleCountdown({ endTime }) {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = new Date(endTime).getTime() - now;

      if (distance <= 0) {
        clearInterval(interval);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      } else {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((distance / (1000 * 60)) % 60),
          seconds: Math.floor((distance / 1000) % 60),
        });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [endTime]);

  return (
    <div className="px-4"> {/* فاصله از چپ و راست */}
  <div
    className="border rounded-2xl p-4 mt-7 mx-auto w-full max-w-[500px] flex justify-between items-center"
    style={{ backgroundColor: '#FDF2F6', borderColor: '#FFCACA' }}
  >
    {/* آیکون و متن سمت چپ */}
    <div className="flex items-center gap-3">
      <div
        className="w-8 h-8 rounded-[17px] flex justify-center items-center"
        style={{ backgroundColor: '#FF4046' }}
      >
        <img src={Fire} alt="fire-logo" className="w-3.5 h-5" />
      </div>

      <div className="flex flex-col max-w-[120px]">
        <p
          className="text-sm text-[#FF4046] break-words"
          style={{ fontFamily: 'iranyekan', fontWeight: 800 }}
        >
          جشنواره فروش
        </p>
        <p
          className="text-[12px] text-[#FF4046] break-words flex items-center gap-1"
          style={{ fontFamily: 'iranyekanExtrabold', fontWeight: 800 }}
        >
          ویـــــــــــژه!
          <img src={Arrow} alt="Arrow-logo" />
        </p>
      </div>
    </div>

    {/* تایمر */}
    <div className="flex items-center gap-1 text-sm font-medium text-gray-600">
      <div className="w-[30px] h-[24px] bg-[#FA2C37] flex justify-center items-center rounded-[4px]">
        <p className="text-white text-[12px]" style={{ fontFamily: 'iranyekanExtrabold' }}>
          {timeLeft.seconds.toLocaleString('fa-IR')}
        </p>
      </div>
      <span style={{ color: '#FA2C37' }}>:</span>

      <div className="w-[30px] h-[24px] bg-[#FA2C37] flex justify-center items-center rounded-[4px]">
        <p className="text-white text-[12px]" style={{ fontFamily: 'iranyekanExtrabold' }}>
          {timeLeft.minutes.toLocaleString('fa-IR')}
        </p>
      </div>
      <span style={{ color: '#FA2C37' }}>:</span>

      <div className="w-[30px] h-[24px] bg-[#FA2C37] flex justify-center items-center rounded-[4px]">
        <p className="text-white text-[12px]" style={{ fontFamily: 'iranyekanExtrabold' }}>
          {timeLeft.hours.toLocaleString('fa-IR')}
        </p>
      </div>
    </div>
  </div>
</div>

  );
}

export default SaleCountdown;
