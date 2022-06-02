import React from 'react';

import NavBarToggler from './NavBarToggler';

export default {
  title: 'Common/NavBarToggler',
  component: NavBarToggler,
  argTypes: {
    color: { control: 'color' }
  }
};

const Template = (args) => (
  <div style={{ display: 'flex' }}>
    <NavBarToggler {...args} />
  </div>
);

export const Default = Template.bind({});
Text.args = {
  expanded: false
};
