import React, { useEffect, useState } from 'react';
import StudentAttendanceHeader from './Header/studentAttendanceHeader';
import StudentProfile from '../../../assets/studentProfile.svg';
import useFetcher from '../../../hooks/useFetcher';
import axiosInstance from '../../../utilities/axios-client';
import URLS from '../../../constants/api';

const StudentAttendance = () => {
  const { fetcher } = useFetcher();
  const initialStudents = [
    { id: 14290, name: 'Chirag Gondaliya', is_present: null },
    { id: 14291, name: 'Aman Sharma', is_present: null },
    { id: 14292, name: 'Riya Patel', is_present: null },
  ];

  const [students, setStudents] = useState(initialStudents);
  const [filteredStudents, setFilteredStudents] = useState(initialStudents);
  const [attendance, setAttendance] = useState([]);

  const updateAttendance = updatedStudents => {
    const updatedAttendance = updatedStudents.filter(
      student => student.is_present !== null,
    );
    setAttendance(updatedAttendance);
  };

  const handlePresentClick = index => {
    const updatedStudents = students.map((student, i) =>
      i === index
        ? { ...student, is_present: student.is_present === 1 ? null : 1 }
        : student,
    );
    setStudents(updatedStudents);
    setFilteredStudents(updatedStudents);
    updateAttendance(updatedStudents);
  };

  const handleAbsentClick = index => {
    const updatedStudents = students.map((student, i) =>
      i === index
        ? { ...student, is_present: student.is_present === 0 ? null : 0 }
        : student,
    );
    setStudents(updatedStudents);
    setFilteredStudents(updatedStudents);
    updateAttendance(updatedStudents);
  };

  const handleSearch = searchTerm => {
    const filtered = students.filter(student =>
      student.name.toLowerCase().includes(searchTerm.toLowerCase()),
    );
    setFilteredStudents(filtered);
  };

  useEffect(() => {
    fetcher({
      key: 'getstudents',
      executer: () => axiosInstance.get(`${URLS.GET_STUDENTS}`),
      onSuccess: ({ data: res }) => {
        const fetchedStudents = res.data.map(student => ({
          id: student.id,
          name: student.name,
          is_present: null,
        }));
        setStudents(fetchedStudents);
        setFilteredStudents(fetchedStudents);
      },
    });
  }, []);

  return (
    <div className='flex flex-col'>
      <StudentAttendanceHeader
        onSearch={handleSearch}
        setStudents={setStudents}
        setFilteredStudents={setFilteredStudents}
        attendance={attendance}
      />
      {filteredStudents.map((student, index) => (
        <div
          key={student.id}
          className={`flex gap-5 justify-between px-8 py-6 mt-8 w-full text-white rounded-md border border-gray-700 ${
            student.is_present === 0 ? 'bg-locked' : ''
          } ${student.is_present === 1 ? 'bg-unlocked' : ''} border-solid max-md:flex-wrap max-md:px-5 max-md:max-w-full`}
        >
          <div className='flex gap-3 text-base'>
            <img
              loading='lazy'
              src={StudentProfile}
              className='shrink-0 aspect-square w-[37px]'
              alt='Student Profile'
            />
            <div className='my-auto text-white'>{student.name}</div>
          </div>
          <div className='flex gap-4 my-auto text-base whitespace-nowrap'>
            <div
              onClick={() => handlePresentClick(index)}
              className={`justify-center h-11 w-11 pt-2 rounded-md border border-solid ${
                student.is_present === 1 ? 'bg-success' : ''
              } border-white border-opacity-10 cursor-pointer`}
            >
              P
            </div>
            <div
              onClick={() => handleAbsentClick(index)}
              className={`justify-center h-11 w-11 pt-2 rounded-md border border-solid ${
                student.is_present === 0 ? 'bg-red-800' : ''
              } border-white border-opacity-10 cursor-pointer`}
            >
              A
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default StudentAttendance;
