import React from 'react'
import LayoutContainer from '@modules/layout/default'
import { Divider, List, Card, Image, Badge, Tag } from 'antd'
import pic1 from '@asset/images/game_1.jpg'
import pic2 from '@asset/images/game_2.jpeg'
import pic3 from '@asset/images/game_3.jpg'
import pic4 from '@asset/images/game_4.jpg'
import styles from './list.less'

const OperationList = () => {

    const data = [
        {
            title: 'Rust',
            status: 'running',
            images: pic1
        },
        {
            title: 'Quest',
            status: 'running',
            images: pic2
        },
        {
            title: 'Frost Punk',
            status: 'maintenance',
            images: pic3
        },
        {
            title: 'Half-life ALYX',
            status: 'stopped',
            images: pic4
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
        <LayoutContainer type='inner'>
            <Divider plain orientation="left">游戏</Divider>
            <List
                grid={{ gutter: 16, xs: 1, sm: 2, md: 4, lg: 4, xl: 6, xxl: 4 }}
                dataSource={data}
                renderItem={item => (
                    <List.Item>
                        <Card title={
                            <div className={styles.cardTitle}>
                                <Badge
                                    status={item.status === 'running' ? "processing" : "default"}
                                    color={status[item.status].color} text={item.title}
                                />
                                <Tag color={status[item.status].color}>{status[item.status].text}</Tag>
                            </div>
                        }>
                            <Image
                                src={item.images}
                                preview={false}
                            />
                        </Card>
                    </List.Item>
                )}
            />
        </LayoutContainer>
    )
}

export default OperationList