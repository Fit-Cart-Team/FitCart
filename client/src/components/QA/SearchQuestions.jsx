import React, { useState, useEffect } from 'react';
import { Input } from 'semantic-ui-react';

const SearchQuestions = ({ qList, onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredList, setFilteredList] = useState([]);

  const handleChange = event => {
    setSearchTerm(event.target.value);
  };

  useEffect(() => {
    filter();
  }, [searchTerm]);

  useEffect(() => {
    onSearch(filteredList);
  }, [filteredList]);

  const filter = () => {
    const filteredSearch = [];
    if (searchTerm.length > 2) {
      for (let i = 0; i < qList.length; i++) {
        if (
          qList[i].question_body
            .toLowerCase()
            .includes(searchTerm.toLowerCase())
        ) {
          filteredSearch.push(qList[i]);
        }
      }
    }
    setFilteredList(filteredSearch);
  };

  return (
    <Input
      type='text'
      fluid
      size='large'
      icon='search'
      placeholder='Have a question? Search for answers...'
      value={searchTerm}
      onChange={e => handleChange(e)}
    />
  );
};

export default SearchQuestions;
