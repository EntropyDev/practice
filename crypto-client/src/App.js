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

import btclogo from "../public/assets/bitcoin-btc-logo.svg"

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
              <ul className="top-five-list">
                <li>
                  <Link to="/crypto/bitcoin">
                    <span className="item-logo"><img src={btclogo}></img></span>
                   <span className="item-name">Bitcoin</span>
                   <span className="item-price">5 USD</span>
                   <span className="item-percent"></span>
                   </Link>
                </li>
                <li>
                  <Link to="/crypto/eth">

                    <span className="item-logo"></span>
                   <span className="item-name">Ethereum</span>
                   <span className="item-price">5 USD</span>
                   <span className="item-percent"></span>
                  </Link>
                </li>
                <li>
                  <Link to="/crypto/xrp">

                    <span className="item-logo"></span>
                   <span className="item-name">XRP</span>
                   <span className="item-price">5 USD</span>
                   <span className="item-percent"></span>
                  </Link>
                </li>
                <li>
                  <Link to="/crypto/tron">

                    <span className="item-logo"></span>
                   <span className="item-name">TRON</span>
                   <span className="item-price">5 USD</span>
                   <span className="item-percent"></span>
                  </Link>
                </li>
                <li>
                  <Link to="/crypto/doge">

                    <span className="item-logo"></span>
                   <span className="item-name">Dogecoin</span>
                   <span className="item-price">5 USD</span>
                   <span className="item-percent"></span>
                  </Link>
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