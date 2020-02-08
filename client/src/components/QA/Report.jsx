import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Report = ({ answer_id }) => {
  const [reportButtonOn, setReportButtonOn] = useState(true);

  const handleReportClick = () => {
    axios
      .put(`http://3.134.102.30/qa/answer/${answer_id}/report`)
      .then(() => {
        disableButton();
      })
      .catch(err => console.error(err));
  };

  const disableButton = () => {
    setReportButtonOn(false);
  };

  if (reportButtonOn) {
    return (
      <u onClick={handleReportClick} style={{ cursor: 'pointer' }}>
        Report
      </u>
    );
  } else {
    return <u style={{ cursor: 'pointer' }}>Reported</u>;
  }
};

export default Report;
