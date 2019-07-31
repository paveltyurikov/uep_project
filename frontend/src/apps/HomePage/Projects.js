import React from 'react'
import {HPHeader, HPBlock} from './helpers'
import Tabs, {TabContent} from "components/Tabs";
import {ProjectsTab1, ProjectsTab2} from 'staticData'
import './Projects.scss'


const defaultIcon = '/static/images/layout/HomePageDefaultIcon.svg';

const Card = ({icon, text}) =>
    <div className="ProjectsCard">
        <div style={{
            backgroundImage: `url(${icon ? icon : defaultIcon})`
        }} className="ProjectsCard__icon"/>
        <div className="ProjectsCard__text">{text}</div>
    </div>;

const Tab = ({items}) =>
    <div className="Projects__tab">
        {items.map((item, index) => <Card key={index}{...item}/>)}
    </div>;

export default function Projects() {
    return (
        <HPBlock id="HomePage_Projects">
            <HPHeader>Реализованные проекты</HPHeader>
            <Tabs className="Projects__tabs">
                <TabContent label="Портал проведения выставочных мероприятий">
                    <Tab items={ProjectsTab1}/>
                </TabContent>
                <TabContent label="Система управления строительством">
                    <Tab items={ProjectsTab2}/>
                </TabContent>
            </Tabs>
        </HPBlock>
    )
}