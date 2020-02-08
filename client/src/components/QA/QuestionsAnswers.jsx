import React from 'react';
import { useParams } from 'react-router-dom';
import Qform from './Qform';
import QList from './Qlist';
import SearchQuestions from './SearchQuestions';

const QuestionsAnswers = () => {
  const { id } = useParams();
  return (
    <div>
      <p>Questions and Answers</p>
      <SearchQuestions />
      <QList product_id={id} />
    </div>
  );
};

export default QuestionsAnswers;
