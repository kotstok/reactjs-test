export interface Article {
  id: number;
  category: string;
  datetime: number;
  headline: string;
  image: string;
  related: string;
  source: string;
  summary: string;
  url: string;
}

export interface PageState {
  page: number;
  limit: number;
}

export interface ArticleState extends PageState {
  articles: Article[];
  isLoading: boolean;
  error: string;
  // index of items
  searchResult: number[];
  search: string;
}

export enum ArticleActionsType {
  SEARCH = 'SEARCH',
  SET_ARTICLE_PAGE = 'SET_PAGE',
  FETCH_ARTICLES = 'FETCH_ARTICLES',
  FETCH_ARTICLES_OK = 'FETCH_ARTICLES_OK',
  FETCH_ARTICLES_ERROR = 'FETCH_ARTICLES_ERROR'
}

interface FetchArticlesAction {
  type: ArticleActionsType.FETCH_ARTICLES;
}

interface FetchArticlesOkAction {
  type: ArticleActionsType.FETCH_ARTICLES_OK;
  payload: Article[];
}

interface FetchArticlesErrorAction {
  type: ArticleActionsType.FETCH_ARTICLES_ERROR;
  payload: string;
}

interface SetArticlePage {
  type: ArticleActionsType.SET_ARTICLE_PAGE;
  payload: PageState;
}

interface ArticleSearch {
  type: ArticleActionsType.SEARCH;
  payload: string;
}

export type ArticleAction =
  | SetArticlePage
  | ArticleSearch
  | FetchArticlesAction
  | FetchArticlesOkAction
  | FetchArticlesErrorAction;
