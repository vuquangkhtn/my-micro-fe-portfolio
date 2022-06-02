import React from 'react';

import Button from './Button';

export default {
  title: 'Common/Button',
  component: Button,
  argTypes: {
    backgroundColor: { control: 'color' },
    mode: {
      options: ['primary', 'secondary', 'submit'],
      control: { type: 'select' }
    }
  }
};

const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  children: 'Button'
};

export const Secondary = Template.bind({});
Secondary.args = {
  mode: 'secondary',
  children: 'Button'
};

export const Submit = Template.bind({});
Submit.args = {
  mode: 'submit',
  children: 'Button'
};
