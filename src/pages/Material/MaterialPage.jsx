/* eslint-disable import/no-cycle */

import React, { useState } from 'react';
import ContentFilterApply from '../../components/Material/Filters/ContentFilterApply';
import CourseFilterApply from '../../components/Material/Filters/CourseFilterApply';
import SubjectFilterApply from '../../components/Material/Filters/SubjectFilterApply';
import ChapterFilterApply from '../../components/Material/Filters/ChapterFilterApply';

import ContentTabs from '../../components/Material/Tabs/ContentTabs';
import CourseStdTab from '../../components/Material/Tabs/CourseStdTab';
import SubjectTabs from '../../components/Material/Tabs/SubjectTabs';
import ChapterTabs from '../../components/Material/Tabs/ChapterTabs';

const MaterialTab = activeTab => {
  const tabs = {
    content: <ContentTabs />,
  };

  return tabs[activeTab];
};

const MaterialFilterComponent = activeTab => {
  const tabs = {
    content: <ContentFilterApply />,
  };

  return tabs[activeTab];
};

const MaterialPage = () => {
  const [tab, setTab] = useState('course');

  return (
    <>
      <div
        className='w-full'
        style={{
          height: '100%', // Ensure container takes full viewport height
          display: 'flex',
          flexDirection: 'column',
          overflowY: 'hidden',
        }}
      >
        <div className='w-max mb-6'>
          <h2 className="text-white text-[32px] font-normal font-['Helvetica'] text-left">
            Material
          </h2>

          <div className='text-sm font-medium text-center  text-gray-500 '>
            <ul className='flex flex-wrap -mb-px'>
              <li className='me-2'>
                <a
                  onClick={() => setTab('content')}
                  type='button'
                  className={`inline-block p-4 text-blue-600 border-b-2  rounded-t-lg ${tab === 'content' ? 'text-[#F49B36] border-b-2 border-[#F49B36]' : 'text-blue-600 border-b-2 border-transparent'} dark:text-blue-500 dark:border-blue-500`}
                >
                  Content
                </a>
              </li>
            </ul>
          </div>
        </div>

        {MaterialFilterComponent(tab)}
        <div
          className='mt-8'
          style={{
            flex: 1,
            overflowY: 'auto', // Enable scrolling for this box
            paddingBottom: '200px', // Add padding to ensure last item is not cut off
          }}
        >
          {MaterialTab(tab)}
        </div>
      </div>
    </>
  );
};

export default MaterialPage;
