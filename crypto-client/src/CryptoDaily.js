import React , {useState, useEffect} from "react";
import LatestTrades from "./LatestTrades";
import { Card,Row, Col, Divider, Space } from "antd";
const { Meta } = Card;
import Pair from "./Pair";
import TopCardValues from "./TopCardValues";

const style = {
    padding: '8px 0px',
    display: 'flex',
    alignContent: 'center',
    justifyContent: 'center',
  };
  
  const gridStyle = {
    width: '50%',
    textAlign: 'center',
    padding: '12px'
  };


  function buildPair({beta_value, circulating_supply, max_supply, last_updated, id, quotes  }){
    return [
        {
            "label": "Price",
            "value": quotes.USD.price
        },
        {
            "label": "β val",
            "value": beta_value
        },
        {
            "label": "Circulating Supply",
            "value": circulating_supply
        },
        {
            "label": "Max Supply",
            "value": max_supply
        },
        
        {
            "label": "15m ago",
            "value": quotes.USD.percent_change_15m
        },
        {
            "label": "1h ago",
            "value": quotes.USD.percent_change_1h
        },
        {
            "label": "6h ago",
            "value": quotes.USD.percent_change_6h
        },
        {
            "label": "24h ago",
            "value": quotes.USD.percent_change_24h
        }
    ]
  }

  
const dataUrl = 'https://api.coinpaprika.com/v1/tickers?limit=20'

const CryptoDaily = () => {

    const [initLoading, setInitLoading] = useState(true);
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState([]);
    const [btc_pairs, setBtcPairs] = useState([]);
    const [eth_pairs, setEthPairs] = useState([]);
    const [doge_pairs, setDogePairs] = useState([]);

    const fetchData = async (url) => {
        await fetch(url)
        .then(res => res.json())
        .then( res => {
            setData({res})
            let btc_pairs = buildPair(res.filter((obj) => obj.id === 'btc-bitcoin')[0])
            let eth_pairs = buildPair(res.filter((obj) => obj.id === 'eth-ethereum')[0])
            let doge_pairs = buildPair(res.filter((obj) => obj.id === 'doge-dogecoin')[0])
            setBtcPairs(btc_pairs)
            setEthPairs(eth_pairs)
            setDogePairs(doge_pairs)
            
            setInitLoading(false);
        })
    }

    useEffect( () => {
        ( async () => {
            await fetchData(dataUrl)
        })()
    } ,[])

    return (
        <>
        <Row
      gutter={{
        xs: 8,
        sm: 16,
        md: 24,
        lg: 32,
      }}
    >
      <Col className="gutter-row" span={16}>
        <Divider orientation="left" style={{
            fontSize: '12px',
            textTransform: 'uppercase'
        }}>ticker</Divider>
            <Space align="baseline">
                <Card title="Bitcoin" loading={initLoading}>
                 <TopCardValues pairs={btc_pairs} /> 
                </Card>
                <Card title="Ethereum" loading={initLoading}>
                 <TopCardValues pairs={eth_pairs} /> 
                </Card>
                <Card title="Dogecoin" loading={initLoading}>
                 <TopCardValues pairs={doge_pairs} /> 
                </Card>
        </Space>   
      </Col>
      <Col className="gutter-row" span={8}>
        <div style={style}>col-8</div>
      </Col>
    </Row>
        <Divider orientation="left" style={{
            fontSize: '12px',
            textTransform: 'uppercase'
        }}>Latest Trades</Divider>
        <LatestTrades />
        </>
    )
}

export default CryptoDaily