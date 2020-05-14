import React from 'react';
import PropTypes from 'prop-types';
import Sidebar from 'components/Sidebar/Sidebar';

const UserPage = ({ children, pageType }) => (
  <>
    <Sidebar pageType={pageType} />
    {children}
  </>
);

UserPage.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  // eslint-disable-next-line react/require-default-props
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.node]),
  pageType: PropTypes.oneOf(['notes', 'twitters', 'articles']),
};

UserPage.defaultProps = {
  pageType: 'notes',
};

export default UserPage;
