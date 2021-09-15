import React, { Component } from 'react';

import FeedbackOptions from '../FeedbackOptions/FeedbackOptions';
import Notification from '../Notification/Notification';
import Section from '../Section/Section';
import Statistics from '../Statistics/Statistics';
import { Title } from '../Statistics/Statistics.styled';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  countTotalFeedback() {
    const totalFeedback = Object.values(this.state);
    return totalFeedback.reduce((acc, item) => acc + item);
  }

  countPositiveFeedbackPercentage() {
    return Math.round((this.state.good * 100) / this.countTotalFeedback());
  }

  leaveFeedback = option => {
    this.setState(prevSate => ({
      [option]: prevSate[option] + 1,
    }));
  };

  render() {
    const { good, neutral, bad } = this.state;
    const isShowStatistics = this.countTotalFeedback();
    return (
      <>
        <FeedbackOptions
          options={this.state}
          onHandleButton={this.leaveFeedback}
        />

        {!isShowStatistics && <Notification message="No feedback given" />}
        {isShowStatistics && (
          <Section>
            <Title>Statistics:</Title>
            <Statistics
              onGood={good}
              onNeutral={neutral}
              onBad={bad}
              onTotal={this.countTotalFeedback()}
              onPercentage={this.countPositiveFeedbackPercentage()}
            />
          </Section>
        )}
      </>
    );
  }
}

export default App;
