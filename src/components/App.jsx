import React, { useState } from 'react';
import Statistics from './Statistics';
import FeedbackOptions from './FeedbackOptions';


export const App = () => {
  const [feedback, setFeedback] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const handleButtonClick = (option) => {
    setFeedback((prevFeedback) => ({
      ...prevFeedback,
      [option]: prevFeedback[option] + 1,
    }));
  };

  const countTotalFeedback = () => {
    const { good, neutral, bad } = feedback;
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    const { good, neutral } = feedback;
    const total = countTotalFeedback();
    return total === 0 ? 0 : Math.round(((good + neutral) / total) * 100);
  };

  const totalFeedback = countTotalFeedback();

  return (
    <div>
      <h3>Please leave feedback</h3>
      <FeedbackOptions options={['good', 'neutral', 'bad']} onLeaveFeedback={handleButtonClick} />

{totalFeedback > 0 ? (
  <Statistics
    good={feedback.good}
    neutral={feedback.neutral}
    bad={feedback.bad}
    total={totalFeedback}
    positivePercentage={countPositiveFeedbackPercentage()}
  />
) : (
  <p>No feedback given</p>
)}

    </div>
  );
};

// export default App;
