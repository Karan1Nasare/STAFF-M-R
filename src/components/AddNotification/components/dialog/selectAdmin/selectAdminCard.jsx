import React from 'react';
import useAddNotification from '../../../hooks/useAddNotification';

const SelectAdminCard = () => {
  const { toggleChecked, data } = useAddNotification();

  return (
    <>
      {/* Render all cards if no search query is entered or filteredCards is null */}
      {!data || data.length === 0 ? (
        <p className='text-white'>No cards found.</p>
      ) : (
        data.map((card, index) => (
          <div
            key={index}
            className='bg-secondary__fill mt-2 h-36 w-[38.5%] border border-gray-700 p-2 mr-2 rounded-md'
          >
            <div className='flex text-white justify-between'>
              <div className='flex mx-2'>
                <img
                  className='h-12 mt-1 w-12 rounded-full'
                  src={card.image}
                  alt=''
                />
                <div className='text-xs text-left mx-2 mt-1 '>
                  <h2>{card.name}</h2>
                  <h3>{card.email}</h3>
                  <h3>{card.number}</h3>
                </div>
              </div>
              <input
                className='-mt-4 bg-secondary__fill border border-gray-700 mr-2 opacity-30'
                type='checkbox'
                onChange={() => toggleChecked(index)}
                checked={card.isChecked}
              />
            </div>
            <div className='flex mt-2 px-2 justify-between'>
              <div>
                <h3 className=' text-grey__primary__light text-sm'>
                  {card.standardName}
                </h3>
                <div className=' mt-1 bg-tealGreen bg-opacity-20 w-12 rounded-full'>
                  <h3 className=' text-tealGreen text-sm'>{card.standard}</h3>
                </div>
              </div>
              <div className=''>
                <h3 className='text-grey__primary__light float-right text-sm'>
                  {card.enrollmentName}
                </h3>
                <div className=' mt-6 bg-success bg-opacity-20 w-32 h-6 pl-2 rounded-full'>
                  <h3 className='text-success mr-2 text-sm '>
                    {card.enrollment}
                  </h3>
                </div>
              </div>
            </div>
          </div>
        ))
      )}
    </>
  );
};

export default SelectAdminCard;
