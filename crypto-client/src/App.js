import React from "react";
import {
    Routes,
    Route,
    Link,
    Outlet
} from 'react-router-dom'
import Wall from "./Wall"
import Home from "./Home"
import CryptoDetails from "./CryptoDetails";
import CryptoDaily from "./CryptoDaily";
import LayoutComponent from "./Layout";
import btclogo from "../public/assets/bitcoin-btc-logo.svg"


import { AppstoreOutlined, MailOutlined, CalendarOutlined, SettingOutlined, LinkOutlined } from '@ant-design/icons';
import { Divider, Menu, Switch } from 'antd';
import { useState } from 'react';
function getItem(label, key, icon, children, type) {
  return {
    key,
    icon,
    children,
    label,
    type
  };
}
const coinKey = {
  "1": "bitcoin",
  "2": "ethereum",
  "3": "xrp",
  "4": "tron",
  "5": "dogecoin",
}
const nav_items = [
  getItem('Bitcoin', '1', <MailOutlined />),
  getItem('Ethereum', '2', <AppstoreOutlined /> ),
  getItem('XRP', '3', <AppstoreOutlined /> ),
  getItem('TRON', '4', <AppstoreOutlined /> ),
  getItem('Dogecoin', '5', <AppstoreOutlined /> ),
  {
    type: 'divider',
  },
];


const App = () => {
    const getResults = (event) => {
        event.preventDefault()
        console.log("get rfesults")
    }
    const goToLink = (obj) => {
        console.log(coinKey[obj.key])
    }



    return(
       <LayoutComponent />
    )
}

export default App