import React, { PureComponent } from 'react'
import HomePageJumbo from 'components/HomePageJumbo'
import { BannerPortal } from 'components/Layout'
import BusinessDirections from './BusinessDirections'
import Projects from 'apps/HomePage/Projects'
import Vacancies from 'apps/HomePage/Vacancies'
import Container from 'components/Container'
import Header from 'components/Header'
import Navigation from 'components/Navigation'
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
                <Header>
                    <Navigation />
                </Header>
                <Container id={"banner_holder"}>
                    <BannerPortal />
                </Container>
                <section id="content">
                    <Container>
                        <BannerPortal>
                            <HomePageJumbo />
                        </BannerPortal>
                        <BusinessDirections />
                    </Container>
                </section>
                <Projects />
                <Vacancies count="4" />
            </>
        )
    }
}