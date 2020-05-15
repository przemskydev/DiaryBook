import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import GridTemplate from 'views/Templates/GridTemplate';
import Card from 'components/Card/Card';

const Twitter = ({ twitters }) => (
  <GridTemplate pageType="twitters">
    {twitters.map(({ id, title, content, created, twitterName }) => (
      <Card
        key={id}
        id={id}
        cardType="twitters"
        title={title}
        content={content}
        created={created}
        twitterName={twitterName}
      />
    ))}
  </GridTemplate>
);

// const mapStateToProps = (state) => {
//   const { twitters } = state;
//   return { twitters }
// }

// ES6 syntax
const mapStateToProps = ({ twitters }) => ({ twitters });

Twitter.propTypes = {
  twitters: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
      twitterName: PropTypes.string.isRequired,
      created: PropTypes.string.isRequired,
    }),
  ),
};

Twitter.defaultProps = {
  twitters: [],
};

export default connect(mapStateToProps)(Twitter);
