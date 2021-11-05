import React from 'react';
import { SearchBox } from 'components/SearchBox';
import { Link } from 'react-router-dom';
import { routes } from 'routes';
import {useActions} from "hooks/useActions";
import {setArticleSearch} from "store/action-creator/articles";

export default function TopNav(): JSX.Element {
  const activeRoute = (routeName: string): string => {
    return window.location.pathname === routeName ? ' active' : '';
  };

  const {setArticleSearch} = useActions();

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
        <SearchBox />
      </div>
    </nav>
  );
}
