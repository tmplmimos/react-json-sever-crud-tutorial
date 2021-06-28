import React from 'react';

import Tasks from './Tasks';

export default {
  component: Tasks,
  title: 'Tasks',
};

const Template = args => <Tasks {...args} />;

export const Default = Template.bind({});