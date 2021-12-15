import config from '@config'

/**
 * 获取配置值
 * @param {string} name 配置名称, 用'.'隔开，如需要获取app.js配置文件中的'debug'配置, 则此参数为'app.debug'
 * @param {string} defaultValue 默认值，若获取制定的配置项失败时会返回该值
 * @returns *
 */
export function configGetter(name, defaultValue) {
    const parts = name.split('->')
    
    if (parts.length < 1) {
        return null
    }

    const getConf = (curr) => {
        const source = curr[parts.shift()]
        return parts.length < 1 || !source ? source : getConf(source)
    }

    const result = getConf(config)
    return result || defaultValue
}