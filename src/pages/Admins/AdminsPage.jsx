import {
  Grid,
  Pagination,
  PaginationItem,
  Stack,
  styled,
  TextField,
} from '@mui/material';
import { Icon } from '@iconify/react';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../../components/shared/buttons/Button';
import colors from '../../theme/colors';
import AdminCard from '../../components/Admins/AdminCard';
import AdminImage from '../../assets/images/profile-image.png';

const AdminData = [
  {
    name: 'M&R Education Admin',
    email: 'abcorg@gmail.com',
    phone: '+91 6353264115',
    activeOrgCount: 200,
    website: 'www.mandreducation.com',
    profileImage: AdminImage, // Path to profile image
  },
  {
    name: 'XYZ Education Admin',
    email: 'xyzorg@gmail.com',
    phone: '+91 9876543210',
    activeOrgCount: 150,
    website: 'www.xyzeducation.com',
    profileImage: AdminImage, // Path to profile image
  },
  {
    name: 'ABC Education Admin',
    email: 'abcedu@gmail.com',
    phone: '+91 1234567890',
    activeOrgCount: 300,
    website: 'www.abceducation.com',
    profileImage: AdminImage, // Path to profile image
  },
  {
    name: 'LMN Education Admin',
    email: 'lmnedu@gmail.com',
    phone: '+91 1122334455',
    activeOrgCount: 250,
    website: 'www.lmneducation.com',
    profileImage: AdminImage, // Path to profile image
  },
  {
    name: 'LMN Education Admin',
    email: 'lmnedu@gmail.com',
    phone: '+91 1122334455',
    activeOrgCount: 250,
    website: 'www.lmneducation.com',
    profileImage: AdminImage, // Path to profile image
  },
  {
    name: 'LMN Education Admin',
    email: 'lmnedu@gmail.com',
    phone: '+91 1122334455',
    activeOrgCount: 250,
    website: 'www.lmneducation.com',
    profileImage: AdminImage, // Path to profile image
  },
  {
    name: 'LMN Education Admin',
    email: 'lmnedu@gmail.com',
    phone: '+91 1122334455',
    activeOrgCount: 250,
    website: 'www.lmneducation.com',
    profileImage: AdminImage, // Path to profile image
  },
  {
    name: 'LMN Education Admin',
    email: 'lmnedu@gmail.com',
    phone: '+91 1122334455',
    activeOrgCount: 250,
    website: 'www.lmneducation.com',
    profileImage: AdminImage, // Path to profile image
  },
  {
    name: 'LMN Education Admin',
    email: 'lmnedu@gmail.com',
    phone: '+91 1122334455',
    activeOrgCount: 250,
    website: 'www.lmneducation.com',
    profileImage: AdminImage, // Path to profile image
  },
];
const AdminsPage = () => {
  const navigate = useNavigate();
  return (
    <div
      className='w-full'
      style={{
        display: 'flex',
        flexDirection: 'column',
        overflowY: 'hidden', // Disable container-level overflow
      }}
    >
      <div className='w-max mb-6'>
        <h2 className="text-white text-[32px] font-normal font-['Helvetica'] text-left">
          Admins
        </h2>
      </div>
      <div className='text-sm  w-full p-7  font-medium text-center bg-secondary__fill text-gray-500 border border-bright__grey rounded-md flex flex-row items-center justify-between'>
        <Stack direction={'row'} alignItems={'center'} spacing={3}>
          <TextField
            sx={{ minWidth: '300px' }}
            placeholder='Search Name, Inrollment, Standerd'
          />
          <Icon icon={'octicon:filter-16'} className='text-white' width={35} />
        </Stack>

        <Button
          sx={{ padding: '8px 16px', background: colors.white }}
          startIcon={<Icon icon={'gala:add'} />}
          onClick={() => navigate('/admin/add-admin')}
        >
          Add Admin
        </Button>
      </div>
      <Stack
        sx={{ width: '100%', marginTop: '20px', paddingBottom: '150px' }}
        justifyContent={'center'}
        alignItems={'center'}
      >
        <Grid container spacing={3} sx={{ paddingBottom: '20px' }}>
          {AdminData &&
            AdminData?.map((admin, index) => {
              return (
                <Grid item md={4} key={index}>
                  <AdminCard admin={admin} />
                </Grid>
              );
            })}
        </Grid>

        <Pagination
          count={10}
          renderItem={item => <PaginationItem {...item} />}
          sx={{
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
      </Stack>
    </div>
  );
};

export default AdminsPage;
