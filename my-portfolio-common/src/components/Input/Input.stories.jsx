import React from 'react';

import Input from './Input';

export default {
  title: 'Common/Input',
  component: Input,
  argTypes: {
    type: {
      options: ['email', 'text', 'number'],
      control: { type: 'select' }
    }
  }
};

const Template = (args) => (
  <div style={{ display: 'flex' }}>
    <Input {...args} />
  </div>
);

export const Text = Template.bind({});
Text.args = {
  type: 'text',
  placeholder: 'input here',
  disabled: false
};

export const Email = Template.bind({});
Email.args = {
  ...Text.args,
  type: 'email'
};
