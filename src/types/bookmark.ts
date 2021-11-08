export interface BookmarksState {
  bookmarks: {[key: number]: boolean};
}

export enum BookmarksActionsType {
  SET_BOOKMARK = 'SET_BOOKMARK',
  REMOVE_BOOKMARK = 'REMOVE_BOOKMARK'
}

interface SetBookmarksAction {
  type: BookmarksActionsType.SET_BOOKMARK;
  payload: number;
}

interface RemoveBookmarksAction {
  type: BookmarksActionsType.REMOVE_BOOKMARK;
  payload: number;
}

export type BookmarkAction = RemoveBookmarksAction | SetBookmarksAction;
