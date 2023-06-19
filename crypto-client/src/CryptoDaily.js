import React , {useState, useEffect} from "react";
import LatestTrades from "./LatestTrades";
import { Card,Row, Col, Divider, Space } from "antd";
const { Meta } = Card;

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

  
const dataUrl = 'https://api.coinpaprika.com/v1/tickers'

const CryptoDaily = () => {

    const [initLoading, setInitLoading] = useState(true);
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch(dataUrl)
        .then(res => res.json())
        .then( res => {
            console.log("Top card")
            console.log(res)
            setInitLoading(false);
        setData(res);
        })
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
        {initLoading ? `Please wait ..` : null}
        {data.length > 0 && 
        <Space align="baseline" className="top-card">
        <Card title="Bitcoin">
            <Card.Grid style={gridStyle} hoverable={false}>
                 <Space direction='vertical'>
                        <p className='pair-label'> Count </p>
                        <p className='pair-value'>{data[0].id}</p>
                    </Space>
            </Card.Grid>
            <Card.Grid style={gridStyle} hoverable={false}>
                 <Space direction='vertical'>
                        <p className='pair-label'> Count </p>
                        <p className='pair-value'>{data[0].id}</p>
                    </Space>
            </Card.Grid>
            <Card.Grid style={gridStyle} hoverable={false}>
                 <Space direction='vertical'>
                        <p className='pair-label'> Count </p>
                        <p className='pair-value'>{data[0].id}</p>
                    </Space>
            </Card.Grid>
            <Card.Grid style={gridStyle} hoverable={false}>
                 <Space direction='vertical'>
                        <p className='pair-label'> Count </p>
                        <p className='pair-value'>{data[0].id}</p>
                    </Space>
            </Card.Grid>
            <Card.Grid style={gridStyle} hoverable={false}>
                 <Space direction='vertical'>
                        <p className='pair-label'> Count </p>
                        <p className='pair-value'>{data[0].id}</p>
                    </Space>
            </Card.Grid>
            <Card.Grid style={gridStyle} hoverable={false}>
                 <Space direction='vertical'>
                        <p className='pair-label'> Count </p>
                        <p className='pair-value'>{data[0].id}</p>
                    </Space>
            </Card.Grid>
        </Card>
        <Card title="Ethereum">
            <Card.Grid style={gridStyle} hoverable={false}>
                 <Space direction='vertical'>
                        <p className='pair-label'> Count </p>
                        <p className='pair-value'>{data[0].id}</p>
                    </Space>
            </Card.Grid>
            <Card.Grid style={gridStyle} hoverable={false}>
                 <Space direction='vertical'>
                        <p className='pair-label'> Count </p>
                        <p className='pair-value'>{data[0].id}</p>
                    </Space>
            </Card.Grid>
            <Card.Grid style={gridStyle} hoverable={false}>
                 <Space direction='vertical'>
                        <p className='pair-label'> Count </p>
                        <p className='pair-value'>{data[0].id}</p>
                    </Space>
            </Card.Grid>
            <Card.Grid style={gridStyle} hoverable={false}>
                 <Space direction='vertical'>
                        <p className='pair-label'> Count </p>
                        <p className='pair-value'>{data[0].id}</p>
                    </Space>
            </Card.Grid>
            <Card.Grid style={gridStyle} hoverable={false}>
                 <Space direction='vertical'>
                        <p className='pair-label'> Count </p>
                        <p className='pair-value'>{data[0].id}</p>
                    </Space>
            </Card.Grid>
            <Card.Grid style={gridStyle} hoverable={false}>
                 <Space direction='vertical'>
                        <p className='pair-label'> Count </p>
                        <p className='pair-value'>{data[0].id}</p>
                    </Space>
            </Card.Grid>
        </Card>
        <Card title="Dogecoin">
            <Card.Grid style={gridStyle} hoverable={false}>
                 <Space direction='vertical'>
                        <p className='pair-label'> Count </p>
                        <p className='pair-value'>{data[0].id}</p>
                    </Space>
            </Card.Grid>
            <Card.Grid style={gridStyle} hoverable={false}>
                 <Space direction='vertical'>
                        <p className='pair-label'> Count </p>
                        <p className='pair-value'>{data[0].id}</p>
                    </Space>
            </Card.Grid>
            <Card.Grid style={gridStyle} hoverable={false}>
                 <Space direction='vertical'>
                        <p className='pair-label'> Count </p>
                        <p className='pair-value'>{data[0].id}</p>
                    </Space>
            </Card.Grid>
            <Card.Grid style={gridStyle} hoverable={false}>
                 <Space direction='vertical'>
                        <p className='pair-label'> Count </p>
                        <p className='pair-value'>{data[0].id}</p>
                    </Space>
            </Card.Grid>
            <Card.Grid style={gridStyle} hoverable={false}>
                 <Space direction='vertical'>
                        <p className='pair-label'> Count </p>
                        <p className='pair-value'>{data[0].id}</p>
                    </Space>
            </Card.Grid>
            <Card.Grid style={gridStyle} hoverable={false}>
                 <Space direction='vertical'>
                        <p className='pair-label'> Count </p>
                        <p className='pair-value'>{data[0].id}</p>
                    </Space>
            </Card.Grid>
        </Card>

        </Space>
        }
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