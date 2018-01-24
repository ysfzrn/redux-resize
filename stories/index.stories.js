import React from 'react';
import { withInfo } from '@storybook/addon-info';
// eslint-disable-next-line
import { storiesOf } from "@storybook/react";
import Example from './example/root';
import CustomBreakPoints from './customBreakPoints/root';

storiesOf('Intro', module)
    .add('default', () => <Example />)
    .add('Custom BreakPoints', () => <CustomBreakPoints />);
