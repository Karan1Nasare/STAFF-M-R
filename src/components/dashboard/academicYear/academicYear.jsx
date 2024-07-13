import React from 'react';
import { LuPlusCircle } from 'react-icons/lu';
import { SlCalender } from 'react-icons/sl';
import { FiEdit } from 'react-icons/fi';
import { RiDeleteBin5Fill } from 'react-icons/ri';

const AcademicYear = () => {
  const hanadAddClick = () => {
    console.log('Added');
  };
  const cards = [
    {
      name: 'Eklavya',
      time: '2024-2025',
      icon1: <FiEdit />,
      icon2: <RiDeleteBin5Fill />,
    },
    {
      name: 'Eklavya',
      time: '2024-2025',
      icon1: <FiEdit />,
      icon2: <RiDeleteBin5Fill />,
    },
    {
      name: 'Eklavya',
      time: '2024-2025',
      icon1: <FiEdit />,
      icon2: <RiDeleteBin5Fill />,
    },
    {
      name: 'Eklavya',
      time: '2024-2025',
      icon1: <FiEdit />,
      icon2: <RiDeleteBin5Fill />,
    },
    {
      name: 'Eklavya',
      time: '2024-2025',
      icon1: <FiEdit />,
      icon2: <RiDeleteBin5Fill />,
    },
    {
      name: 'Eklavya',
      time: '2024-2025',
      icon1: <FiEdit />,
      icon2: <RiDeleteBin5Fill />,
    },
    {
      name: 'Eklavya',
      time: '2024-2025',
      icon1: <FiEdit />,
      icon2: <RiDeleteBin5Fill />,
    },
    {
      name: 'Eklavya',
      time: '2024-2025',
      icon1: <FiEdit />,
      icon2: <RiDeleteBin5Fill />,
    },
  ];

  return (
    <div className='mt-5 ml-8'>
      <h1 className='text-white text-left mb-6 text-xl'>Academic Year</h1>
      <div className='w-[76%] md:w-[81.5%] h-[25%]'>
        <div className='p-6 text-sm rounded-xl border border-gray-700 border-solid bg-secondary__fill'>
          <h1 className='text-white text-left mb-2'>Name</h1>
          <div className='flex '>
            <input
              className='justify-center h-10 text-white rounded border w-[100%] border-gray-700 bg-secondary__fill border-solid '
              type='text'
              placeholder='  EnterName'
            />
          </div>

          <div className='flex mt-6'>
            <div className=''>
              <h1 className='text-white text-left mb-2 '>Start Year</h1>
              <div className='flex mr-4 rounded border w-[430px] border-gray-700 bg-secondary__fill h-10 border-solid  '>
                <input
                  type='text'
                  placeholder='  Select Date'
                  className='justify-center w-[380px] bg-secondary__fill  text-stone-300 '
                />
                <span className='mt-3 ml-4 text-white'>
                  <SlCalender />
                </span>
              </div>
            </div>
            <div className=''>
              <h1 className='text-white text-left mb-2 '>Start Year</h1>
              <div className='flex rounded border w-[430px] border-gray-700 bg-secondary__fill h-10 border-solid  '>
                <input
                  type='text'
                  placeholder='  Select Date'
                  className='justify-center w-[380px] bg-secondary__fill  text-stone-300 '
                />
                <span className='mt-3 ml-4 text-white'>
                  <SlCalender />
                </span>
              </div>
            </div>
          </div>
          <div className='flex h-12 mt-6 w-24 p-3 rounded-md bg-white'>
            <span className='mt-1 mr-2 ml-2'>
              <LuPlusCircle />
            </span>
            <button onClick={hanadAddClick} className='text-base'>
              Add
            </button>
          </div>
        </div>
        <div className='flex md:gap-5 gap-4 mt-6 flex-wrap'>
          {cards.map((card, index) => {
            return (
              <div
                key={index}
                className='flex text-left md:h-24 md:w-[32.15%] justify-between px-5 py-4 ju rounded-xl border h-20 border-gray-700 border-solid bg-secondary__fill w-[32%]'
              >
                <div className='text-sm'>
                  <h1 className='text-white'>{card.name}</h1>
                  <h2 className='mt-2 text-gray-700 '>{card.time}</h2>
                </div>
                <div className='flex mt-4'>
                  <span className='text-white mr-3 '>{card.icon1}</span>
                  <span className='text-red-600'>{card.icon2}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default AcademicYear;
