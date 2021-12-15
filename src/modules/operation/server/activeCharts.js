import React from 'react'
import { Pie } from '@ant-design/charts';

var data = [
    { name: '运行中', value: 11 },
    { name: '停止中', value: 17 - 11 }
];

var config = {
    width: 200,
    height: 200,
    appendPadding: 10,
    data,
    angleField: 'value',
    colorField: 'name',
    color: ({ name }) => name === '运行中' ? '#52c41a' : '#DDD',
    radius: 1,
    innerRadius: 0.65,
    label: {
        type: 'inner',
        offset: '-50%',
        content: '{value}',
        style: {
            textAlign: 'center',
            fontSize: 14
        },
        autoRotate: false,
        labelEmit: false
    },
    state: {
        // 设置 active 激活状态的样式
        active: false,
    },
    interactions: [{ type: 'element-selected' }, { type: 'element-active' }],
    statistic: {
        title: {
            style: {
                fontSize: 14,
                whiteSpace: 'pre-wrap',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                color: '#666',
                marginTop: '-8px'
            },
            content: '服务器数',
        },
        content: {
            style: {
                fontSize: 18,
                whiteSpace: 'pre-wrap',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                color: '#333'
            },
            content: '17',
        },
    },
};

export default () => <Pie {...config} />