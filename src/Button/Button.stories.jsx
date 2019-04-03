import React from 'react';
import { storiesOf } from '@storybook/react';
import Button from './Button.jsx';
import { action } from '@storybook/addon-actions';
import centered from '@storybook/addon-centered/react';
import { withKnobs, text, boolean, select } from '@storybook/addon-knobs';

storiesOf('Button', module)
    .addDecorator(withKnobs)
    .addDecorator(centered)
    .add('basic usage', () => (
        <Button
            color={select('Color', ['base', 'blue'], 'base')}
            gradient={boolean('Gradient', false)}
            bordered={boolean('Bordered', false)}
            onClick={action('clicked')}
        >
            {text('Text', 'Hello Button')}
        </Button>
    ));
