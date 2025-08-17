import React from 'react';
import { SearchIcon } from '@/components/ui/iconsAndImagrs';

function searchInput() {
  return (
    <>
      <div className='px-4 max-w-sm mx-auto flex items-center justify-center relative'>
    
        <SearchIcon style={{position: 'absolute', right:35 , bottom: 9 }} size={28} color='#DDDCDB'/>
        <input
            className='w-full h-12 border-2 rounded-2xl px-4 mt-2 pr-13 custom-placeholder'
            placeholder='جستجو'
            style={{ fontFamily: 'iranyekanExtrabold' }}
        />
      
      </div>
    </>
  );
}

export default searchInput;
