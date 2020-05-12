import React from 'react';
import Heading from './Heading';

export default {
  component: Heading,
  title: 'Heading',
};

export const headingNormal = () => <Heading>Hello World!</Heading>;

export const headingBig = () => <Heading big>Hello World!</Heading>;
