import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import PrivateRoute from "./PrivateRoute";
import PublicPage from "pages/PublicPage";
import PrivatePage from "pages/PrivatePage";
import IntegrationExample from "pages/IntegrationExample"

export const PublicPaths = {
  PUBLIC: "/public",
};

export const PrivatePaths = {
  PRIVATE: "/private",
  INTEGRATION_EXAMPLE: "/integration-example"
};

const publicRoutes = [
  /* Add paths for unauthorized users */
  { path: PublicPaths.PUBLIC, exact: true, component: PublicPage },
];

const privateRoutes = [
  /* Add paths for authorized users */
  { path: PrivatePaths.PRIVATE, exact: true, component: PrivatePage },
  { path: PrivatePaths.INTEGRATION_EXAMPLE, exact: true, component: IntegrationExample },
];

const Routes = () => (
  <Router>
    <Switch>
      {publicRoutes.map((route, index) => (
        <Route
          key={index}
          path={route.path}
          exact={route.exact}
          component={route.component}
        />
      ))}
      {privateRoutes.map((route, index) => (
        <PrivateRoute
          key={index}
          path={route.path}
          exact={route.exact}
          component={route.component}
        />
      ))}
      <Redirect to={PublicPaths.PUBLIC} />
    </Switch>
  </Router>
);

export default Routes;
