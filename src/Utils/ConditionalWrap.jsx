import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ConditionalWrap extends Component {
  static propTypes = {
      condition: PropTypes.bool,
      wrap: PropTypes.func,
      children: PropTypes.node
  }

  static defaultProps = {
      condition: false,
      wrap: null,
      children: null
  }

  render() {
      const { condition, wrap, children } = this.props;

      return condition ? wrap(children) : (children && children.length > 0) ? <span>{children}</span> : children;
  }
}

export default ConditionalWrap;
