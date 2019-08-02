import React from 'react'
import { NavHashLink as NavLink } from 'react-router-hash-link'
import './styles.scss'

export default function HomePageJumbo() {
    return (
        <div className="HomePageJumbo">
            <div className="HomePageJumbo__content">
                <div className="HomePageJumbo__heading">
                    <h1>Универсальная электронная платформа</h1>
                    <img className="HomePageJumbo__image" src="/static/images/layout/Logo-big.png" alt="Универсальная электронная платформа" />
                </div>
                <div className="HomePageJumbo__text">
                    Мы — IT компания, работающая в сфере информационно-аналитических систем.<br />
                    Мы занимаемся разработкой цифровых платформ, информационных систем <br /> 
                    и облачных сервисов, а также их поддержкой по всей России.
                </div>
                <NavLink
                    to={'/#ContactForm'}
                    scroll={el => el.scrollIntoView({ behavior: "smooth", block: "start", })}
                    className="HomePageJumbo__btn">
                        <img src="/static/images/layout/Path.svg" alt="Свяжитесь с нами" />
                    </NavLink>
            </div>
        </div>
    )
}