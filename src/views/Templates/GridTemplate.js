import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import UserPage from 'views/pages/UserPage';
import Input from 'components/Input/Input';
import Heading from 'components/Heading/Heading';
import Paragraph from 'components/Paragraph/Paragraph';
import ButtonIcon from 'components/ButtonIcon/ButtonIcon';
import NewItem from 'components/AddNewItem/NewItem';
import addIco from 'assets/add.svg';
import withContext from 'hoc/withContext';

const StyledWrapper = styled.div`
  position: relative;
  padding: 25px 150px 25px 75px;
`;

const StyledPageHeader = styled.div`
  margin: 25px 0 50px 0;
`;

const StyledGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 85px;

  @media (max-width: 1500px) {
    grid-gap: 45px;
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 1100px) {
    grid-template-columns: 1fr;
  }
`;

const StyledHeading = styled(Heading)`
  margin: 25px 0 0 0;

  ::first-letter {
    text-transform: uppercase;
  }
`;

const StyledParagraph = styled(Paragraph)`
  margin: 0;
  font-weight: ${({ theme }) => theme.bold};
`;

const StyledButtonIcon = styled(ButtonIcon)`
  background-color: ${({ activeColor, theme }) => theme[activeColor]};
  border-radius: 50px;
  position: fixed;
  bottom: 50px;
  right: 50px;
  z-index: 1000;
`;

class GridTemplate extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isVisible: false,
    };
  }

  handleAddItem = () => {
    this.setState((prevState) => ({
      isVisible: !prevState.isVisible,
    }));
  };

  render() {
    const { children, pageContext } = this.props;
    const { isVisible } = this.state;

    return (
      <UserPage>
        <StyledWrapper>
          <StyledPageHeader>
            <Input search placeholder="search" />
            <StyledHeading big as="h1">
              {pageContext}
            </StyledHeading>
            <StyledParagraph>6 {pageContext}</StyledParagraph>
          </StyledPageHeader>

          <StyledGrid>{children}</StyledGrid>
          <StyledButtonIcon onClick={this.handleAddItem} icon={addIco} activeColor={pageContext} />
          <NewItem handleClose={this.handleAddItem} visible={isVisible} />
        </StyledWrapper>
      </UserPage>
    );
  }
}

GridTemplate.propTypes = {
  children: PropTypes.arrayOf(PropTypes.object).isRequired,
  pageContext: PropTypes.oneOf(['notes', 'twitters', 'articles']),
};

GridTemplate.defaultProps = {
  pageContext: 'notes',
};

export default withContext(GridTemplate);
