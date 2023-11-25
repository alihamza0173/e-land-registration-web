import React from "react";
import ReactDOM from "react-dom";
import 'bootstrap/dist/css/bootstrap.css';

import App from "./App";
import { TransactionsProvider } from "./context/TransactionContext";
import "./index.css";
import {initializeDb} from "./config/firebase";



// db initialization
initializeDb();

ReactDOM.render(
  <TransactionsProvider>
    <App />
  </TransactionsProvider>,
  document.getElementById("root"),
);
