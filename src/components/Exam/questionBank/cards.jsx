import React, { useEffect, useState } from 'react';
import { RiDeleteBin5Fill } from 'react-icons/ri';
import { FaEye } from 'react-icons/fa';
import { FiEdit } from 'react-icons/fi';
import { Pagination } from '@mui/material';
import ConfirmDelete from '../../ui/Dialog/ConfirmDelete';
import EditCard from '../editCard';
import PreviewQuestion from '../PreviewQuestion';
import colors from '../../../theme/colors';

const Cards = ({
  currentPage,
  handlePageChange,
  examcards,
  handleSelectQuestion,
  handleChange,
  checkBoxStates,
}) => {
  const [isDeleteOpen, setIsDeleteOpen] = useState(false);
  const [isEdit, setIsEdit] = useState(false);

  const handleCloseDelete = () => {
    setIsDeleteOpen(false);
  };
  const confirmDeleteHandler = () => {
    setIsDeleteOpen(false);
  };

  useEffect(() => {
    handleSelectQuestion(checkBoxStates);
  }, [checkBoxStates]);

  return (
    <>
      <div className='mt-8 2xl:grid 2xl:grid-cols-3 xl:grid xl:grid-cols-2 md:gap-8 md:grid mg:grid-cols-1 gap-8 lg:grid lg:grid-cols-2 2xl:gap-8'>
        {!examcards || examcards.length === 0 ? (
          <p className='text-white'>No cards found.</p>
        ) : (
          examcards?.data.map((card, index) => (
            <div
              key={index}
              className='bg-secondary__fill border border-gray-700 h-28 p-7 rounded-xl '
            >
              <div className='flex justify-between'>
                <div className='text-left'>
                  <h1 className='text-white text-lg'>
                    {card?.title || 'Topic Name'}
                  </h1>
                  <div className='flex mt-1'>
                    <h3 className='text-grey__primary__light mr-2 text-sm '>
                      Question Count:
                    </h3>
                    <h3 className='bg-success w-10 rounded-full text-sm pl-3 bg-opacity-25 text-success'>
                      {card?.question_bank_details_count || 0}
                    </h3>
                  </div>
                </div>
                <div className='flex mt-3'>
                  <span className='mr-3 text-white'>{card.icon1}</span>
                  <input
                    onChange={e => handleChange(e, card)}
                    checked={checkBoxStates?.includes(card?.id)}
                    className={`mr-6 mt-1 rounded ${checkBoxStates?.includes(card?.id) ? '' : 'appearance-none'} h-5 w-5 border border-zinc-400`}
                    type='checkbox'
                  />
                </div>
              </div>
            </div>
          ))
        )}

        <div>
          <ConfirmDelete
            fullMessage={'Are you sure want to Delete Question Bank ?'}
            title={'Delete Topic Name'}
            handleClose={handleCloseDelete}
            deleteHandler={confirmDeleteHandler}
            open={isDeleteOpen}
          />
        </div>
        {isEdit ? <EditCard isEdit={setIsEdit} /> : null}
      </div>
      <div className='flex justify-center w-full'>
        <Pagination
          count={Math.ceil(
            (examcards?.total ?? 1) / (examcards?.per_page ?? 1),
          )}
          page={currentPage}
          onChange={handlePageChange}
          sx={{
            mt: '25px',
            '& .MuiPaginationItem-root': {
              color: 'rgba(125, 143, 179, 1)',
              '&.Mui-selected': {
                color: colors.white,
              },
              '&:hover': {
                backgroundColor: colors.secondary__fill__dark,
                color: colors.white,
              },
            },
            '& .MuiPaginationItem-previousNext': {
              backgroundColor: colors.white,
              color: colors.black,
            },
          }}
        />
      </div>
    </>
  );
};

export default Cards;
