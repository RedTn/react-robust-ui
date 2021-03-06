import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './styles.scss';
import classNames from 'classnames/bind';
import Color from 'color';
import { Typography } from '../Typography';
import { commonPropTypes, commonDefaultProps } from '__internal/Utils/CommonProps.js';

const cx = classNames.bind(styles);

class Button extends Component {
  static propTypes = {
      ...commonPropTypes,
      children: PropTypes.node,
      onClick: PropTypes.func,
      color: PropTypes.string,
      gradient: PropTypes.bool,
      bordered: PropTypes.bool
  };

  static defaultProps = {
      ...commonDefaultProps,
      children: null,
      onClick: null,
      color: null,
      gradient: false,
      bordered: false
  };

  applyDynamicStyles = ({ color = '', gradient = false, bordered = false }) => {
      const style = {};

      let baseColor = '';

      switch (color) {
          case 'blue':
              baseColor = styles['blue'];
              break;
          case 'red':
              baseColor = styles['red'];
              break;
          default:
              baseColor = styles.silver;
      }

      if (gradient) {
          style.background = `linear-gradient(${baseColor}, ${Color(baseColor).darken(0.1)})`;
      } else {
          style.background = baseColor;
      }

      style.color = Color(baseColor).isDark() ? styles.white : styles.black;

      if (bordered) {
          style.border = `1px solid ${Color(baseColor).darken(0.1)}`;
      }

      return style;
  };

  render() {
      const { className, children, color, gradient, bordered, style } = this.props;

      return (
          <button
              className={cx(className, 'button')}
              style={{ ...style, ...this.applyDynamicStyles({ color, gradient, bordered }) }}
          >
              <Typography variant="button">{children}</Typography>
          </button>
      );
  }
}

export default Button;
