import React, { useState } from 'react'
import './styles.scss'
import Button from "components/Button";
import JobResponseForm from '../JobResponse'

const JobPropsList = ({ title, jobProps = [] }) => jobProps.length > 0 ?
    <div className="Job__props">
        <h4>{title}</h4>
        {
            jobProps.map(prop => <div key={prop.id} className="Job__prop">{prop.title}</div>)
        }
    </div>
    :
    null;

export default function Job({ id, title, responsibilities = [], expectations = [], conditions = [] }) {
    const [visibility, setVisibility] = useState(false);
    const [formVisibility, setFormVisibility] = useState(false);
    return (
        <div id={id} className={responsibilities.length ? 'Job expandable' : 'Job'}>
            <div className="Job__title">{title}
                <button onClick={responsibilities.length ? () => setVisibility(!visibility) : null} className={visibility ? 'Job-expanded' : 'Job-collapsed'} />
            </div>
            {
                visibility ?
                    <>
                        <JobPropsList
                            title="Функции и обязанности"
                            jobProps={responsibilities}
                        />
                        <JobPropsList
                            title="Мы ожидаем"
                            jobProps={expectations}
                        />
                        <JobPropsList
                            title="Условия"
                            jobProps={conditions}
                        />
                        {
                            responsibilities.length
                                ? (
                                    <div className="Job__sign">
                                        <p>Отправьте свое резюме, предыдущие проекты или рекомендации вашей мамы по адресу <br />
                                            <a href="mailto:info@ueplatform.ru">info@ueplatform.ru</a> или просто нажмите Откликнуться.
                                    </p>
                                        <Button onClick={() => setFormVisibility(!formVisibility)}>Откликнуться на вакансию</Button>
                                        <p className="social-block">
                                            Есть друг, который может быть заинтересован? &nbsp;
                                            <a href="/"><img alt="" src="static/images/layout/Facebook.png" /></a>
                                            <a href="/"><img alt="" src="static/images/layout/VK.png" /></a>
                                            <a href="/"><img alt="" src="static/images/layout/LinkedIN.png" /></a>
                                        </p>
                                    </div>
                                )
                                : null
                        }
                        {formVisibility ? <JobResponseForm setFormVisibility={setFormVisibility} jobId={id} /> : null}
                    </>
                    : null
            }

        </div>
    )
}