import React, { useState } from 'react';
import { RiDeleteBin5Fill } from 'react-icons/ri';
import { FaEye } from 'react-icons/fa';
import { FiEdit } from 'react-icons/fi';
import ConfirmDelete from '../ui/Dialog/ConfirmDelete';
import EditCard from './editCard';
import MyComponent from './myComponent';
import PreviewQuestion from './PreviewQuestion';
import useFetcher from '../../hooks/useFetcher';
import URLS from '../../constants/api';
import axiosInstance from '../../utilities/axios-client';

const Cards = ({ cards, examcards, setExamcards }) => {
  const { fetcher } = useFetcher();
  const [DeleteDialog, setDeleteDialog] = useState({ show: false, id: null });
  const [isEdit, setIsEdit] = useState(false);
  const [popup, setPopup] = useState(false);

  const handleClosePreview = () => {
    setPopup(false);
  };

  const handlePopupClick = () => {
    setPopup(!popup);
  };
  const handleEditClick = () => {
    setIsEdit(!isEdit);
  };
  const handleDeleteClick = id => {
    setDeleteDialog({ show: true, id });
  };
  const handleCloseDelete = () => {
    setDeleteDialog({ show: false, id: null });
  };
  const confirmDeleteHandler = () => {
    fetcher({
      key: 'delete-exam',
      executer: () =>
        axiosInstance.delete(`${URLS.DELETE_EXAM(DeleteDialog.id)}`),
      onSuccess: () => {
        setExamcards(examcards.filter(card => card.id !== DeleteDialog.id));
      },
    });
    setDeleteDialog({ show: false, id: null });
  };
  return (
    <>
      <div className='mt-8 2xl:grid 2xl:grid-cols-3 xl:grid xl:grid-cols-2 md:gap-8 md:grid mg:grid-cols-1 gap-8 lg:grid lg:grid-cols-2 2xl:gap-8'>
        {!examcards || examcards.length === 0 ? (
          <p className='text-white'>No data found.</p>
        ) : (
          examcards.map((card, index) => (
            <div
              key={index}
              className='bg-secondary__fill border border-gray-700 h-44 p-7 rounded-xl '
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
                      {card?.number_of_questions || 0}
                    </h3>
                  </div>
                </div>
                <div className='flex mt-3 '>
                  <span onClick={handlePopupClick} className='mr-3 text-white'>
                    <FaEye style={{ fontSize: '1.2em' }} />
                  </span>
                  <span onClick={handleEditClick} className='mr-3 text-white'>
                    <FiEdit style={{ fontSize: '1.4em' }} />
                  </span>
                  <span
                    onClick={() => handleDeleteClick(card.id)}
                    className='text-red-600'
                  >
                    <RiDeleteBin5Fill style={{ fontSize: '1.5em' }} />
                  </span>
                </div>
              </div>
              <div className='flex pt-5 justify-between'>
                <div>
                  <h2 className='text-grey__primary__light text-sm'>
                    Standard
                  </h2>
                  <h2 className='bg-tealGreen__opacity w-12 mt-2 rounded-full text-xs text-tealGreen px-4 py-1'>
                    {card?.course || 'N/A'}
                  </h2>
                </div>
                <div>
                  <h2 className='text-grey__primary__light text-sm text-right'>
                    Subject
                  </h2>
                  <h2 className='text-primary mt-2 bg-primary  text-sm rounded-full bg-opacity-20 px-4 py-1'>
                    {card?.subject || 'N/A'}
                  </h2>
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
            open={DeleteDialog.id}
          />
        </div>
        {isEdit ? <EditCard isEdit={setIsEdit} /> : null}
      </div>
      <PreviewQuestion open={popup} handleClose={handleClosePreview} />
    </>
  );
};
export default Cards;
