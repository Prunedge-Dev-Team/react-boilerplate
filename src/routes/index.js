import React, { lazy, Suspense } from "react";
import {
  BrowserRouter,
  Routes as BrowserRoutes,
  Route,
} from "react-router-dom";
import RequireAuth from "./RequireAuth";

export const PublicPaths = {
  PUBLIC: "/public",
};

export const PrivatePaths = {
  PRIVATE: "/private",
  INTEGRATION_EXAMPLE: "/integration-example"
};

const publicRoutes = [
  /* Add paths for unauthorized users */
  { path: PublicPaths.PUBLIC, exact: true, element: lazy(() => import('pages/PublicPage'))},
];

const privateRoutes = [
  /* Add paths for authorized users */
  { path: PrivatePaths.PRIVATE, element: lazy(() => import('pages/PrivatePage')) },
  { path: PrivatePaths.INTEGRATION_EXAMPLE,  element: lazy(() => import('pages/IntegrationExample')) },
];

const Routes = () => (
  <Suspense fallback={<span>Loading...</span>}>
  <BrowserRouter>
    <BrowserRoutes>
      {publicRoutes.map((route, index) => (
        <Route
          key={index}
          path={route.path}
          element={<route.element/>}
        />
      ))}
      {privateRoutes.map((route, index) => (
        <Route
          key={index}
          path={route.path}
          element={
            <RequireAuth>
            <route.element/>
            </RequireAuth>
          }
        />
      ))}
       <Route path="*" element={<div>Not Found</div>} />
    </BrowserRoutes>
  </BrowserRouter>
  </Suspense>
);

export default Routes;
