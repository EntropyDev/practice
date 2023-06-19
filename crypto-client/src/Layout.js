import React from "react";
import Wall from "./Wall"
import Home from "./Home"
import CryptoDetails from "./CryptoDetails";
import CryptoDaily from "./CryptoDaily";
import { useState } from 'react';

import { LaptopOutlined, NotificationOutlined, UserOutlined } from '@ant-design/icons';
import { Breadcrumb, Layout, Menu, theme } from 'antd';
import { AppstoreOutlined, MailOutlined, CalendarOutlined, SettingOutlined, LinkOutlined } from '@ant-design/icons';

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

  const topNavItems = ['1', '2', '3'].map((key) => ({
    key,
    label: `nav ${key}`,
  }));

const sideNavItems = [
    getItem('Bitcoin', '1', <MailOutlined />),
    getItem('Ethereum', '2', <AppstoreOutlined /> ),
    getItem('XRP', '3', <AppstoreOutlined /> ),
    getItem('TRON', '4', <AppstoreOutlined /> ),
    getItem('Dogecoin', '5', <AppstoreOutlined /> ),
    {
      type: 'divider',
    },
  ];


const LayoutComponent = () => {
    
    const {
        token: { colorBgContainer },
      } = theme.useToken();

    const getResults = (event) => {
        event.preventDefault()
        console.log("get rfesults")
    }
    const goToLink = (obj) => {
        console.log(coinKey[obj.key])
    }

    return(
        <Layout>
      <Header
        style={{
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <div className="demo-logo" />
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']} items={topNavItems} />
      </Header>
      <Layout>
        <Sider
          width={200}
          style={{
            background: colorBgContainer,
          }}
        >
          <Menu
            mode="inline"
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['1']}
            onClick={goToLink}
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
            Content
          </Content>
        </Layout>
      </Layout>
    </Layout>

    )
}

export default LayoutComponent