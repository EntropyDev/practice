import React from "react";

const Home = () => {
    const getResults = () => {
        const url = "https://api.coincap.io/v2/assets"
        const url2 = "https://api.coinstats.app/public/v1/markets?coinId=bitcoin"
        fetch(url).then(resp => {
            return resp.json()
        }).then(data => {
            console.log(data)
        })
    }
    return(
        <>
        <p onClick={getResults}>Home</p>
        </>
    )
}

export default Home