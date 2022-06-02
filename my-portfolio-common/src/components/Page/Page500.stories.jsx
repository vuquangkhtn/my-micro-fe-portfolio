import React from 'react';

import Page500 from './Page500';

export default {
  title: 'Static Page/500',
  component: Page500,
  argTypes: {}
};

const Template = (args) => <Page500 {...args} />;

export const Default = Template.bind({});
Default.args = {};
