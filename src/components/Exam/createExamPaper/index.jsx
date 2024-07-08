import React, { useState } from 'react';
import CreateExamPaper from './createExamPaper';
import Header from './header';

const index = ({
  setNextClick,
  QuestionsList,
  setPrevClick,
  setValue,
  selectedQuestion,
  SelectedQuestionBank,
  values,
}) => {
  return (
    <div>
      <Header
        setNextClick={setNextClick}
        setPrevClick={setPrevClick}
        SelectedQuestionBank={SelectedQuestionBank}
        values={values}
      />
      <CreateExamPaper
        QuestionsList={QuestionsList}
        setValue={setValue}
        selectedQuestion={selectedQuestion}
      />
    </div>
  );
};

export default index;
