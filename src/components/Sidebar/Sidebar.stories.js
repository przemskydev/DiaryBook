import React from 'react';
import Sidebar from 'components/Sidebar/Sidebar';
import StoryRouter from 'storybook-react-router';

export default {
  component: Sidebar,
  title: 'Sidebar',
  decorators: [StoryRouter()],
};

export const sidebarNote = () => <Sidebar pageType="note" />;
export const sidebarTwitter = () => <Sidebar pageType="twitter" />;
export const sidebarArticle = () => <Sidebar pageType="article" />;
