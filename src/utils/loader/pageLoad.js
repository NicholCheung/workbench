import React from 'react'
import { Button } from 'antd';
import { Link } from 'react-router-dom'
import LayoutContainer from '@src/modules/layout/default'
import IconFont from '@utils/icons/iconFont'
import styles from './pageLoad.less'

export default props => {
    return (
        <LayoutContainer>
            <div className={styles.loadingContainer}>
                {
                    props.error
                        ? (
                            <div className={styles.center}>
                                <IconFont type="icon-jiazaishibai" className={`${styles.icon} ${styles.stateFail}`} />
                                <div>
                                    <span className={styles.label}>哎呀！页面加载失败了！</span>
                                </div>
                                <div className={`${styles.button} ${styles.first}`}>
                                    <Button type="primary" ghost onClick={()=>window.location.reload()}>重新加载</Button>
                                </div>
                                <div className={styles.button}>
                                    <Link to="/">
                                        <Button type="link">返回首页</Button>
                                    </Link>
                                </div>
                            </div>
                        )
                        : props.pastDelay
                            ? (<IconFont spin type="icon-jiazaizhong" className={`${styles.icon} ${styles.stateLoading}`} />)
                            : null
                }
            </div>
        </LayoutContainer>
    )
}