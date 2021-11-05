import React from 'react';
import { ReactComponent as BookmarkIco } from 'assets/ico/bookmark.svg';
import { ReactComponent as BookmarkIcoFill } from 'assets/ico/bookmark-fill.svg';
import { useActions } from 'hooks/useActions';

type BookmarkButtonType = {
  active: boolean;
  article_id: number;
};

export default function BookmarkButton(props: BookmarkButtonType) {
  const { setBookmark, removeBookmark } = useActions();
  const [active, setActive] = React.useState(props.active);

  return (
    <div
      onClick={() => {
        setActive((prevState) => {
          const state = !prevState;
          if (state) {
            setBookmark(props.article_id);
          } else {
            removeBookmark(props.article_id);
          }
          return state;
        });
      }}
      className="article-bookmark"
      title="Bookmark"
    >
      {active ? <BookmarkIco /> : <BookmarkIcoFill />}
    </div>
  );
}
