import React from 'react';
import PageContext from 'context';

const withContext = (Component) => {
  return function contextComponent(props) {
    return (
      <PageContext.Consumer>
        {(context) => (
          // eslint-disable-next-line react/jsx-props-no-spreading
          <Component {...props} pageContext={context} />
        )}
      </PageContext.Consumer>
    );
  };
};

export default withContext;
