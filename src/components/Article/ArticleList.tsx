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

  useEffect(() => {
    setArticlePage(PageFromUrl(), props.limit || undefined);
  }, []);

  const handleChangePage = (nextPage: number) => {
    setArticlePage(nextPage);
    props.history.push({ search: '?p=' + nextPage });
  };

  const list = [];
  // + 1 offset main article
  const offset = articles.page * articles.limit - articles.limit + 1;

  if (props.onlyBookmarks) {
    const articlesBm = articles.articles.filter((article) =>
      bookmarks.bookmarks.includes(article.id)
    );
    // ignore firs new item
    for (let i = offset - 1; i < articlesBm.length; i++) {
      if (i === offset + articles.limit) {
        break;
      }

      // only bookmarks
      list.push(
        <Article
          key={articlesBm[i].id}
          article={articlesBm[i]}
          isBookmark={true}
        />
      );
    }
  } else {
    // show all articles
    for (let i = offset; i < articles.articles.length; i++) {
      if (i === offset + articles.limit) {
        break;
      }
      list.push(
        <Article
          key={articles.articles[i].id}
          article={articles.articles[i]}
          isBookmark={bookmarks.bookmarks.includes(articles.articles[i].id)}
        />
      );
    }
  }

  if (0 === list.length) {
    return <NoDataFound />;
  }

  return (
    <React.Fragment>
      <div className="article-list">{list}</div>
      <div className="article-list-footer">
        <Pagination
          page={articles.page}
          perPage={articles.limit}
          totalCount={
            (props.onlyBookmarks ? bookmarks.bookmarks : articles.articles)
              .length - 1
          }
          onNext={handleChangePage}
          onPrev={handleChangePage}
        />
      </div>
    </React.Fragment>
  );
}
