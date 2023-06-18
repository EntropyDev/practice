import React, { useState, useEffect } from "react";
import {useParams} from 'react-router-dom'

const CryptoDetails = () => {
    const {id} = useParams()
    const [data,setData] = useState([])
    const [loading,setLoading] = useState(true)

    const url = `https://api.coinstats.app/public/v1/markets?coinId=${id}`
    
    const getResults = async () => {
        console.log(url)
        await fetch(url)
        .then(response => {
            return response.json()
        })
        .then((data) => {
            console.log(data)
            // const newData = data
            setData(data)
        })
        .finally(() => {
            setLoading(false)
        })
        console.log("Running")
        console.log(data)
    }
    useEffect(() => {
        getResults()
    }, [])


    return (
        <>
        <h2>{id}</h2>
        <div>
        {loading && <div>A moment please...</div>}
        <ul>
        {data.length > 0 && (
          data.map((coin,ind) => (
              <li key={ind}><p>{coin.price}</p>
            <p>{coin.pair}</p>
            <p>{coin.exchange}</p>
            </li>
          ))
          )}
          </ul>
      </div>
        </>

    )
}

export default CryptoDetails