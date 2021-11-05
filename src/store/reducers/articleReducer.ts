import { ArticleAction, ArticleActionsType, ArticleState } from 'types/article';

const initialState: ArticleState = {
  articles: [],
  isLoading: false,
  error: '',
  page: 1,
  limit: 6,
  searchResult: [],
  search: ''
};

export const articleReducer = (
  state = initialState,
  action: ArticleAction
): ArticleState => {
  switch (action.type) {
    case ArticleActionsType.FETCH_ARTICLES:
      return {
        ...state,
        isLoading: true,
        error: '',
        articles: []
      } as ArticleState;
    case ArticleActionsType.FETCH_ARTICLES_OK:
      return {
        ...state,
        isLoading: false,
        error: '',
        articles: action.payload
      } as ArticleState;
    case ArticleActionsType.FETCH_ARTICLES_ERROR:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
        articles: []
      } as ArticleState;
    case ArticleActionsType.SET_ARTICLE_PAGE:
      return {
        ...state,
        page: action.payload.page,
        limit: action.payload.limit
      } as ArticleState;
    case ArticleActionsType.SEARCH:
      const result: number[] = [];
      if (action.payload.trim().length > 0) {
        state.articles.forEach((article, index) => {
          if (
            article.headline.search(action.payload) !== -1 ||
            article.summary.search(action.payload) !== -1
          ) {
            result.push(index);
          }
        });
      }

      return {
        ...state,
        searchResult: result,
        search: action.payload
      };
    default:
      return state;
  }
};
