import PropTypes from 'prop-types';
import { Component } from 'react';
import css from './Notification.module.css';

export class Notification extends Component {
  render() {
    const { message } = this.props;
    return <div className={css.notification}>{message}</div>;
  }
}

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};
