import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Icon } from '@iconify/react';
import AddMaterialForm from '../../components/ui/AddMaterialForm';

const AddMaterialPage = () => {
  const { params } = useParams('params');
  const navigate = useNavigate();

  if (!['chapter', 'subject', 'course', 'content'].includes(params)) {
    navigate('/');
    return null;
  }
  let placeholder = '';
  let inputLabel = '';
  let pageTitle = '';

  switch (params) {
    case 'chapter':
      placeholder = 'Chapter Name';
      inputLabel = 'Chapter Name';
      pageTitle = 'Chapter';
      break;
    case 'subject':
      placeholder = 'Subject Name';
      inputLabel = 'Subject Name';
      pageTitle = 'Subject';

      break;
    case 'course':
      placeholder = 'Course Name [STD]';
      inputLabel = 'Course Name [STD]';
      pageTitle = 'Course';

      break;
    case 'content':
      placeholder = 'Content Name';
      inputLabel = 'Content Name';
      pageTitle = 'Content';

      break;
    default:
      navigate('/');
      return null;
  }

  return (
    <div>
      <h1 className='text-left text-white text-4xl mb-8'>{pageTitle}</h1>
      <AddMaterialForm inputLabel={inputLabel} placeholder={placeholder} />
      <div className='text-right w-full flex justify-end mt-2'>
        <button className='flex items-center gap-2.5 px-4 py-2.5 text-base text-center bg-white rounded-lg text-slate-900'>
          <Icon
            icon={'simple-line-icons:plus'}
            className='shrink-0 w-6 aspect-square text-black'
            fontSize={'1.2rem'}
          />
          <span className='my-auto'>Add {pageTitle}</span>
        </button>
      </div>
    </div>
  );
};

export default AddMaterialPage;
