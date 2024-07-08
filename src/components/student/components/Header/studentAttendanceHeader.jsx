import React, { useState, useEffect } from 'react';
import { MdOutlineSegment } from 'react-icons/md';
import { SlCalender } from 'react-icons/sl';
import { IoCloseOutline } from 'react-icons/io5';
import { Icon } from '@iconify/react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import FilterPopup from './FilterPopup'; // Import the new popup component

const Modal = ({ show, onClose, children }) => {
  if (!show) {
    return null;
  }

  return (
    <div className='fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50'>
      <div
        className='bg-[rgb(11,23,57)] rounded-lg p-8 relative'
        style={{ width: '453px', padding: '30px', borderRadius: '20px' }}
      >
        <button
          onClick={onClose}
          className='absolute top-0 right-0 m-4 text-[#F49B36] text-2xl'
        >
          <IoCloseOutline size={24} />
        </button>
        {children}
      </div>
    </div>
  );
};

const SelectedItem = ({ label, onRemove }) => (
  <div className='flex items-center gap-2 px-4 py-2 bg-[#081028] border border-gray-700 rounded-md text-white'>
    <span>{label}</span>
    <button onClick={onRemove} className='text-white'>
      <IoCloseOutline />
    </button>
  </div>
);

const StudentAttendanceHeader = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [calendarOpen, setCalendarOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);
  const [filterPopupOpen, setFilterPopupOpen] = useState(false);
  const [selectedStandards, setSelectedStandards] = useState([]);
  const [selectedDates, setSelectedDates] = useState([]);
  console.log('🚀 ~ StudentAttendanceHeader ~ selectedDates:', selectedDate);

  const handleSearchChange = e => {
    setSearchTerm(e.target.value);
  };

  const handleSearchClick = () => {
    onSearch(searchTerm);
  };

  const handleCalendarClick = () => {
    setCalendarOpen(true);
  };

  const handleCloseModal = () => {
    setCalendarOpen(false);
  };

  const handleDateChange = date => {
    setSelectedDate(date);
    setCalendarOpen(false);
  };

  const handleFilterClick = () => {
    setFilterPopupOpen(true);
  };

  const handleCloseFilterPopup = () => {
    setFilterPopupOpen(false);
  };

  const handleFilter = (standards, dates) => {
    setSelectedStandards(standards);
    setSelectedDates(dates);
    setFilterPopupOpen(false);
  };

  const removeSelectedStandard = standard => {
    setSelectedStandards(selectedStandards.filter(item => item !== standard));
  };

  const removeSelectedDate = () => {
    setSelectedDate(null);
  };

  useEffect(() => {
    const style = document.createElement('style');
    style.textContent = `
      .react-calendar {
        background: rgb(8, 16, 40);
        color: white;
        border: none;
        border-radius: 10px;
        padding: 1rem;
        text-align: center;
      }
      
      .react-calendar__tile {
        height: 3rem;
        text-align: center;
        line-height: 2.5rem;
        margin: 0.2rem;
        border-radius: 8px;
        color: white;
      }
      
      .react-calendar__tile--now {
        background: #F49B36;
        color: #081028;
      }
      
      .react-calendar__tile--active {
        background: #F49B36;
        color: #081028;
      }
      
      .react-calendar__tile:enabled:hover,
      .react-calendar__tile:enabled:focus {
        background: #333B4F;
        color: #F49B36;
      }
      
      .react-calendar__navigation {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 1rem;
      }
      
      .react-calendar__navigation button {
        min-width: 44px;
        background: none;
        font-size: 1.2em;
        color: white;
      }
      
      .react-calendar__month-view__weekdays {
        text-align: center;
        text-transform: uppercase;
        font-weight: bold;
        color: white;
      }
    `;

    document.head.append(style);

    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return (
    <div className='w-full max-w-screen mx-auto overflow-y-scroll relative'>
      <h1 className='text-white text-3xl text-left'>Student</h1>
      <div className='flex flex-wrap items-center gap-4 p-8 mt-8 rounded-xl border border-gray-700 border-solid bg-secondary__fill max-md:flex-wrap max-md:px-5'>
        <div className='flex items-center gap-2 max-md:flex-wrap max-md:max-w-full relative'>
          <input
            type='text'
            placeholder='Search Name, Enrollment, Standard'
            value={searchTerm}
            onChange={handleSearchChange}
            className='justify-center items-start px-3 py-3 my-auto text-sm leading-5 w-72 rounded border border-solid bg-secondary__fill__dark border-gray-700 border-opacity-20 text-white text-opacity-20 max-md:pr-5'
          />
          <div
            className='flex justify-center items-center p-1 h-12 w-11 rounded border border-solid bg-secondary__fill__dark border-gray-700 border-opacity-20 cursor-pointer'
            onClick={handleFilterClick}
          >
            <button className='bg-[#0A1330] rounded-md p-[10px] flex items-center justify-center'>
              <Icon
                icon={'octicon:filter-16'}
                className='text-white'
                width={25}
              />
            </button>
          </div>
          <div
            className='flex justify-center items-center h-12 px-5 py-3 rounded-md border border-gray-700 border-solid bg-secondary__fill__dark cursor-pointer text-white'
            onClick={handleCalendarClick}
          >
            <div className='my-auto mr-2'>
              {selectedDate ? selectedDate.toLocaleDateString() : 'Select Date'}
            </div>
            <span className='mt-1'>
              <SlCalender />
            </span>
          </div>
          <div className='flex flex-wrap items-center gap-2 ml-4'>
            {selectedDate && (
              <SelectedItem
                label={`Date: ${selectedDate.toLocaleDateString()}`}
                onRemove={removeSelectedDate}
              />
            )}
            {selectedStandards.map(standard => (
              <SelectedItem
                key={standard}
                label={standard}
                onRemove={() => removeSelectedStandard(standard)}
              />
            ))}
          </div>
        </div>
        <div className='ml-auto justify-center px-4 py-2.5 text-sm leading-6 text-center text-black whitespace-nowrap bg-white rounded-lg cursor-pointer'>
          Save
        </div>
      </div>

      <FilterPopup
        show={filterPopupOpen}
        onClose={handleCloseFilterPopup}
        onFilter={handleFilter}
      />

      <Modal show={calendarOpen} onClose={handleCloseModal}>
        <div
          className='text-center'
          style={{ display: 'block', marginLeft: 'auto', marginRight: 'auto' }}
        >
          <h2 className='text-[white] text-xl mb-4 text-left'>Select a date</h2>

          <Calendar
            onChange={handleDateChange}
            value={selectedDate}
            className='react-calendar bg-[#081028] text-white p-4 rounded-lg centered-calendar block mx-auto'
            tileClassName={({ date, view }) =>
              view === 'month' &&
              date.toLocaleDateString() === selectedDate?.toLocaleDateString()
                ? 'bg-[#F49B36] text-[#081028] rounded-lg'
                : 'hover:bg-[#333B4F] hover:text-[#F49B36] rounded-lg'
            }
            nextLabel={<span className='text-[#F49B36]'>&gt;&gt;</span>}
            prevLabel={<span className='text-[#F49B36]'>&lt;&lt;</span>}
            next2Label={null}
            prev2Label={null}
            formatShortWeekday={(locale, date) =>
              date
                .toLocaleDateString(locale, { weekday: 'short' })
                .toUpperCase()
            }
            navigationLabel={({ date }) => (
              <span className='text-[white] font-bold'>
                {date.toLocaleDateString('en-US', {
                  month: 'long',
                  year: 'numeric',
                })}
              </span>
            )}
          />
        </div>
      </Modal>
    </div>
  );
};

export default StudentAttendanceHeader;
