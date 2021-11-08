import React from 'react';
import { SearchBox } from 'components/SearchBox';
import { Link } from 'react-router-dom';
import { routes } from 'routes';
import {useActions} from "hooks/useActions";

export default function TopNav(): JSX.Element {
  const { setArticleSearch } = useActions();

  const activeRoute = (routeName: string): string => {
    return window.location.pathname === routeName ? ' active' : '';
  };

  return (
    <nav className="app-nav">
      <ul className="nav-menu">
        {routes.map(
          (route, index): JSX.Element => (
            <li
              key={`route-link-${index}`}
              className={'nav-item' + activeRoute(route.path)}
            >
              <Link to={route.path}>{route.name}</Link>
            </li>
          )
        )}
      </ul>
      <div className="nav-right-items">
        {window.location.pathname !== "/news" ? null : <SearchBox onChange={setArticleSearch} />}
      </div>
    </nav>
  );
}
