import React from 'react';
import { storiesOf } from '@storybook/react';
import { Divider } from 'Divider';
import centered from '@storybook/addon-centered/react';
import { withKnobs, select } from '@storybook/addon-knobs';

storiesOf('Components|Atoms/Divider', module)
    .addDecorator(withKnobs)
    .addDecorator(centered)
    .add('horizontal usage', () => (
        <div>
      Top line
            <Divider variant={select('Variant', ['solid', 'dotted'], 'solid')} />
      Bottom line
        </div>
    ))
    .add('vertical usage', () => (
        <span>
      Left side
            <Divider alignment="vertical" variant={select('Variant', ['solid', 'dotted'], 'solid')} />
      Right side
        </span>
    ));
