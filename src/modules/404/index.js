import React from 'react'
import { Link } from 'react-router-dom'
import LayoutContainer from '@modules/layout/default'
import { Result, Button } from 'antd';
import styles from './index.less'

export default function NotFound() {
    return (
        <LayoutContainer>
            <div className={styles.container}>
                <Result
                    status="404"
                    title="404"
                    subTitle="抱歉，此页面已丢失"
                    extra={<Link to="/"><Button type="primary">返回首页</Button></Link>}
                />
            </div>
        </LayoutContainer>
    )
}