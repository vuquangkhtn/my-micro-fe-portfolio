import React from 'react';

import TextArea from './TextArea';

export default {
  title: 'Common/TextArea',
  component: TextArea,
  argTypes: {}
};

const Template = (args) => (
  <div style={{ display: 'flex' }}>
    <TextArea {...args} />
  </div>
);

export const Text = Template.bind({});
Text.args = {
  placeholder: 'type here',
  disabled: false,
  rows: 6
};
