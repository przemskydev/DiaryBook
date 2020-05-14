import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import ButtonIco from 'components/ButtonIcon/ButtonIcon';
import logoIco from 'assets/logo.svg';
import editIco from 'assets/edit.svg';
import twitterIco from 'assets/twitter.svg';
import bulbIco from 'assets/bulb.svg';
import logoutIco from 'assets/logout.svg';
import ButtonIcon from '../ButtonIcon/ButtonIcon';

const StyledSidebar = styled.nav`
  position: fixed;
  left: 0;
  top: 0;
  padding: 25px 0;
  width: 150px;
  height: 100vh;
  background-color: ${({ activeColor, theme }) => (activeColor ? theme[activeColor] : theme.note)};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

const StyledLogo = styled(NavLink)`
  display: block;
  width: 67px;
  height: 67px;
  background-image: url(${logoIco});
  background-repeat: no-repeat;
  background-position: 50% 50%;
  background-size: 80%;
  border: none;
  margin-bottom: 10vh;
`;

const InnerWrapper = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
`;

const StyledLogoutButton = styled(ButtonIcon)`
  margin-top: auto;
`;

const Sidebar = ({ pageType }) => (
  <StyledSidebar activeColor={pageType}>
    <StyledLogo to="/" />

    <InnerWrapper>
      <li>
        <ButtonIco as={NavLink} to="/notes" icon={editIco} activeclass="active" />
      </li>
      <li>
        <ButtonIco as={NavLink} to="/twitters" icon={twitterIco} activeclass="active" />
      </li>
      <li>
        <ButtonIco as={NavLink} to="/articles" icon={bulbIco} activeclass="active" />
      </li>
    </InnerWrapper>

    <StyledLogoutButton as={NavLink} to="/login" icon={logoutIco} />
  </StyledSidebar>
);

Sidebar.propTypes = {
  pageType: PropTypes.string.isRequired,
};

export default Sidebar;
