import * as React from 'react'
import Loadable from 'react-loadable'
import PageLoad from './pageLoad'

export default (loader, loading = props => <PageLoad {...props} />) => Loadable({
    loader,
    loading,
    delay: 300,
})