import React from 'react'
import { Link } from 'react-router-dom'
import { Card, List, Badge, Row, Col, Tag } from 'antd';
import moment from 'moment'
import CpuCharts from './detailList/cpu'
import styles from './detailList.less'

const data = [
    {
        id: 1,
        title: '香港服务器 - 1',
        purpose: 'Web服务器',
        ip: '153.33.146.1',
        area: '香港',
        status: 'running',
        runningTime: '1623843436',
        cpu: '69',
        dayToPay: '27'
    },
    {
        id: 2,
        title: '美国服务器 - 1',
        purpose: 'VPN服务器',
        ip: '225.143.146.17',
        area: '香港',
        status: 'running',
        runningTime: '1623843436',
        cpu: '22',
        dayToPay: '22'
    },
    {
        id: 3,
        title: '美国服务器 - 2',
        purpose: '游戏服务器',
        ip: '212.112.246.7',
        area: '香港',
        status: 'stopped',
        runningTime: '1623843436',
        cpu: '0',
        dayToPay: '2'
    },
    {
        id: 4,
        title: '深圳服务器 - 2',
        purpose: '请求转发中枢',
        ip: '59.168.66.44',
        area: '深圳',
        status: 'running',
        runningTime: '1623843436',
        cpu: '37',
        dayToPay: '237'
    },
]

const status = {
    'running': {
        text: '运行中',
        color: 'green'
    },
    'stopped': {
        text: '已停止',
        color: '#CCC'
    }
}

const DetailList = () => (
    <Card>
        <List
            itemLayout="vertical"
            size="large"
            pagination={{
                pageSize: 5,
            }}
            dataSource={data}
            renderItem={item => (
                <List.Item
                    key={item.id}
                    extra={
                        <CpuCharts value={item.cpu} />
                    }
                >
                    <List.Item.Meta
                        title={<>
                            <Badge
                                status={item.status === 'running' ? "processing" : "default"}
                                color={item.status === 'running' ? 'green' : '#CCC'}
                            />
                            <Link to="/data/operation/serverDetail">{item.title}</Link>
                        </>}
                    />
                    <Row gutter={[16, 8]}>
                        <Col span={8}>
                            <span className={styles.itemTitle}>用途： </span>
                            <span className={styles.itemContent}>{item.purpose}</span>
                        </Col>
                        <Col span={8}>
                            <span className={styles.itemTitle}>IP： </span>
                            <span className={styles.itemContent}>{item.ip}</span>
                        </Col>
                        <Col span={8}>
                            <span className={styles.itemTitle}>状态： </span>
                            <span className={styles.itemContent}><Tag color={status[item.status].color}>{status[item.status].text}</Tag></span>
                        </Col>
                        <Col span={8}>
                            <span className={styles.itemTitle}>所在地： </span>
                            <span className={styles.itemContent}>{item.area}</span>
                        </Col>
                        <Col span={8}>
                            <span className={styles.itemTitle}>上次运行时间： </span>
                            <span className={styles.itemContent}>{moment(parseInt(item.runningTime)).format('YYYY-MM-DD HH:mm:ss')}</span>
                        </Col>
                        <Col span={8}>
                            <span className={styles.itemTitle}>距离下次续费： </span>
                            <span className={styles.itemContent}>
                                <span style={{ color: parseInt(item.dayToPay) > 10? '' : 'red' }}>{item.dayToPay}</span> 天
                            </span>
                        </Col>
                    </Row>
                </List.Item>
            )}
        />
    </Card>
);

DetailList.displayName = 'DetailList'
export default DetailList