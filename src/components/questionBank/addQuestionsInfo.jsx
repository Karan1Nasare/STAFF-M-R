import React, { useEffect, useState } from 'react';
// import { FaRegUserCircle } from 'react-icons/fa';
// import { IoMdAddCircleOutline } from 'react-icons/io';
// import { RiArrowDropDownLine } from 'react-icons/ri';
import RichTextEditor from '../shared/RichTextEditor';
import { useStore } from '../../store/context-store';
import Dropdown from '../shared/DropDown/objectDropdown';
import { getCoursesList } from '../../services/exam';

const AddQuestionsInfo = ({ selectedData, setSelectedData }) => {
  const [courseOptions, setCourseOptions] = useState([]);
  const [subjectOptions, setSubjectOptions] = useState([]);
  const [chapterOptions, setChapterOptions] = useState([]);
  const [topicOptions, setTopicOptions] = useState([]);

  const onOptionChange = async (type, value) => {
    let query = '';
    let response = [];
    switch (type) {
      case 'course_id':
        query = `?course_id=${value}`;
        response = await getCoursesList(query);
        if (response.data.data.length) {
          setSubjectOptions(
            response.data.data.map(item => {
              return { label: item.name, value: item.id };
            }),
          );
        } else {
          setSubjectOptions([]);
        }
        setChapterOptions([]);
        setTopicOptions([]);
        break;
      case 'subject_id':
        query = `?course_id=${selectedData.course_id}&subject_id=${value}`;
        response = await getCoursesList(query);
        if (response.data.data.length) {
          setChapterOptions(
            response.data.data.map(item => {
              return { label: item.name, value: item.id };
            }),
          );
        } else {
          setChapterOptions([]);
        }
        setTopicOptions([]);
        break;
      case 'chapter_id':
        query = `?course_id=${selectedData.course_id}&subject_id=${selectedData.subject_id}&chapter_id=${value}`;
        response = await getCoursesList(query);
        if (response.data.data.length) {
          setTopicOptions(
            response.data.data.map(item => {
              return { label: item.name, value: item.id };
            }),
          );
        } else {
          setTopicOptions([]);
        }
        break;
      case 'topic_id':
        break;
      default:
        response = await getCoursesList(query);
        if (response.data.data.length) {
          setCourseOptions(
            response.data.data.map(item => {
              return { label: item.name, value: item.id };
            }),
          );
        } else {
          setCourseOptions();
        }
        setSubjectOptions([]);
        setChapterOptions([]);
        setTopicOptions([]);
        break;
    }
  };

  const onCourseChange = value => {
    setSelectedData({
      ...selectedData,
      course_id: value,
    });
    setCourseOptions([...courseOptions]);
    onOptionChange('course_id', value);
  };

  const onSubjectChange = value => {
    setSelectedData({
      ...selectedData,
      subject_id: value,
    });
    setSubjectOptions([...subjectOptions]);
    onOptionChange('subject_id', value);
  };

  const onChapterChange = value => {
    setSelectedData({
      ...selectedData,
      chapter_id: value,
    });
    setChapterOptions([...chapterOptions]);
    onOptionChange('chapter_id', value);
  };

  const onTopicChange = value => {
    setSelectedData({
      ...selectedData,
      topic_id: value,
    });
    setTopicOptions([...topicOptions]);
    onOptionChange('topic_id', value);
  };

  useEffect(() => {
    onOptionChange();
  }, []);

  const handleChange = e => {
    const { name, value } = e.target;
    setSelectedData({
      ...selectedData,
      [name]: value,
    });
  };
  const setEditorValue = (event, editor) => {
    setSelectedData({
      ...selectedData,
      description: editor.getData(),
    });
  };
  // useEffect(() => {
  //   const { title, description, standard, subject, chapter, topic } =
  //     questionBankData;
  //   StoreDispatch({
  //     type: 'ADD_QUESTION_BANK',
  //     payload: { title, description, standard, subject, chapter, topic },
  //   });
  // }, []);
  return (
    <div className='w-full max-w-screen mx-auto text-white'>
      <div className='p-8 rounded-md mt-6 border border-gray-700 h-[70%] w-full max-w-screen mx-auto bg-secondary__fill'>
        <h3 className='mb-2 text-left'>Exam Title</h3>
        <div className='flex'>
          <input
            className='h-11 border text-sm bg-secondary__fill border-gray-600 rounded-md w-full max-w-screen mx-auto'
            type='text'
            name='title'
            placeholder='  Enter Exam Title'
            value={selectedData.title}
            onChange={handleChange}
          />
        </div>
        <h3 className='mt-6 mb-2 text-left'>Description</h3>
        <div className=' border rounded-md w-full max-w-screen mx-auto border-gray-700'>
          <RichTextEditor
            value={selectedData.description}
            onChange={setEditorValue}
          />
        </div>
        <div className='flex w-full max-w-screen mx-auto'>
          <div className='text-left w-full max-w-screen mx-auto 2xl:mr-8 mr-8'>
            <h1 className='mt-6 mb-2 text-left'>Select Standard</h1>
            <div className='h-11 border text-sm bg-secondary__fill border-gray-600 rounded-md'>
              <Dropdown
                options={courseOptions}
                selectedOption={selectedData.course_id}
                setSelectedOption={onCourseChange}
              />
            </div>
          </div>
          <div className='text-left w-full max-w-screen mx-auto'>
            <h1 className='mt-6 mb-2 text-left'>Select Subject</h1>
            <div className='h-11 border text-sm bg-secondary__fill border-gray-600 rounded-md'>
              <Dropdown
                options={subjectOptions}
                selectedOption={selectedData.subject_id}
                setSelectedOption={onSubjectChange}
              />
            </div>
          </div>
        </div>
        <div className='flex w-full max-w-screen mx-auto'>
          <div className='text-left w-full max-w-screen mx-auto 2xl:mr-8 mr-8'>
            <h1 className='mt-6 mb-2 text-left'>Select Chapter</h1>
            <div className='h-11 border text-sm bg-secondary__fill border-gray-600 rounded-md'>
              <Dropdown
                options={chapterOptions}
                selectedOption={selectedData.chapter_id}
                setSelectedOption={onChapterChange}
              />
            </div>
          </div>
          <div className='text-left w-full max-w-screen mx-auto'>
            <h1 className='mt-6 mb-2 text-left'>Select Topic</h1>
            <div className='h-11 border text-sm bg-secondary__fill border-gray-600 rounded-md'>
              <Dropdown
                options={topicOptions}
                selectedOption={selectedData.topic_id}
                setSelectedOption={onTopicChange}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default AddQuestionsInfo;
