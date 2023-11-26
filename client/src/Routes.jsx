import React from "react";
import ErrorPage from "./error-page";
import { PromotionPage, LoginPage, Root, UserDashboard } from "./components";

const Routes = () => {
  return [
    {
      path: "/",
      element: <Root />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: "/",
          element: <PromotionPage />,
        },
        {
          path: "login",
          element: <LoginPage />,
        },
      ],
    },
    {
      path: "/dashboard",
      element: <UserDashboard />,
      errorElement: <ErrorPage />
    }
  ];
};

export default Routes;
