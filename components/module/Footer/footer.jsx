import React, { useState } from 'react';
import {
  Home,
  Profile,
  Order,
  ShoppingBasketIcon,
} from '@/components/ui/iconsAndImagrs';

function Footer() {
  const [activeTab, setActiveTab] = useState('home');

  const tabs = [
    { id: 'home', icon: Home, label: 'خانه' },
    { id: 'cart', icon: ShoppingBasketIcon, label: 'سبد خرید' },
    { id: 'orders', icon: Order, label: 'سفارش‌ها' },
    { id: 'profile', icon: Profile, label: 'پروفایل' },
  ];

  return (
    <div className="w-full md:max-w-sm md:mx-auto p-4 flex items-center justify-between border-t-2 border-[#F5F2EF] px-10">
      <div className="flex flex-1 items-center justify-between">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;

          return (
            <div
              key={tab.id}
              className={`flex flex-col items-center relative cursor-pointer w-auto px-2 ${
                isActive ? 'active' : ''
              }`}
              onClick={() => setActiveTab(tab.id)}
            >
              <Icon size={20} color={isActive ? '#FF6A29' : '#B3B2B2'} />
              <p
                className="text-[12px] whitespace-nowrap mt-1"
                style={{
                  color: isActive ? '#FF6A29' : '#B3B2B2',
                  fontFamily: 'iranyekanLight',
                }}
              >
                {tab.label}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Footer;
