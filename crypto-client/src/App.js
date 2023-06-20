import React, { useState, createContext, useEffect, useContext } from "react";
import {
    Routes,
    Route,
    Link,
    Outlet,
    useNavigate
} from 'react-router-dom'


import Wall from "./Wall"
import Home from "./Home"
import CryptoDetails from "./CryptoDetails";
import CryptoDaily from "./CryptoDaily";
import NewsText from './NewsText'

import { Breadcrumb, Divider, Layout, Menu, theme, Select } from 'antd';
import {SmileTwoTone, HeartTwoTone, DollarOutlined , AppstoreOutlined, MailOutlined, CalendarOutlined, SettingOutlined, LinkOutlined, HeartOutlined } from '@ant-design/icons';

const { Header, Content, Sider } = Layout;

const coinKey = {
    "1": "bitcoin",
    "2": "ethereum",
    "3": "xrp",
    "4": "tron",
    "5": "dogecoin",
  }

function getItem(label, key, icon, children, type) {
    return {
      key,
      icon,
      children,
      label,
      type
    };
  }

  const topNavItems = [
    getItem('CryptoClient','1',<DollarOutlined />)]

const sideNavItems = [
    getItem('Bitcoin', '1', <DollarOutlined style={{color:"#000"}}/>),
    getItem('Ethereum', '2', <DollarOutlined style={{color:'#000'}} /> ),
    getItem('XRP', '3', <DollarOutlined style={{color:'#000'}} /> ),
    getItem('TRON', '4', <DollarOutlined style={{color:'#000'}} /> ),
    getItem('Dogecoin', '5', <DollarOutlined style={{color:'#000'}} /> ),
    {
      type: 'divider',
    },
  ];

  export const PriceContext = createContext()


const App = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  const navigate = useNavigate();

  const getResults = (event) => {
    event.preventDefault()
    console.log("get rfesults")
}
const goToHome = () => navigate('/')
const goToLink = (obj) => {
    console.log(coinKey[obj.key])
    navigate(`/crypto/${coinKey[obj.key]}`)
}

const [prices, setPrices] = useState([])
const url = 'https://api.coinpaprika.com/v1/tickers?limit=50'

useEffect(() => {
  fetch(url)
        .then(res => res.json())
        .then( res => {
          setPrices(res)
        })
},[])

    return(
        
        <PriceContext.Provider value={prices}>
          <Layout>
      <Header
        style={{
          display: 'flex',
          alignItems: 'center',
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          zIndex: 999
        }}
      >
        <div className="demo-logo" />
        <Menu theme="dark" mode="inline" items={topNavItems} width={200} style={{width: '200px',color: '#1677ff'}} onClick={goToHome} />
        <marquee behavior="scroll" direction="left">
        <NewsText />
        </marquee>
      </Header>
      <Layout>
        <Sider
          width={260}
          style={{
            background: colorBgContainer,
            borderRight: '1px solid',
              overflow: 'auto',
              height: '100vh',
              position: 'fixed',
              left: 0,
              top: 64,
              bottom: 0,
          }}
        >
          <Divider orientation="left" style={{
            fontSize: '12px',
            textTransform: 'uppercase'
        }}>Favorites</Divider>
          <Menu
            mode="inline"
            
            defaultOpenKeys={['1']}
            onClick={goToLink}
            className="side-nav"
            style={{
              height: 'auto',
              borderRight: 0,
              borderRadius: 0
            }}
            items={sideNavItems}
          />
          <Divider orientation="left" style={{
            fontSize: '12px',
            textTransform: 'uppercase'
        }}>Search crypto</Divider>
        <Select
    showSearch
    style={{
      width: 200,
    }}
    placeholder="Search to Select"
    optionFilterProp="children"
    filterOption={(input, option) => (option?.label ?? '').includes(input)}
    filterSort={(optionA, optionB) =>
      (optionA?.label ?? '').toLowerCase().localeCompare((optionB?.label ?? '').toLowerCase())
    }
    options={[
      {
        value: '1',
        label: 'Not Identified',
      },
      {
        value: '2',
        label: 'Closed',
      },
      {
        value: '3',
        label: 'Communicated',
      },
      {
        value: '4',
        label: 'Identified',
      },
      {
        value: '5',
        label: 'Resolved',
      },
      {
        value: '6',
        label: 'Cancelled',
      },
    ]}
  />
        </Sider>
        <Layout
          style={{
            padding: '0',
            marginLeft: 260,
            marginTop: 64,
          }}
        >
          <Content
            style={{
              padding: 24,
              margin: 0,
              minHeight: 280,
              background: colorBgContainer,
              paddingBottom: 32
            }}
          >
            
            <Outlet />
          </Content>
        </Layout>
      </Layout>
    </Layout>
    </PriceContext.Provider>
    
    )
}

export default App