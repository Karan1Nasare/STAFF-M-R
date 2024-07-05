import React from 'react';

const TrueFalse = ({ question, index }) => {
  console.log('🚀 ~ TrueFalse ~ question:', question);

  // Determine the checked status based on the option value
  const isTrueChecked = question.option === true;
  const isFalseChecked = question.option === false;

  return (
    <div className='flex-shrink-0' key={index}>
      <div className='flex text-white my-6'>
        <h3 className='text-xl mr-3 mt-2'>{index + 1}.</h3>
        <div className='w-29.6 h-2.6 px-3 rounded bg-blue justify-start items-center gap-4 inline-flex'>
          <h2 className='text-white text-sm font-normal'>
            {question.question}
          </h2>
        </div>
      </div>
      <div className='flex mb-4'>
        <input
          className='custom-checkbox mr-6 mt-3 appearance-none rounded h-5 w-5 border border-zinc-400'
          type='checkbox'
          checked={isTrueChecked}
          readOnly
        />
        <div
          className={`w-28.8 h-2.6 px-3 rounded ${isTrueChecked ? 'bg-bright_green' : 'bg-blue'} justify-start items-center gap-4 inline-flex`}
        >
          <div className='grow shrink basis-0 h-4 justify-start items-center gap-2.5 flex'>
            <div className="text-white text-sm font-normal font-['Helvetica']">
              True
            </div>
          </div>
        </div>
      </div>
      <div className='flex mb-4'>
        <input
          className='custom-checkbox mr-6 mt-3 appearance-none rounded h-5 w-5 border border-zinc-400'
          type='checkbox'
          checked={isFalseChecked}
          readOnly
        />
        <div
          className={`w-28.8 h-2.6 px-3 rounded ${isFalseChecked ? 'bg-bright_green' : 'bg-blue'} justify-start items-center gap-4 inline-flex`}
        >
          <div className='grow shrink basis-0 h-4 justify-start items-center gap-2.5 flex'>
            <div className="text-white text-sm font-normal font-['Helvetica']">
              False
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrueFalse;
