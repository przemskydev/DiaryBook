import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Link, Redirect } from 'react-router-dom';
import { Formik, Form, Field } from 'formik';
import Heading from 'components/Heading/Heading';
import Input from 'components/Input/Input';
import Button from 'components/Button/Button';
import { routes } from 'routes';
import { connect } from 'react-redux';
import { authenticate as authenticateAction } from 'actions';

const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const StyledInput = styled(Input)`
  margin: 0 0 30px 0;
  height: 40px;
  width: 300px;
`;

const StyledLink = styled(Link)`
  display: block;
  font-weight: ${({ theme }) => theme.bold};
  font-size: ${({ theme }) => theme.fontSize.xs};
  color: black;
  text-transform: uppercase;
  margin: 20px 0 50px;
`;

const LoginPage = ({ userID, authenticate }) => (
  <div>
    <Formik
      initialValues={{ username: '', password: '' }}
      onSubmit={({ username, password }) => {
        authenticate(username, password);
      }}
    >
      {({ values, handleChange, handleBlur }) => {
        if (userID) {
          return <Redirect to="/" />;
        }
        return (
          <>
            <StyledForm>
              <Heading>Log in</Heading>
              <StyledInput
                as={Field}
                type="text"
                placeholder="LOGIN"
                name="username"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.username}
              />

              <StyledInput
                as={Field}
                type="password"
                placeholder="PASSWORD"
                name="password"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.password}
              />

              <Button type="submit">Log in</Button>
              <StyledLink to={routes.register}>I want account!</StyledLink>
            </StyledForm>
          </>
        );
      }}
    </Formik>
  </div>
);

const mapStateToProps = ({ userID = null }) => ({
  userID,
});

const mapDispatchToProps = (dispatch) => ({
  authenticate: (username, password) => dispatch(authenticateAction(username, password)),
});

LoginPage.propTypes = {
  userID: PropTypes.string.isRequired,
  authenticate: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
