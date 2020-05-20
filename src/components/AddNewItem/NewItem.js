import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Input from 'components/Input/Input';
import Button from 'components/Button/Button';
import Heading from 'components/Heading/Heading';
import withContext from 'hoc/withContext';
import { connect } from 'react-redux';
import { addItem as addItemAction } from 'actions';
import { Formik, Form } from 'formik';

const StyledWrapper = styled.div`
  border-left: 10px solid ${({ activeColor, theme }) => theme[activeColor]};
  background-color: white;
  height: 100vh;
  width: 680px;
  position: fixed;
  right: 0;
  top: 0;
  padding: 100px 90px;
  display: flex;
  flex-direction: column;
  z-index: 999;
  box-shadow: -5px 0 15px rgba(0, 0, 0, 0.2);
  transform: translate(${({ isVisible }) => (isVisible ? '0' : '100%')});
  transition: transform 0.2s ease-in-out;
`;

const StyledTextarea = styled(Input)`
  height: 30vh;
  border-radius: 20px;
  margin: 30px 0 100px;
`;

const StyledInput = styled(Input)`
  margin-top: 30px;
`;

const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
`;

const NewItem = ({ pageContext, visible, addItem, handleClose }) => {
  return (
    <StyledWrapper isVisible={visible} activeColor={pageContext}>
      <Heading>Add new {pageContext}</Heading>

      <Formik
        initialValues={{
          title: '',
          link: '',
          content: '',
          articleUrl: '',
          twitterName: '',
          created: '',
        }}
        onSubmit={(values) => {
          addItem(pageContext, values);
          handleClose();
        }}
      >
        {({ values, handleChange, handleBlur }) => (
          <StyledForm>
            <Input
              type="text"
              name="title"
              placeholder={pageContext === 'twitters' ? 'YOUR TITLE' : 'Title'}
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.title}
            />

            {pageContext === 'twitters' && (
              <StyledInput
                placeholder="twitter_name"
                type="text"
                name="twitterName"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.twitterName}
              />
            )}

            {pageContext === 'articles' && (
              <StyledInput
                placeholder="link"
                type="text"
                name="articleUrl"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.articleUrl}
              />
            )}

            <StyledTextarea
              name="content"
              as="textarea"
              placeholder="things"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.content}
            />

            <Button type="submit" activeColor={pageContext}>
              Add
            </Button>
          </StyledForm>
        )}
      </Formik>
    </StyledWrapper>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    addItem: (itemType, itemContent) => dispatch(addItemAction(itemType, itemContent)),
  };
};

NewItem.propTypes = {
  pageContext: PropTypes.oneOf(['notes', 'twitters', 'articles']),
  visible: PropTypes.bool.isRequired,
  addItem: PropTypes.func.isRequired,
  handleClose: PropTypes.func.isRequired,
};

NewItem.defaultProps = {
  pageContext: 'notes',
};

export default connect(null, mapDispatchToProps)(withContext(NewItem));
