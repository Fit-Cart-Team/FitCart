import React from 'react';

const Breakdown = (props) => {

  if (props.ratings) {
    return (
      <div>
        <h3>Breakdown Component</h3>
      </div>
    );
  } else {
    return <div></div>
  }
}

export default Breakdown;