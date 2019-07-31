import React from 'react';
import './index.scss'

const Hamburger = ({onClick}) => (
    <div onClick={onClick} id="hamburger" className={'opened'}>
        <span/>
        <span/>
        <span/>
    </div>
);

export default Hamburger;