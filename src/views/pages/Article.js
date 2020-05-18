import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import GridTemplate from 'views/Templates/GridTemplate';
import Card from 'components/Card/Card';

const Article = ({ articles }) => (
  <GridTemplate pageType="articles">
    {articles.map(({ id, title, content, articleUrl, created }) => (
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

const mapStateToProps = ({ articles }) => ({ articles });

Article.propTypes = {
  articles: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
      articleUrl: PropTypes.string.isRequired,
      created: PropTypes.string.isRequired,
    }),
  ),
};

Article.defaultProps = {
  articles: [],
};

export default connect(mapStateToProps)(Article);
