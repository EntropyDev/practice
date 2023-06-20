import React from "react";
import Pair from "./Pair";
import {
    Space,
    Card,
    Row,Col
} from 'antd'


const gridStyle = {
    textAlign: 'center',
    padding: '12px'
};




const TopCardValues = ({pairs}) => {
    return(<>
    <div>
        <Row>

        {
            pairs.length > 0 && pairs.map((pair,ind) => (
                (pair.label == "Price" || pair.label == "β val" || pair.label == "Supply" || pair.label == "Max Supply") ?
                
                <div style={{
                    textAlign: 'left',
                    display: 'flex',
                    marginBottom: '4px',
                    width: '100%',
                    justifyContent: 'space-between',
                    padding: '0 8px'
                }} key = {ind}>
                    <span className="pair-label">{pair.label} : </span><span className="pair-value">{parseFloat(pair.value).toFixed(2)}</span>
                </div>
                :
                <Col key={ind} style={gridStyle} span={12} >
                <Pair label={pair.label} value={pair.value} orientation={'vertical'} />
                </Col>
            
            ))      
        }  
        </Row>
        </div>
        </>  
    )
}

export default TopCardValues