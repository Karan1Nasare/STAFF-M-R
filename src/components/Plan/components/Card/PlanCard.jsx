import { Card, CardContent, Grid, Stack, Typography } from '@mui/material';
import React, { useState } from 'react';
import { FaRegEdit } from 'react-icons/fa';
import { FiTrash2 } from 'react-icons/fi';

import ConfirmDelete from '../../../ui/Dialog/ConfirmDelete';
import EditPlan from '../../../shared/Dialog/Plan/editDialog';

function PlanCard({ plan }) {
  const [isEditOpen, setIsEditOpen] = useState(false);
  const [openDelete, setOpenDelete] = useState(false);

  const openEditDialog = () => {
    setIsEditOpen(true);
  };

  const closeEditDialog = () => {
    setIsEditOpen(false);
  };

  const confirmDeleteHandler = () => {
    setOpenDelete(false);
  };

  const handleCloseDelete = () => {
    setOpenDelete(false);
  };

  const openDeleteDialog = () => {
    setOpenDelete(true);
  };
  return (
    <>
      <Card className='border-bright__grey'>
        <CardContent className='bg-secondary__fill'>
          <Stack
            direction={'row'}
            justifyContent={'space-between'}
            alignItems={'center'}
          >
            <Typography variant='h5' className='text-white'>
              {plan?.title}
            </Typography>
            <Stack
              direction={'row'}
              justifyContent={'space-between'}
              alignItems={'center'}
              spacing={2}
            >
              <FaRegEdit
                className='text-white cursor-pointer'
                onClick={openEditDialog}
              />
              <FiTrash2
                className='text-red-600 cursor-pointer'
                onClick={openDeleteDialog}
              />
            </Stack>
          </Stack>
          <Stack sx={{ margin: '20px 5px' }}>
            <img
              src={plan?.badge}
              width={90}
              height={90}
              alt={`${plan?.title} image`}
            />
          </Stack>
          <p className='text-primary font-bold text-left m-2'>{plan?.price}</p>
          <Stack textAlign={'left'}>
            <ul className='text-white'>
              {plan?.features?.map((feature, index) => (
                <li
                  className='m-2 text-sm font-[Helvetica] text-[#BDBDBD]'
                  key={index}
                >
                  {feature}
                </li>
              ))}
            </ul>
          </Stack>
        </CardContent>
      </Card>
      <ConfirmDelete
        fullMessage={'Are you sure want to Delete Plan ?'}
        title={'Delete Plan'}
        handleClose={handleCloseDelete}
        deleteHandler={confirmDeleteHandler}
        open={openDelete}
      />
      <EditPlan
        isOpen={isEditOpen}
        onClose={closeEditDialog}
        heading='Edit Plan'
        title={plan?.title}
        previewImage={plan?.badge}
      />
    </>
  );
}

export default PlanCard;
