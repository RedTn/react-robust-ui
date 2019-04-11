import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './styles.scss';
import { commonPropTypes, commonDefaultProps } from '__internal/Utils/CommonProps.js';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

class Divider extends Component {
  static propTypes = {
      ...commonPropTypes,
      alignment: PropTypes.oneOf(['horizontal', 'vertical']),
      variant: PropTypes.oneOf(['solid', 'dotted'])
  };

  static defaultProps = {
      ...commonDefaultProps,
      alignment: 'horizontal',
      variant: 'solid'
  };

  render() {
      const { className, alignment, variant, style } = this.props;

      const computedStyle = {};
      if (alignment === 'vertical') {
          computedStyle.borderRightStyle = variant;
      } else {
          computedStyle.borderTopStyle = variant;
      }

      return alignment === 'vertical' ? (
          <span
              style={{ ...computedStyle, ...style }}
              className={cx(className, 'divider', 'vertical')}
          />
      ) : (
          <div
              style={{ ...computedStyle, ...style }}
              className={cx(className, 'divider', 'horizontal')}
          />
      );
  }
}

export default Divider;
