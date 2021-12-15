import authConfig from '@config/auth'

// 虚拟数据，实际上是获取从后端返回的权限点列表
const xunishuju = {
    u: ['*', 'uh1p', 'udos1'],
    m: ['*', 'm0', 'm1', 'm2'],
    c: ['c1', 'c2']
}

const hasPermission = (type, name) => xunishuju[type].indexOf('*') > -1 || xunishuju[type].indexOf(authConfig[`${type}.${name}`]) > -1


const componentAccessCache = {}


function hasPermissionForAll(type, name) {
    const key = `${type}.${name}`
    let result = componentAccessCache[key]

    if (result !== undefined) {
        return result
    }

    result = hasPermission(type, name)
    componentAccessCache[key] = result

    return result
}

export const hasPermissionForUrl = name => hasPermission('u', name)
export const hasPermissionForMenu = name => hasPermissionForAll('m', name)
export const hasPermissionForComponent = name => hasPermissionForAll('c', name)


export const AuthComponent = props => {
    const { type, auth, component } = props

    if (!auth) {
        return null
    }

    const _type = type || 'c'

    const permissionHandler = {
        u: hasPermissionForUrl,
        m: hasPermissionForMenu,
        c: hasPermissionForComponent
    }[_type]

    if (!permissionHandler) {
        return null
    }

    return permissionHandler(auth) ? component : null
}

