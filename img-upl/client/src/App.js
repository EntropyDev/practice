import React from "react"

import { BrowserRouter, Routes, Route } from "react-router-dom";
import CryptoDetails from "./cryptoDetails";
import Layout from "./Layout";
import Home from "./Home"

const App = () => {
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="crypto" element={<CryptoDetails />} />
          {/* <Route path="contact" element={<Contact />} /> */}
          {/* <Route path="*" element={<NoPage />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App