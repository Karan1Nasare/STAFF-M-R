/* eslint-disable import/no-cycle */
import React from 'react';
import Header from '../shared/Header/header';
// eslint-disable-next-line import/no-cycle
import SideBar from '../shared/SideBar/sidebar';

const LayoutWrapper = ({ children }) => {
  return (
    <>
      <div className='bg-blue bg-[url(/public/gradientBg.svg),_url(/public/vectorGrid.svg)] h-svh overflow-hidden'>
        <Header />
        <aside
          id='default-sidebar'
          className='fixed z-40 w-56 h-screen transition-transform -translate-x-full sm:translate-x-0 overflox-x-hidden'
          aria-label='Sidebar'
        >
          <div className='px-6.25 py-4 overflow-y-auto'>
            <SideBar />
          </div>
        </aside>
        <div
          className='p-4 sm:ml-64 overflow-y-auto'
          style={{
            flex: 1,
            overflowY: 'auto', // Enable scrolling for this box
            marginTop: 2,
            paddingBottom: '50px', // Add padding to ensure last item is not cut off
            height: 'calc(100vh - 96px)',
          }}
        >
          {children}
        </div>
      </div>
    </>
  );
};

export default LayoutWrapper;
