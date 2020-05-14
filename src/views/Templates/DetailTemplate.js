import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import UserPage from 'views/pages/UserPage';
import Heading from 'components/Heading/Heading';
import Paragraph from 'components/Paragraph/Paragraph';
import Button from 'components/Button/Button';

const StyledWrapper = styled.div`
  /* box-shadow: 0 10px 30px -10px hsla(0, 0%, 0%, 0.1); */
  padding: 25px 150px 25px 70px;
  max-width: 50vw;
  position: relative;
  display: grid;
  grid-template-rows: 0.25fr 1fr;
`;

const DateInfo = styled(Paragraph)`
  font-weight: ${({ theme }) => theme.bold};
  font-size: ${({ theme }) => theme.fontSize.xs};
  margin: 0 0 10px;
`;

const StyledPageHeader = styled.div`
  margin: 25px 0 50px 0;
`;

const StyledHeading = styled(Heading)`
  margin: 25px 0 0 0;

  ::first-letter {
    text-transform: uppercase;
  }
`;

const StyledLink = styled.a`
  display: block;
  font-weight: ${({ theme }) => theme.bold};
  font-size: ${({ theme }) => theme.fontSize.xs};
  color: black;
  text-transform: uppercase;
  margin: 20px 0 50px;
`;

const StyledImage = styled.img`
  position: absolute;
  right: -80px;
  top: 50px;
  width: 120px;
  height: 120px;
  border-radius: 50%;
`;

const DetailTemplate = ({ pageType, title, created, content, articleUrl /* twitterName */ }) => (
  <UserPage pageType={pageType}>
    <StyledWrapper>
      <StyledPageHeader>
        <StyledHeading big as="h1">
          {title}
        </StyledHeading>
        <DateInfo>{created}</DateInfo>
      </StyledPageHeader>

      <Paragraph>{content}</Paragraph>
      {pageType === 'articles' && <StyledLink href={articleUrl}>open article</StyledLink>}
      {pageType === 'twitters' && (
        <StyledImage src="https://avatarfiles.alphacoders.com/201/201969.jpg" />
      )}

      <Button as={Link} to={`/${pageType}`} activeColor={pageType}>
        Return
      </Button>
    </StyledWrapper>
  </UserPage>
);

DetailTemplate.propTypes = {
  pageType: PropTypes.string.isRequired,
  title: PropTypes.string,
  created: PropTypes.string,
  content: PropTypes.string,
  articleUrl: PropTypes.string,
};

DetailTemplate.defaultProps = {
  title: '',
  created: '',
  content: '',
  articleUrl: '',
};

export default DetailTemplate;
