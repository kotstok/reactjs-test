import { combineReducers } from 'redux';
import { articleReducer } from './articleReducer';
import { bookmarksReducer } from './bookmarksReducer';

export const rootReducer = combineReducers({
  articles: articleReducer,
  bookmarks: bookmarksReducer
});

export type RootState = ReturnType<typeof rootReducer>;
