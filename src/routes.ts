import Bookmarks from './views/Bookmarks';
import News from './views/News';

export const routes = [
  {
    path: '/news',
    name: 'News',
    component: News
  },
  {
    path: '/bookmarks',
    name: 'Bookmarks',
    component: Bookmarks
  }
];

export const fallback = '/news';
