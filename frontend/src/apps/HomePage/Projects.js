import React from 'react';
import { HPHeader, HPBlock } from './helpers';
import { ProjectList1, ProjectList2 } from 'staticData';
import './Projects.scss';

const List = ({ title, items }) =>
    <div className="Projects__list">
        <h3 className="Projects__title">{title}</h3>
        <ul>
            {
                items.map(({ text }, index) => <li key={index}>{text}</li>)
            }
        </ul>

    </div>;

export default function Projects() {
    return (
        <HPBlock id="HomePage_Projects">
            <HPHeader>Реализованные проекты</HPHeader>
            <div className="Projects__wrap">
                <List title="Платформа проведения выставочных мероприятий" items={ProjectList1} />
                <img src="/static/images/layout/Project-1.png" alt="Платформа проведения выставочных мероприятий" />
            </div>
            <div className="Projects__wrap">
                <img src="/static/images/layout/Project-2.png" alt="Система управления строительством" />
                <List title="Система управления строительством" items={ProjectList2} />
            </div>

        </HPBlock>
    )
}