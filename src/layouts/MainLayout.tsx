import React from 'react';
import TopNav from 'components/Nav/TopNav';
import { Redirect, Route, RouteComponentProps, Switch } from 'react-router-dom';
import { fallback, routes } from 'routes';
import { useActions } from 'hooks/useActions';

export default function MainLayout(props: RouteComponentProps): JSX.Element {
  const { fetchArticles } = useActions();

  // bootstrap
  React.useEffect(() => {
    fetchArticles();
    // eslint-disable-next-line
  }, []);

  return (
    <React.Fragment>
      <TopNav />
      <main className="main">
        <Switch>
          {routes.map((prop, key) => (
            <Route
              exact
              path={prop.path}
              component={prop.component}
              key={`route-${key}`}
            />
          ))}
          <Redirect from="*" to={fallback} />
        </Switch>
      </main>
    </React.Fragment>
  );
}
