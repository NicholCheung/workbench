import React from 'react'
import PropTypes from 'prop-types'
import { Layout } from 'antd'
import styles from '@modules/common.less'

const MainContent = props => {
    const styleMap = {
        'inner': `${styles.container} ${styles.inner}`,
        'innerWhite': `${styles.container} ${styles.inner} ${styles.white}`,
    }
        , innerStyleName = props.type ? styleMap[props.type] : ''
        , outStyleName = ['innerWhite'].includes(props.type) ? styles.padding1 : ''

    return (
        <Layout.Content className={outStyleName}>
            <div className={innerStyleName}>
                {props.children}
            </div>
        </Layout.Content>
    )
}

MainContent.propTypes = {
    children: PropTypes.any
}

export default MainContent