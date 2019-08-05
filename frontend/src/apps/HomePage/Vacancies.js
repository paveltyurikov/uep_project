import React from 'react'
import { HPHeader, HPBlock } from './helpers';
import Container from 'components/Container';
import './Vacancies.scss'

const Vacanciesinfo = ({ count }) => {
    return (
        <div className="Vacancies_info">
            <h3>Вакансии <span>{count}</span></h3>
            <div>
                Работа в нашей компании - это достойная оплата труда, дружный коллектив, а также идеальные условия для личного и профессионального роста.
            </div>
            <a alt="Список вакансий" href="/vacancies">
                Список вакансий <img src="/static/images/layout/arrow-right.png" alt="Список вакансий" />
            </a>
        </div>
    )

}

export default function Vacancies(props) {
    return (
        <>
            <div className="Vacancies_divider"></div>
            <HPBlock id="HomePage_Vacancies">
                <Container>
                    <HPHeader>Работа в компании</HPHeader>
                    <div className="Vacancies_wrap">
                        <div>
                            <h3>Специалисты</h3>
                            <div>
                                Наша команда – это лучшие специалисты в самых разных профессиональных областях, которые справятся с любыми задачами по внедрению и интеграции IT-систем, а также всесторонней поддержке проекта на протяжении всего срока его реализации.
                            </div>
                        </div>
                        <Vacanciesinfo {...props} />
                    </div>
                </Container>
            </HPBlock>
        </>
    )
}