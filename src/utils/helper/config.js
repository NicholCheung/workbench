import config from '@config/'

/**
 * 获取配置值
 * @param {string} name 配置组名称
 * @param {string} key 配置项名称
 * @param {string} defaultValue 默认值，若获取制定的配置项失败时会返回该值
 * @returns *
 */
export function configGetter(name, key, defaultValue){
    if (!config[name]) {
        return null
    }
    return config[name][key] || defaultValue
}