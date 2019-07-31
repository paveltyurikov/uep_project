import React, {useEffect, useCallback} from 'react'
import {Route, Switch} from 'react-router-dom'
import AppLayout from 'components/Layout'
import HomePage from 'apps/HomePage'
import RouteProxy from 'components/RouteProxy'
import Loading from 'components/Loading'
import {connectApp} from './connectors'
import './styles.scss'


function App({routes, getNav}) {
    useEffect(() => getNav(), []);
    const RenderRoutes = useCallback(() => {
        return routes.length ?
            <Switch>
                <Route key={'home'} exact path="/" component={HomePage}/>
                {routes.map(route =>
                    <Route
                        key={route.id}
                        path={route.path} render={(match) =>
                        <RouteProxy
                            match={match}
                            {...route}
                        />
                    }/>
                )}
            </Switch>
            :
            <Loading/>
    }, [routes]);
    return (
        <AppLayout>
            <RenderRoutes/>
        </AppLayout>
    )
}

export default connectApp(App)
