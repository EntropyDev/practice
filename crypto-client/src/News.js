import React from 'react'

const News = () => {
    const news = [
        " Buy 55 - BTC - USD",
        " Sell 37 - BTC - USD",
    ]
    return (
        <>
        {news.length > 0 && news.map((txt) => {
            <span>{txt}</span>
        })}
        </>
    )
}

export default News