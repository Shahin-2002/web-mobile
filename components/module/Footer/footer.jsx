import React, { useState } from 'react';
import { Home, Profile, Order, ShoppingBasketIcon } from '@/components/ui/iconsAndImagrs';

function Footer() {
  const [activeTab, setActiveTab] = useState('home'); // مقدار پیش‌فرض خانه

  const tabs = [
    { id: 'home', icon: <Home size={25} />, label: 'خانه', color: '#FF6A29' },
    { id: 'cart', icon: <ShoppingBasketIcon size={25} />, label: 'سبد خرید', color: '#B3B2B2' },
    { id: 'orders', icon: <Order size={25} />, label: 'سفارش‌ها', color: '#B3B2B2' },
    { id: 'profile', icon: <Profile size={25} />, label: 'پروفایل', color: '#B3B2B2' },
  ];

  return (
    <div className="w-full md:max-w-sm md:mx-auto p-4 flex items-center mt-11 justify-between border-t-2 border-[#F5F2EF] px-10">
      <div className="flex flex-1 items-center justify-between">
        {tabs.map((tab) => (
          <div
            key={tab.id}
            className={`flex flex-col items-center relative ${
              activeTab === tab.id ? 'active' : ''
            }`}
            onClick={() => setActiveTab(tab.id)}
          >
            {React.cloneElement(tab.icon, { color: activeTab === tab.id ? '#FF6A29' : '#B3B2B2' })}
            <p className={`text-[${activeTab === tab.id ? '#FF6A29' : '#B3B2B2'}]`} style={{ fontFamily: 'iranyekanLight' }}>{tab.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Footer;
