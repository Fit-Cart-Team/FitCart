import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Report = ({ answer_id }) => {
  const [reportButtonOn, setReportButtonOn] = useState(true);

  const handleReportClick = () => {
    axios
      .put(`http://18.224.200.47/qa/answer/${answer_id}/report`)
      .then((res) => {
        return setReportButtonOn(false);
      })
      .catch((err) => console.error(err));
  };

  if (reportButtonOn) {
    return (
      <u
        onClick={handleReportClick}
        style={{ cursor: 'pointer' }}
        className="report-answer"
      >
        Report
      </u>
    );
  } else {
    return <u style={{ cursor: 'pointer' }}>Reported</u>;
  }
};

export default Report;
