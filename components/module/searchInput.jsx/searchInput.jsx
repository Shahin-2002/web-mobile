import React from 'react';
import { SearchIcon } from '@/components/ui/iconsAndImagrs';

function searchInput() {
  return (
    <div className="px-4">
      {' '}
      {/* فاصله از چپ و راست */}
      <div className="w-full max-w-[500px] mx-auto flex items-center justify-center relative">
        <SearchIcon
          style={{ position: 'absolute', right: 15, bottom: 7 }}
          size={24}
          color="#DDDCDB"
        />

        <input
          className="w-full h-[40px] border-2 rounded-2xl px-4 mt-3 pr-13 custom-placeholder"
          placeholder="جستجو"
          style={{ fontFamily: 'iranyekanLight' }}
        />
      </div>
    </div>
  );
}

export default searchInput;
