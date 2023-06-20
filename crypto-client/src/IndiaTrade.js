import React, {useState, useEffect} from "react";

const IndiaTradeCard = () => {
    const dataUrl = 'https://api.wazirx.com/sapi/v1/tickers/24hr'

    const [loading, setLoading] = useState(true)
    const [data, setData] = useState([])

    useEffect(() => {
        fetch(dataUrl)
        .then(res => res.json())
        .then( data => {
            setData(data)
            console.log("india")
            console.log(data)
            setLoading(false)
        })
    },[])

    return (
        <>
            {loading ? 'Please wait ...' : 
            <div>
                {data.length > 0 && data.map((row) => {
                    <p>{row.baseAsset} : {row.quoteAsset} : {row.openPrice} : {row.bidPrice} : {row.askPrice} </p>
                })}
            </div>
            }
        </>
    )
}

export default IndiaTradeCard