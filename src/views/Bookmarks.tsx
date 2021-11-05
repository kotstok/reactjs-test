import React from 'react';
import { ArticleList } from '../components';
import { RouteComponentProps } from 'react-router-dom';
import ArticlesSearch from '../components/Article/ArticlesSearch';
import { useTypeSelector } from '../hooks/useTypeSelector';

export default function Bookmarks(props: RouteComponentProps): JSX.Element {
  const state = useTypeSelector((state) => state.articles);
  return (
    <div className="content">
      {'' !== state.search ? (
        <ArticlesSearch {...props} />
      ) : (
        <ArticleList {...props} limit={8} onlyBookmarks={true} />
      )}
    </div>
  );
}
