import React from 'react'
import {footerNav} from 'staticData'
import {Link} from 'react-router-dom'

import './Nav.scss'

const NavItem = ({url, title}) => <Link className="FooterNav__link" to={url}>{title}</Link>

export default function FooterNav() {
    return (
        <div className="FooterNav f-row">
            {
                footerNav.map((nav, index) => <NavItem key={index} {...nav}/>)
            }
        </div>
    )
}