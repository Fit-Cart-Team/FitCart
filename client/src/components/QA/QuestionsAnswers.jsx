import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Qform from './Qform';
import QList from './Qlist';
import SearchQuestions from './SearchQuestions';
import axios from 'axios';

const QuestionsAnswers = () => {
  const { id } = useParams();
  const [url, setUrl] = useState();
  const [questionList, setQuestionList] = useState([]);
  const [searchList, setSearchList] = useState([]);

  if (url !== id) {
    setUrl(id);
  }

  const getQList = () => {
    axios
      .get(`http://3.134.102.30/qa/${id}?page=${1}&count=${100}`)
      .then(res => {
        return setQuestionList(res.data.results);
      })
      .catch(err => console.error(err));
  };

  const handleSearch = filteredSearchList => {
    setSearchList(filteredSearchList);
  };

  useEffect(() => {
    getQList();
  }, [url]);

  return (
    <div>
      <p>Questions and Answers</p>
      <SearchQuestions qList={questionList} onSearch={handleSearch} />
      <QList list={searchList.length > 0 ? searchList : questionList} />
    </div>
  );
};

export default QuestionsAnswers;
