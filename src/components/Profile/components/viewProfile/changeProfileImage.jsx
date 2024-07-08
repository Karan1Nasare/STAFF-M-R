import React, { useState } from 'react';
import { Button, IconButton } from '@mui/material';
import UploadFileIcon from '@mui/icons-material/UploadFile';
import DeleteIcon from '@mui/icons-material/Delete';
import { useNavigate } from 'react-router-dom';

import ProfileImage from '../../../../assets/profile.svg';
import ProfileDetailInfo from '../tabs/profileDetailInfo';

const ChangeProfileIamge = ({ setIsChangeProfile }) => {
  const navigate = useNavigate();

  const [selectedFile, setSelectedFile] = useState(null);
  const [isDeleteOpen, setIsDeleteOpen] = useState(false);

  const handleFileChange = event => {
    setSelectedFile(event.target.files[0]);
  };
  const handleDeleteClick = () => {
    setIsDeleteOpen(true);
  };
  const handleCloseDelete = () => {
    setIsDeleteOpen(false);
  };
  const confirmDeleteHandler = () => {
    setIsDeleteOpen(false);
  };

  return (
    <>
      <div className='flex items-center bg-secondary__fill mt-2 h-44 w-44 justify-center'>
        <div className='w-32 h-32'>
          <img
            src={ProfileImage}
            alt='Circular'
            className='object-cover w-full h-full'
          />
        </div>
      </div>
      <ProfileDetailInfo />
    </>
  );
};

export default ChangeProfileIamge;
