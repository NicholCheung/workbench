import React from 'react'
import { Liquid } from '@ant-design/charts';

export default props => {
    const percent = parseInt(props.value, 0) / 100
    var config = {
        width: 128,
        height: 128,
        percent,
        outline: {
            border: 2,
            distance: 4
        },
        color: percent > 0 ? '#1890ff' : '#DDD',
        wave: {
            count: 1 + parseInt(percent / 0.2, 0),
            length: 128
        },
        statistic: {
            title: {
                content: 'CPU占用',
                style: {
                    color: percent > 0 ? '#333' : '#DDD'
                }
            },
            content: {
                formatter: item => `${item.percent * 100}%`,
                style: {
                    color: percent > 0 ? '#333' : '#DDD',
                    fontSize: 22
                }
            }
        }
    };
    return <Liquid {...config} />
}