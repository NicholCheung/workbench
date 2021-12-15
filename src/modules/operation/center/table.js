import React from 'react'
import { Table, Tag, Space } from 'antd'
import styles from './index.less'

const OperationCenterTable = () => {
    const columns = [
        {
            title: '编号',
            dataIndex: 'no',
            key: 'no',
            width: 240,
            flxed: 'left',
        },
        {
            title: '产品名称',
            dataIndex: 'title',
            key: 'title',
        },
        {
            title: '状态',
            key: 'status',
            dataIndex: 'status',
            width: 240,
            render: (_, record) => (
                <Tag color={status[record.status].color}>
                    {status[record.status].text}
                </Tag>
            ),
        },
        {
            title: '操作',
            key: 'action',
            width: 160,
            fixed: 'right',
            render: (text, record) => (
                <Space size="middle">
                    <a>详情</a>
                    <a>编辑</a>
                    <a>停止</a>
                </Space>
            ),
        },
    ];

    const data = [
        {
            key: '1',
            no: 'G20103302020102',
            title: 'Rust',
            status: 'running',
        },
        {
            key: '2',
            no: 'G20103302020103',
            title: 'Quest',
            status: 'running',
        },
        {
            key: '3',
            no: 'G20103302020104',
            title: 'Frost Punk',
            status: 'maintenance',
        },
        {
            key: '4',
            no: 'G20103302020105',
            title: 'Half-life ALYX',
            status: 'stopped',
        }
    ]

    const status = {
        'running': {
            color: 'green',
            text: '运行中'
        },
        'maintenance': {
            color: 'blue',
            text: '维护中'
        },
        'stopped': {
            color: '#CCC',
            text: '暂停中'
        }
    }

    return (
        <div className={styles.table}>
            <Table
                columns={columns}
                dataSource={data}
                pagination={{ defaultPageSize: 8 }}
            />
        </div>
    )
}

export default OperationCenterTable