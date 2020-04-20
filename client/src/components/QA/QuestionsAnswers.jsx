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
  const [openModal, setOpenModal] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  if (url !== id) {
    setUrl(id);
  }

  const getQList = () => {
    axios
      .get(`http://18.224.200.47/qa/${id}?page=${1}&count=${100}`)
      .then((res) => {
        setQuestionList(res.data.results);
      })
      .catch((err) => console.error(err));
  };

  const getProductName = () => {
    axios
      .get(`http://18.224.200.47/products/${id}`)
      .then((res) => {
        setProductName(res.data.name);
      })
      .catch((err) => console.error(err));
  };

  const handleSearch = (filteredSearchList, searchTerm) => {
    setSearchList(filteredSearchList);
    setSearchTerm(searchTerm);
  };

  useEffect(() => {
    getQList();
    getProductName();
  }, [url]);

  return (
    <div className="questions-answers">
      <br />
      <p className="questions-answers-title">Questions and Answers</p>
      <SearchQuestions
        qList={questionList}
        onSearch={handleSearch}
        className="keyword-search-questions"
      />
      <br />
      <span>
        <QList
          productName={productName}
          list={searchList.length > 0 ? searchList : questionList}
          searchTerm={searchTerm}
          className="question-list"
        />
        <Qform productName={productName} id={url} refreshList={getQList} />
      </span>
      <br />
      <br />
    </div>
  );
};

export default QuestionsAnswers;
