import React from "react";
import { Outlet, Link } from "react-router-dom";


const Layout = () => {
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
              <form method="post">
                <button type="submit">Go!</button>
              </form>
            </div>
            <nav>
              <ul>
                <li>
                  <Link to="/">Home</Link>
                  {/* <a href={`/contacts/1`}>Your Name</a> */}
                </li>
                <li>
                  <Link to="/crypto">Crypto</Link>
                  {/* <a href={`/contacts/2`}>Your Friend</a> */}
                </li>
              </ul>
            </nav>
          </div>
          <div id="detail">        
            <Outlet />
          </div>
        </>
      )
}

export default Layout