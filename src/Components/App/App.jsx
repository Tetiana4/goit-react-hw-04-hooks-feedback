import React, { useState } from 'react';

import FeedbackOptions from '../FeedbackOptions/FeedbackOptions';
import Notification from '../Notification/Notification';
import Section from '../Section/Section';
import Statistics from '../Statistics/Statistics';
import { Title } from '../Statistics/Statistics.styled';

export default function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    return Math.round((good * 100) / countTotalFeedback());
  };

  const leaveFeedback = value => {
    switch (value) {
      case 'good':
        setGood(prevGood => prevGood + 1);
        break;
      case 'neutral':
        setNeutral(prevNeutral => prevNeutral + 1);
        break;
      case 'bad':
        setBad(prevBad => prevBad + 1);
        break;
      default:
        return;
    }
  };
  return (
    <>
      <FeedbackOptions
        options={{ good, neutral, bad }}
        onHandleButton={leaveFeedback}
      />

      {countTotalFeedback() === 0 ? (
        <Notification message="No feedback given" />
      ) : (
        <Section>
          <Title>Statistics:</Title>
          <Statistics
            onGood={good}
            onNeutral={neutral}
            onBad={bad}
            onTotal={countTotalFeedback()}
            onPercentage={countPositiveFeedbackPercentage()}
          />
        </Section>
      )}
    </>
  );
}
