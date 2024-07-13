import React from 'react';
import Header from './components/header';
import AddNotificationForm from './components/addNotificationForm';

const AddNotification = () => {
  return (
    <div className='flex flex-col p-8 space-y-8'>
      <h1 className='text-white text-3xl text-left'>Notification</h1>
      <Header />
      <AddNotificationForm />
    </div>
  );
};

export default AddNotification;
