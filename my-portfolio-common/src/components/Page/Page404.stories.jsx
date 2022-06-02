import React from 'react';

import Page404 from './Page404';

export default {
  title: 'Static Page/404',
  component: Page404,
  argTypes: {}
};

const Template = (args) => <Page404 {...args} />;

export const Default = Template.bind({});
Default.args = {};
