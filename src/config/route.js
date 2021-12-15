/*
 * key: 唯一key, 也用作路由url匹配
 * title: 中文描述
 * type: 路由类型, 'route': 常规路由 | 'redirect': 重定向路由
 * to: 重定向路由, 当type: redirect时, 指定重定向的目标
 * icon: { type: icon的type, source: icon来源('antd' | 'iconfont') }
 * menu: 是否在菜单中显示
 * group: 所属菜单组(通常配合menu: true使用)
 * component: 路由绑定的组件
 * exact: 是否为精准路由
 * children: 子路由
 * auth: 权限, {url, visible}, 当menu为true时，可以通过visible控制
 *       在menu中的显示权限, 如果不设visible, 默认不参与组件权限判定, 会进行显示
 */

export default {
    '/': {
        key: '/',
        title: '首页',
        icon: {
            type: 'icon-gailan',
            source: 'iconfont'
        },
        menu: true,
        group: 'sider',
        component: 'home/index',
        auth: {
            url: 'homepage',
            visible: 'sider_homepage'
        }
    },

    /**************************************
     * 数据中心
     **************************************/
    '/a/a1': {
        key: '/a/a1',
        title: 'A',
        icon: {
            type: 'icon-ziyuan',
            source: 'iconfont'
        },
        menu: true,
        group: 'sider',
        children: {
            '/a/a1/a11': {
                key: '/a/a1/a11',
                title: 'A11',
                menu: true,
                group: 'sider',
                component: 'a/a11',
                auth: {
                    url: 'a_a1_a11',
                    visible: 'sider_a_a1_a11'
                }
            },
            '/a/a1/a12': {
                key: '/a/a1/a12',
                title: 'A12',
                menu: true,
                group: 'sider',
                component: 'a/a12',
                auth: {
                    url: 'a_a1_a12',
                    visible: 'sider_a_a1_a12'
                }
            },
            '/a/a1/a13': {
                key: '/a/a1/a13',
                title: 'A13',
                menu: true,
                group: 'sider',
                component: 'a/a13',
                auth: {
                    url: 'a_a1_a13',
                    visible: 'sider_a_a1_a13'
                }
            },
        }
    },
    '/b/b1': {
        key: '/b/b1',
        title: 'B',
        icon: {
            type: 'icon-ziyuan',
            source: 'iconfont'
        },
        menu: true,
        group: 'sider',
        children: {
            '/b/b1/b11': {
                key: '/b/b1/b11',
                title: 'B11',
                menu: true,
                group: 'sider',
                component: 'b/b11',
                auth: {
                    url: 'b_b1_b11',
                    visible: 'sider_b_b1_b11'
                }
            }
        }
    },

    /**************************************
     * 其他
     **************************************/
    '/404': {
        key: '404',
        title: '404',
        component: '404/index'
    },
    'notFound': {
        key: 'notFound',
        type: 'redirect',
        to: '/404'
    }
}