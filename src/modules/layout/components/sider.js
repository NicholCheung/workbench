import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { Layout, Menu } from 'antd'
import AutoIcon from '@utils/icons/autoIcon'
import styles from './layout.less'
import { hasPermissionForMenu } from '@utils/auth'
import { configGetter } from '@utils/helper'



// 需要显示的route group
const routeGroup = ['sider']

const buildMenu = routes => {
    let components = []
    Object.keys(routes).forEach(currKey => {
        const item = routes[currKey], {
            key,
            icon,
            title,
            menu = false,
            group = null,
            children,
            auth
        } = item

        if (!menu || !routeGroup.includes(group)) {
            return
        }

        if (children) {
            const childrenMenu = Object.keys(children).length > 0 && buildMenu(children)
            childrenMenu.length > 0 && components.push(
                <Menu.SubMenu
                    key={key}
                    title={
                        <span>
                            {icon && <AutoIcon {...icon} />}
                            {title && (<span>{title}</span>)}
                        </span>
                    }
                >
                    {childrenMenu}
                </Menu.SubMenu>
            )
        } else {
            const permission = auth && auth.visible ? hasPermissionForMenu(`${auth.visible}`) : true
            permission && components.push(
                <Menu.Item key={key}>
                    <Link to={key}>
                        {icon && <AutoIcon {...icon} />}
                        {title && (<span>{title}</span>)}
                    </Link>
                </Menu.Item>
            )
        }
    })

    return components
}


const Sider = props => {
    // 计算当前默认展开的submenu以及默认选中的menu
    const {
        collapsed = false,
        hideDefaultOpenKeys = true,
        match: { path: url = '' }
    } = props
        , urlSplitedArr = url.split('/')

    urlSplitedArr.shift()
    let defaultOpenKeys = [], defaultSelectedKeys = []
    for (let i = 0, length = urlSplitedArr.length; i < length; i++) {
        var lastestSplicedUrl = `${defaultOpenKeys.slice(-1)}/${urlSplitedArr.shift()}`
        urlSplitedArr.length > 0 ? defaultOpenKeys.push(lastestSplicedUrl) : defaultSelectedKeys.push(lastestSplicedUrl)
    }
    
    return (
        <Layout.Sider className={styles.sider} collapsed={collapsed}>
            <Menu
                mode="inline"
                defaultOpenKeys={hideDefaultOpenKeys ? [] : defaultOpenKeys}
                defaultSelectedKeys={defaultSelectedKeys}
                triggerSubMenuAction='click'
            >
                {buildMenu(configGetter('route'))}
            </Menu>
        </Layout.Sider>
    )
}

Sider.propTypes = {
    collapsed: PropTypes.bool,
    match: PropTypes.object
}

export default Sider