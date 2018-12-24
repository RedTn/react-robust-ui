import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './styles.scss';
import classNames from 'classnames/bind';
import Color from 'color';
import { commonPropTypes, commonDefaultProps } from '__internal/Utils/CommonProps.js';

const cx = classNames.bind(styles);

const applyDynamicStyles = ({ color = '', gradient = false, bordered = false }) => {
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
      onClick: () => {},
      color: null,
      gradient: false,
      bordered: false
  };

  render() {
      const { className, children, color, gradient, bordered, style } = this.props;

      return (
          <button
              className={cx(className, 'button')}
              style={{ ...style, ...applyDynamicStyles({ color, gradient, bordered }) }}
          >
              {children}
          </button>
      );
  }
}

export default Button;
