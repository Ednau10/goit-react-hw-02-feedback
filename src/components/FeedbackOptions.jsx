import React from 'react';
import PropTypes from 'prop-types';
// import './Index.module.css';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <div className="options">
      {options.map((option) => (
        <button key={option} onClick={() => onLeaveFeedback(option)}>
          {option}
        </button>
      ))}
    </div>
  );
};


FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
