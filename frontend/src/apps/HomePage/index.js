import React, {PureComponent} from 'react'
import HomePageJumbo from 'components/HomePageJumbo'
import {BannerPortal} from 'components/Layout'
import About from './About'
import BusinessDirections from './BusinessDirections'
import Projects from './Projects'
import {
    scrollWindowToTop
} from 'utils/index'

export default class HomePage extends PureComponent {
    componentDidMount() {
        if (!window.location.hash) {
            scrollWindowToTop()
        }

    }

    render() {
        return (
            <>
                <BannerPortal>
                    <HomePageJumbo/>
                </BannerPortal>
                <About/>
                <BusinessDirections/>
                <Projects/>
            </>
        )
    }
}