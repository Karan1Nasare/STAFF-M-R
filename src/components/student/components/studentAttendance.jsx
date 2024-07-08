import React, { useEffect, useState } from 'react';
import StudentAttendanceHeader from './Header/studentAttendanceHeader';
import StudentProfile from '../../../assets/studentProfile.svg';
import useFetcher from '../../../hooks/useFetcher';
import axiosInstance from '../../../utilities/axios-client';
import URLS from '../../../constants/api';

const StudentAttendance = () => {
  const { fetcher } = useFetcher();
  const initialStudents = [
    { name: 'Chirag Gondaliya', isPresent: false, isAbsent: false },
    { name: 'Aman Sharma', isPresent: false, isAbsent: false },
    { name: 'Riya Patel', isPresent: false, isAbsent: false },
  ];

  const [students, setStudents] = useState(initialStudents);
  const [filteredStudents, setFilteredStudents] = useState(initialStudents);

  const handlePrasentClick = index => {
    const updatedStudents = students.map((student, i) =>
      i === index
        ? { ...student, isPresent: !student.isPresent, isAbsent: false }
        : student,
    );
    setStudents(updatedStudents);
    setFilteredStudents(updatedStudents);
  };

  const handleAppsentClick = index => {
    const updatedStudents = students.map((student, i) =>
      i === index
        ? { ...student, isAbsent: !student.isAbsent, isPresent: false }
        : student,
    );
    setStudents(updatedStudents);
    setFilteredStudents(updatedStudents);
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
        setStudents(res.data);
        setFilteredStudents(res.data);
      },
    });
  }, []);
  return (
    <div className='flex flex-col'>
      <StudentAttendanceHeader onSearch={handleSearch} />
      {filteredStudents.map((student, index) => (
        <div
          key={index}
          className={`flex gap-5 justify-between px-8 py-6 mt-8 w-full text-white rounded-md border border-gray-700 ${
            student.isAbsent ? 'bg-locked' : ''
          } ${student.isPresent ? 'bg-unlocked' : ''} border-solid max-md:flex-wrap max-md:px-5 max-md:max-w-full`}
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
              onClick={() => handlePrasentClick(index)}
              className={`justify-center h-11 w-11 pt-2 rounded-md border border-solid ${
                student.isPresent ? 'bg-success' : ''
              } border-white border-opacity-10 cursor-pointer`}
            >
              P
            </div>
            <div
              onClick={() => handleAppsentClick(index)}
              className={`justify-center h-11 w-11 pt-2 rounded-md border border-solid ${
                student.isAbsent ? 'bg-red-800' : ''
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
