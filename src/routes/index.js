import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";
import PrivateRoute from "./PrivateRoute";
import PublicPage from "views/PublicPage";
import PrivatePage from "views/PrivatePage";

export const PublicPaths = {
  PUBLIC: "/public"
};

export const PrivatePaths = {  
  PRIVATE: "/private"
};

const publicRoutes = [ 
  /* Add paths for unauthorized users */
  { path: PublicPaths.PUBLIC, exact: true, component: PublicPage }
];

const privateRoutes = [ 
  /* Add paths for authorized users */
  { path: PrivatePaths.PRIVATE, exact: true, component: PrivatePage }
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