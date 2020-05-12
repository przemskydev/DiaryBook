import React from 'react';
import styled from 'styled-components';
import addIco from 'assets/add.svg';
import bulbIco from 'assets/bulb.svg';
import editIco from 'assets/edit.svg';
import logoutIco from 'assets/logout.svg';
import twitterIco from 'assets/twitter.svg';
import linkIco from 'assets/link.svg';
import ButtonIcon from './ButtonIcon';

const YellowBg = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 100px;
  background: ${({ theme }) => theme.note};
`;

export default {
  component: ButtonIcon,
  title: 'Buttons',
  decorators: [(story) => <YellowBg>{story()}</YellowBg>],
};

export const bulb = () => <ButtonIcon icon={bulbIco} />;

export const addActive = () => <ButtonIcon active icon={addIco} />;

export const edit = () => <ButtonIcon icon={editIco} />;

export const logout = () => <ButtonIcon icon={logoutIco} />;

export const twitterActive = () => <ButtonIcon active icon={twitterIco} />;

export const link = () => <ButtonIcon icon={linkIco} />;
