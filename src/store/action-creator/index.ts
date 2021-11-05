import * as ArticleActionCreators from './articles';
import * as BookmarksActionCreators from './bookmarks';

export default {
  ...ArticleActionCreators,
  ...BookmarksActionCreators
};
