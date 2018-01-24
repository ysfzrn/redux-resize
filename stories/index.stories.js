import React from 'react';
import { withInfo } from '@storybook/addon-info';
// eslint-disable-next-line
import { storiesOf } from "@storybook/react";
import Example from './example/root';

storiesOf('Intro', module).add('default', () => <Example />);
