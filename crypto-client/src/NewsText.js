import React, {useState, useEffect, useContext} from "react";
import { PriceContext } from "./App";

const news = [
    " Buy 55 - BTC - USD",
    " Sell 37 - BTC - USD"
]
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

const NewsText = () => {
    const prices = useContext(PriceContext)
    const parseNews = (prices) => {
        let i = 0
        const news = []
        while(i<9){
            let obj = prices[getRandomInt(50)]
            news.push(`${obj.name} [${obj.symbol}] ~ ${parseFloat(obj.quotes.USD.price).toFixed(2)} USD`)
            i+=1
        }
        return news
    }

    return (
        <div>
        {prices.length > 0 &&
        parseNews(prices).map((txt,ind) => 
            <span key={ind} style={{
                color: '#fff',
                fontWeight: '400',
                padding: '0 24px',
                fontSize: '15px',
            }}>{txt}</span>)
        }
        </div>
    )
}

export default NewsText