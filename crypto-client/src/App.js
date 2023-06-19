import React from "react";
import {
    Routes,
    Route,
    Link,
    Outlet,
    useNavigate
} from 'react-router-dom'
import { useState } from 'react';


import Wall from "./Wall"
import Home from "./Home"
import CryptoDetails from "./CryptoDetails";
import CryptoDaily from "./CryptoDaily";
import NewsText from './NewsText'

import { Breadcrumb, Layout, Menu, theme } from 'antd';
import {SmileTwoTone, HeartTwoTone, UserOutlined, AppstoreOutlined, MailOutlined, CalendarOutlined, SettingOutlined, LinkOutlined, HeartOutlined } from '@ant-design/icons';

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
    getItem('CryptoClient','1')]

const sideNavItems = [
    getItem('Bitcoin', '1', <HeartTwoTone twoToneColor="#eb2f96"/>),
    getItem('Ethereum', '2', <SmileTwoTone /> ),
    getItem('XRP', '3', <SmileTwoTone /> ),
    getItem('TRON', '4', <SmileTwoTone /> ),
    getItem('Dogecoin', '5', <SmileTwoTone /> ),
    {
      type: 'divider',
    },
  ];



const App = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  const navigate = useNavigate();

  const getResults = (event) => {
    event.preventDefault()
    console.log("get rfesults")
}
const goToLink = (obj) => {
    console.log(coinKey[obj.key])
    navigate(`/crypto/${coinKey[obj.key]}`)
}


    return(
        <>
        
          <Layout>
      <Header
        style={{
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <div className="demo-logo" />
        <Menu theme="dark" mode="inline" items={topNavItems} width={160} style={{width: '160px',color: '#1677ff'}} />
        <NewsText />
      </Header>
      <Layout>
        <Sider
          width={260}
          style={{
            background: colorBgContainer,
          }}
        >
          <Menu
            mode="inline"
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['1']}
            onClick={goToLink}
            className="side-nav"
            style={{
              height: '100%',
              borderRight: 0,
            }}
            items={sideNavItems}
          />
        </Sider>
        <Layout
          style={{
            padding: '0',
          }}
        >
          <Content
            style={{
              padding: 24,
              margin: 0,
              minHeight: 280,
              background: colorBgContainer,
            }}
          >
            
            <Outlet />
          </Content>
        </Layout>
      </Layout>
    </Layout>
        </>
    )
}

export default App