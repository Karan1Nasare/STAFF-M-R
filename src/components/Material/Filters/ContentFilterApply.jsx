import React, { useState } from 'react';
import { Icon } from '@iconify/react';
import { Grid, Stack } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import PATH_DASHBOARD from '../../../routes/path';
import GetdefaultOption from '../../../pages/Material/GetdefaultOption';

const SelectSubject = [
  {
    label: 'Select Subject',
    value: '1',
  },
  {
    label: 'Subject  2',
    value: '2',
  },
  {
    label: 'Subject  3',
    value: '3',
  },
  {
    label: 'Subject  4',
    value: '4',
  },
];
const SelectStandard = [
  {
    label: 'Select Standard',
    value: '1',
  },
  {
    label: 'Standard  2',
    value: '2',
  },
  {
    label: 'Standard  3',
    value: '3',
  },
  {
    label: 'Standard  4',
    value: '4',
  },
];
const SelectChapter = [
  {
    label: 'Select Chapter',
    value: '1',
  },
  {
    label: 'Chapter  2',
    value: '2',
  },
  {
    label: 'Chapter  3',
    value: '3',
  },
  {
    label: 'Chapter  4',
    value: '4',
  },
];
const ContentFilterApply = () => {
  const [course, setCourse] = useState([]);
  const [filters, setFilters] = useState({
    search: '',
    course: '',
    subject: '',
    chapter: '',
  });
  const [selectedoptions, setselectedoptions] = useState({
    course: '',
    subject: '',
  }); // State for selected options

  const navigate = useNavigate();

  const isCheckFilterSelected = () => {
    console.log('filters', filters);
    return filters.course && filters.subject && filters.chapter;
  };

  const handleAddContent = () => {
    if (isCheckFilterSelected()) {
      navigate(PATH_DASHBOARD.Material['add-content']);
    } else {
      toast.dismiss();
      toast.error('Please select all filters first.', {
        position: 'top-right',
      });
    }
  };

  return (
    <>
      <div className='flex flex-wrap justify-between gap-5 p-8 rounded-xl border border-gray-700 border-solid bg-[#0B1739]  max-md:flex-wrap max-md:px-5'>
        <GetdefaultOption
          pageTitle={'Content'} // Set the pageTitle as 'Content' for GetdefaultOption
          setselectedoptions={setselectedoptions} // Pass setselectedoptions to manage selected options
        />
        {/* <Stack
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
            onClick={handleAddContent} // Handle add content action
          >
            <Icon icon={'simple-line-icons:plus'} /> Add Content
          </button>
        </Stack> */}
      </div>
    </>
  );
};

export default ContentFilterApply;
