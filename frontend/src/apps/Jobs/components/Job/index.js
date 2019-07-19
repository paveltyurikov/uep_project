import React, {useState} from 'react'
import './styles.scss'
import Button from "components/Button";
import JobResponseForm from '../JobResponse'

const JobPropsList = ({title, jobProps = []}) => jobProps.length > 0 ?
    <div className="Job__props">
        <h4>{title}</h4>
        {
            jobProps.map(prop => <div key={prop.id} className="Job__prop">{prop.title}</div>)
        }
    </div>
    :
    null;

export default function Job({id, title, responsibilities = [], expectations = [], conditions = []}) {
    const [visibility, setVisibility] = useState(false);
    const [formVisibility, setFormVisibility] = useState(false);
    return (
        <div id={id} className="Job">
            <div onClick={() => setVisibility(!visibility)} className="Job__title">{title}
                <button onClick={() => setVisibility(!visibility)}>
                    {visibility ? '-' : '+'}
                </button>
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
                        <div className="Job__sign">
                            <p>Отправьте свое резюме, предыдущие проекты или рекомендации вашей мамы по адресу <a
                                href="mailto:info@ueplatform.ru">info@ueplatform.ru</a> или просто нажмите Откликнуться.
                            </p>
                            <Button onClick={() => setFormVisibility(!formVisibility)}>Откликнуться на вакансию</Button>
                        </div>
                        {formVisibility ? <JobResponseForm setFormVisibility={setFormVisibility} jobId={id}/> : null}
                    </>
                    : null
            }

        </div>
    )
}