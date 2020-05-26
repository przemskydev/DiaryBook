import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import GridTemplate from 'views/Templates/GridTemplate';
import Card from 'components/Card/Card';
import { fetchItems as fetchItemsAction } from 'actions';

class Article extends React.Component {
  componentDidMount() {
    // eslint-disable-next-line react/prop-types
    const { fetchArticles } = this.props;
    fetchArticles();
  }

  render() {
    const { articles } = this.props;

    return (
      <GridTemplate pageType="articles">
        {articles.map(({ _id: id, title, content, articleUrl, created }) => (
          <Card
            key={id}
            id={id}
            cardType="articles"
            title={title}
            content={content}
            articleUrl={articleUrl}
            created={created}
          />
        ))}
      </GridTemplate>
    );
  }
}

const mapStateToProps = ({ articles }) => ({ articles });

const mapDispatchToProps = (dispatch) => ({
  fetchArticles: () => dispatch(fetchItemsAction('articles')),
});

Article.propTypes = {
  articles: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
      articleUrl: PropTypes.string.isRequired,
      created: PropTypes.string,
    }),
  ),
};

Article.defaultProps = {
  articles: [],
};

export default connect(mapStateToProps, mapDispatchToProps)(Article);
