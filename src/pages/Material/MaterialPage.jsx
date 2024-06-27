import React, { useState } from 'react';
import ContentFilterApply from '../../components/Material/Filters/ContentFilterApply';
/* eslint-disable import/no-cycle */
import ContentTabs from '../../components/Material/Tabs/ContentTabs';

const MaterialPage = () => {
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
        </div>
        <div className='flex'>
          <div className='border-r border-primary h-6' />
          <h2 className='text-left text-white mb-6 ml-3 '>Content</h2>
        </div>
        <ContentFilterApply />
        <ContentTabs />
      </div>
    </>
  );
};

export default MaterialPage;
