import React from 'react'
import { Button } from 'antd'
import LayoutContainer from '@modules/layout/default'
import { setSessionStorage, configGetter } from '@utils/helper'
import { AuthComponent } from '@utils/auth'


const Home = props => {
    return (
        <LayoutContainer>
            <AuthComponent auth='button_10086' component={
                <Button onClick={setStorage}>设置Storage</Button>
            } />

        </LayoutContainer>
    )
}

const setStorage = () => {
    setSessionStorage('a.a2', { 'bb': 11 })
}

export default Home