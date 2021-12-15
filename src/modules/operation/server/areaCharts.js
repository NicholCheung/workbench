import React from 'react'
import { Pie } from '@ant-design/charts';

var data = [
    { name: '深圳', value: 2 },
    { name: '上海', value: 3 },
    { name: '北京', value: 3 },
    { name: '杭州', value: 1 },
    { name: '香港', value: 1 },
    { name: '美国', value: 3 },
    { name: '瑞士', value: 1 },
];

var config = {
    width: 200,
    height: 200,
    appendPadding: 10,
    data,
    angleField: 'value',
    colorField: 'name',
    radius: 1,
    label: {
        type: 'inner',
        offset: '-50%',
        content: item => item.name.substr(0, 1) + ': ' + item.value,
        style: {
            textAlign: 'center',
            fontSize: 14
        }
    },
    state: {
        active: false,
    },
    interactions: [{ type: 'element-selected' }, { type: 'element-active' }]
};

export default () => <Pie {...config} />