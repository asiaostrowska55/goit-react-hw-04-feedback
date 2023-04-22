import options from './options.json';
import { useState } from 'react';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Statistics from './Statistics/Statistics';
import Section from './Section/Section';
import Notification from './Notification/Notification';

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const countTotalFeedback = () => {
    return Number(good + neutral + bad);
  };

  const countPositiveFeedbackPercentage = (goodVote, total) => {
    return goodVote > 0 ? Math.round((goodVote / total) * 100) : 0;
  };

  const onLeaveFeedback = e => {
    if (e.target.textContent === 'good') {
      setGood(good + 1);
    }
    if (e.target.textContent === 'neutral') {
      setNeutral(neutral + 1);
    }
    if (e.target.textContent === 'bad') {
      setBad(bad + 1);
    }
  };

  const totalFeedback = countTotalFeedback();

  return (
    <div>
      <Section title="Please leave feedback">
        <FeedbackOptions options={options} onLeaveFeedback={onLeaveFeedback} />
      </Section>
      <Section title="Statistics">
        {countTotalFeedback(options) > 0 ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={totalFeedback}
            positiveFeedback={countPositiveFeedbackPercentage(
              good,
              totalFeedback
            )}
          />
        ) : (
          <Notification message="There is no feedback" />
        )}
      </Section>
    </div>
  );
};
