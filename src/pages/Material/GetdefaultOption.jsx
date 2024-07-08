import React, { useEffect } from 'react';
import TextField from '../../components/shared/input/TextField';
import MenuItem from '../../components/shared/menuitem/MenuItem';
import useDefaultStdOption from '../../hooks/getDefaultStdOption';

function GetdefaultOption({ pageTitle, setselectedoptions }) {
  const {
    courseOptions,
    subjectOptions,
    chapterOptions,
    selectedCourse,
    selectedSubject,
    selectedChapter,
    setSelectedCourse,
    setSelectedSubject,
    setSelectedChapter,
    fetchSubjectOptions,
    fetchCourseOptions,
    fetchChapterOptions,
  } = useDefaultStdOption();

  const handleCourseChange = e => {
    const courseId = e.target.value;
    setSelectedCourse(courseId);
    setSelectedSubject('');
    setSelectedChapter('');
    setselectedoptions({ course: courseId });

    fetchSubjectOptions(courseId);
  };

  const handleSubjectChange = e => {
    const subjectId = e.target.value;
    setSelectedSubject(subjectId);
    setSelectedChapter('');
    setselectedoptions({ course: selectedCourse, subject: subjectId });

    fetchChapterOptions(selectedCourse, subjectId);
  };

  const handleChapterChange = e => {
    const chapterId = e.target.value;
    setSelectedChapter(chapterId);
    setselectedoptions({
      course: selectedCourse,
      subject: selectedSubject,
      chapter: chapterId,
    });
  };

  useEffect(() => {
    if (pageTitle === 'Content') {
      fetchCourseOptions();
    }
  }, [pageTitle]);

  return (
    <>
      <TextField
        select
        value={selectedCourse}
        fullWidth
        onChange={handleCourseChange}
        placeholder='Select Course'
        sx={{ marginRight: 2 }}
      >
        {courseOptions?.length === 0 ? (
          <MenuItem value='' disabled>
            No Courses Available
          </MenuItem>
        ) : (
          courseOptions?.map(option => (
            <MenuItem key={option?.id} value={option?.id}>
              {option?.name}
            </MenuItem>
          ))
        )}
      </TextField>
      <TextField
        select
        value={selectedSubject}
        fullWidth
        onChange={handleSubjectChange}
        placeholder='Select Subject'
        disabled={!selectedCourse || selectedCourse === 'No Courses Available'}
      >
        {subjectOptions?.length === 0 ? (
          <MenuItem value='' disabled>
            No Subjects Available
          </MenuItem>
        ) : (
          subjectOptions?.map(option => (
            <MenuItem key={option?.id} value={option?.id}>
              {option?.name}
            </MenuItem>
          ))
        )}
      </TextField>
      <TextField
        select
        value={selectedChapter}
        fullWidth
        onChange={handleChapterChange}
        placeholder='Select Chapter'
        disabled={
          !selectedSubject || selectedSubject === 'No Subjects Available'
        }
      >
        {chapterOptions?.length === 0 ? (
          <MenuItem value='' disabled>
            No Chapters Available
          </MenuItem>
        ) : (
          chapterOptions?.map(option => (
            <MenuItem key={option?.id} value={option?.id}>
              {option?.name}
            </MenuItem>
          ))
        )}
      </TextField>
    </>
  );
}

export default GetdefaultOption;
