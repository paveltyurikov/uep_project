import React from 'react';
import BackCallButton from 'components/BackCallButton';
import './styles.scss';

const HeaderButtons = ({ onSearchClick }) => {
    return (
        <div className="hbWrapper">
            <div className="header-support">
                <div className="header-phone">
                    <a href="tel:88007007997" className="header-phone__link" rel="nofollow">8 800 700-79-97</a>
                </div>
                <BackCallButton />
            </div>
            <div className="header-login">
                <a href="https://i.skdo.ru/" target="_blank" rel="noopener noreferrer nofollow" className="header-login__wrap">
                    <i className="fa fa-sign-in login" aria-hidden="true"></i>
                    <span>Вход</span>
                </a>
            </div>
            <div className="header-icon">
                <i onClick={onSearchClick} className="fa fa-search" aria-hidden="true"></i>
            </div>
        </div>
    )
}

export default HeaderButtons; 