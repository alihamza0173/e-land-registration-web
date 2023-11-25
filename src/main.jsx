import React from "react";
import ReactDOM from "react-dom";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';

import App from "./App";
import { TransactionsProvider } from "./context/TransactionContext";
import "./index.css";
import {initializeDb} from "./config/firebase";
import ErrorPage from "./error-page";
import {LoginScreen} from "./components/LoginSignUp/loginPage";


// db initialization
initializeDb();
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/login",
    element: <LoginScreen />
  }
]);

ReactDOM.render(
  <TransactionsProvider>
    <RouterProvider router={router} />
  </TransactionsProvider>,
  document.getElementById("root"),
);
