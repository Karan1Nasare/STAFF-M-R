import { Typography } from '@mui/material';
import React, { useState, useEffect } from 'react';

import FeatureHeader from './components/FeatureHeader';
import FeatureCard from '../shared/FeatureCard';
import useFeatures from './hooks/useFeatures';
import Pagination from '../shared/Pagination';
import ViewFeature from './ViewFeature';

const Feature = () => {
  const {
    data,
    isPreviewOpen,
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
    openPreviewDialog,
    closePreviewDialog,
    confirmDeleteHandler,
    handleCloseDelete,
    openDeleteDialog,
  } = useFeatures();

  return (
    <>
      <div className='h-full flex flex-col'>
        <Typography
          className='flex align-items-start'
          variant='mainLayoutTitle'
        >
          Features
        </Typography>
        <FeatureHeader value={searchTerm} onChange={handleSearchChange} />
        <ViewFeature
          data={data}
          isPreviewOpen={isPreviewOpen}
          isEditOpen={isEditOpen}
          openDelete={openDelete}
          searchTerm={searchTerm}
          openEditDialog={openEditDialog}
          closeEditDialog={closeEditDialog}
          openPreviewDialog={openPreviewDialog}
          closePreviewDialog={closePreviewDialog}
          confirmDeleteHandler={confirmDeleteHandler}
          handleCloseDelete={handleCloseDelete}
          openDeleteDialog={openDeleteDialog}
          totalShowItems={totalShowItems}
          currentPage={currentPage}
          ITEMS_PER_PAGE={ITEMS_PER_PAGE}
          setCurrentPage={setCurrentPage}
        />
      </div>
    </>
  );
};

export default Feature;
