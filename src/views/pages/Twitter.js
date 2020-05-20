import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import GridTemplate from 'views/Templates/GridTemplate';
import Card from 'components/Card/Card';
import { fetchItems as fetchItemsAction } from 'actions';

class Twitter extends React.Component {
  componentDidMount() {
    // eslint-disable-next-line react/prop-types
    const { fetchTwitters } = this.props;
    fetchTwitters();
  }

  render() {
    const { twitters } = this.props;
    return (
      <GridTemplate pageType="twitters">
        {twitters.map(({ _id: id, title, content, created, twitterName }) => (
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
  }
}

// const mapStateToProps = (state) => {
//   const { twitters } = state;
//   return { twitters }
// }

// ES6 syntax
const mapStateToProps = ({ twitters }) => ({ twitters });

const mapDispatchToProps = (dispatch) => ({
  fetchTwitters: () => dispatch(fetchItemsAction('twitters')),
});

Twitter.propTypes = {
  twitters: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
      twitterName: PropTypes.string.isRequired,
      created: PropTypes.string,
    }),
  ),
};

Twitter.defaultProps = {
  twitters: [],
};

export default connect(mapStateToProps, mapDispatchToProps)(Twitter);
