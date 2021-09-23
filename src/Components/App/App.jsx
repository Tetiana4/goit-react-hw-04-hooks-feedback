import { useState } from 'react';

import FeedbackOptions from '../FeedbackOptions/FeedbackOptions';
import Notification from '../Notification/Notification';
import Section from '../Section/Section';
import Statistics from '../Statistics/Statistics';

export default function App() {
  const [state, setState] = useState({ good: 0, neutral: 0, bad: 0 });

  const countTotalFeedback = () => {
    return Object.values(state).reduce((acc, value) => acc + value, 0);
  };

  const countPositiveFeedbackPercentage = () => {
    return Math.round((state.good * 100) / countTotalFeedback());
  };

  const leaveFeedback = value => {
    setState(prevState => ({ ...prevState, [value]: prevState[value] + 1 }));
  };
  const options = Object.keys(state);
  const isShowStatistics = countTotalFeedback() !== 0;

  return (
    <>
      <FeedbackOptions options={options} onHandleButton={leaveFeedback} />

      {isShowStatistics && (
        <Section title={Statistics}>
          <Statistics
            onGood={state.good}
            onNeutral={state.neutral}
            onBad={state.bad}
            onTotal={countTotalFeedback()}
            onPercentage={countPositiveFeedbackPercentage()}
          />
        </Section>
      )}
      {!isShowStatistics && <Notification message="No feedback given" />}
    </>
  );
}
