/*
 * key: 唯一key
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
        title: '概览',
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
    '/data/operation': {
        key: '/data/operation',
        title: '运营管理',
        icon: {
            type: 'icon-ziyuan',
            source: 'iconfont'
        },
        menu: true,
        group: 'sider',
        children: {
            '/data/operation/server': {
                key: '/data/operation/server',
                title: '服务器',
                menu: true,
                group: 'sider',
                component: 'operation/server',
                auth: {
                    url: 'data_operation_server',
                    visible: 'sider_data_operation_server'
                }
            },
            '/data/operation/list': {
                key: '/data/operation/list',
                title: '产品列表',
                menu: true,
                group: 'sider',
                component: 'operation/list',
                auth: {
                    url: 'data_operation_list',
                    visible: 'sider_data_operation_list'
                }
            },
            '/data/operation/analysis': {
                key: '/data/operation/analysis',
                title: '产品监控',
                menu: true,
                group: 'sider',
                component: 'operation/analysis',
                auth: {
                    url: 'data_operation_analysis',
                    visible: 'sider_data_operation_analysis'
                }
            },
            '/data/operation/center': {
                key: '/data/operation/center',
                title: '管理',
                menu: true,
                group: 'sider',
                component: 'operation/center',
                auth: {
                    url: 'data_operation_center',
                    visible: 'sider_data_operation_center'
                }
            },
            '/data/operation/serverDetail': {
                key: '/data/operation/serverDetail',
                title: '服务器详情',
                component: 'operation/serverDetail',
                auth: {
                    url: 'data_operation_serverDetail',
                    visible: 'sider_data_operation_serverDetail'
                }
            },
        }
    },
    '/data/development': {
        key: '/data/development',
        title: '项目开发',
        icon: {
            type: 'icon-ziyuan',
            source: 'iconfont'
        },
        menu: true,
        group: 'sider',
        children: {
            '/data/development/list': {
                key: '/data/development/list',
                title: '列表',
                menu: true,
                group: 'sider',
                component: 'b/index',
                auth: {
                    url: 'data_development_list',
                    visible: 'sider_data_development_list'
                }
            }
        }
    },
    '/data/resource': {
        key: '/data/resource',
        title: '资源仓库',
        icon: {
            type: 'icon-ziyuan',
            source: 'iconfont'
        },
        menu: true,
        group: 'sider',
        children: {
            '/data/resource/list': {
                key: '/data/resource/list',
                title: '项目列表',
                menu: true,
                group: 'sider',
                component: 'b/index',
                auth: {
                    url: 'data_resource_list',
                    visible: 'sider_data_resource_list'
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