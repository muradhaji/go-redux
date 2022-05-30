import React from 'react';

import Text from './Text';

export default {
  title: 'Example/Text',
  component: Text,
  argTypes: {
    level: { control: 'radio' },
    children: { control: 'text' },
  },
};

const Template = (args) => <Text {...args} />;

export const TextXS = Template.bind({});
TextXS.args = {
  children: 'Text XS',
  level: 'xs',
};

export const TextS = Template.bind({});
TextS.args = {
  children: 'Text S',
  level: 's',
};

export const TextM = Template.bind({});
TextM.args = {
  children: 'Text M',
  level: 'm',
};

export const TextL = Template.bind({});
TextL.args = {
  children: 'Text L',
  level: 'l',
};

export const TextXL = Template.bind({});
TextXL.args = {
  children: 'Text XL',
  level: 'xl',
};

export const TextXXL = Template.bind({});
TextXXL.args = {
  children: 'Text XXL',
  level: 'xxl',
};
