import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import GridTemplate from 'views/Templates/GridTemplate';
import Card from 'components/Card/Card';
import { fetchItems as fetchItemsAction } from 'actions';

class Notes extends React.Component {
  componentDidMount() {
    // eslint-disable-next-line react/prop-types
    const { fetchNotes } = this.props;
    fetchNotes();
  }

  render() {
    const { notes } = this.props;

    return (
      <GridTemplate pageType="notes">
        {notes.map(({ _id: id, title, content, created }) => (
          <Card
            key={id}
            id={id}
            cardType="notes"
            title={title}
            content={content}
            created={created}
          />
        ))}
      </GridTemplate>
    );
  }
}

const mapStateToProps = ({ notes }) => ({ notes });

const mapDispatchToProps = (dispatch) => ({
  fetchNotes: () => dispatch(fetchItemsAction('notes')),
});

Notes.propTypes = {
  notes: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
      created: PropTypes.string,
    }),
  ),
};

Notes.defaultProps = {
  notes: [],
};

export default connect(mapStateToProps, mapDispatchToProps)(Notes);
