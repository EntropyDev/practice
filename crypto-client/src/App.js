import React from "react";
import {
    Routes,
    Route,
    Link,
    Outlet
} from 'react-router-dom'
import Wall from "./Wall"
import Home from "./Home"
import CryptoDetails from "./CryptoDetails";
import CryptoDaily from "./CryptoDaily";

const App = () => {
    const getResults = (event) => {
        event.preventDefault()
        console.log("get rfesults")
    }
    return(
        <>
         <div id="sidebar">
            <h1>CryptoView</h1>
            <div>
              <form id="search-form" role="search">
                <input id="q"
                  aria-label="Search crypto curr"
                  placeholder="Search"
                  type="search"
                  name="q"
                  autoComplete="off"/>
                  <div
                  id="search-spinner"
                  aria-hidden
                  hidden={true}
                />
                <div
                  className="sr-only"
                  aria-live="polite"
                ></div>
              </form>
              <form>
                <button onClick={getResults}>Go!</button>
              </form>
            </div>
            <nav>
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/crypto">Daily</Link>
                </li>
                <li>
                  <Link to="/crypto/2">Crypto</Link>
                </li>
              </ul>
            </nav>
          </div>
            <Routes>
                <Route path="/" element={<Wall />} />
                <Route path="/crypto" element={<CryptoDaily />} />
                <Route path="/crypto/:id" element={<CryptoDetails />} />
            </Routes>
        </>
    )
}

export default App