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
  const [productName, setProductName] = useState('');

  if (url !== id) {
    setUrl(id);
  }

  const getQList = () => {
    axios
      .get(`http://3.134.102.30/qa/${id}?page=${1}&count=${100}`)
      .then(res => {
        setQuestionList(res.data.results);
      })
      .catch(err => console.error(err));
  };

  const getProductName = () => {
    axios
      .get(`http://3.134.102.30/products/${id}`)
      .then(res => {
        setProductName(res.data.name);
      })
      .catch(err => console.error(err));
  };

  const handleSearch = filteredSearchList => {
    setSearchList(filteredSearchList);
  };

  useEffect(() => {
    getQList();
    getProductName();
  }, [url]);

  return (
    <div className='questions-answers'>
      <p>Questions and Answers</p>
      <br />
      <SearchQuestions qList={questionList} onSearch={handleSearch} />
      <br />
      <QList
        productName={productName}
        list={searchList.length > 0 ? searchList : questionList}
      />
      <Qform productName={productName} id={url} refreshList={getQList} />
      <br />
    </div>
  );
};

export default QuestionsAnswers;
