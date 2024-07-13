import React, { useState } from 'react';
import TabTitle from '../../../shared/TabTitle';
import ProfileDetailsForm from '../Forms/profileForm';
import UploadProfileImage from '../viewProfile/changeProfileImage';

const ProfileDetails = ({ setValue }) => {
  const [isChangeProfile, setIsChangeProfile] = useState(false);
  return (
    <>
      <TabTitle title='Org & Personal Details' sx={{ marginTop: '20px' }} />
      {!isChangeProfile ? (
        <UploadProfileImage setIsChangeProfile={setIsChangeProfile} />
      ) : (
        <ProfileDetailsForm setValue={setValue} />
      )}
    </>
  );
};

export default ProfileDetails;
