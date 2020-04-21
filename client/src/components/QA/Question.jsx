import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AList from './Answers/Alist';
import Helpful from './Helpful';
import Aform from './Answers/Aform';

const Question = ({ productName, q, searchTerm = '' }) => {
  const [answerList, setAnswerList] = useState([]);
  const [highlight, setHighlight] = useState(false);
  const [highlightedKeyword, setHighlightedKeyword] = useState('');
  const [body, setBody] = useState([]);

  // if (highlightedKeyword !== searchTerm) {
  //   setHighlightedKeyword(searchTerm);
  // }

  useEffect(() => {
    if (searchTerm.length > 2) {
      setHighlightedKeyword(searchTerm);
      let splitBodyOnSearchTerm = q.question_body
        .toLowerCase()
        .split(searchTerm.toLowerCase());
      setBody(splitBodyOnSearchTerm);
    } else {
      setBody([q.question_body, '']);
      setHighlightedKeyword('');
    }
  }, [searchTerm]);

  const getAnswers = () => {
    axios
      .get(
        `http://18.224.200.47/qa/${
          q.question_id
        }/answers?page=${1}&count=${100}`
      )
      .then((res) => {
        return sorter(res.data.results);
      })
      .then((sortedArray) => {
        return filter(sortedArray);
      })
      .then((filteredArray) => {
        return setAnswerList(filteredArray);
      })
      .catch((err) => console.error(err));
  };

  const sorter = (array) => {
    return array.sort((a, b) => b.helpfulness - a.helpfulness);
  };

  const filter = (array) => {
    return array.sort(
      (a, b) =>
        b.answerer_name.includes('Seller') - a.answerer_name.includes('Seller')
    );
  };

  useEffect(() => {
    getAnswers();
  }, [q]);

  return (
    <div>
      <p>
        <span className='question-tile'>
          {
            <b className='question-body'>
              Q: {body[0]} <mark>{highlightedKeyword}</mark>
              {body[1]}
            </b>
          }
        </span>
        <span className="helpful-add-answer">
          <span className="helpful-question">
            <Helpful question={q} />
          </span>
          |{' '}
          <span className="add-answer">
            <Aform
              productName={productName}
              questionId={q.question_id}
              questionBody={q.question_body}
              refreshList={() => getAnswers()}
              className="add-answer"
            />
          </span>
        </span>
      </p>
      <AList aList={answerList} className="answer-list" />
      <span className="question-divider">
        <hr />
      </span>
    </div>
  );
};

export default Question;
