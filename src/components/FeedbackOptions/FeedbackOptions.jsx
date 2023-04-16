import css from './FeedbackOptions.module.css';
import PropTypes from 'prop-types';
import { Component } from 'react';

export class FeedbackOptions extends Component {
  render() {
    const { options, onLeaveFeedback } = this.props;

    return (
      <>
        <div className={css.btnDisplay}>
          {options.map(option => (
            <button
              type="button"
              className={css.btn}
              key={option}
              onClick={onLeaveFeedback}
            >
              {option}
            </button>
          ))}
        </div>
      </>
    );
  }
}

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
