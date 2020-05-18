import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import Paragraph from 'components/Paragraph/Paragraph';
import Heading from 'components/Heading/Heading';
import Button from 'components/Button/Button';
import linkIco from 'assets/link.svg';
import { connect } from 'react-redux';
import { removeItem as removeItemAction } from 'actions';

const StyledWrapper = styled.div`
  box-shadow: 0 10px 30px -10px hsla(0, 0%, 0%, 0.1);
  border-radius: 10px;
  overflow: hidden;
  min-height: 385px;
  position: relative;
  display: grid;
  grid-template-rows: 0.25fr 1fr;
`;

const InnerWrapper = styled.div`
  padding: 17px 30px 10px;
  position: relative;
  background-color: ${({ activeColor, theme }) => (activeColor ? theme[activeColor] : 'white')};

  :first-of-type {
    z-index: 999;
  }

  ${({ flex }) =>
    flex &&
    css`
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    `}
`;

const DateInfo = styled(Paragraph)`
  font-weight: ${({ theme }) => theme.bold};
  font-size: ${({ theme }) => theme.fontSize.xs};
  margin: 0 0 10px;
`;

const StyledHeading = styled(Heading)`
  margin: 10px 0 0;
`;

const StyledAvatar = styled.img`
  width: 86px;
  height: 86px;
  border: 5px solid ${({ theme }) => theme.twitters};
  border-radius: 50%;
  position: absolute;
  right: 25px;
  top: 25px;
`;

const StyledLink = styled.a`
  display: block;
  width: 45px;
  height: 45px;
  border-radius: 50px;
  background-size: contain;
  background: white url(${linkIco}) no-repeat;
  background-size: 60%;
  background-position: 50%;
  position: absolute;
  right: 25px;
  top: 25px;
`;
/*  https://avatarfiles.alphacoders.com/201/201969.jpg  */
class Card extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      redirect: false,
    };
  }

  handleCardClick = () => this.setState({ redirect: true });

  render() {
    const { id, cardType, title, created, articleUrl, content, removeItem } = this.props;
    const { redirect } = this.state;

    if (redirect) {
      return <Redirect to={`${cardType}/${id}`} />;
    }

    return (
      <StyledWrapper onClick={this.handleCardClick}>
        <InnerWrapper activeColor={cardType}>
          <StyledHeading>{title}</StyledHeading>
          <DateInfo>{created}</DateInfo>
          {cardType === 'twitters' && (
            <StyledAvatar src="https://avatarfiles.alphacoders.com/201/201969.jpg" />
          )}
          {cardType === 'articles' && <StyledLink href={articleUrl} />}
        </InnerWrapper>
        <InnerWrapper flex>
          <Paragraph>{content}</Paragraph>

          <Button onClick={() => removeItem(cardType, id)} secondary>
            Remove
          </Button>
        </InnerWrapper>
      </StyledWrapper>
    );
  }
}

Card.propTypes = {
  cardType: PropTypes.oneOf(['notes', 'twitters', 'articles']),
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  created: PropTypes.string.isRequired,
  articleUrl: PropTypes.string,
  content: PropTypes.string.isRequired,
  removeItem: PropTypes.func.isRequired,
};

Card.defaultProps = {
  cardType: 'notes',
  articleUrl: null,
};

const mapDispatchToProps = (dispatch) => {
  return {
    removeItem: (cardType, id) => dispatch(removeItemAction(cardType, id)),
  };
};

export default connect(null, mapDispatchToProps)(Card);
