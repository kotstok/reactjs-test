import React from 'react';
import { Article } from 'types/article';
import { summary } from '../../helpers/TextHelper';
import { unixToDate } from '../../helpers/DateHelper';
import BookmarkButton from '../BookmarkButton';

interface ElementProps {
  showLabel: boolean;
  article: Article;
  isBookmark: boolean;
}

export function MainArticle({
  article,
  isBookmark
}: ElementProps): JSX.Element {
  return (
    <article className="article-main">
      <img src={article.image} alt={article.url} />
      <header className="article-header">
        {summary(article.headline, 50)}
      </header>
      <p className="article-summary">{summary(article.summary, 50)}</p>
      <div className="related">{article.related}</div>
      <span className="article-label">latest news</span>
      <time className="article-time">{unixToDate(article.datetime)}</time>
      <BookmarkButton active={isBookmark} article_id={article.id} />
    </article>
  );
}
