import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { withRouter } from "react-router-dom";
import { Layout } from 'antd';
import styles from './default.less'
import MainHeader from './components/header'
import MainSider from './components/sider'
import MainContent from './components/content'
import { setStorage, getStorage, configGetter } from '@utils/helper'

const DefaultLayout = withRouter(props => {
    const siderCollapsedSaver = configGetter('app->siderCollapsedSaver', 'sessionStorage')
    const isSiderMenuCollapsedCache = getStorage(siderCollapsedSaver, 'r_time.is_sm_c')
    const [S_isCollapsed, S_setIsSiderMenuCollapsed] = useState(isSiderMenuCollapsedCache === undefined ? false : isSiderMenuCollapsedCache)

    const changeSiderMenuCollapsed = () => {
        setStorage(siderCollapsedSaver, 'r_time.is_sm_c', !S_isCollapsed)
        S_setIsSiderMenuCollapsed(!S_isCollapsed)
    }

    const { match, children } = props
    return (
        <Layout className={styles.layoutContainer}>
            <MainHeader collapsed={S_isCollapsed} changeSiderMenuCollapsed={changeSiderMenuCollapsed} />
            <Layout>
                <MainSider collapsed={S_isCollapsed} match={match} hideDefaultOpenKeys={isSiderMenuCollapsedCache} />
                <MainContent {...props}>{children}</MainContent>
            </Layout>
        </Layout>
    )
})

DefaultLayout.propTypes = {
    match: PropTypes.object,
    children: PropTypes.any
}

export default DefaultLayout