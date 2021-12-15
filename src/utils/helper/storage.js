import { isType } from '@utils/helper'

// 设置storage基础方法
export const setStorage = (type, key, value) => {
    if (!key) {
        return undefined
    }
    const storage = type === 'localStorage' ? localStorage : sessionStorage
    const keys = key.split('.')
    const topKey = keys.shift()
    let newValue

    const buildNewTree = (tree, keys, value) => {
        const _keys = [...keys]
        const curr = _keys.shift()

        return {
            ...tree,
            [curr]: _keys.length === 0
                ? value
                : buildNewTree(isType(tree[curr], 'json') ? tree[curr] : {}, _keys, value)
        }
    }

    if (!!keys.length) {
        const fullObj = storage.getItem(topKey)
        const tree = keys.length > 0 ? /^\{.*\}$/.test(fullObj) ? JSON.parse(fullObj) : {} : {}
        newValue = JSON.stringify(buildNewTree(tree, keys, value))
    } else {
        newValue = isType(value, 'json') ? JSON.stringify(value) : value
    }

    storage.setItem(topKey, newValue)
    return { [topKey]: newValue }
}

// 设置localStorage
export const setLocalStorage = (key, value) => setStorage('localStorage', key, value)
// 设置sessionStorage
export const setSessionStorage = (key, value) => setStorage('sessionStorage', key, value)


// 获取storage基础方法
export const getStorage = (type, key) => {
    if (!key) {
        return undefined
    }
    const storage = type === 'localStorage' ? localStorage : sessionStorage
    const keys = key.split('.')
    const storageValue = storage.getItem(keys.shift())

    if (storageValue === null) {
        return null
    }

    let value = /^\{.*\}$/.test(storageValue) ? JSON.parse(storageValue) : storageValue

    if (!!keys) {
        for (let i = 0; i < keys.length; i++) {
            if (isType(value[keys[i]], 'json') && !value[keys[i]].hasOwnProperty(keys[i])) {
                return undefined
            }
            value = value[keys[i]]
        }
        return value
    }

    return value
}

// 获取localStorage值
export const getLocalStorage = key => getStorage('localStorage', key)
// 获取sessionStorage值
export const getSessionStorage = key => getStorage('sessionStorage', key)