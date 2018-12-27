import React, { Fragment } from 'react';
import { storiesOf } from '@storybook/react';
import Typography from './Typography.jsx';
import centered from '@storybook/addon-centered';
import { withKnobs } from '@storybook/addon-knobs';

storiesOf('Typography', module)
    .addDecorator(withKnobs)
    .addDecorator(centered)
    .add('Gallery', () => (
        <Fragment>
            <Typography variant="button">Button</Typography>
            <Typography variant="caption">Caption</Typography>
            <Typography variant="input">Input</Typography>
            <Typography variant="body1">Body1</Typography>
            <Typography variant="adornment">Adornment</Typography>
            <Typography variant="tab">Tab</Typography>
            <Typography variant="tab-active">Tab Active</Typography>
        </Fragment>
    ));
