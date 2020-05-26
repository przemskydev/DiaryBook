import React from 'react';
import GridTemplate from 'views/Templates/GridTemplate';
import PropTypes from 'prop-types';
import Card from 'components/Card/Card';
import { connect } from 'react-redux';
import { fetchItems as fetchItemsAction } from 'actions';

class Todo extends React.Component {
  componentDidMount() {
    // eslint-disable-next-line react/prop-types
    const { fetchTodo } = this.props;
    fetchTodo();
  }

  render() {
    // eslint-disable-next-line react/prop-types
    const { todo } = this.props;
    console.log(todo);
    return (
      <GridTemplate pageType="todo">
        {todo.map(({ _id: id, title, content, created }) => (
          <Card
            key={id}
            id={id}
            cardType="todo"
            title={title}
            content={content}
            created={created}
          />
        ))}
      </GridTemplate>
    );
  }
}

const mapStateToProps = ({ todo }) => ({ todo });

const mapDispatchToProps = (dispatch) => ({
  fetchTodo: () => dispatch(fetchItemsAction('todo')),
});

Todo.propTypes = {
  todo: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
      created: PropTypes.string,
    }),
  ),
};

Todo.defaultProps = {
  todo: [],
};

export default connect(mapStateToProps, mapDispatchToProps)(Todo);
