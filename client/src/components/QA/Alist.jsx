import React, { useState, useEffect } from 'react';
import Answer from './Answer';

const Alist = ({ list }) => {
  return list.map((a, index) => {
    return <Answer a={a} key={index} id={a.answer_id} />;
  });
};
export default Alist;
