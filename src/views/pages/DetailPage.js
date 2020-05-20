import React from 'react';
import PropTypes from 'prop-types';
import DetailTemplate from 'views/Templates/DetailTemplate';
import { routes } from 'routes';

class DetailPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pageType: 'notes',
    };
  }

  componentDidMount() {
    const { match } = this.props;

    switch (match.path) {
      case routes.note:
        this.setState({ pageType: 'notes' });
        break;
      case routes.twitter:
        this.setState({ pageType: 'twitters' });
        break;
      case routes.article:
        this.setState({ pageType: 'articles' });
        break;
      default:
        console.log('Something went wrong with matching paths');
    }
  }

  render() {
    const fakeArtcile = {
      id: 4,
      title: 'Super animacje!',
      content:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, tempora quibusdam natus modi tempore esse adipisci, dolore odit animi',
      created: '10 days',
      articleUrl: 'https://youtube.com/helloroman',
      twitterName: 'sarah_edo',
    };

    const { pageType } = this.state;

    return (
      <DetailTemplate
        pageType={pageType}
        title={fakeArtcile.title}
        created={fakeArtcile.created}
        content={fakeArtcile.content}
        articleUrl={fakeArtcile.articleUrl}
        twitterName={fakeArtcile.twitterName}
      />
    );
  }
}

DetailPage.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  match: PropTypes.object.isRequired,
};

export default DetailPage;
