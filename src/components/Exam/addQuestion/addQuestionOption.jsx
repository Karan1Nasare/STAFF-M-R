import React, { useState } from 'react';
import { useStore } from '../../../store/context-store';
import SummaryType from './summaryType';
import TrueFalseType from './trueFalseType';
import McqType from './mcqType';

const AddQuestionOption = () => {
  const [Store, StoreDispatch] = useStore();
  const [selectedQuestionType, setSelectedQuestionType] = useState(null);
  const handleQuestionType = option => {
    setSelectedQuestionType(option);
  };
  return (
    <div>
      <div className='flex ml-[10%] mt-6'>
        <button
          className={`w-36 h-9 text-xs mr-5 rounded-sm bg-primary text-orange__primary  hover:text-success hover:bg-success hover:bg-opacity-15 ${selectedQuestionType === 'summary' ? 'bg-success bg-opacity-15 text-success' : 'text-orange bg-orange bg-opacity-15'}`}
          onClick={() => handleQuestionType('summary')}
        >
          Summary
        </button>
        <button
          className={`w-36 h-9 text-xs mr-5 rounded-sm bg-primary text-orange__primary  hover:text-success hover:bg-success hover:bg-opacity-15 ${selectedQuestionType === 'mcq' ? 'bg-success bg-opacity-15 text-success' : 'text-orange bg-orange bg-opacity-15'}`}
          onClick={() => handleQuestionType('mcq')}
        >
          MCQ
        </button>
        <button
          className={`w-36 h-9 text-xs mr-5 rounded-sm bg-primary text-orange__primary hover:text-success hover:bg-success hover:bg-opacity-15 ${selectedQuestionType === 'tf' ? 'bg-success bg-opacity-15 text-success' : 'text-orange bg-orange bg-opacity-15'}`}
          onClick={() => handleQuestionType('tf')}
        >
          T/F
        </button>
      </div>
      <div className='h-10 ml-[10%] mt-5 border flex border-gray-700 rounded-sm bg-blue w-40'>
        <input
          className='text-white  bg-blue w-full pl-2'
          type='number'
          id='quantity'
          name='quantity'
          min='0'
          max='100'
          step='1'
          placeholder='          Marks'
        />
        {/* <h3 className='mt-1'>Marks</h3>
        <div className=' ml-[20%]'>
          <span>
            <FaCaretUp />
          </span>
          <span>
            <FaCaretDown />
          </span>
        </div> */}
      </div>
      {selectedQuestionType === 'summary' && <SummaryType />}
      {selectedQuestionType === 'mcq' && <McqType />}
      {selectedQuestionType === 'tf' && <TrueFalseType />}
      <hr className='m-8 text-grey__primary__light' />
    </div>
  );
};
export default AddQuestionOption;
