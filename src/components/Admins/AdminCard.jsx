import { Avatar, Card, CardContent, Chip, Stack } from '@mui/material';
import React from 'react';
import { Icon } from '@iconify/react';

const AdminCard = ({ admin }) => {
  return (
    <Card className='border border-bright__grey'>
      <CardContent className='bg-secondary__fill'>
        <Stack
          direction={'row'}
          justifyContent={'space-between'}
          alignItems={'center'}
        >
          <Stack direction={'row'} alignItems={'center'} spacing={2}>
            <Avatar
              src={admin?.profileImage}
              alt='Admin Name'
              width={57}
              height={57}
            />
            <Stack sx={{ textAlign: 'left' }}>
              <p className='text-sm text-[rgba(255,255,255,1)]'>
                {admin?.name}
              </p>
              <p className='text-xs text-[rgba(255,255,255,1)]'>
                {admin?.email}{' '}
              </p>
              <p className='text-xs text-[rgba(255,255,255,1)]'>
                {admin?.phone}
              </p>
            </Stack>
          </Stack>
          <Icon icon={'mdi:eye'} className='text-white' width={25} />
        </Stack>
        <Stack
          direction={'row'}
          justifyContent={'space-between'}
          alignItems={'center'}
          sx={{ marginTop: '10px' }}
        >
          <Stack spacing={2}>
            <p className='text-[rgba(152,164,174,1)] text-xs'>Active Org</p>
            <Chip
              label={admin?.activeOrgCount}
              size='small'
              sx={{
                background: 'rgba(54, 199, 195, 0.2)',
                color: 'rgba(54, 199, 195, 1)',
              }}
            />
          </Stack>
          <Stack spacing={2}>
            <p className='text-[rgba(152,164,174,1)] text-xs'>Website</p>
            <Chip
              label={`${admin?.website.slice(0, 15)}...`}
              size='small'
              sx={{
                background: 'rgba(54, 199, 108, 0.2)',
                color: 'rgba(54, 199, 108, 1)',
              }}
            />
          </Stack>
        </Stack>
      </CardContent>
    </Card>
  );
};

export default AdminCard;
