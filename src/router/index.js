import * as React from 'react'
import { HashRouter, Switch, Route, Redirect } from 'react-router-dom'
import Loader from '@utils/loader'
import { hasPermissionForUrl } from '@utils/auth'
import { configGetter } from '@utils/helper'
import routesConfig from '@config/route'

const defaultExact = true
const defaultType = 'route'

const build = routes => {
    let component = []

    Object.keys(routes).forEach(currentValue => {
        const curr = routes[currentValue],
            type = curr.hasOwnProperty('type') ? curr.type : defaultType,
            props = type === 'route'
                ? {
                    key: curr.key,
                    path: currentValue,
                    exact: curr.hasOwnProperty('exact') ? curr.exact : defaultExact
                }
                : {
                    key: curr.key,
                    to: curr.to
                }

        if (type === 'redirect') {
            component.push(<Redirect {...props} />)
            return false
        }

        if (curr.component) {
            const Component = Loader(() => import(`@modules/${curr.component}`))

            component.push(
                curr.auth && curr.auth.url
                    ? <Route {...props} render={() => (
                        hasPermissionForUrl(curr.auth.url) ? (
                            <Component />
                        ) : (
                            <Redirect to={configGetter('app', 'authenticationFailedReplaceUrl')} />
                        )
                    )} />
                    : <Route {...props} component={Component} />
            )
        }

        if (curr.children && Object.keys(curr.children).length > 0) {
            component.push(...build(curr.children))
        }
    })

    return component
}


const RouterContainer = () => {
    return (
        <HashRouter>
            <Switch>
                {build(routesConfig)}
            </Switch>
        </HashRouter>
    )
}

export default RouterContainer