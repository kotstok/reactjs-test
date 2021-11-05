import React from 'react';
import { Article as ArticleInterface } from 'types/article';
import { summary } from 'helpers/TextHelper';
import { unixToDate } from 'helpers/DateHelper';
import BookmarkButton from 'components/BookmarkButton';

interface ElementProps {
  article: ArticleInterface;
  isBookmark: boolean;
}

export function Article({ article, isBookmark }: ElementProps): JSX.Element {
  return (
    <article className="article">
      <img src={article.image} alt={article.headline} />
      <header className="article-header">
        {summary(article.headline, 30)}
      </header>
      <p className="article-summary">{summary(article.summary, 20)}</p>
      <div className="related">{article.related}</div>
      <time className="article-time">{unixToDate(article.datetime)}</time>
      <BookmarkButton active={isBookmark} article_id={article.id} />
    </article>
  );
}
