/* eslint-disable import/no-cycle */

import React from 'react';
import ContentFilterApply from '../Filters/ContentFilterApply';
import ContentTabs from '../Tabs/ContentTabs';

const Content = () => {
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
            Content
          </h2>
        </div>
        <ContentFilterApply />
        <ContentTabs />
      </div>
    </>
  );
};

export default Content;
