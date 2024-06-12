import React from 'react';
import { FaEye } from 'react-icons/fa';

const Cards = ({ cards }) => {
  return (
    <div className='2xl:grid 2xl:grid-cols-3 2xl:gap-4 xl:grid xl:grid-cols-2 xl:gap-4 lg:grid lg:grid-cols-2 lg:gap-4 mt-4'>
      {/* Render all cards if no search query is entered or filteredCards is null */}
      {!cards || cards.length === 0 ? (
        <p className='text-white'>No cards found.</p>
      ) : (
        cards.map((card, index) => (
          <div
            key={index}
            className='bg-secondary__fill mt-2 h-44 border border-gray-700 p-7 mr-2 rounded-md'
          >
            <div className='flex text-white justify-between'>
              <div className='flex mx-2'>
                <img
                  className='h-14 w-14 rounded-full'
                  src={card.image}
                  alt=''
                />
                <div className='text-left pl-1 text-white mx-2'>
                  <h2 className='text-base'>{card.name}</h2>
                  <h3 className='text-xs'>{card.email}</h3>
                  <h3 className='text-xs'>{card.number}</h3>
                </div>
              </div>
              <span className='mt-1 lg:mt-4 mr-2'>{card.icon}</span>
            </div>
            <div className='flex mt-4 justify-between'>
              <div>
                <h3 className=' text-grey__primary__light text-xs'>Standard</h3>
                <div className=' mt-1 lg:w-16 bg-tealGreen bg-opacity-20 w-12 rounded-full'>
                  <h3 className='text-tealGreen text-sm'>{card.standard}</h3>
                </div>
              </div>
              <div className=''>
                <h3 className='text-grey__primary__light text-xs'>
                  Enrollment
                </h3>
                <div className=' mt-1 bg-success bg-opacity-20 w-20 pl-2 rounded-full'>
                  <h3 className='text-success mr-2 text-sm '>
                    {card.enrollment}
                  </h3>
                </div>
              </div>
            </div>
          </div>
        ))
      )}
    </div>
  );
};
export default Cards;
