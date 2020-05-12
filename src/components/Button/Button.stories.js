import React from 'react';
import { withKnobs, select } from '@storybook/addon-knobs';
import Button from './Button';

export default {
  component: Button,
  title: 'Button',
  decorators: [withKnobs],
};

export const text = () => {
  const label = 'Colors';
  const options = {
    Primary: 'hsl(49, 100%, 58%)',
    Secondary: 'hsl(169, 83%, 75%)',
    Tertiary: 'hsl(106, 47%, 64%)',
  };
  const defaultValue = 'hsl(49, 100%, 58%)';
  const groupId = 'GROUP-ID1';

  const value = select(label, options, defaultValue, groupId);

  return <Button color={value}>Hello Button</Button>;
};

export const emoji = () => (
  <Button secondary>
    <span role="img" aria-label="so cool">
      😀 😎 👍 💯
    </span>
  </Button>
);
