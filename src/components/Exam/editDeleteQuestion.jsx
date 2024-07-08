import React from 'react';
import { useNavigate } from 'react-router-dom';
import { RiDeleteBin6Fill } from 'react-icons/ri';
import { FaRegEdit } from 'react-icons/fa';

const EditDeleteQuestion = () => {
  const navigate = useNavigate();
  const handleOnClick = () => {
    navigate('/review');
  };
  const marks = [
    {
      mark: '2 Marks Question',
      question1: ' 1.In parallel combination of resistances, the voltage is ?',
      icon1: <FaRegEdit style={{ fontSize: '1.2em' }} />,
      icon2: <RiDeleteBin6Fill style={{ fontSize: '1.2em' }} />,
      question2: ' 1.In parallel combination of resistances, the voltage is ?',
      question3: ' 1.In parallel combination of resistances, the voltage is ?',
    },
    {
      mark: '2 Marks Question',
      question1: ' 1.In parallel combination of resistances, the voltage is ?',
      icon1: <FaRegEdit style={{ fontSize: '1.2em' }} />,
      icon2: <RiDeleteBin6Fill style={{ fontSize: '1.2em' }} />,
      question2: ' 1.In parallel combination of resistances, the voltage is ?',
      question3: ' 1.In parallel combination of resistances, the voltage is ?',
    },
  ];
  return (
    <div className='2xl:w-34.6 3xl:w-[34%] xl:w-[32%] lg:w-[33%]  ml-8 p-8 h-39.3 border border-gray-700 rounded-md bg-secondary__fill '>
      <h3 className='text-left text-lg'>Edit/Delete Questions</h3>
      {marks.map((mark, index) => {
        return (
          <div className='mt-6' key={index}>
            <div className='text-sm text-left text-primary'>{mark.mark}</div>
            <div className='flex mb-4 justify-between mt-6  '>
              <div className='xl:text-base text-left lg:text-xs text-zinc-300'>
                {mark.question1}
              </div>
              <div className='flex gap-1.5'>
                <span className=''>{mark.icon1}</span>
                <span className='text-red-600'>{mark.icon2}</span>
              </div>
            </div>
            <div className='flex  mb-4 justify-between mt-6 '>
              <div className='xl:text-base text-left lg:text-xs  text-zinc-300'>
                {mark.question1}
              </div>
              <div className='flex gap-1.5'>
                <span>{mark.icon1}</span>
                <span className='text-red-600'>{mark.icon2}</span>
              </div>
            </div>
            <div className='flex mb-4 justify-between mt-6 '>
              <div className='xl:text-base text-left lg:text-xs text-white'>
                {mark.question1}
              </div>
              <div className='flex gap-1.5'>
                <span>{mark.icon1}</span>
                <span className='text-red-600'>{mark.icon2}</span>
              </div>
            </div>
            <hr />
          </div>
        );
      })}
      <button
        onClick={handleOnClick}
        className='w-20 h-8 mt-[21%] bg-slate-700 bg-opacity-70 text-sm text-gray-200 rounded-md'
      >
        Review
      </button>
    </div>
  );
};
export default EditDeleteQuestion;
