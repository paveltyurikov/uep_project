import React, {useEffect} from 'react'

import {string} from 'prop-types'
import StaticContent from './StaticContent'
import {withAuthentication} from "apps/Auth";
import DefaultBanner from '../Layout/DefaultBanner'
import {LoadableJobs} from 'appModules';
import {BannerPortal} from "../Layout";
import {
    scrollWindowToTop
} from 'utils/index'


export default function RoteProxy(props) {
    const {is_protected, app, match, title, banner_text} = props;
    const checkRouteProtected = (Component) => {
        return is_protected ? withAuthentication(Component) : Component
    };
    const getComponent = () => {
        switch (app) {
            case "jobs":
                return LoadableJobs;
            case "pages":
                return StaticContent;
            default:
                return StaticContent;
        }
    };

    useEffect(() => {
        scrollWindowToTop()
    }, [match.location.pathname]);
    const Component = checkRouteProtected(getComponent());
    return (<>
        <BannerPortal>
            <DefaultBanner>
                <h1 className="text-center">{title}</h1>
                {banner_text ? <h3>{banner_text}</h3> : null}
            </DefaultBanner>
        </BannerPortal>
        <Component {...props} />
    </>)
}
