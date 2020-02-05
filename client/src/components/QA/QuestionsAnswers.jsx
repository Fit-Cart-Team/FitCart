import React from 'react';
import { useParams } from 'react-router-dom';
import Qform from './Qform.jsx.js';
import Qlist from './Qlist.jsx.js';
import Question from './Question.jsx.js';

const QuestionsAnswers = () => {
  const { id } = useParams();
  return <div>{id}</div>;
};

export default QuestionsAnswers;
