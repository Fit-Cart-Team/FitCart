import React from 'react';

const SortOptions = (props) => {

  const handleChange = (e) => {
    props.changeSortParameter(e.target.value);
  }

  return (
    <div>
      <h3 style={{"display": "inline-block", margin: "5px"}} >{props.totalReviews} Reviews, sorted by </h3>
      <select onChange={handleChange} >
        <option value="relevant" >Relevance</option>
        <option value="helpful" >Helpful</option>
        <option value="newest" >Newest</option>
      </select>
    </div>
  );
}

export default SortOptions;