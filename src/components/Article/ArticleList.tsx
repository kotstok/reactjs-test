import React, { useEffect } from 'react';
import { Article } from './Article';
import { useTypeSelector } from 'hooks/useTypeSelector';
import { useActions } from 'hooks/useActions';
import { PageFromUrl, Pagination } from 'components/Pagination';
import { RouteComponentProps } from 'react-router-dom';
import { NoDataFound } from '../NoDataFound';

interface ArticleListType extends RouteComponentProps {
  limit?: number;
  onlyBookmarks?: boolean;
  search?: string;
}

export function ArticleList(props: ArticleListType): JSX.Element {
  const { articles, bookmarks } = useTypeSelector((state) => state);
  const { setArticlePage } = useActions();
  let totalCount;

  useEffect(() => {
    setArticlePage(PageFromUrl(), props.limit || undefined);
    // eslint-disable-next-line
  }, [props.limit]);

  const handleChangePage = (nextPage: number) => {
    setArticlePage(nextPage);
    props.history.push({ search: '?p=' + nextPage });
  };

  const offset = articles.page * articles.limit - articles.limit + 1;

  const bookmarkElements = (): [number, JSX.Element[]] => {
    const _list = [];
    const articlesInBookmarks = articles.articles.filter((article) => bookmarks.bookmarks[article.id] || false);
    totalCount = articlesInBookmarks.length;

    // ignore firs new item
    for (let i = offset - 1; i < articlesInBookmarks.length; i++) {
      if (i === offset + articles.limit) {
        break;
      }

      // only bookmarks
      _list.push(
        <Article
          key={articlesInBookmarks[i].id}
          article={articlesInBookmarks[i]}
          isBookmark={true}
        />
      );
    }

    return [totalCount, _list];
  };

  const newsArticles = (): [number, JSX.Element[]] => {
    // show all articles
    const e = [];
    for (let i = offset; i < articles.articles.length; i++) {
      if (i === offset + articles.limit) {
        break;
      }
      e.push(
        <Article
          key={articles.articles[i].id}
          article={articles.articles[i]}
          isBookmark={bookmarks.bookmarks[articles.articles[i].id] || false}
        />
      );
    }

    return [articles.articles.length, e];
  };

  const [total, elements] = props.onlyBookmarks ? bookmarkElements() : newsArticles();

  if (0 === total) {
    return <NoDataFound />;
  }

  return (
    <React.Fragment>
      <div className='article-list'>{elements}</div>
      <div className='article-list-footer'>
        <Pagination
          page={articles.page}
          perPage={articles.limit}
          totalCount={total - 1}
          onNext={handleChangePage}
          onPrev={handleChangePage}
        />
      </div>
    </React.Fragment>
  );
}
