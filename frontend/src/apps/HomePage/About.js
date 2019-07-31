import React from 'react'
import {Link} from 'react-router-dom'
import Card from 'components/Card'
import './About.scss'
import {HPHeader,HPBlock} from './helpers'

export default function About() {
    return (
        <HPBlock id="HomePage_About">
            <HPHeader>О компании</HPHeader>
            <div className="f-row">
                <Card className="f-col">
                    <h3>Специалисты</h3>
                    <p>
                        «Универсальная Электронная Платформа» располагает штатом опытных специалистов, имеющих
                        профессиональную квалификацию в области решения задач внедрения и интеграции информационных
                        систем любого уровня сложности: опыт создания
                        и продвижения информационных систем.
                    </p>
                </Card>
                <Card className="f-col">
                    <h3>Вакансии</h3>
                    <p>Наши клиенты возлагают на нас огромную ответственность, помогая управлять их средствами
                        к существованию. Мы неустанно работаем, чтобы быть достойными этого доверия. Мы ищем тебя.</p>
                    <Link to='/jobs'>Смотреть все</Link>
                </Card>
            </div>
        </HPBlock>
    )
}