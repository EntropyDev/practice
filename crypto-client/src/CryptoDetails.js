import React from "react";
import {useParams} from 'react-router-dom'

const CryptoDetails = () => {
    const {id} = useParams()
    return (
        <h2>{id}</h2>
    )
}

export default CryptoDetails