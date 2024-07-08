import React, { useState } from 'react';
import RichTextEditor from '../../shared/RichTextEditor';

const McqType = () => {
  const [textEditor, setTextEditor] = useState(false);
  const [questions, setQuestions] = useState([
    {
      id: 1,
      questionText: '',
      options: [
        { id: 1, text: '', checked: false },
        { id: 2, text: '', checked: false },
        { id: 3, text: '', checked: false },
        { id: 4, text: '', checked: false },
      ],
    },
  ]);
  const handleAnswerChange = (questionId, optionId, value) => {
    setQuestions(prevQuestions =>
      prevQuestions.map(question => {
        if (question.id === questionId) {
          return {
            ...question,
            options: question.options.map(option =>
              option.id === optionId ? { ...option, text: value } : option,
            ),
          };
        }
        return question;
      }),
    );
  };
  const handleCheckboxChange = (questionId, optionId) => {
    setQuestions(prevQuestions =>
      prevQuestions.map(question => {
        if (question.id === questionId) {
          return {
            ...question,
            options: question.options.map(option =>
              option.id === optionId
                ? { ...option, checked: !option.checked }
                : option,
            ),
          };
        }
        return question;
      }),
    );
  };
  const handleQuestionChange = (questionId, value) => {
    setQuestions(prevQuestions =>
      prevQuestions.map(question =>
        question.id === questionId
          ? { ...question, questionText: value }
          : question,
      ),
    );
  };
  const handleInputClick = () => {
    setTextEditor(!textEditor);
  };
  return (
    <div className=''>
      {questions.map(question => (
        <div className='' key={question.id}>
          <div className='text-white ques flex mt-6 ml-[6%]'>
            <h3 className='text-lg mt-2 '>{question.id}.</h3>
            <input
              className='bg-blue border border-gray-700 h-10 ml-4 w-[70%] text-xs p-2'
              type='text'
              value={question.questionText}
              onChange={e => handleQuestionChange(question.id, e.target.value)}
              placeholder='Enter question text'
            />
          </div>
          <div className='ml-[6%]'>
            <h3 className='text-left my-6'>Options</h3>
            {question.options.map(option => (
              <div className='flex mb-5' key={option.id}>
                <input
                  type='checkbox'
                  className={`h-5 border border-gray-700 ${option.checked ? '' : 'appearance-none'} mt-3 w-5 rounded`}
                  checked={option.checked}
                  onChange={() => handleCheckboxChange(question.id, option.id)}
                />
                <input
                  className='bg-blue border border-gray-700 h-10 ml-6 w-[68%] text-xs p-2'
                  type='text'
                  value={option.text}
                  onChange={e =>
                    handleAnswerChange(question.id, option.id, e.target.value)
                  }
                  onClick={handleInputClick}
                  placeholder='Enter answer text'
                />
                {textEditor ? <RichTextEditor /> : null}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};
export default McqType;
