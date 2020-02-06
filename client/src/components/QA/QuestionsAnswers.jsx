import React from 'react';
import { useParams } from 'react-router-dom';
import Qform from './Qform';
import Qlist from './Qlist';
import Question from './Question';

const QuestionsAnswers = () => {
  const { id } = useParams();
  return <div></div>;
};

export default QuestionsAnswers;
