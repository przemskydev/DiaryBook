import React from 'react';
import Card from 'components/Card/Card';

export default {
  component: Card,
  title: 'Card',
  // decorators: [withKnobs],
};

export const primary = () => <Card />;
export const secondary = () => <Card cardType="twitter" />;
export const tertiary = () => <Card cardType="article" />;
