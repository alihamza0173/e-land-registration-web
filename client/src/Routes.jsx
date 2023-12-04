import React from "react";
import ErrorPage from "./components/error-page";
import { PromotionPage, LoginPage, Root, UserDashboard, Welcome, TransferLand, AdminDashboard } from "./components";

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
        {
          path: "/dashboard",
          element: <UserDashboard />,
          errorElement: <ErrorPage />
        },
        {
          path: "/adminDashboard",
          element: <AdminDashboard />,
          errorElement: <ErrorPage />
        },
        {
          path: "/TransferLand",
          element: <TransferLand />,
          errorElement: <ErrorPage />
        }
      ]
    }
  ];
};

export default Routes;
