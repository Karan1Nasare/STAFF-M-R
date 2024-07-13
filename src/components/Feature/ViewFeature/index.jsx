import React, { useState } from 'react';
import useFeatures from '../hooks/useFeatures';
import FeatureCard from '../../shared/FeatureCard';
import Pagination from '../../shared/Pagination';

const ViewFeature = ({
  data,
  isPreviewOpen,
  isEditOpen,
  searchTerm,
  totalShowItems,
  totalPages,
  currentPage,
  setCurrentPage,
  ITEMS_PER_PAGE,
  openDelete,
  openEditDialog,
  closeEditDialog,
  openPreviewDialog,
  closePreviewDialog,
  confirmDeleteHandler,
  handleCloseDelete,
  openDeleteDialog,
}) => {
  return (
    <>
      <div className='flex-1 '>
        <div className='grid lg:grid-cols-3 gap-3 sm:grid-cols-1 md:grid-cols-2 xs:grid-cols-1'>
          {data &&
            data.map((feature, index) => (
              <FeatureCard
                key={index}
                title={feature.title}
                descriptionTitle={feature.descriptionTitle}
                descriptionMetaData={feature.descriptionMetaData}
                image={feature.image}
                isPreviewOpen={isPreviewOpen}
                isEditOpen={isEditOpen}
                openDelete={openDelete}
                openEditDialog={openEditDialog}
                closeEditDialog={closeEditDialog}
                openPreviewDialog={openPreviewDialog}
                closePreviewDialog={closePreviewDialog}
                confirmDeleteHandler={confirmDeleteHandler}
                handleCloseDelete={handleCloseDelete}
                openDeleteDialog={openDeleteDialog}
              />
            ))}
        </div>
      </div>
      {totalShowItems > ITEMS_PER_PAGE && (
        <Pagination
          totalCards={searchTerm ? data.length : totalShowItems}
          cardsPerPage={ITEMS_PER_PAGE}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      )}
    </>
  );
};

export default ViewFeature;
