import React from "react";
import LatestTrades from "./LatestTrades";
import { Card,Row, Col, Divider } from "antd";
const { Meta } = Card;

const style = {
    padding: '8px 0px',
    display: 'flex',
    alignContent: 'center',
    justifyContent: 'center',
  };

const CryptoDaily = () => {
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
      <Col className="gutter-row" span={8}>
        <div style={style}>
        <Card
    hoverable
    style={{
      width: 240,
      border: '2px dashed #3992ff'
    }}
    cover={<img alt="example" src="https://i.imgur.com/qQAWrkC.png" />}
  >
    {/* <Meta title="Vaibhav Chimalgi" description="Full stack Developer" /> */}
  </Card>
        </div>
      </Col>
      <Col className="gutter-row" span={8}>
        <div style={style}>col-8</div>
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