import React from 'react';
import { Select } from 'semantic-ui-react';

const SortOptions = (props) => {

  const handleChange = (e) => {
    props.changeSortParameter(e.target.value);
  }

  return (
    <div className="sort-options-container" >
      <h3 style={{"display": "inline-block", "marginRight": ".25em"}} >{props.totalReviews} Reviews, sorted by </h3>
      <select className="sort-options-dropdown" onChange={handleChange} >
        <option className="sort-option" value="relevant" >Relevance</option>
        <option className="sort-option" value="helpful" >Helpful</option>
        <option className="sort-option" value="newest" >Newest</option>
      </select>
    </div>
  );
}

export default SortOptions;