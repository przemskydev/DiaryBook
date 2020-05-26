import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import ButtonIcon from 'components/ButtonIcon/ButtonIcon';
import logoIco from 'assets/logo.svg';
import editIco from 'assets/edit.svg';
import twitterIco from 'assets/twitter.svg';
import newsIco from 'assets/news.svg';
import todoIco from 'assets/todo.svg';
import withContext from 'hoc/withContext';
import logoutIco from 'assets/logout.svg';

const StyledSidebar = styled.nav`
  position: fixed;
  left: 0;
  top: 0;
  padding: 25px 0;
  width: 150px;
  height: 100vh;
  background-color: ${({ activecolor, theme }) => (activecolor ? theme[activecolor] : theme.note)};
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

const Sidebar = ({ pageContext }) => (
  <StyledSidebar activecolor={pageContext}>
    <StyledLogo to="/" />

    <InnerWrapper>
      <li>
        <ButtonIcon as={NavLink} to="/notes" icon={editIco} activeclass="active" />
      </li>
      <li>
        <ButtonIcon as={NavLink} to="/twitters" icon={twitterIco} activeclass="active" />
      </li>
      <li>
        <ButtonIcon as={NavLink} to="/articles" icon={newsIco} activeclass="active" />
      </li>
      <li>
        <ButtonIcon as={NavLink} to="/todo" icon={todoIco} activeclass="active" />
      </li>
    </InnerWrapper>

    <StyledLogoutButton as={NavLink} to="/login" icon={logoutIco} />
  </StyledSidebar>
);

Sidebar.propTypes = {
  pageContext: PropTypes.oneOf(['notes', 'twitters', 'articles', 'todo']),
};

Sidebar.defaultProps = {
  pageContext: 'notes',
};

export default withContext(Sidebar);
