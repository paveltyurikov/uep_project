import React from 'react'
import {NavHashLink as NavLink} from 'react-router-hash-link'

export default function NavItem({title, url, onClick}) {
    const handleClick = () => {
        onClick()
    };

    return (
        <NavLink
            scroll={el => el.scrollIntoView({behavior: "smooth", block: "start",})}
            onClick={handleClick}
            to={url}
            className="NavItem">
            {title}
        </NavLink>
    )
}