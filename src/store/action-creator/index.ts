import * as ArticleActionCreators from './articles';
import * as BookmarksActionCreators from './bookmarks';

const modules = {
  ...ArticleActionCreators,
  ...BookmarksActionCreators
};

export default modules;
