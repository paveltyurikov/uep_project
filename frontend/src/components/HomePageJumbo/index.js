import React from 'react'
import {NavHashLink as NavLink} from 'react-router-hash-link'
import './styles.scss'

export default function HomePageJumbo() {
    return (
        <div className="HomePageJumbo">
            <div className="HomePageJumbo__content">
                {/*<UepHeader/>*/}
                <h1>Universal Electronic Platform</h1>
                <div className="HomePageJumbo__text">
                    UEP является разработчиком информационно-аналитических систем, одновременно обеспечивая техническую
                    и консультационную поддержку пользователей по всей России
                </div>
                <NavLink
                    to={'/#ContactForm'}
                    scroll={el => el.scrollIntoView({behavior: "smooth", block: "start",})}
                    className="HomePageJumbo__btn btn">Связаться с нами</NavLink>
            </div>
        </div>
    )
}