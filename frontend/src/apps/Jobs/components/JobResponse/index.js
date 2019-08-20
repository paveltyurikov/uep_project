import React from 'react'
import { connectMessagesActions } from 'apps/Messages/connectors'
import {
    FormFormikEnhanced,
    SubmitButton,
    FormGroup,
    FormField,
} from 'components/Form'

import { jobResponseFormConfig } from 'apps/Jobs/config'

import './styles.scss'


const { fields, formAction } = jobResponseFormConfig;

function JobResponseForm({ jobId, pushMessage, setFormVisibility }) {
    const formActionUrl = `${formAction}${jobId}/add_response/`;
    const createJobResponseSuccess = (json, formik) => {
        pushMessage({
            title: "Успешно",
            message: "Ваше обращение принято, мы свяжемся с вами"
        });
        formik.resetForm();
        setFormVisibility(false)
    };
    return (
        <div className="JobResponseForm">
            <div className="JobResponseForm__heading">
                <h3>Отклик на вакансию</h3>
                <a onClick={() => setFormVisibility(false)}></a>
            </div>
            <FormFormikEnhanced
                {...jobResponseFormConfig}
                formAction={formActionUrl}
                className="JobResponseForm__form"
                onSuccess={createJobResponseSuccess}
            >
                <FormGroup inline>
                    <FormField
                        className={'name'}
                        {...fields.name}
                    />
                    <FormField
                        {...fields.phone}
                    />


                </FormGroup>
                <FormField

                    {...fields.message}
                />
                <div className="form-controls">
                    <SubmitButton>Отправить</SubmitButton>
                </div>
            </FormFormikEnhanced>
        </div >
    )
}

export default connectMessagesActions(JobResponseForm)