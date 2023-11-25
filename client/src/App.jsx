import { createBrowserRouter, RouterProvider } from "react-router-dom";

import ErrorPage from "./error-page";
import { PromotionPage, LoginPage, Root } from "./components";

const App = () => {
  const router = createBrowserRouter([
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
  ]);

  return <RouterProvider router={router} />;
};

export default App;
