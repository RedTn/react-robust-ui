import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './styles.scss';
import classNames from 'classnames/bind';
import { commonPropTypes, commonDefaultProps } from '__internal/Utils/CommonProps.js';

const cx = classNames.bind(styles);

class Typography extends Component {
  static propTypes = {
      ...commonPropTypes,
      children: PropTypes.node,
      variant: PropTypes.string,
      inline: PropTypes.bool
  };

  static defaultProps = {
      ...commonDefaultProps,
      children: null,
      variant: '',
      inline: false
  };

  render() {
      const { children, inline, inlineBlock, variant, className } = this.props;

      switch (variant) {
          case 'button':
              return (
                  <span className={cx(className, 'button', { inline, 'inline-block': inlineBlock })}>
                      {children}
                  </span>
              );
          case 'button-small':
              return (
                  <span className={cx(className, 'button-small', { inline, 'inline-block': inlineBlock })}>
                      {children}
                  </span>
              );
          case 'heading2':
              return (
                  <h2 className={cx(className, 'heading2', { inline, 'inline-block': inlineBlock })}>
                      {children}
                  </h2>
              );
          case 'body1':
              return (
                  <p className={cx(className, 'body1', { inline, 'inline-block': inlineBlock })}>
                      {children}
                  </p>
              );
          case 'caption':
              return (
                  <p className={cx(className, 'caption', { inline, 'inline-block': inlineBlock })}>
                      {children}
                  </p>
              );
          case 'adornment':
              return (
                  <span className={cx(className, 'adornment', { inline, 'inline-block': inlineBlock })}>
                      {children}
                  </span>
              );
          case 'input':
              return (
                  <p className={cx(className, 'input', { inline, 'inline-block': inlineBlock })}>
                      {children}
                  </p>
              );
          case 'tab':
              return (
                  <p className={cx(className, 'tab', { inline, 'inline-block': inlineBlock })}>
                      {children}
                  </p>
              );
          case 'tab-active':
              return (
                  <p className={cx(className, 'tab-active', { inline, 'inline-block': inlineBlock })}>
                      {children}
                  </p>
              );
          default:
              return <p>{children}</p>;
      }
  }
}

export default Typography;
