import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import useNotification from './hooks/useNotification';
import NotificationCard from './components/NotificationCard';
import NotificationSearch from './components/Header/searchHeader';
import Pagination from '../shared/Pagination';

const NotificationView = () => {
  const navigate = useNavigate(); // Initialize useNavigate
  const {
    data,
    isEditOpen,
    openDelete,
    searchTerm,
    totalShowItems,
    currentPage,
    ITEMS_PER_PAGE,
    setCurrentPage,
    handleSearchChange,
    openEditDialog,
    closeEditDialog,
    confirmDeleteHandler,
    handleCloseDelete,
    openDeleteDialog,
  } = useNotification();

  // Define handleAddNotification to navigate to the add notification route
  const handleAddNotification = () => {
    navigate('/notification/addNotification');
  };

  return (
    <div
      className='w-full'
      style={{
        display: 'flex',
        flexDirection: 'column',
        overflowY: 'hidden',
        padding: 2,
      }}
    >
      <div className='w-max mb-6'>
        <h2 className="text-white text-[32px] font-normal font-['Helvetica'] text-left">
          Notification
        </h2>
      </div>
      <NotificationSearch
        value={searchTerm}
        onChange={handleSearchChange}
        handleAddNotification={handleAddNotification}
      />
      <div className='flex-1 mt-4'>
        {data && data.length > 0 ? (
          <div className='grid lg:grid-cols-2 gap-6 sm:grid-cols-1 md:grid-cols-2 xs:grid-cols-1 w-full'>
            {data.map(notification => (
              <NotificationCard
                key={notification.id} // Ensure a unique key
                title={notification.title}
                isEditOpen={isEditOpen}
                openDelete={openDelete}
                openEditDialog={openEditDialog}
                closeEditDialog={closeEditDialog}
                confirmDeleteHandler={confirmDeleteHandler}
                handleCloseDelete={handleCloseDelete}
                openDeleteDialog={openDeleteDialog}
              />
            ))}
          </div>
        ) : (
          <p className='text-white'>No records found.</p>
        )}
      </div>
      {totalShowItems > ITEMS_PER_PAGE && (
        <Pagination
          totalCards={totalShowItems}
          cardsPerPage={ITEMS_PER_PAGE}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      )}
    </div>
  );
};

export default NotificationView;
