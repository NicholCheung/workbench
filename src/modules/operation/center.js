import React from 'react'
import LayoutContainer from '@modules/layout/default'
import Header from './center/header'
import Table from './center/table'

const OperationCenter = () => {
    return (
        <LayoutContainer type='innerWhite'>
            <Header />
            <Table />
        </LayoutContainer>
    )
}

export default OperationCenter