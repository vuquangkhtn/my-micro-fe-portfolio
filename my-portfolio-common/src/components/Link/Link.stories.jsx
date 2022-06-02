import React from 'react';

import Link from './Link';

export default {
  title: 'Common/Link',
  component: Link,
  argTypes: {}
};

const Template = (args) => (
  <div style={{ display: 'flex' }}>
    <Link {...args} />
  </div>
);

export const Text = Template.bind({});
Text.args = {
  href: '/',
  children: 'text'
};
