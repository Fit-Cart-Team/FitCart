import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Qform from './Qform';
import Qlist from './Qlist';

const QuestionsAnswers = () => {
  const { id } = useParams();
  const [url, setUrl] = useState(id);
  if (url !== id) setUrl(id);
  const [qlist, setList] = useState([]);

  const getList = () => {
    axios
      .get(`http://3.134.102.30/qa/${url}?page=${1}&count=${100}`)
      .then(res => {
        setList(res.data.results);
      })
      .catch(err => console.error(err));
  };

  useEffect(() => {
    getList();
  }, [url]);

  return (
    <div>
      Questions and Answers
      <Qlist list={qlist} />
    </div>
  );
};

export default QuestionsAnswers;
