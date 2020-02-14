// let index = qList[i].question_body
//   .toLowerCase()
//   .indexOf(searchTerm.toLowerCase());
// // console.log(index);

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AList from './Answers/Alist';
import Helpful from './Helpful';
import Aform from './Answers/Aform';

const Question = ({ productName, q, searchTerm }) => {
  const [answerList, setAnswerList] = useState([]);
  const [highlight, setHighlight] = useState(false);
  const [highlightedKeyword, setHighlightedKeyword] = useState('');

  // useEffect(() => {
  //   let splitBodyOnSearchTerm = q.question_body.split(searchTerm);
  //   let toHighlight = <span className='highlight'>${searchTerm}</span>;
  //   setHighlightedKeyword(
  //     splitBodyOnSearchTerm[0] + toHighlight + splitBodyOnSearchTerm[1]
  //   );
  //   console.log(highlightedKeyword);

  //   setHighlight(true);
  // }, [searchTerm]);

  const getAnswers = () => {
    axios
      .get(
        `http://3.134.102.30/qa/${q.question_id}/answers?page=${1}&count=${100}`
      )
      .then(res => {
        return sorter(res.data.results);
      })
      .then(sortedArray => {
        return filter(sortedArray);
      })
      .then(filteredArray => {
        return setAnswerList(filteredArray);
      })
      .catch(err => console.error(err));
  };

  const sorter = array => {
    return array.sort((a, b) => b.helpfulness - a.helpfulness);
  };

  const filter = array => {
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
        <b className='question-tile'>
          Q: {highlight ? highlightedKeyword : q.question_body}{' '}
        </b>
        <span className='helpful-add-answer'>
          <Helpful question={q} /> |{' '}
          <Aform
            productName={productName}
            questionId={q.question_id}
            questionBody={q.question_body}
            refreshList={() => getAnswers()}
            className='add-answer'
          />
        </span>
      </p>
      <AList aList={answerList} className='answer-list' />
      <br />
    </div>
  );
};

export default Question;
