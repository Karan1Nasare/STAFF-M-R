import React, { useState } from 'react';
import objectIcon from '../../assets/icon/objectIcon.svg';
import EditDeleteQuestion from './editDeleteQuestion';
import AddQuestions from './addQuestion';

const BlankAddQuestions = () => {
  const [addQuestion, setAddQuestion] = useState(false);
  return (
    <div className=' text-white'>
      <div className='flex mb-7 w-screen mt-4'>
        {addQuestion ? (
          <AddQuestions />
        ) : (
          <div className='w-44.1 3xl:w-[46%] xl:w-[43%] lg:w-[42%] h-39.3 rounded-md border border-gray-700 bg-secondary__fill'>
            {/* <img
              className='w-84 2xl:w-96 mt-52 mb-3 center'
              src={objectIcon}
              alt=''
            /> */}
            <div className='flex justify-center items-center'>
              <img
                className='w-84 2xl:w-96 mt-52 mb-3 center'
                src={objectIcon}
                alt=''
              />
            </div>
            <h3 className='mt-[%]'>
              <span
                className='text-primary underline text-base mr-1'
                onClick={() => setAddQuestion(true)}
              >
                Click Here
              </span>
              to Add Questions
            </h3>
          </div>
        )}
        <EditDeleteQuestion />
      </div>
    </div>
  );
};
export default BlankAddQuestions;
