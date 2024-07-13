import React, { useState } from 'react';
import { GrLinkPrevious } from 'react-icons/gr';
import { IoMdAddCircleOutline } from 'react-icons/io';
import AddQuestionOption from './addQuestionOption';

const AddQuestions = () => {
  const [questionOptions, setQuestionOptions] = useState([
    <AddQuestionOption key={0} />,
  ]);
  const addQuestion = () => {
    setQuestionOptions([
      ...questionOptions,
      <AddQuestionOption key={questionOptions.length} />,
    ]);
  };
  return (
    <div className='w-44.1 h-39.3 '>
      <div className='w-44.1 h-[100%] rounded-md border border-gray-700 bg-secondary__fill flex flex-col'>
        <div className='flex mt-6'>
          <span className='ml-8 mr-3 mt-1'>
            <GrLinkPrevious />
          </span>
          <h3>Questions</h3>
        </div>
        <div className='flex-1 overflow-y-auto'>
          <div>
            {questionOptions.map((option, index) => (
              <div key={index}>{option}</div>
            ))}
          </div>
        </div>
      </div>
      <button
        className='lg:w-32 2xl:ml-[83%] lg:ml-[78%] mr-6 mb-6 text-sm h-8 text-primary flex items-center'
        onClick={addQuestion}
      >
        <span className='mt-2 mr-2 ml-2'>
          <IoMdAddCircleOutline />
        </span>
        <h1 className='mt-1'>Add Questions</h1>
      </button>
    </div>
  );
};
export default AddQuestions;
