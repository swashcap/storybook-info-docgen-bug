import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { noop } from 'lodash';

export default class Button extends Component {
  render() {
    const { children, onClick, size } = this.props;
    const style = {
      background: 'white',
      border: 'thin solid black',
      color: 'black',
      display: 'inline-block',
      fontFamily: 'sans-serif',
      fontSize: `${200 * size}%`,
      fontWeight: '700',
      padding: '1rem'
    };

    return (
      <button
        onClick={onClick}
        style={style}
        type="button"
      >
        {children}
      </button>
    );
  }
}

Button.defaultProps = {
  children: undefined,
  onClick: noop
};

Button.propTypes = {
  /** Text or child elements inside button */
  children: PropTypes.node,

  /** Handle big button clicks */
  onClick: PropTypes.func,

  /** Control font size of button */
  size: PropTypes.number.isRequired
};

