import React, { useCallback, useEffect, useState } from 'react';
import { IoCloseOutline } from 'react-icons/io5';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import useFetcher from '../../../../hooks/useFetcher';
import axiosInstance from '../../../../utilities/axios-client';
import URLS from '../../../../constants/api';

const FilterPopup = ({
  show,
  onClose,
  onFilter,
  standerds,
  setStudents,
  setFilteredStudents,
  selectedDate,
  subjects,
  setSubjects,
}) => {
  const { fetcher, getExecutorState } = useFetcher();
  const { isLoading } = getExecutorState('getstandards');
  const [selectedStandards, setSelectedStandards] = useState([]);
  console.log('🚀 ~ selectedStandards:', selectedStandards);
  const [selectedDates, setSelectedDates] = useState([]);
  const [selectedsubjects, setSelectedsubjects] = useState([]);
  const handleButtonClick = (value, type) => {
    if (type === 'standard') {
      if (selectedStandards.includes(value)) {
        setSelectedStandards(
          selectedStandards.filter(button => button !== value),
        );
      } else {
        setSelectedStandards([value]);
      }
    } else if (type === 'date') {
      if (selectedDates.includes(value)) {
        setSelectedDates(selectedDates.filter(button => button !== value));
      } else {
        setSelectedDates([...selectedDates, value]);
      }
    }
  };

  const handleReset = () => {
    setSelectedStandards([]);
    setSelectedDates([]);
  };

  const handleFilter = () => {
    const subjectsId = subjects.filter(
      standard => standard.name === selectedsubjects[0],
    );
    // fetcher({
    //   key: 'getstudents',
    //   executer: () =>
    //     axiosInstance.get(`${URLS.GET_STUDENTS}`, {
    //       params: {
    //         date: selectedDate.getTime(),
    //         courses: [selectedsubjects[0].id],
    //         subject: subjectsId,
    //       },
    //     }),
    //   onSuccess: ({ data: res }) => {
    //     setStudents(res.data);
    //     setFilteredStudents(res.data);
    //   },
    // });
    onFilter(selectedStandards, selectedDates, selectedsubjects);
  };

  const buttonClasses = (value, type) =>
    `py-2 px-4 rounded border ${
      (type === 'standard' && selectedStandards.includes(value)) ||
      (type === 'date' && selectedDates.includes(value))
        ? 'bg-white text-[#3B3E48] border-gray-700'
        : 'bg-transparent text-white border-gray-700'
    }`;

  useEffect(() => {
    fetcher({
      key: 'getstandards',
      executer: () =>
        axiosInstance.get(`${URLS.GET_ALL_COURSES}`, {
          params: { course_id: selectedStandards[0].id },
        }),
      onSuccess: ({ data: res }) => {
        setSubjects(res.data);
      },
    });
  }, [selectedStandards]);
  if (!show) {
    return null;
  }
  return (
    <div className='fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50'>
      <div
        className='bg-[#0B1739] rounded-lg p-8 relative'
        style={{
          width: '673px',
          padding: '30px 0 0 0',
          gap: '30px',
          borderRadius: '20px',
          border: '1px solid transparent',
          opacity: 1,
        }}
      >
        <button
          onClick={onClose}
          className='absolute top-0 right-0 m-4 text-[#F49B36] text-2xl'
        >
          <IoCloseOutline size={24} />
        </button>
        <div>
          <h2 className='text-white text-xl mb-4 text-left ml-[30px]'>
            Filter
          </h2>
          <hr
            className='border-t border-white ml-[30px] w-[90%]'
            style={{ borderWidth: '0.5px' }}
          />
          <div className='text-white'>
            <div className='mb-4 ml-[30px] text-left mt-4'>
              <h3 className='mt-4'>Standard {isLoading && 'Loading...'}</h3>
              <div className='flex gap-2 mt-4'>
                {standerds.map(item => (
                  <button
                    key={item?.id}
                    className={buttonClasses(item, 'standard')}
                    onClick={() => setSelectedStandards([item])}
                  >
                    {item?.name}
                  </button>
                ))}
              </div>
            </div>
            <div className='mt-4'>
              <h3 className='mb-4 ml-[30px] text-left mt-4'>Subject</h3>
              <div className='flex gap-2 flex-wrap mb-4 ml-[30px] text-left mt-4'>
                {subjects.map(item => (
                  <button
                    key={item?.id}
                    className={`py-2 px-4 rounded border text-sm ${selectedsubjects.includes(item) ? 'bg-white text-[#3B3E48] border-gray-700' : 'bg-transparent text-white  border-gray-700'}  p-2`}
                    onClick={() => setSelectedsubjects([item])}
                  >
                    {item?.name}
                  </button>
                ))}
              </div>
              {/* <Calendar className='bg-[#081028] text-white p-4 rounded-lg centered-calendar block mx-auto mt-4 ml-[30px]' /> */}
            </div>
            {/* <div className='mt-4'>
              <h3 className='mb-4 ml-[30px] text-left mt-4'>Select Date</h3>
              <div className='flex gap-2 mb-4 ml-[30px] text-left mt-4'>
                {[
                  'Today',
                  'This Week',
                  'This Month',
                  'This Year',
                  'Custom Date',
                ].map(date => (
                  <button
                    key={date}
                    className={buttonClasses(date, 'date')}
                    onClick={() => handleButtonClick(date, 'date')}
                  >
                    {date}
                  </button>
                ))}
              </div>
              <Calendar className='bg-[#081028] text-white p-4 rounded-lg centered-calendar block mx-auto mt-4 ml-[30px]' />
            </div> */}
          </div>
          <div className='ml-[60%]'>
            <button
              className='bg-[#333B4F] text-white py-2 px-4 rounded mt-4 ml-[30px]'
              onClick={handleReset}
            >
              Reset
            </button>
            <button
              className='bg-[#F49B36] text-black py-2 px-4 rounded mt-4 ml-[30px]'
              onClick={handleFilter}
            >
              Filter
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterPopup;
