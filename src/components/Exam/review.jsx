import React, { useState, useEffect } from 'react';
import { RiArrowDropDownLine } from 'react-icons/ri';
import { Link } from 'react-router-dom';
import { Icon } from '@iconify/react';
import Dropdown from '../shared/DropDown';

const Review = () => {
  const [inputValue, setInputValue] = useState('');
  const markOptions = ['1', '2', '3'];
  const [selectMarkOption, setSelectMarkOption] = useState('Mark');

  const questionTypeOptions = ['MCQ', 'T/F', 'Summary'];
  const [selectQuestionTypeOption, setSelectQuestionTypeOption] =
    useState('Question Type');
  const questions = [
    {
      mark: '2 Mark',
      questionNo: '1.',
      question: 'In parallel combination of resistances, the voltage is ?',
      option1: 'lower across largest resistance',
      option2: 'higher across largest resistance ',
      option3: 'same across each resistance ',
      option4: 'higher across smaller resistance',
    },
    {
      mark: '2 Mark',
      questionNo: '1.',
      question: 'In parallel combination of resistances, the voltage is ?',
      option1: 'lower across largest resistance',
      option2: 'higher across largest resistance ',
      option3: 'same across each resistance ',
      option4: 'higher across smaller resistance',
    },
  ];

  return (
    <>
      <div className='overflow-x-hidden ml-[2%] h-screen'>
        <div className='flex items-center'>
          <div className='border-r border-primary h-5' />
          <h1 className='ml-2 text-white text-lg text-left'> Preview</h1>
        </div>
        <div className='bg-secondary__fill border border-gray-700 overflow-x-hidden w-full max-w-screen mx-auto rounded-xl p-4 mt-4 h-28 flex mr-2 '>
          <div className='pl-4 flex'>
            <input
              className='p-2 w-20.7 mr-2 h-2.6 2xl:mt-5 bg-secondary__fill__dark rounded-md text-white text-sm mt-2'
              type='text'
              placeholder=' Search Name, Innrollment, Standard'
            />
          </div>
          <div className='flex mr-2 text-white 2xl:mt-4 bg-secondary__fill__dark border justify-between border-gray-700 text-sm h-12 w-28 lg:w-32 rounded-md'>
            {/* <button className='pl-1 '>Marks</button>
            <span className='pr-1'>
              <Icon
                icon={'teenyicons:down-outline'}
                className='text-white'
                width={18}
              />
            </span> */}
            <Dropdown
              options={markOptions}
              selectedOption={selectMarkOption}
              setSelectedOption={setSelectMarkOption}
            />
          </div>
          <div className='flex mr-2 text-white 2xl:mt-4 bg-secondary__fill__dark border justify-between border-gray-700 text-sm h-12 w-44 rounded-md'>
            <Dropdown
              options={questionTypeOptions}
              selectedOption={selectQuestionTypeOption}
              setSelectedOption={setSelectQuestionTypeOption}
            />
          </div>
          <div className='flex ml-[13%] mt-2'>
            <div className='flex lg:w-36 mr-7 mt-1'>
              <h3 className='text-white text-base mt-3'>
                Total Questions : 20
              </h3>
            </div>
            <div className='flex mt-1 mr-7'>
              <h3 className='text-white text-base mt-3'>Total Marks : 50</h3>
            </div>
            <div className=' bg-white 2xl:h-11 2xl:w-20 mt-2 text-sm rounded-md'>
              <Link to='/questionBank'>
                <button className='p-3 '>Submit</button>
              </Link>
            </div>
          </div>
        </div>
        <div className='mt-8 overflow-x-hidden w-full max-w-screen mx-auto h-screen grid grid-cols-2 gap-7 '>
          {questions.map((question, index) => {
            return (
              <div
                className='p-7 text-base rounded-xl border border-gray-700 bg-secondary__fill h-[46%]'
                key={index}
              >
                <h1 className='text-left text-base text-primary'>
                  {question.mark}
                </h1>
                <div className='flex text-white my-6'>
                  <h3 className='text-xl mr-3 mt-2'>{question.questionNo}</h3>
                  <div className='w-29.6 h-2.6 px-3 rounded border bg-blue border-gray-700 justify-start items-center gap-4 inline-flex'>
                    <h2 className='text-white text-sm font-normal'>
                      {question.question}
                    </h2>
                  </div>
                </div>
                <h2 className='text-white text-left mb-6 text-base'>Options</h2>
                <div className='flex mb-4'>
                  <input
                    className='mr-6 mt-3 appearance-none rounded h-5 w-5 border border-zinc-400 '
                    type='checkbox'
                  />
                  <div className='w-28.8 h-2.6 px-3 rounded border border-gray-700 bg-blue justify-start items-center gap-4 inline-flex'>
                    <div className='grow shrink basis-0 h-4 justify-start items-center gap-2.5 flex'>
                      <div className="text-white text-sm font-normal font-['Helvetica']">
                        {question.option1}
                      </div>
                    </div>
                  </div>
                </div>
                <div className='flex mb-4'>
                  <input
                    className='mr-6 mt-3 appearance-none rounded h-5 w-5 border border-zinc-400 '
                    type='checkbox'
                  />
                  <div className='w-28.8 h-2.6 px-3 rounded border bg-blue border-gray-700 justify-start items-center gap-4 inline-flex'>
                    <div className='grow shrink basis-0 h-4 justify-start items-center gap-2.5 flex'>
                      <div className="text-white text-sm font-normal font-['Helvetica']">
                        {question.option2}
                      </div>
                    </div>
                  </div>
                </div>
                <div className='flex mb-4'>
                  <input
                    className='mr-6 mt-3 appearance-none rounded h-5 w-5 border border-zinc-400 '
                    type='checkbox'
                  />
                  <div className='w-28.8 h-2.6 px-3 rounded border bg-blue border-gray-700 justify-start items-center gap-4 inline-flex'>
                    <div className='grow shrink basis-0 h-4 justify-start items-center gap-2.5 flex'>
                      <div className="text-white text-sm font-normal font-['Helvetica']">
                        {question.option3}
                      </div>
                    </div>
                  </div>
                </div>
                <div className='flex mb-4'>
                  <input
                    className='mr-6 mt-3 appearance-none rounded h-5 w-5 border border-zinc-400 '
                    type='checkbox'
                  />
                  <div className='w-28.8 h-2.6 px-3 rounded border bg-blue border-gray-700 justify-start items-center gap-4 inline-flex'>
                    <div className='grow shrink basis-0 h-4 justify-start items-center gap-2.5 flex'>
                      <div className="text-white text-sm font-normal font-['Helvetica']">
                        {question.option4}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};
export default Review;
