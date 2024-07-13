import React, { useState } from 'react';
import { IoEye } from 'react-icons/io5';
import { FaRegEdit } from 'react-icons/fa';
import { RiDeleteBin5Fill } from 'react-icons/ri';
import PreviewDialog from '../Dialog/previewDialog';
import ConfirmDelete from '../../ui/Dialog/ConfirmDelete';
import EditFeatureCard from '../Dialog/FeatureDialog/editDialog';

const FeatureCard = ({
  image,
  title,
  descriptionTitle,
  descriptionMetaData,
  isPreviewOpen,
  isEditOpen,
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
    <div className='relative bg-secondary__fill h-68 w-34 mt-4 p-8 rounded-lg border border-grey__primary__light border-opacity-20'>
      <img src={image} className='w-full h-13' alt='Feature Image' />
      <div className='flex items-center justify-between mt-4'>
        <div className='flex items-start flex-col'>
          <div className='text-white font-normal text-md'>{title}</div>
          <div className='flex items-center'>
            <div className='text-grey__primary__light text-sm'>
              {descriptionTitle}
            </div>
            <div className='text-xs rounded-xl border w-12 text-success border-none bg-success bg-opacity-50 px-1 py-1 ml-3 font-semibold'>
              {descriptionMetaData}
            </div>
          </div>
        </div>
        <div className='text-white flex'>
          <IoEye
            className='h-5 w-5 mr-4 cursor-pointer'
            onClick={openPreviewDialog}
          />
          <FaRegEdit className='h-5 w-5 mr-4' onClick={openEditDialog} />
          <RiDeleteBin5Fill
            className='h-5 w-5 text-red-500'
            onClick={openDeleteDialog}
          />
        </div>
      </div>
      <PreviewDialog
        isOpen={isPreviewOpen}
        onClose={closePreviewDialog}
        heading='Announcement'
        title={title}
        subTitle={descriptionTitle}
        previewImage={image}
        successNumber={descriptionMetaData}
        description=' Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti mollitia veniam ut aut error. Fugiat accusamus ipsam, quisquam eius qui magni consequatur voluptatum ab deleniti repellat, facere, consectetur ut commodi iusto. Ab.
        '
      />
      <ConfirmDelete
        fullMessage={'Are you sure want to Delete Feature ?'}
        title={'Delete Feature'}
        handleClose={handleCloseDelete}
        deleteHandler={confirmDeleteHandler}
        open={openDelete}
      />
      <EditFeatureCard
        isOpen={isEditOpen}
        onClose={closeEditDialog}
        heading='Edit Announcement'
        title={title}
        previewImage={image}
      />
    </div>
  );
};

export default FeatureCard;
