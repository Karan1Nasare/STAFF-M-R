import React, { useState } from 'react';

const TrueFalseType = () => {
  const [trueChecked, setTrueChecked] = useState(false);
  const [falseChecked, setFalseChecked] = useState(false);
  const handleTrueChange = () => {
    setTrueChecked(true);
    setFalseChecked(false);
  };
  const handleFalseChange = () => {
    setFalseChecked(true);
    setTrueChecked(false);
  };
  return (
    <div>
      <div className='text-white flex mt-5 ml-[6%]'>
        <h3 className='text-lg mt-2'>1.</h3>
        <input
          className='bg-blue border border-gray-700 h-10 ml-4 w-[70%] text-xs'
          type='text'
          placeholder=' '
        />
      </div>
      <div className='ml-[7%]'>
        <h3 className='text-left text-base mt-5'>Options</h3>
        <div className='flex mt-4'>
          <input
            type='checkbox'
            className={`h-5 border border-gray-700 mt-2 w-5 rounded ${trueChecked ? 'bg-success' : 'appearance-none'}`}
            onChange={handleTrueChange}
            checked={trueChecked}
          />
          <h3 className='mt-2 text-sm ml-3'>True</h3>
        </div>
        <div className='flex mt-4'>
          <input
            type='checkbox'
            className={`h-5 border border-gray-700 mt-2 w-5 rounded ${falseChecked ? 'bg-success' : 'appearance-none'}`}
            onChange={handleFalseChange}
            checked={falseChecked}
          />
          <h3 className='mt-2 text-sm  ml-3'>False</h3>
        </div>
      </div>
    </div>
  );
};
export default TrueFalseType;
