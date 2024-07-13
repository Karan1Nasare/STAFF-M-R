import { Stack } from '@mui/material';
import React from 'react';
import TabTitle from '../../../shared/TabTitle';
import Button from '../../../shared/buttons/Button';
import UpdateAccountField from './updateAccountField';

const ProfileInfo = ({ organization }) => {
  // Call Update Api Here
  const handleUpdateUserName = data => {
    console.debug('update user name', data);
  };

  const handleUpdatePassword = data => {
    console.debug('update password', data);
  };

  const handleUpdateEmail = data => {
    console.debug('update email', data);
  };

  const handleUpdatePhone = data => {
    console.debug('update mobile', data);
  };

  return (
    <>
      <Stack sx={{ margin: '20px 0' }}>
        <TabTitle title={'Org Account Info'} />
      </Stack>
      <Stack>
        {/* Update User Name */}
        <UpdateAccountField
          label={'Username'}
          value={organization?.username}
          formFields={[
            {
              label: 'Username',
              name: 'username',
              type: 'text',
              placeholder: 'Enter your username',
              value: organization?.username,
              required: true,
            },
          ]}
          handleUpdate={handleUpdateUserName}
        />
        {/* Update Password */}
        <UpdateAccountField
          label={'Password'}
          value={organization?.password}
          formFields={[
            {
              label: 'Current Password*',
              name: 'current_password',
              type: 'text',
              placeholder: 'Enter Current Password',
              value: '',
              required: true,
            },
            {
              label: 'New Password*',
              name: 'new_password',
              type: 'text',
              placeholder: 'Enter New Password',
              value: '',
              required: true,
            },
            {
              label: 'New Confirm Password*',
              name: 'new_confirm_password',
              type: 'text',
              placeholder: 'New Conform Password',
              value: '',
              required: true,
            },
          ]}
          isPassword={true}
          handleUpdate={handleUpdatePassword}
        />
        {/* Update Phone Number : */}
        <UpdateAccountField
          label={'Phone Number'}
          value={organization?.phone}
          formFields={[
            {
              label: 'Phone Number',
              name: 'phone_number',
              type: 'text',
              placeholder: 'Enter Phone Number',
              value: organization?.phone,
              required: true,
            },
          ]}
          handleUpdate={handleUpdatePhone}
        />
        {/* Update Email */}
        <UpdateAccountField
          label={'Email'}
          value={organization?.email}
          formFields={[
            {
              label: 'Email',
              name: 'email',
              type: 'text',
              placeholder: 'Enter your Email',
              value: organization?.email,
              required: true,
            },
          ]}
          handleUpdate={handleUpdateEmail}
        />
      </Stack>
    </>
  );
};

export default ProfileInfo;
