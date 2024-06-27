import React, { useEffect, useState } from 'react';
import { Typography } from '@mui/material';
import totalOrganizationsIcon from '../../assets/icon/totalOrganizationsIcon.svg';
import totalContentsIcon from '../../assets/icon/totalContentsIcon.svg';
import totalQuestionBank from '../../assets/icon/totalQuestionBank.svg';
import useFetcher from '../../hooks/useFetcher';
import axiosInstance from '../../utilities/axios-client';
import URLS from '../../constants/api';

const DashboardCards = () => {
  // const [data, setData] = useState(null);
  // const { fetcher, getExecutorState } = useFetcher();
  // const { isLoading, error } = getExecutorState('dashboard');

  // useEffect(() => {
  //   const fetchData = async () => {
  //     fetcher({
  //       key: 'dashboard',
  //       executer: () => axiosInstance.get(URLS.DASHBOARD()),
  //       onSuccess: res => setData(res?.data?.data),
  //     });
  //   };
  //   fetchData();
  // }, []);

  const card = [
    {
      icon: totalOrganizationsIcon,
      title: 'Total Students',
      count: '245',
      color_from: 'rgba(31, 64, 238, 0.15)',
      color_to: 'rgba(31, 64, 238, 0.035)',
    },
    {
      icon: totalContentsIcon,
      title: 'Total Exam',
      count: '1834',
      color_from: 'rgba(248, 194, 9, 0.15)',
      color_to: 'rgba(248, 194, 9, 0.035)',
    },
    {
      icon: totalQuestionBank,
      title: 'Total Question Bank',
      count: '800',
      color_from: 'rgba(22, 205, 199, 0.15)',
      color_to: 'rgba(22, 205, 199, 0.035)',
    },
  ];
  return (
    <div className='grid grid-cols-3 gap-8 mx-4'>
      {card.map((item, index) => (
        <div
          key={index}
          className={`relative rounded-xl text-white h-11.5 flex flex-col justify-center items-center overflow-hidden `}
          style={{
            background: `linear-gradient(to bottom, ${item.color_from}, ${item.color_to})`,
          }}
        >
          <div className='absolute '>
            <div className='flex items-center justify-center'>
              <img className='p-2' src={item.icon} alt='icon' />
            </div>
            <div className='text-center mt-2'>
              <Typography variant='h6'>{item.title}</Typography>
              <Typography variant='body1'>{item.count}</Typography>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default DashboardCards;

// green
