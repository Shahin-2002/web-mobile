import React from 'react';
import { SearchIcon } from '@/components/ui/iconsAndImagrs';

function searchInput() {
  return (
    <>
      <div className='w-[327px] mx-auto flex items-center justify-center relative'>
    
        <SearchIcon style={{position: 'absolute', right:15 , bottom: 7 }} size={24} color='#DDDCDB'/>
        <input
            className='w-full h-[40px] border-2 rounded-2xl px-4 mt-2 pr-13 custom-placeholder'
            placeholder='جستجو'
            style={{ fontFamily: 'iranyekanLight' }}
        />
      
      </div>
    </>
  );
}

export default searchInput;
