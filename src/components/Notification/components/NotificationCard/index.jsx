import React, { useState } from 'react';
import { Icon } from '@iconify/react/dist/iconify';

import ConfirmDelete from '../../../ui/Dialog/ConfirmDelete';
import EditDialogCard from '../../../ui/Dialog/Notification/editDialog';
import EditNotificationDialog from '../../../ui/Dialog/EditNotificationDialog';
import AnnouncementImage from '../../../../assets/announcement_card.png';

function Image({ src, alt }) {
  return (
    <img loading='lazy' src={src} alt={alt} className='w-[37px] h-[37px]' />
  );
}

function InfoItem({ label, value }) {
  return (
    <div className='mt-1.5 text-xs text-orange__primary capitalize'>
      {label} : {value}
    </div>
  );
}

function Description({ children }) {
  return (
    <div className='mt-6 text-xs leading-4 text-gray-400 max-md:max-w-full text-left'>
      {children}
    </div>
  );
}

function NotificationCard({
  title,
  isEditOpen,
  openDelete,
  openEditDialog,
  closeEditDialog,
  confirmDeleteHandler,
  handleCloseDelete,
  openDeleteDialog,
}) {
  const [showEdit, setShowEdit] = useState(false);
  return (
    <>
      <section className='flex flex-col p-8 rounded-lg border border-gray-700 border-solid bg-secondary__fill  max-md:px-5'>
        <header className='flex gap-3 justify-between w-full max-md:flex-wrap max-md:max-w-full'>
          <div className='flex gap-3 justify-center'>
            <Image
              src='https://cdn.builder.io/api/v1/image/assets/TEMP/075c13b2da664ca5633519aac1c19411aa4d8cff7b28bc5cae6ebdbb9f417557?apiKey=33d350ef18e9405bbdd3cdc1375c0c2b&'
              alt='Exam schedule icon'
            />
            <div className='flex flex-col'>
              <h1 className='text-base text-white flex'>{title}</h1>
              <div className='flex'>
                <InfoItem label='Date' value={'6-5-2024'} />
                <InfoItem label='Time' value={'09:45AM'} />
              </div>
            </div>
          </div>
          <div className='flex flex-1 justify-end gap-2.5 ml-auto'>
            <Icon
              icon={'lucide:edit'}
              className='text-white'
              onClick={() => setShowEdit(true)}
            />

            <Icon
              icon={'material-symbols:delete'}
              color='red'
              onClick={openDeleteDialog}
              className='cursor-pointer'
            />
          </div>
        </header>
        <Description>
          Description :<br />
          <br />
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged.
        </Description>
        <ConfirmDelete
          fullMessage='Are you sure you want to Delete Chapter?'
          title='Delete Chapter'
          handleClose={handleCloseDelete}
          open={openDelete}
          deleteHandler={confirmDeleteHandler}
        />
        {/* <EditDialogCard
          isOpen={isEditOpen}
          onClose={closeEditDialog}
          heading='Edit Notifications'
        /> */}
      </section>
      <EditNotificationDialog
        open={showEdit}
        handleClose={() => setShowEdit(false)}
        data={{
          title: 'Notifications Title',
          image: AnnouncementImage,
          description: `Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged.`,
        }}
      />
    </>
  );
}

export default NotificationCard;
