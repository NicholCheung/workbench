import React from 'react'
import LayoutContainer from '@modules/layout/default'
import { Card, Row, Col } from 'antd'
import ActiveCharts from './server/activeCharts'
import AreaCharts from './server/areaCharts'
import PurposeCharts from './server/purposeCharts'
import DetailList from './server/detailList'
import styles from './server.less'

const OperationCenter = () => {
    return (
        <LayoutContainer type='inner'>
            <div className={styles.serverCount}>
                <Row gutter={16}>
                    <Col span={8}>
                        <Card>
                            <span>活动状态</span>
                            <ActiveCharts />
                        </Card>
                    </Col>
                    <Col span={8}>
                        <Card>
                            <span>地域分布</span>
                            <AreaCharts />
                        </Card>
                    </Col>
                    <Col span={8}>
                        <Card>
                            <span>作用构成</span>
                            <PurposeCharts />
                        </Card>
                    </Col>
                </Row>
            </div>
            <DetailList />
        </LayoutContainer>
    )
}

export default OperationCenter