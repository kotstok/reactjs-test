import React, { useEffect } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { useTypeSelector } from 'hooks/useTypeSelector';
import { PageFromUrl, Pagination } from '../Pagination';
import { Article } from './Article';
import { useActions } from '../../hooks/useActions';
import { NoDataFound } from '../NoDataFound';

export default function ArticlesSearch(
  props: RouteComponentProps
): JSX.Element {
  const homepage = '/news';
  const perPage = 8;

  const { articles, bookmarks } = useTypeSelector((state) => state);
  const { setArticlePage, setArticleSearch } = useActions();

  useEffect(() => {
    if (articles.limit !== perPage) {
      setArticlePage(PageFromUrl(), perPage);
    }
    if (window.location.pathname !== homepage) {
      setArticleSearch("");
    }
    // eslint-disable-next-line
  }, []);

  const handleChangePage = (nextPage: number) => {
    setArticlePage(nextPage, perPage);
    props.history.push({ search: '?p=' + nextPage });
  };

  // show all articles
  const list = [];
  const offset = articles.page * articles.limit - articles.limit + 1;
  for (let i = offset; i < articles.searchResult.length; i++) {
    if (i === offset + articles.limit) {
      break;
    }
    let _article = articles.articles[articles.searchResult[i]];
    list.push(
      <Article
        key={_article.id}
        article={_article}
        isBookmark={bookmarks.bookmarks[_article.id] || false}
      />
    );
  }

  return (
    <div className="w-100">
      <div className="page-header">
        <div>
          Search for: <u>{articles.search}</u>
        </div>
      </div>
      <div>
        {list.length > 0 ? null : <NoDataFound />}
        <div className="article-list">{list}</div>
        <div className="article-list-footer">
          <Pagination
            page={articles.page}
            perPage={articles.limit}
            totalCount={articles.searchResult.length - 1}
            onNext={handleChangePage}
            onPrev={handleChangePage}
          />
        </div>
      </div>
    </div>
  );
}
