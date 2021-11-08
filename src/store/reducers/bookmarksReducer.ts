import {
  BookmarksState,
  BookmarkAction,
  BookmarksActionsType
} from 'types/bookmark';

const initialState: BookmarksState = {
  bookmarks: {}
};

export const bookmarksReducer = (
  state = initialState,
  action: BookmarkAction
): BookmarksState => {
  switch (action.type) {
    case BookmarksActionsType.SET_BOOKMARK:
      return {
        bookmarks: {
          ...state.bookmarks,
          [action.payload]: true
        }
      } as BookmarksState;
    case BookmarksActionsType.REMOVE_BOOKMARK:
      return {
        bookmarks: {
          ...state.bookmarks,
          [action.payload]: false
        }
      } as BookmarksState;
    default:
      return state;
  }
};
