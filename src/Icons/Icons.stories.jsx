import React from 'react';
import { storiesOf } from '@storybook/react';
import Icons from './index.js';
import styles from './storyStyles.scss';

storiesOf('Style|Icons', module)
    .add('AngleLeftIcon', () => <Icons.AngleLeftIcon className={styles.icon} />)
    .add('AngleRightIcon', () => <Icons.AngleRightIcon className={styles.icon} />)
    .add('Check', () => <Icons.Check className={styles.icon} />)
    .add('Circle', () => <Icons.Circle className={styles.icon} />)
    .add('CircleO', () => <Icons.CircleO className={styles.icon} />);
