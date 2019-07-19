import React, {useState} from 'react'
import OutsideClickHandler from 'react-outside-click-handler'
import Hamburger from './Hamburger'
import NavItem from './NavItem'
import {connectNavigation} from 'apps/Nav/connectors'
import './styles.scss';

function Nav({navs = []}) {
    const [mobileVisibility, setMobileVisibility] = useState(false);
    const closeMenu = () => {
        setMobileVisibility(false)
    };
    return (
        <>
            <Hamburger className="navToggler" onClick={() => setMobileVisibility(!mobileVisibility)}>nav</Hamburger>
            <OutsideClickHandler onOutsideClick={closeMenu}>
                <nav className={mobileVisibility ? 'mobile-visible' : 'mobile-hidden'}>
                    {
                        navs.map(nav =>
                            <NavItem onClick={closeMenu} key={nav.id} {...nav}/>
                        )
                    }
                </nav>
            </OutsideClickHandler>
        </>
    )
}

export default connectNavigation(Nav)