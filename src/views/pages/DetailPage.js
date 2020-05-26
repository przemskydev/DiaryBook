/* eslint-disable no-underscore-dangle */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/no-unused-state */
import React from 'react';
import PropTypes from 'prop-types';
import DetailTemplate from 'views/Templates/DetailTemplate';
import withContext from 'hoc/withContext';
import { connect } from 'react-redux';
import axios from 'axios';

class DetailPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeItem: {
        title: '',
        created: '',
        content: '',
        articleUrl: '',
        twitterName: '',
      },
    };
  }

  componentDidMount() {
    if (this.props.activeItem) {
      const [activeItem] = this.props.activeItem;

      this.setState({ activeItem });
    } else {
      const { id } = this.props.match.params;

      axios
        .get(`http://localhost:9000/api/note/${id}`)
        .then(({ data }) => this.setState({ activeItem: data }))
        .catch((err) => console.log(err));
    }
  }

  render() {
    const { activeItem } = this.state;

    return (
      <DetailTemplate
        title={activeItem.title}
        created={activeItem.created}
        content={activeItem.content}
        articleUrl={activeItem.articleUrl}
        twitterName={activeItem.twitterName}
      />
    );
  }
}

DetailPage.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  match: PropTypes.object.isRequired,
};

const mapStateToProps = (state, ownProps) => {
  if (state[ownProps.pageContext]) {
    return {
      activeItem: state[ownProps.pageContext].filter(
        (item) => item._id === ownProps.match.params.id,
      ),
    };
  }
  return {};
};

export default withContext(connect(mapStateToProps)(DetailPage));
