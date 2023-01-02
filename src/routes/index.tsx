import React from "react";
import { RouteObject } from "react-router-dom";

const MainLayout = React.lazy(() => import("../layouts/Main"));
const Main = React.lazy(() => import("../pages/Main"));
const ConversionHistory = React.lazy(() => import("pages/ConversionHistory"));

const routes: RouteObject[] = [
  {
    element: <MainLayout />,
    children: [
      { path: "/", element: <Main /> },
      { path: "/conversion-history", element: <ConversionHistory /> },
    ],
  },
];

export default routes;
