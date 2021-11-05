import {
  BookmarksState,
  BookmarkAction,
  BookmarksActionsType
} from 'types/bookmark';

const initialState: BookmarksState = {
  bookmarks: []
};

export const bookmarksReducer = (
  state = initialState,
  action: BookmarkAction
): BookmarksState => {
  switch (action.type) {
    case BookmarksActionsType.SET_BOOKMARK:
      return {
        bookmarks: [...state.bookmarks, action.payload]
      } as BookmarksState;
    case BookmarksActionsType.REMOVE_BOOKMARK:
      return {
        bookmarks: state.bookmarks.filter((id) => id !== action.payload)
      } as BookmarksState;
    default:
      return state;
  }
};
