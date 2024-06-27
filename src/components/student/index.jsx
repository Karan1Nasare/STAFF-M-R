import React, { useEffect, useState } from 'react';
import { FaEye } from 'react-icons/fa';
import Cards from './components/cards';
import Header from './components/Header/Header';
import Pagination from '../shared/Pagination';
import { students } from './Student-data';

// Ensure the path is correct

const Index = () => {
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
    setCurrentPage(1); // Reset to the first page when a search is performed
  };

  useEffect(() => {
    handleSearchClick();
  }, [inputValue]);

  const handleInputChange = e => {
    setInputValue(e.target.value);
  };

  // Paginate the filtered cards
  const paginatedCards = filteredCards.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE,
  );

  return (
    <>
      <div
        className='w-full'
        style={{
          height: '100%', // Ensure container takes full viewport height
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
          className=''
          style={{
            flex: 1,
            overflowY: 'auto', // Enable scrolling for this box
            paddingBottom: '200px', // Add padding to ensure last item is not cut off
          }}
        >
          <Cards cards={paginatedCards} />
          <Pagination
            totalCards={filteredCards.length}
            cardsPerPage={ITEMS_PER_PAGE}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
          />
        </div>
      </div>
    </>
  );
};

export default Index;
