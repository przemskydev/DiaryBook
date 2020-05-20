import React from 'react';
import PageContext from 'context';

const withContext = (Component) => {
  return function contextComponent(props) {
    return (
      <PageContext.Consumer>
        {(contextValue) => (
          // eslint-disable-next-line react/jsx-props-no-spreading
          <Component {...props} pageContext={contextValue} />
        )}
      </PageContext.Consumer>
    );
  };
};

export default withContext;
