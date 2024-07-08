import { Stack, Grid, Chip } from '@mui/material';
import React from 'react';

const ProfileDetailInfo = () => {
  const staff = [
    {
      orgNames: ['Aklavya Org', 'Darsh org', 'ganpat org'],
      staffName: 'Chirag Gondaliya',
      phoneNumber: '+91 8938887879',
      subject: 'Social Science',
      address: '22, Bhavya Park, Ahmedabad',
      state: 'Gujarat',
      classes: ['Class 1B', 'Class 1B', 'Class 1B'],
      primaryClasses: ['Class 1B', 'Class 1B', 'Class 1B'],
      staffEmail: 'ABC',
      id: '768368',
      standard: '10th',
      city: 'Gandhinagar',
      degree: 'Ph.D Science',
    },
  ];

  return (
    <Stack
      sx={{
        background: theme => theme.color.secondary__fill,
        padding: '20px',
        border: theme => `1px solid ${theme.color.border_color}`,
        borderRadius: '8px',
        marginTop: '10px',
        width: '100%',
      }}
    >
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <Stack spacing={2}>
            <div>
              <p className='text-[rgba(255,255,255,0.5)] text-sm text-left'>
                Org Name :
              </p>
              <div className='flex flex-wrap gap-2'>
                {staff[0].orgNames.map((name, index) => (
                  <Chip
                    key={index}
                    label={name}
                    sx={{
                      background: 'rgba(54, 199, 108, 0.20)',
                      color: '#36C76C',
                    }}
                  />
                ))}
              </div>
            </div>
            <div>
              <p className='text-[rgba(255,255,255,0.5)] text-sm text-left'>
                Staff Full Name :
              </p>
              <p className='text-white text-lg text-left'>
                {staff[0].staffName}
              </p>
            </div>
            <div>
              <p className='text-[rgba(255,255,255,0.5)] text-sm text-left'>
                Phone Number :
              </p>
              <p className='text-white text-lg text-left'>
                {staff[0].phoneNumber || 'N/A'}
              </p>
            </div>
            <div>
              <p className='text-[rgba(255,255,255,0.5)] text-sm text-left'>
                Subject :
              </p>
              <p className='text-white text-lg text-left'>{staff[0].subject}</p>
            </div>
            <div>
              <p className='text-[rgba(255,255,255,0.5)] text-sm text-left'>
                Standard :
              </p>
              <p className='text-white text-lg text-left'>
                {staff[0].standard}
              </p>
            </div>
            <div>
              <p className='text-[rgba(255,255,255,0.5)] text-sm text-left'>
                State :
              </p>
              <p className='text-white text-lg text-left'>{staff[0].state}</p>
            </div>
          </Stack>
        </Grid>
        <Grid item xs={12} md={6}>
          <Stack spacing={2}>
            <div>
              <p className='text-[rgba(255,255,255,0.5)] text-sm text-left'>
                Class :
              </p>
              <div className='flex flex-wrap gap-2'>
                {staff[0].classes.map((className, index) => (
                  <Chip
                    key={index}
                    label={className}
                    sx={{
                      background: 'rgba(248, 194, 10, 0.20)',
                      color: '#F8C20A',
                    }}
                  />
                ))}
              </div>
            </div>
            <div>
              <p className='text-[rgba(255,255,255,0.5)] text-sm text-left'>
                Primary Class :
              </p>
              <div className='flex flex-wrap gap-2'>
                {staff[0].primaryClasses.map((primaryClass, index) => (
                  <Chip
                    key={index}
                    label={primaryClass}
                    sx={{
                      background: 'rgba(22, 205, 199, 0.20)',
                      color: '#16CDC7',
                    }}
                  />
                ))}
              </div>
            </div>
            <div>
              <p className='text-[rgba(255,255,255,0.5)] text-sm text-left'>
                Address :
              </p>
              <p className='text-white text-lg text-left'>{staff[0].address}</p>
            </div>
            <div>
              <p className='text-[rgba(255,255,255,0.5)] text-sm text-left'>
                Staff Email :
              </p>
              <p className='text-white text-lg text-left'>
                {staff[0].staffEmail || 'N/A'}
              </p>
            </div>
            <div>
              <p className='text-[rgba(255,255,255,0.5)] text-sm text-left'>
                ID :
              </p>
              <p className='text-white text-lg text-left'>{staff[0].id}</p>
            </div>
            <div>
              <p className='text-[rgba(255,255,255,0.5)] text-sm text-left'>
                City :
              </p>
              <p className='text-white text-lg text-left'>{staff[0].city}</p>
            </div>
            <div>
              <p className='text-[rgba(255,255,255,0.5)] text-sm text-left'>
                Degree :
              </p>
              <p className='text-white text-lg text-left'>{staff[0].degree}</p>
            </div>
          </Stack>
        </Grid>
      </Grid>
    </Stack>
  );
};

export default ProfileDetailInfo;
