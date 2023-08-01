import React from 'react';
// import './Index.module.css';

import PropTypes from 'prop-types';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
  <div className="statistics">
  <h5>Good: {good}</h5>
  <h5>Neutral: {neutral}</h5>
  <h5>Bad: {bad}</h5>
  <h5>Total: {total}</h5>
  <h5>Positive feedback: {positivePercentage}%</h5>
</div>
  )
};


Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};

export default Statistics;
