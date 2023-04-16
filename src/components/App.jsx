import { Component } from 'react';
import options from './options.json';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Statistics } from './Statistics/Statistics';
import { Section } from './Section/Section';
import { Notification } from './Notification/Notification';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return Number(good + neutral + bad);
  };

  countPositiveFeedbackPercentage = () => {
    const total = this.countTotalFeedback();
    const { good } = this.state;
    if (good > 0) {
      return Math.round((good / total) * 100);
    }
    return 0;
  };

  onLeaveFeedback = e => {
    if (e.target.textContent === 'good') {
      this.setState({ good: this.state.good + 1 });
    }
    if (e.target.textContent === 'neutral') {
      this.setState({ neutral: this.state.neutral + 1 });
    }
    if (e.target.textContent === 'bad') {
      this.setState({ bad: this.state.bad + 1 });
    }
  };

  render() {
    const { good, neutral, bad } = this.state;
    const total = this.countTotalFeedback();
    const positivePercentage = this.countPositiveFeedbackPercentage();

    return (
      <div>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={options}
            onLeaveFeedback={this.onLeaveFeedback}
          />
        </Section>
        <Section title="Statictics">
          {this.countTotalFeedback() > 0 ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={total}
              positiveFeedback={positivePercentage}
            />
          ) : (
            <Notification message="There is no feedback" />
          )}
        </Section>
      </div>
    );
  }
}
