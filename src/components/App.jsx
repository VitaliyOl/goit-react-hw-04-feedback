import React from 'react';
import { Section } from './Section/Section';
import { Feedback } from './Feedback/Feedback';
import { Statistics } from './Statistics/Statistics';
import { Notification } from './Notification/Notification';

class App extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  countFeedback = e => {
    this.setState({ [e]: this.state[e] + 1 });
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = ({ good }) => {
    const total = this.countTotalFeedback();

    if (!total) {
      return 0;
    }

    return Math.round((good / total) * 100);
  };

  render() {
    const { good, neutral, bad } = this.state;
    const total = this.countTotalFeedback();

    return (
      <>
        <Section title={'Please Leave Feedback'}>
          <Feedback
            options={Object.keys(this.state)}
            feedbackClick={this.countFeedback}
          ></Feedback>
        </Section>

        <Section title={'Statistics'}>
          {!total ? (
            <Notification message="There is no feedback" />
          ) : (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={this.countTotalFeedback(this.state)}
              percent={this.countPositiveFeedbackPercentage(this.state)}
            />
          )}
        </Section>
      </>
    );
  }
}

export default App;
