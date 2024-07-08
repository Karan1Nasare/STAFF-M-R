import React, { useEffect, useState } from 'react';
import { FaEye } from 'react-icons/fa';
import Cards from './components/cards';
import Header from './components/Header/Header';
import Pagination from '../shared/Pagination';
import { students } from './Student-data';
import useFetcher from '../../hooks/useFetcher';
import axiosInstance from '../../utilities/axios-client';
import URLS from '../../constants/api';

// Ensure the path is correct

const Index = () => {
  const { fetcher } = useFetcher();
  const [StudentsData, setStudentsData] = useState([]);
  console.log('🚀 ~ Index ~ StudentsData:', StudentsData);
  const [inputValue, setInputValue] = useState('');
  const [filteredCards, setFilteredCards] = useState(students);
  const [currentPage, setCurrentPage] = useState(1);
  const ITEMS_PER_PAGE = 6;

  const handleSearchClick = () => {
    const filtered = students.filter(
      card =>
        card.name.toLowerCase().includes(inputValue.toLowerCase()) ||
        card.enrollment.toLowerCase().includes(inputValue.toLowerCase()) ||
        card.standard.toLowerCase().includes(inputValue.toLowerCase()),
    );
    setFilteredCards(filtered);
    setCurrentPage(1);
  };

  useEffect(() => {
    handleSearchClick();
  }, [inputValue]);

  const handleInputChange = e => {
    setInputValue(e.target.value);
  };

  const paginatedCards = filteredCards.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE,
  );
  useEffect(() => {
    fetcher({
      key: 'getstudents',
      executer: () => axiosInstance.get(`${URLS.GET_STUDENTS}`),
      onSuccess: ({ data: res }) => {
        setStudentsData(res.data);
      },
    });
  }, []);
  return (
    <>
      <div
        className='w-full'
        style={{
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          overflowY: 'hidden',
        }}
      >
        <Header
          inputValue={inputValue}
          handleInputChange={handleInputChange}
          handleSearchClick={handleSearchClick}
        />
        <div
          className='mt-8'
          style={{
            flex: 1,
            overflowY: 'auto',
            paddingBottom: '200px',
          }}
        >
          <Cards cards={StudentsData} />
          {/* <Pagination
            totalCards={filteredCards.length}
            cardsPerPage={ITEMS_PER_PAGE}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
          /> */}
        </div>
      </div>
    </>
  );
};

export default Index;
