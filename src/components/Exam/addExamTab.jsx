import React, { useState } from 'react';
import { FaRegUserCircle } from 'react-icons/fa';
import { IoMdAddCircleOutline } from 'react-icons/io';
import AddQuestionsInfo from './addQuestionsInfo';
import BlankAddQuestions from './blankAddQuestions';

const AddQuestionTab = () => {
  const [activeTab, setActiveTab] = useState(0);
  const tabs = [
    {
      title: 'Basic Info',
      icon: <FaRegUserCircle />,
      component: <AddQuestionsInfo />,
    },
    {
      title: 'Add Questions',
      icon: <IoMdAddCircleOutline />,
      component: <BlankAddQuestions />,
    },
  ];
  const handleTabClick = index => {
    setActiveTab(index);
  };
  const handlePreviousTab = () => {
    setActiveTab(prevTab => (prevTab > 0 ? prevTab - 1 : 0));
  };
  const handleNextTab = () => {
    setActiveTab(prevTab =>
      prevTab < tabs.length - 1 ? prevTab + 1 : prevTab,
    );
  };
  return (
    <div className=''>
      <div className='tabs'>
        <div className='flex'>
          {tabs.map((tab, index) => (
            <button
              key={index}
              onClick={() => handleTabClick(index)}
              className={`${
                index === activeTab
                  ? 'border-primary text-white'
                  : 'border-transparent text-white hover:text-white hover:border-white'
              } relative inline-flex items-center px-4 py-2 border-b-2 font-medium text-sm focus:outline-none`}
            >
              <div className={`flex items-center`}>
                <span
                  className={`mt-1 mr-2 ${index === activeTab ? 'text-primary' : 'text-white'} `}
                >
                  {tab.icon}
                </span>
                <h1
                  className={`${index === activeTab ? 'text-primary' : 'text-white'} `}
                >
                  {tab.title}
                </h1>
              </div>
            </button>
          ))}
        </div>
        <div className='mt-4 w-[100%]'>{tabs[activeTab].component}</div>
        <div className='flex 2xl:w-[100%] mt-8 lg:w-[100%] justify-between'>
          <button
            className='rounded-md bg-white w-24 h-8 text-black hover:bg-primary hover:text-white'
            onClick={handlePreviousTab}
            disabled={activeTab === 0}
          >
            Previous
          </button>
          <button
            className='rounded-md bg-white w-24 h-8 text-black ml-auto hover:bg-primary hover:text-white'
            onClick={handleNextTab}
            disabled={activeTab === tabs.length - 1}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};
export default AddQuestionTab;
