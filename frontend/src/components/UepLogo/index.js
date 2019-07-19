import React from 'react'
import {Link} from "react-router-dom";
import {scrollWindowToTop} from 'utils/index'
import './styles.scss'
const onLogoClick = e => {
    if (e.target.pathname === '/') {
        scrollWindowToTop()
    }
};

const UepLogo = () => <Link onClick={onLogoClick} to='/' className="UepLogo"/>;

export default UepLogo