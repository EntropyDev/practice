import React from 'react';
import { Avatar, Button, List, Skeleton, Space, Typography } from 'antd';
import { useEffect, useState } from 'react';
import {
    MonitorOutlined,
    NumberOutlined,
    PoundCircleOutlined,
    CaretDownOutlined,
    CaretUpOutlined,
    DollarTwoTone

} from '@ant-design/icons'


const dataUrl = `https://data.binance.com/api/v3/ticker/24hr`


const LatestTrades = () => {

    const [initLoading, setInitLoading] = useState(true);
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState([]);
    const [list, setList] = useState([]);
    const [loadCount, setLoadCount] = useState(0)

    useEffect(() => {
        fetch(dataUrl)
        .then((res) => res.json())
        .then((res) => {
            setData(res);
            setList(res.slice(0,10))
            setInitLoading(false);
        });
    }, []);

  const onLoadMore = () => {
    setLoading(true);
    setLoadCount((prevCount) => prevCount+1)
    setList(
        list.concat(data.slice((loadCount-1)*10,loadCount*10))
    );
    setLoading(false)
  };
  const loadMore =
    !initLoading && !loading ? (
      <div
        style={{
          textAlign: 'center',
          marginTop: 12,
          height: 32,
          lineHeight: '32px',
        }}
      >
        <Button onClick={onLoadMore}>loading more</Button>
      </div>
    ) : null;
  return (
    <List
      className="demo-loadmore-list"
      loading={initLoading}
      itemLayout="horizontal"
      loadMore={loadMore}
      dataSource={list}
      renderItem={(item, ind) => (
        <List.Item
        >
            <span style={{paddingRight:'4px'}}>{ind+1}.</span>
          <Skeleton avatar title={false} loading={item.loading} active>
            <List.Item.Meta
              title={<><a href="#">{item.symbol}</a></>}
              style={{
                marginLeft: '24px'
              }}
              description={'Something'}
            />
            <div className='space-align-block' style={{
                minWidth: '600px',
                maxWidth: '800px',
                width:'100%',
            }}>
                <Space align='baseline'>
                    <Space direction='vertical'>
                        <p className='pair-label'> Count </p>
                        <p className='pair-value'>{item.count}</p>
                    </Space>
                    <Space direction='vertical'>
                        <p className='pair-label'> volume </p>
                        <p className='pair-value'>{parseFloat(item.volume).toFixed(2)}</p>
                    </Space>
                    <Space direction='vertical'>
                        <p className='pair-label'> <DollarTwoTone twoToneColor='#52c41a'/> last Price </p>
                        <p className='pair-value'>{parseFloat(item.lastPrice).toFixed(4)}</p>
                    </Space>
                    <Space direction='vertical'>
                        <p className='pair-label'> last Qty </p>
                        <p className='pair-value'>{parseFloat(item.lastQty).toFixed(4)}</p>
                    </Space>
                    <Space direction='vertical'>
                        <p className='pair-label'><DollarTwoTone twoToneColor='#52c41a'/> bid price </p>
                        <p className='pair-value'>{parseFloat(item.bidPrice).toFixed(4)}</p>
                    </Space>
                    <Space direction='vertical'>
                        <p className='pair-label'><MonitorOutlined /> bid qty </p>
                        <p className='pair-value'>{parseFloat(item.bidQty).toFixed(2)}</p>
                    </Space>
                    <span> {(item.priceChangePercent > 0) ? <CaretUpOutlined style={{color:'#52c41a',paddingRight:'2px'}}/> : <CaretDownOutlined style={{color:'#F08080', paddingRight:'2px'}}/>
                    } 
                    {parseFloat(item.priceChangePercent).toFixed(2)} %</span>
                </Space>
                
            </div>
          </Skeleton>
        </List.Item>
      )}
    />
  );
};
export default LatestTrades;

// askPrice
// : 
// "0.06513000"
// askQty
// : 
// "49.12970000"
// bidPrice
// : 
// "0.06512000"
// bidQty
// : 
// "15.23570000"
// closeTime
// : 
// 1687187370339
// count
// : 
// 21928
// firstId
// : 
// 419769698
// highPrice
// : 
// "0.06562000"
// lastId
// : 
// 419791625
// lastPrice
// : 
// "0.06513000"
// lastQty
// : 
// "0.50570000"
// lowPrice
// : 
// "0.06505000"
// openPrice
// : 
// "0.06555000"
// openTime
// : 
// 1687100970339
// prevClosePrice
// : 
// "0.06554000"
// priceChange
// : 
// "-0.00042000"
// priceChangePercent
// : 
// "-0.641"
// quoteVolume
// : 
// "768.27600500"
// symbol
// : 
// "ETHBTC"
// volume
// : 
// "11763.95660000"
// weightedAvgPrice
// : 
// "0.06530762"