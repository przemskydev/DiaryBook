import React from 'react';
import Input from './Input';

export default {
  component: Input,
  title: 'Input',
};

export const normal = () => <Input placeholder="Login" />;

export const search = () => <Input search placeholder="Search" />;
