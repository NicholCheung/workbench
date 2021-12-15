import React from 'react'
import { Button, Input, Space } from 'antd'
import styles from './index.less'

const OperationCenterHeader = () => {
    const { Search } = Input
    const onSearch = value => console.log(value);

    return (
        <div className={styles.header}>
            <div className={styles.search}>
                <Search
                    placeholder="请输入产品名称或产品编号"
                    allowClear
                    enterButton="搜索"
                    size="large"
                    onSearch={onSearch}
                />
            </div>
            <Space>
                <Button size="large">查看全部列表</Button>
                <Button type="primary" size="large">新增</Button>
            </Space>
        </div>
    )
}

export default OperationCenterHeader