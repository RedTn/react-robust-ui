import React from 'react';
import { storiesOf } from '@storybook/react';
import TabGroup from './TabGroup.jsx';
import Icons from 'Icons';
import { action } from '@storybook/addon-actions';
import centered from '@storybook/addon-centered/react';
import { withKnobs } from '@storybook/addon-knobs';
import classNames from 'classnames/bind';
import styles from './storyStyles.scss';

const cx = classNames.bind(styles);

storiesOf('Components|Molecules/TabGroup', module)
    .addDecorator(withKnobs)
    .addDecorator(centered)
    .add('basic usage', () => (
        <TabGroup className={styles.setFixedWidth} onChange={action('changed')}>
            <TabGroup.Tab value={0}>Test</TabGroup.Tab>
            <TabGroup.Tab defaultActive value={1}>
        Test2
            </TabGroup.Tab>
            <TabGroup.Tab value={2}>Test3</TabGroup.Tab>
        </TabGroup>
    ))
    .add('control prop', () => {
    /* eslint-disable react/prop-types */
        class Wrapper extends React.Component {
      state = {
          value: 0
      };

      handleChange = value => {
          this.setState({
              value
          });
      };

      render() {
          return (
              <TabGroup
                  className={styles.setFixedWidth}
                  activeTab={this.state.value}
                  onChange={this.handleChange}
              >
                  <TabGroup.Tab value={0}>Test</TabGroup.Tab>
                  <TabGroup.Tab value={1}>Test2</TabGroup.Tab>
                  <TabGroup.Tab value={2}>Test3</TabGroup.Tab>
              </TabGroup>
          );
      }
        }
        return <Wrapper />;
    })
    .add('multiple', () => (
        <TabGroup multiple className={styles.setFixedWidth} onChange={action('changed')}>
            <TabGroup.Tab value={0}>Test</TabGroup.Tab>
            <TabGroup.Tab defaultActive value={1}>
        Test2
            </TabGroup.Tab>
            <TabGroup.Tab value={2}>Test3</TabGroup.Tab>
        </TabGroup>
    ))
    .add('icon tabs', () => (
        <TabGroup
            className={styles.setFixedWidth}
            onChange={action('changed')}
            activeIcon={<Icons.Check className={cx('icon', 'icon-green-blur')} />}
            multiple
        >
            <TabGroup.IconTab disabled className={cx('vertical-center')}>
        Select:
            </TabGroup.IconTab>
            <TabGroup.IconTab value={0}>
                <TabGroup.IconTab.Icon>
                    <Icons.Circle className={cx('icon')} />
                </TabGroup.IconTab.Icon>
                <TabGroup.IconTab.Description>Test1</TabGroup.IconTab.Description>
            </TabGroup.IconTab>
            <TabGroup.Divider />
            <TabGroup.IconTab defaultActive value={1}>
                <TabGroup.IconTab.Icon>
                    <Icons.CircleO className={cx('icon')} />
                </TabGroup.IconTab.Icon>
                <TabGroup.IconTab.Description>Test2</TabGroup.IconTab.Description>
            </TabGroup.IconTab>
            <TabGroup.Divider />
            <TabGroup.IconTab value={2}>
                <TabGroup.IconTab.Icon>
                    <Icons.AngleLeftIcon className={cx('icon')} />
                </TabGroup.IconTab.Icon>
                <TabGroup.IconTab.Description>Test3</TabGroup.IconTab.Description>
            </TabGroup.IconTab>
        </TabGroup>
    ))
    .add('with mixed content', () => (
        <TabGroup className={styles.setFixedWidth} onChange={action('changed')}>
            <span>Title</span>
            <TabGroup.Tab value={0}>Test</TabGroup.Tab>
            <TabGroup.Tab value={1}>Test2</TabGroup.Tab>
            <TabGroup.Tab value={2}>Test3</TabGroup.Tab>
        </TabGroup>
    ));
