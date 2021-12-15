import React from 'react'
import { Pie } from '@ant-design/charts';

var data = [
    { name: 'Web服务器', value: 2 },
    { name: '游戏服务器', value: 3 },
    { name: '请求分发中枢', value: 1 },
    { name: '数据备份', value: 2 },
];

var config = {
    width: 200,
    height: 200,
    appendPadding: 10,
    data,
    angleField: 'value',
    colorField: 'name',
    radius: 1,
    label: false,
    state: {
        // 设置 active 激活状态的样式
        active: false,
    },
    interactions: [{ type: 'element-selected' }, { type: 'element-active' }]
};

export default () => <Pie {...config} />