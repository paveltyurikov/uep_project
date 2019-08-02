import React from 'react'
import { Link } from 'react-router-dom'

import './Nav.scss'

const NavItem = ({ url, title }) => <Link to={url}>{title}</Link>

export default function FooterNav({ props }) {
    return (
        <div className="FooterNav f-row">
            {
                props.map((nav, index) => <NavItem key={index} {...nav} />)
            }
        </div>
    )
}