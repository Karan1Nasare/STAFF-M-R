import React, { useState } from 'react';
import Header from './components/Header';
import PlanList from './components/Card/PlanList';
import usePlan from './hooks/usePlan';
import Pagination from '../shared/Pagination';

const ITEMS_PER_PAGE = 6;

const Plan = () => {
  const { planData } = usePlan();
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');

  const totalItems = planData?.length || 0;

  const filteredItems = planData.filter(plan =>
    plan.title.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  const lastCardIndex = currentPage * ITEMS_PER_PAGE;
  const firstCardIndex = lastCardIndex - ITEMS_PER_PAGE;
  const currentItems = filteredItems.slice(firstCardIndex, lastCardIndex);

  const handleSearchChange = event => {
    setSearchTerm(event.target.value);
    setCurrentPage(1);
  };

  return (
    <>
      <div
        className='w-full '
        style={{
          height: '100vh',
          display: 'flex',
          flexDirection: 'column',
          paddingBottom: '50px',
        }}
      >
        <Header value={searchTerm} onChange={handleSearchChange} />
        <PlanList currentItems={currentItems} />
        {totalItems > ITEMS_PER_PAGE && (
          <div>
            <Pagination
              totalCards={filteredItems.length}
              cardsPerPage={ITEMS_PER_PAGE}
              setCurrentPage={setCurrentPage}
              currentPage={currentPage}
            />
          </div>
        )}
      </div>
    </>
  );
};

export default Plan;
