import React, { useState, useEffect } from 'react';
import {
  CircularProgress,
  Box,
  Typography,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
} from '@mui/material';
import CircularProgressBar from './CircularProgressBar';

const AttendanceReport = ({ apiEndpoint }) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [selectedMonths, setSelectedMonths] = useState({});

  // Sample data for testing
  const sampleData = {
    reports: [
      {
        months: ['January', 'February', 'March'],
        pass: 70,
        fail: 30,
      },
      {
        months: ['April', 'May', 'June'],
        pass: 80,
        fail: 20,
      },
      {
        months: ['July', 'August', 'September'],
        pass: 60,
        fail: 40,
      },
    ],
  };

  useEffect(() => {
    console.log('Setting sample data...');
    // Simulate API call
    setTimeout(() => {
      console.log('Sample data set');
      setData(sampleData);
      setLoading(false);
    }, 1000);
  }, []);

  const handleChange = (event, index) => {
    setSelectedMonths(prevSelectedMonths => ({
      ...prevSelectedMonths,
      [index]: event.target.value,
    }));
  };

  if (loading) {
    return <CircularProgress />;
  }

  if (!data) {
    return <Typography variant='h6'>No data available</Typography>;
  }

  console.log('Rendering component with data:', data);

  return (
    <div className='p-4 bg-transparent rounded-lg shadow-md'>
      <Box className='flex items-center mb-4'>
        <Box className='h-7 w-1 bg-orange-400 rounded-3xl mr-2'></Box>
        <Typography variant='h6' className='text-white'>
          Chirag Gondaliya Details
        </Typography>
      </Box>
      <Box className='flex space-x-4'>
        {data.reports.map((report, index) => (
          <Box key={index} className='flex flex-col items-start space-y-4'>
            <FormControl
              fullWidth
              variant='outlined'
              className='mb-4 border border-gray-700'
            >
              <InputLabel>Select Month</InputLabel>
              <Select
                value={selectedMonths[index] || ''}
                onChange={event => handleChange(event, index)}
                label='Select Month'
              >
                {report.months.map((month, idx) => (
                  <MenuItem key={idx} value={month}>
                    {month}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            <Box className='p-6 bg-secondary__fill text-white rounded-xl border border-gray-700'>
              <Typography variant='h6' className='mb-4'>
                Attendance Report
              </Typography>
              <Box className='mb-4'></Box>{' '}
              {/* Adding space between "Attendance Report" and graphs */}
              <Box className='relative' style={{ width: 200, height: 200 }}>
                <CircularProgressBar
                  size={200}
                  strokeWidth={10}
                  percentage={report.pass}
                  maxPercentage={75}
                  color='#4caf50' // Lighter green for pass percentage
                />
                <Box
                  className='absolute top-0 left-0'
                  style={{
                    width: 160,
                    height: 160,
                    transform: 'translate(20px, 20px)',
                  }}
                >
                  <CircularProgressBar
                    size={160}
                    strokeWidth={10}
                    percentage={report.fail}
                    maxPercentage={75}
                    color='#f44336' // Bright red for fail percentage
                  />
                </Box>
              </Box>
              <Box className='flex space-x-4 mt-4'>
                <Box className='flex items-center space-x-2'>
                  <Box className='w-4 h-4 bg-green-500 rounded-full'></Box>
                  <Typography variant='body1'>Pass</Typography>
                  <Typography variant='body1'>({report.pass}%)</Typography>
                </Box>
                <Box className='flex items-center space-x-2'>
                  <Box className='w-4 h-4 bg-red-500 rounded-full'></Box>
                  <Typography variant='body1'>Fail</Typography>
                  <Typography variant='body1'>({report.fail}%)</Typography>
                </Box>
              </Box>
            </Box>
          </Box>
        ))}
      </Box>
    </div>
  );
};

export default AttendanceReport;
