import React from 'react'
import PropTypes from 'prop-types'
import { Layout, Avatar, Dropdown } from 'antd'
import { MenuUnfoldOutlined, MenuFoldOutlined, UserOutlined } from '@ant-design/icons';
import styles from './layout.less'

const menu = (
    <div className={styles.userinfoBar}>
        <div className={styles.avatarBar}>
            <Avatar className={styles.avatar} style={{ backgroundColor: '#87d068' }} icon={<UserOutlined />} />
        </div>
        <div className={styles.username}>
            <span>NicholCheung</span>
        </div>
        <div className={styles.btnList}>
            <ul>
                <li>基本资料</li>
                <li>安全设置</li>
            </ul>
        </div>
        <div className={styles.bottomBtn}>
            <span>退出登录</span>
        </div>
    </div>
);


const Header = props => {
    const { collapsed = false, changeSiderMenuCollapsed } = props
    return (
        <Layout.Header className={styles.header}>
            <div className={styles.leftBar}>
                <div className={`${styles.collapsedIconBtn} ${collapsed ? styles.active : styles.inactive}`} onClick={changeSiderMenuCollapsed}>
                    {
                        collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />
                    }
                </div>
                <div className={styles.logoContainer}>
                    <div className={styles.logo}></div>
                </div>
            </div>
            <div className={styles.rightBar}>
                <Dropdown overlay={menu}>
                    <div className={styles.avatar}>
                        <Avatar style={{ backgroundColor: '#87d068' }} icon={<UserOutlined />} />
                    </div>
                </Dropdown>
            </div>
        </Layout.Header>
    )
}

Header.propTypes = {
    collapsed: PropTypes.bool,
    changeSiderMenuCollapsed: PropTypes.func.isRequired
}

export default Header