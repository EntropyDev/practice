import React, { useEffect, useState } from 'react'


const Wall = () => {
    const url_latest = 'https://api.coincap.io/v2/assets'

    const [latest, setLatest] = useState([])
    const [loading, setLoading] = useState(true);
    // const [error, setError] = useState(null);
    
    const fetchLatestData = async () => {
        console.log("Clicked")
        console.log(latest)
        
        await fetch(url_latest)
        .then(response => {
            return response.json()
        })
        .then(data => {
            const latest =data.data
            setLatest(latest)
            setLoading(false)
        })
    }
  
    useEffect(() => {
        fetchLatestData()
      }, [])
    
    return (
        <>
        <h1 onClick={fetchLatestData}>Wall</h1>
        <div>
        {loading && <div>A moment please...</div>}
        <ul>
        {latest.length > 0 && (
          latest.map(coin => (
              <li key={coin.id}><p>{coin.name}</p>
            <p>{coin.priceUsd}</p>
            </li>
          ))
          )}
          </ul>
      </div>
        </>
    )
}

export default Wall