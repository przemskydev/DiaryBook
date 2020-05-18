import React from 'react';
import PropTypes from 'prop-types';
import Sidebar from 'components/Sidebar/Sidebar';

const UserPage = ({ children }) => (
  <>
    <Sidebar />
    {children}
  </>
);

UserPage.propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.node]).isRequired,
};

export default UserPage;
