import React from "react";
import ReactDOM from "react-dom/client";
import "./App.scss";
import App from "./App";
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import CryptoDaily from "./CryptoDaily";
import CryptoDetails from "./CryptoDetails";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="crypto" element={<CryptoDaily />} />
        <Route path="crypto/:id" element={<CryptoDetails />} />
      </Route>
    </Routes>
    </BrowserRouter>
  </React.StrictMode>
);