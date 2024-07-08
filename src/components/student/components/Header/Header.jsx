import React from 'react';
import { MdOutlineSegment } from 'react-icons/md';
import { IoIosAddCircle } from 'react-icons/io';
import { useNavigate } from 'react-router-dom';
import { Grid, Stack } from '@mui/material';
import { Icon } from '@iconify/react';
// import { TiUserAdd } from 'react-icons/ti';

const Header = ({ inputValue, handleInputChange, handleSearchClick }) => {
  const navigate = useNavigate();
  return (
    <div>
      <h1 className='text-white text-3xl text-left mb-3'>Student</h1>
      <div className='flex justify-between gap-5 p-6 rounded-xl border border-gray-700 border-solid bg-[#0B1739]  max-md:flex-wrap max-md:px-5'>
        {/* <div className='flex items-center bg-[#0B1739] p-4 space-x-4 justify-between'> */}

        <Grid container spacing={2} sx={{ flex: 1 }}>
          <Grid
            item
            sm={6}
            md={3}
            xs={12}
            sx={{ display: 'flex', alignItems: 'center', gap: '10px' }}
          >
            <Stack>
              <input
                key={7}
                onChange={handleInputChange}
                value={inputValue}
                className='p-2 h-10 rounded-sm text-white w-80 opacity-45 bg-secondary__fill__dark'
                type='text'
                placeholder=' Search Name, Innrollment, Standard'
              />
            </Stack>

            <button className='bg-[#0A1330] rounded-md p-[10px] flex items-center justify-center'>
              <Icon
                icon={'octicon:filter-16'}
                className='text-white'
                width={25}
              />
            </button>
          </Grid>
        </Grid>

        <Stack
          direction={'row'}
          justifyContent={'center'}
          alignItems={'center'}
        >
          <button
            className='bg-white text-[#0E1736]rounded-md flex items-center h-[44px] text-base  flex-row gap-2'
            style={{
              padding: '10px 16px',
              borderRadius: '6px',
            }}
            onClick={() => navigate('/student/studentAttendance')}
          >
            <Icon icon={'simple-line-icons:plus'} />
            Student Attendance
          </button>
        </Stack>
      </div>
    </div>
  );
};

export default Header;
