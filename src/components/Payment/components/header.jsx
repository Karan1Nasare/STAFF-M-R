import React from 'react';

const Header = () => {
  return (
    <div className='bg-secondary__fill border mt-4 border-grey__primary__light border-opacity-20 h-24 rounded-md'>
      <div className='flex'>
        <input
          className='bg-blue h-10 opacity-40 rounded-md w-72 ml-6 text-sm mt-7 '
          type='text'
          placeholder='  Search Payment History '
        />
      </div>
    </div>
  );
};

export default Header;
