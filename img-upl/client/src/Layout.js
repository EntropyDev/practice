import React from "react";
import { Outlet, Link } from "react-router-dom";
// import request from 'request'

const Layout = () => {

// replace the "demo" apikey below with your own key from https://www.alphavantage.co/support/#api-key
var url = 'https://www.alphavantage.co/query?function=CURRENCY_EXCHANGE_RATE&from_currency=BTC&to_currency=CNY&apikey=demo';
const getResults = async (event) => {
  event.preventDefault()
  console.log("getting fetch")
  let data = await fetch(url)
  console.log(await data.json())

  // request.get({
  //   url: url,
  //   json: true,
  //   headers: {'User-Agent': 'request'}
  // }, (err, res, data) => {
  //   if (err) {
  //     console.log('Error:', err);
  //   } else if (res.statusCode !== 200) {
  //     console.log('Status:', res.statusCode);
  //   } else {
  //     // data is successfully parsed as a JSON object:
  //     console.log(data);
  //   }
  // });
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