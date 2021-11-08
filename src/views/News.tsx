import React from 'react';
import {
  ArticleList,
  FetchingError,
  LoadingPage,
  MainArticle,
  NoDataFound
} from 'components';
import { useTypeSelector } from 'hooks/useTypeSelector';
import { RouteComponentProps } from 'react-router-dom';
import ArticlesSearch from '../components/Article/ArticlesSearch';

export default function News(props: RouteComponentProps): JSX.Element {
  const { articles, bookmarks } = useTypeSelector((state) => state);

  if (articles.isLoading) {
    return <LoadingPage />;
  }

  if ('' !== articles.error) {
    return <FetchingError message={articles.error} />;
  }

  if (0 === articles.articles.length) {
    return <NoDataFound />;
  }

  if ('' !== articles.search) {
    return <ArticlesSearch {...props} />;
  }

  return (
    <React.Fragment>
      <div id="banner">
        <MainArticle
          article={articles.articles[0]}
          showLabel={articles.page > 1}
          isBookmark={bookmarks.bookmarks[articles.articles[0].id] || false}
        />
      </div>
      <div id="content">
        <ArticleList {...props} onlyBookmarks={false} />
      </div>
    </React.Fragment>
  );
}
