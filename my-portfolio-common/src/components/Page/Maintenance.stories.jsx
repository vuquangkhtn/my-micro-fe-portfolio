import React from 'react';

import Maintenance from './Maintenance';

export default {
  title: 'Static Page/Maintenance',
  component: Maintenance,
  argTypes: {}
};

const Template = (args) => <Maintenance {...args} />;

export const Default = Template.bind({});
Default.args = {};
