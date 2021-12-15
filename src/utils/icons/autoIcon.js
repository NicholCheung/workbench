import React from 'react'
import  * as Icons from '@ant-design/icons';
import IconFont from '@utils/icons/iconFont'

export default props => {
    const { 
        type,
        source = 'antd',
        ...otherProps
    } = props

    if (!type) {
        return null
    }
    
    if (source === 'antd') {
        return (
            <React.Fragment> 
            {
                React.createElement(Icons[type])
            }
            </React.Fragment>
        )
    }

    if (source === 'iconfont') {
        return <IconFont type={type} {...otherProps} />
    }

    return null
}