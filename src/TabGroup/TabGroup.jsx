import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './styles.scss';
import { Typography } from 'Typography';
import { Divider } from 'Divider';
import * as R from 'ramda';
import { commonPropTypes, commonDefaultProps } from '__internal/Utils/CommonProps.js';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const getDefaultActive = props => {
    if (Array.isArray(props?.children)) {
        if (props?.multiple) {
            return props.children.reduce((acc, cur) => {
                if (cur?.props?.defaultActive) {
                    acc[(cur?.props?.value)] = true;
                    return acc;
                }
                return acc;
            }, {});
        }
        const child = R.find(child => child?.props?.defaultActive)(props?.children);
        if (child) {
            return child.props?.value;
        }
    }
    return null;
};

class IconTab extends Component {
  static propTypes = {
      ...commonPropTypes,
      children: PropTypes.node,
      isActive: PropTypes.bool,
      selectTab: PropTypes.func,
      'data-qa-id': PropTypes.string,
      activeIcon: PropTypes.node,
      disabled: PropTypes.bool
  };

  static defaultProps = {
      ...commonDefaultProps,
      children: null,
      isActive: false,
      selectTab() {},
      'data-qa-id': '',
      activeIcon: null,
      disabled: false
  };

  static Icon = ({ children, isActive, activeIcon }) =>
      activeIcon && isActive ? activeIcon : children;

  static Description = ({ children, isActive }) => (
      <Typography
          style={{ color: isActive ? '#BBBBBB' : null }}
          variant={'tab-icon-description'}
          block
      >
          {children}
      </Typography>
  );

  static compoundComponents = [IconTab.Icon, IconTab.Description];

  render() {
      const {
          children,
          isActive = false,
          selectTab,
          className,
          style,
          'data-qa-id': dataQAID = '',
          activeIcon,
          disabled
      } = this.props;

      return (
          <li
              data-qa-id={dataQAID}
              onClick={!disabled && selectTab}
              className={cx('tab-li', 'tab-padding', 'text-center', { pointer: !disabled }, className)}
              style={style}
          >
              {React.Children.map(children, childElement => {
                  return IconTab.compoundComponents.some(c => c === childElement?.type)
                      ? React.cloneElement(childElement, {
                          isActive,
                          activeIcon
                      })
                      : childElement;
              })}
          </li>
      );
  }
}

class TabGroup extends Component {
  static Tab = ({
      children,
      isActive = false,
      selectTab,
      className,
      style,
      'data-qa-id': dataQAID = ''
  }) => (
      <li
          data-qa-id={dataQAID}
          onClick={selectTab}
          className={cx(
              { underline: isActive, 'underline-hidden': !isActive },
              'tab-li',
              'pointer',
              'tab-padding',
              className
          )}
          style={style}
      >
          <Typography className={cx('no-margin')} variant={isActive ? 'tab-active' : 'tab'} block>
              {children}
          </Typography>
      </li>
  );
  static Divider = ({ className, style, alignment = 'vertical', variant = 'dotted' }) => (
      <li className={cx('tab-li', 'divider-padding', className)} style={style}>
          <Divider alignment={alignment} variant={variant} className={cx('inline-block')} />
      </li>
  );

  static IconTab = IconTab;
  static compoundComponents = [TabGroup.Tab, TabGroup.IconTab, TabGroup.Divider];

  static propTypes = {
      ...commonPropTypes,
      children: PropTypes.node,
      onChange: PropTypes.func,
      defaultValue: PropTypes.any,
      flex: PropTypes.bool,
      multiple: PropTypes.bool,
      activeIcon: PropTypes.node,
      activeTab: PropTypes.node
  };

  static defaultProps = {
      ...commonDefaultProps,
      children: null,
      onChange: () => {},
      defaultValue: null,
      flex: true,
      multiple: false,
      activeIcon: null
  };

  state = {
      activeTab: getDefaultActive(this.props)
  };

  isControlled(prop) {
      return this.props[prop] !== undefined;
  }

  getState = () => {
      return {
          activeTab: this.isControlled('activeTab') ? this.props.activeTab : this.state.activeTab
      };
  };

  selectTab = tab => {
      const { value } = tab.props;
      const { multiple } = this.props;

      if (!this.isControlled('activeTab')) {
          multiple
              ? this.setState(prevState => {
                  const state = {
                      ...prevState
                  };

                  if (state.activeTab[value]) {
                      delete state.activeTab[value];
                      return state;
                  }
                  state.activeTab[value] = true;
                  return state;
              })
              : this.setState({ activeTab: value });
      }
      this.props.onChange(value, tab);
  };

  render() {
      const { children, className, flex, multiple, activeIcon } = this.props;

      return (
          <ul className={cx('tab-group-ul', { flex }, className)}>
              {React.Children.map(children, childElement => {
                  return TabGroup.compoundComponents.some(c => c === childElement?.type)
                      ? React.cloneElement(childElement, {
                          activeIcon,
                          // TODO: Find a way to reference the component without needing to relying on value prop
                          isActive: do {
                              if (multiple) {
                                  if (Array.isArray(childElement.props.value)) {
                                      childElement.props.value.some(val => this.getState().activeTab[val]);
                                  } else {
                                      this.getState().activeTab[childElement.props.value];
                                  }
                              } else {
                                  R.equals(this.getState().activeTab, childElement.props.value);
                              }
                          },
                          selectTab: () => this.selectTab(childElement)
                      })
                      : childElement;
              })}
          </ul>
      );
  }
}

export default TabGroup;
