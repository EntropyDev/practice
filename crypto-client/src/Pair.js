import React from "react";

import {
    Space
} from 'antd'

const Pair = ({label,value,orientation}) => {
    return(
        <Space direction={orientation}>
            <p className='pair-label'> {label} </p>
            <p className='pair-value'>{value}</p>
        </Space>
    )
}

export default Pair