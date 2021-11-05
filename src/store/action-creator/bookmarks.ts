import { BookmarksActionsType } from 'types/bookmark';

export const setBookmark = (article_id: number) => {
  return {
    type: BookmarksActionsType.SET_BOOKMARK,
    payload: article_id
  };
};

export const removeBookmark = (article_id: number) => {
  return {
    type: BookmarksActionsType.REMOVE_BOOKMARK,
    payload: article_id
  };
};
