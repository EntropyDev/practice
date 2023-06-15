import React from "react";
import ReactDOM from "react-dom/client";
import "./App.scss";
import {
    createBrowserRouter,
    RouterProvider
} from "react-router-dom"
import App from "./App";
import ErrorPage from "./ErrorPage"
import CryptoDetails from "./cryptoDetails";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);