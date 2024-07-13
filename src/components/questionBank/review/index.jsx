import React, { useMemo } from 'react';
import { useLocation } from 'react-router-dom';
import Header from './Header';
import MCQReview from './MCQReview';
import TrueFalse from './TrueFalse';
import Summary from './Summary';

const Review = () => {
  const location = useLocation();
  const { questions } = location.state || { questions: [] };

  // Extract unique marks
  const marksArray = useMemo(() => {
    const marksSet = new Set();
    questions.forEach(question => marksSet.add(question.marks));
    return Array.from(marksSet);
  }, [questions]);

  const groupedQuestions = useMemo(() => {
    return questions.reduce((acc, question) => {
      const { marks } = question;
      if (!acc[marks]) {
        acc[marks] = [];
      }
      acc[marks].push(question);
      return acc;
    }, {});
  }, [questions]);

  console.log('🚀 ~ groupedQuestions ~ groupedQuestions:', groupedQuestions);

  return (
    <div className='overflow-x-hidden overflow-y-hidden h-screen'>
      <Header questions={questions} marksArray={marksArray} />
      <div className='mt-8 w-full h-[434px] overflow-x-auto flex flex-row gap-7'>
        {Object.entries(groupedQuestions).map(([marks, group], groupIndex) => (
          <div
            key={groupIndex}
            className='flex-shrink-0 w-1/3 h-full overflow-y-auto'
          >
            <div className='p-7 text-base rounded-xl bg-secondary__fill border border-gray-700 h-full flex flex-col'>
              <div className='flex text'>
                <h1 className='text-left mr-2 text-base text-primary'>
                  {marks}
                </h1>
                <h1 className='text-primary'>Mark</h1>
              </div>
              <div className='flex flex-col gap-7 overflow-y-auto'>
                {group.map((question, index) => {
                  console.log('question', question);
                  switch (question.question_type) {
                    case 'mcq':
                      return (
                        <MCQReview
                          question={question}
                          key={index}
                          index={index}
                          review
                        />
                      );
                    case 'TF':
                      return (
                        <TrueFalse
                          question={question}
                          key={index}
                          index={index}
                          review
                        />
                      );
                    case 'question':
                      return (
                        <Summary
                          question={question}
                          key={index}
                          index={index}
                          review
                        />
                      );
                    default:
                      return null;
                  }
                })}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Review;
