import React, { useEffect, useState } from 'react';
import { TiUserAdd } from 'react-icons/ti';
import { Icon } from '@iconify/react';
import Cards from './cards';
import AddQuestionTab from './addQuestionTab';
import Dropdown from '../shared/DropDown';
import { getAllQuestionBanks } from '../../services/exam';

const Question = () => {
  const [inputValue, setInputValue] = useState('');
  const [isAddQuestionClicked, setisAddQuestionClicked] = useState(false);
  const [cards, setCards] = useState([]);

  const handleAddQuestionBankClick = () => {
    console.log('Select Standard');
  };
  const standardOptions = [
    'Standard 1',
    'Standard 1',
    'Standard 1',
    'Standard 1',
  ];
  const [selectStandardOption, setSelectStandardOption] =
    useState('Select Standard');
  const subjectOptions = ['Subject 1', 'Subject ', 'Subject ', 'Subject '];
  const [selectSubjectOption, setSelectSubjectOption] =
    useState('Select Subject');
  const chapterOptions = ['Chapter 1', 'Chapter 1', 'Chapter 1', 'Chapter 1'];
  const [selectChapterOption, setSelectChapterOption] =
    useState('Select Chapter');
  const topicOptions = ['Topic 1', 'Topic 1', 'Topic 1', 'Topic 1'];
  const [selectTopicOption, setSelectTopicOption] = useState('Select Topic');
  const handleSearchClick = () => {
    const filtered = cards.filter(card =>
      card.name.toLowerCase().includes(inputValue.toLowerCase()),
    );
  };

  const onFilterChange = async () => {
    const result = await getAllQuestionBanks('');
    const questionBanks = result.data?.data?.data;
    if (questionBanks?.length) {
      setCards(questionBanks);
    }
  };

  useEffect(() => {
    onFilterChange();
  }, []);

  const handleInputChange = e => {
    setInputValue(e.target.value);
  };
  return (
    <>
      {!isAddQuestionClicked ? (
        <div className='mt-4 overflow-x-hidden'>
          <h1 className='text-3xl text-white text-left'>Question Bank</h1>
          <div className='mt-3 w-full max-w-screen mx-auto overflow-y-scroll'>
            <div className=' bg-secondary__fill border p-8 w-full 2xl:h-6.5 flex max-w-screen mx-auto border-gray-700 rounded-xl'>
              <div className='flex 2xl:pl-2'>
                <input
                  key={7}
                  onChange={handleInputChange}
                  value={inputValue}
                  className='p-2 w-64 h-11 mr-3 bg-secondary__fill__dark rounded-md text-white text-sm'
                  type='text'
                  placeholder=' Search Name, Innrollment, Standard'
                />
                <span
                  onClick={handleSearchClick}
                  className='p-3 bg-secondary__fill__dark mr-3 rounded-md text-white h-11 w-11'
                >
                  <Icon
                    icon={'octicon:filter-16'}
                    className='text-white'
                    width={20}
                  />
                </span>
              </div>
              <div className='2xl:grid 2xl:grid-cols-4 2xl:gap-2 2xl:w-2/3 xl:grid xl:grid-cols-2 xl:gap-2 lg:grid lg:grid-cols-1 lg:gap-2 md:grid md:grid-cols-1 md:gap-2'>
                <div className='text-white border border-gray-700 mr-3 rounded-md z-40 h-11 '>
                  <Dropdown
                    options={standardOptions}
                    selectedOption={selectStandardOption}
                    setSelectedOption={setSelectStandardOption}
                  />
                </div>
                <div className='text-white z-40 border border-gray-700 mr-3 rounded-md h-11 '>
                  <Dropdown
                    options={subjectOptions}
                    selectedOption={selectSubjectOption}
                    setSelectedOption={setSelectSubjectOption}
                  />
                </div>
                <div className='text-white z-40 border border-gray-700 mr-3 rounded-md h-11'>
                  <Dropdown
                    options={chapterOptions}
                    selectedOption={selectChapterOption}
                    setSelectedOption={setSelectChapterOption}
                  />
                </div>
                <div className='text-white border border-gray-700 mr-3 rounded-md z-40 h-11 '>
                  <Dropdown
                    options={topicOptions}
                    selectedOption={selectTopicOption}
                    setSelectedOption={setSelectTopicOption}
                  />
                </div>
              </div>
              <div className='flex'>
                <div className='flex w-44 bg-white h-11 text-sm rounded-md'>
                  <span className='pt-[8%] pl-3 pr-1'>
                    <TiUserAdd />
                  </span>
                  <button onClick={() => setisAddQuestionClicked(true)}>
                    Add Question Bank
                  </button>
                </div>
              </div>
            </div>
          </div>
          <Cards cards={cards} onUpdate={onFilterChange} />
        </div>
      ) : (
        <AddQuestionTab onClose={() => setisAddQuestionClicked(false)} />
      )}
    </>
  );
};
export default Question;
