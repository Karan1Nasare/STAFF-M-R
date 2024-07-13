import React, { useEffect, useState } from 'react';
import { Typography } from '@mui/material';
import axiosInstance from '../../utilities/axios-client';
import URLS from '../../constants/api'; // Update this path to where your URLS are located
import totalOrganizationsIcon from '../../assets/icon/totalOrganizationsIcon.svg';
import totalContentsIcon from '../../assets/icon/totalContentsIcon.svg';
import totalQuestionBank from '../../assets/icon/totalQuestionBank.svg';

const DashboardCards = () => {
  const [data, setData] = useState({
    exam_count: 0,
    question_bank_count: 0,
    student_count: 0,
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axiosInstance.get(URLS.DASHBOARD_STAFF());
        if (response.data.success) {
          setData(response.data.data);
        }
      } catch (error) {
        console.error('Error fetching dashboard data:', error);
      }
    };

    fetchData();
  }, []);

  const card = [
    {
      icon: totalOrganizationsIcon,
      title: 'Total Students',
      count: data.student_count,
      color_from: 'rgba(31, 64, 238, 0.15)',
      color_to: 'rgba(31, 64, 238, 0.035)',
    },
    {
      icon: totalContentsIcon,
      title: 'Total Exam',
      count: data.exam_count,
      color_from: 'rgba(248, 194, 9, 0.15)',
      color_to: 'rgba(248, 194, 9, 0.035)',
    },
    {
      icon: totalQuestionBank,
      title: 'Total Question Bank',
      count: data.question_bank_count,
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
          <div className='absolute'>
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
