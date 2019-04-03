import React from 'react';
import { storiesOf } from '@storybook/react';
import TabGroup from './TabGroup.jsx';
import { action } from '@storybook/addon-actions';
import centered from '@storybook/addon-centered/react';
import { withKnobs } from '@storybook/addon-knobs';

storiesOf('TabGroup', module)
    .addDecorator(withKnobs)
    .addDecorator(centered)
    .add('basic usage', () => (
        <TabGroup style={{ width: '600px' }} onChange={action('changed')}>
            <TabGroup.Tab value={0}>Test</TabGroup.Tab>
            <TabGroup.Tab defaultActive value={1}>
        Test2
            </TabGroup.Tab>
            <TabGroup.Tab value={2}>Test3</TabGroup.Tab>
        </TabGroup>
    ))
    .add('with mixed content', () => (
        <TabGroup style={{ width: '600px' }} onChange={action('changed')}>
            <span>Title</span>
            <TabGroup.Tab value={0}>Test</TabGroup.Tab>
            <TabGroup.Tab value={1}>Test2</TabGroup.Tab>
            <TabGroup.Tab value={2}>Test3</TabGroup.Tab>
        </TabGroup>
    ));
