import * as storage from './storage'
import * as judge from './judge'
import * as effects from './effects'
import * as config from './config'

// 设置storage
export const setStorage = storage.setStorage
// 设置localStorage
export const setLocalStorage = storage.setLocalStorage
// 设置sessionStorage
export const setSessionStorage = storage.setSessionStorage
// 获取storage
export const getStorage = storage.getStorage
// 获取localStorage
export const getLocalStorage = storage.getLocalStorage
// 获取SessionStorage
export const getSessionStorage = storage.getSessionStorage
// 判断值是否为指定类型
export const isType = judge.isDesignated
// 延迟
export const delay = effects.delay
// 配置读取
export const configGetter = config.configGetter