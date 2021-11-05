import { ArticleAction, ArticleActionsType } from 'types/article';
import { Dispatch } from 'redux';
import axios from 'axios';

export const fetchArticles = () => {
  return async (dispatch: Dispatch<ArticleAction>) => {
    try {
      dispatch({
        type: ArticleActionsType.FETCH_ARTICLES
      });

      // @ts-ignore
      const response = await axios.get(process.env.REACT_APP_ENDPOINT);

      dispatch({
        type: ArticleActionsType.FETCH_ARTICLES_OK,
        payload: response.data
      });
    } catch (e) {
      dispatch({
        type: ArticleActionsType.FETCH_ARTICLES_ERROR,
        payload: (e as Error).message
      });
    }
  };
};

/**
 * @param page {number} > 0
 * @param limit {number} > 0
 */
export const setArticlePage = (page: number = 1, limit: number = 6) => {
  return {
    type: ArticleActionsType.SET_ARTICLE_PAGE,
    payload: { page: page, limit: limit }
  };
};

export const setArticleSearch = (search: string) => {
  return {
    type: ArticleActionsType.SEARCH,
    payload: search
  };
};