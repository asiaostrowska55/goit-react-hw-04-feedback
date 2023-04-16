import PropTypes from 'prop-types';
import { Component } from 'react';
import css from './Statictics.module.css';

export class Statistics extends Component {
  render() {
    const { good, neutral, bad, total, positiveFeedback } = this.props;
    return (
      <>
        <ul className={css.stat}>
          <li>Good: {good}</li>
          <li>Neutral: {neutral}</li>
          <li>Bad: {bad}</li>
          <li>Total: {total}</li>
          <li>Positive feedback: {positiveFeedback} %</li>
        </ul>
      </>
    );
  }
}

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positiveFeedback: PropTypes.number.isRequired,
};
