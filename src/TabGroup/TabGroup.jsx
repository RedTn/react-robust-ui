import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './styles.scss';
import { Typography } from 'Typography';
import { commonPropTypes, commonDefaultProps } from '__internal/Utils/CommonProps.js';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const getDefaultActive = props =>
    props.children && props.children.find(child => child.props.defaultActive);

class TabGroup extends Component {
  static Tab = ({ children, isActive = false, selectTab }) => (
      <span
          onClick={() => selectTab()}
          className={cx(
              { underline: isActive, 'underline-hidden': !isActive },
              'pointer',
              'tab-padding'
          )}
      >
          <Typography className={cx('no-margin')} variant={isActive ? 'tab-active' : 'tab'}>
              {children}
          </Typography>
      </span>
  );
  static compoundComponents = [TabGroup.Tab];

  static propTypes = {
      ...commonPropTypes,
      children: PropTypes.node,
      onChange: PropTypes.func,
      defaultValue: PropTypes.any
  };

  static defaultProps = {
      ...commonDefaultProps,
      children: null,
      onChange: null,
      defaultValue: null
  };

  state = {
      activeTab: getDefaultActive(this.props)
  };

  selectTab = tab => {
      const { value } = tab.props;

      this.setState({ activeTab: tab });
      this.props.onChange(value, tab);
  };

  render() {
      const { children, className, style } = this.props;

      return (
          <article className={cx('tab-group-article', className)} style={style}>
              {React.Children.map(children, childElement => {
                  return TabGroup.compoundComponents.some(c => c === childElement.type)
                      ? React.cloneElement(childElement, {
                          isActive: this.state.activeTab === childElement,
                          value: childElement.props.value,
                          selectTab: () => this.selectTab(childElement)
                      })
                      : childElement;
              })}
          </article>
      );
  }
}

export default TabGroup;
