import React from 'react';
import { useParams } from 'react-router-dom';

const Overview = () => {
  const { id } = useParams();
  return <div>{id}</div>;
};

export default Overview;
