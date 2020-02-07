import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Question from './Question';

const Qlist = ({ list }) => {
  const { id } = useParams();
  return list.map((q, index) => {
    return <Question q={q} key={index} id={q.question_id} />;
  });
};
export default Qlist;
