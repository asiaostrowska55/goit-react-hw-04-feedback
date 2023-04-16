import PropTypes from 'prop-types';
import { Component } from 'react';

export class Section extends Component {
  render() {
    const { title, children } = this.props;

    return (
      <>
        <h1>{title}</h1>
        {children}
      </>
    );
  }
}

Section.ptopTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};
