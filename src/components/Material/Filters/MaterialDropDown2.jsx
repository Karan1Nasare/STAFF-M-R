import React, { useCallback, useEffect, useState, useMemo } from 'react';
import { Grid } from '@mui/material';
import TextField from '../../shared/input/TextField';
import useFetcher from '../../../hooks/useFetcher';
import MenuItem from '../../shared/menuitem/MenuItem';
import useCourseStd from '../hooks/useCourseStd';
import useSubject from '../hooks/useSubject';
import useChapter from '../hooks/useChapter';

const MaterialDropDown2 = ({
  setApplyFilter,
  hideInput = false,
  selectedFilters,
}) => {
  console.log('first', selectedFilters);
  const [courseSearch, setCourseSearch] = useState('');
  const { fetcher } = useFetcher();
  const { courseStdList } = useCourseStd();
  const { fetchSubjectList, subjectList } = useSubject();
  const { chapterList, fetchChapterList } = useChapter();

  const [filters, setFilters] = useState({
    search: '',
    course: '',
    subject: '',
    chapter: '',
  });

  useEffect(() => {
    setApplyFilter(filters);
  }, [filters, setApplyFilter]);

  useEffect(() => {
    if (filters?.course?.id) {
      fetchSubjectList(filters?.course?.id);
    }
  }, [filters?.course?.id]);

  useEffect(() => {
    if (filters?.subject?.id) {
      fetchChapterList(filters?.course?.id, filters?.subject?.id);
    }
  }, [filters?.subject?.id, filters?.course?.id]);

  useEffect(() => {
    setFilters(prevValue => ({
      ...prevValue,
      course: selectedFilters?.course,
      subject: selectedFilters?.subject,
      chapter: selectedFilters?.chapter,
    }));
  }, [
    selectedFilters?.chapter,
    selectedFilters?.course,
    selectedFilters?.subject,
  ]);

  const filterMap = useMemo(
    () => ({
      subject: subjectList,
      course: courseStdList,
      chapter: chapterList,
    }),
    [subjectList, courseStdList, chapterList],
  );

  const onFilterChanged = useCallback(
    ({ name, value }) => {
      setFilters(prevValue => ({
        ...prevValue,
        [name]: filterMap[name].find(item => item.id === value),
      }));
    },
    [filterMap],
  );

  const renderMenuItems = (list, placeholder) => {
    if (list.length === 0) {
      return (
        <MenuItem value='none' disabled>
          {placeholder}
        </MenuItem>
      );
    }
    return list.map((option, i) => (
      <MenuItem key={option.id} value={option.id}>
        {option?.name}
      </MenuItem>
    ));
  };

  return (
    <Grid container spacing={2} sx={{ flex: 1 }}>
      {!hideInput && (
        <Grid item sm={6} md={3} xs={12}>
          <input
            type='text'
            placeholder='Search Name, Enrollment, Standard'
            value={courseSearch}
            onChange={e => setCourseSearch(e.target.value)}
            className='px-3 py-3 w-full text-sm h-full bg-secondary__fill__dark text-white rounded-md'
          />
        </Grid>
      )}
      <Grid item sm={6} md={3} xs={12}>
        {console.log('filterIdTrack', filters?.course?.id)}
        <TextField
          select
          sx={{ width: '100%', textAlign: 'left', padding: '1px' }}
          name='course'
          onChange={e => onFilterChanged(e.target)}
          value={filters?.course?.id || ''}
          id={filters?.course?.id || ''}
        >
          <MenuItem value='' disabled>
            Select Standard
          </MenuItem>
          {renderMenuItems(courseStdList, 'No Standard Exists')}
        </TextField>
      </Grid>
      <Grid item sm={6} md={3} xs={12}>
        <TextField
          select
          sx={{ width: '100%', textAlign: 'left', padding: '1px' }}
          name='subject'
          value={filters?.subject?.id || ''}
          onChange={e => onFilterChanged(e.target)}
        >
          <MenuItem value='' disabled>
            Select Subject
          </MenuItem>
          {renderMenuItems(subjectList, 'No Subject Exists')}
        </TextField>
      </Grid>
      <Grid item sm={6} md={3} xs={12}>
        <TextField
          select
          sx={{ width: '100%', textAlign: 'left', padding: '1px' }}
          name='chapter'
          onChange={e => onFilterChanged(e.target)}
          value={filters?.chapter?.id || ''}
        >
          <MenuItem value='' disabled>
            Select Chapter
          </MenuItem>
          {renderMenuItems(chapterList, 'No Chapter Exists')}
        </TextField>
      </Grid>
    </Grid>
  );
};

export default MaterialDropDown2;
