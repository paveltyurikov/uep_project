import React from 'react'
import { HPHeader, HPBlock } from './helpers'
import { businessDirections } from 'staticData'
import './BusinessDirections.scss';

const BusinessDirection = ({ icon, title, text }) =>
    <div className="BusinessDirection">
        <div className="BusinessDirection__img">
            <img src={icon} alt={title} />
        </div>
        <div className="BusinessDirection__wrap">
            <div className="BusinessDirection__title">
                {title}
            </div>
            <div className="BusinessDirection__text">
                {text}
            </div>
        </div>
    </div>;

export default function BusinessDirections({ directions = businessDirections }) {
    return (
        <HPBlock name="bds" id="bds" tabIndex="0">
            <HPHeader>Направления деятельности компании </HPHeader>
            <div className="f-row">
                {
                    directions.map((direction, index) => <BusinessDirection key={index} {...direction} />)
                }
            </div>
        </HPBlock>
    )
}