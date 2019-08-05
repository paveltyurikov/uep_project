import React, { useState, useEffect } from 'react'
import Container from 'components/Container'
import UepLogo from 'components/UepLogo'
import './styles.scss'

const HeaderPhone = () => <a href="tel:8495482144" className="headerPhone">+7 (495) 482-15-44</a>;

const offSetTriggerValue = 120

export default function Header({ children, isVacancies }) {
    const [scrolled, setScrolled] = useState(false);
    const checkScrolled = e => {
        if (window.pageYOffset > offSetTriggerValue && !scrolled) {
            setScrolled(true)
        }
        if (window.pageYOffset <= offSetTriggerValue && scrolled) {
            setScrolled(false)
        }
    };
    useEffect(() => {
        window.addEventListener("scroll", checkScrolled);
        return () => {
            window.removeEventListener("scroll", checkScrolled);
        };
    });

    const classes = (scrolled, isVacancies) => {
        var result = '';
        result = scrolled ? 'scrolled ' : '';
        result += isVacancies ? 'vacancies-page' : '';
        return result;
    };

    return (
        <header className={classes(scrolled, isVacancies)}>
            <Container>
                <UepLogo />
                {children}
                <HeaderPhone />
            </Container>
        </header>
    )
}