import React from 'react'
import { connectMessagesActions } from 'apps/Messages/connectors'
import {
    FormFormikEnhanced,
    SubmitButton,
    FormGroup,
    FormField,
} from 'components/Form'
import { contactFormConfig } from './config'
import './styles.scss'

const { fields } = contactFormConfig;

function ContactForm({ pushMessage }) {

    const createAppealSuccess = (json, formik) => {
        pushMessage({
            title: "Успешно",
            message: "Ваше обращение принято, мы свяжемся с вами"
        });
        formik.resetForm()
    };

    return (
        <div id="ContactForm" tabIndex={0} className="ContactForm">
            <h1 className="ContactForm__title">У вас возникли вопросы?</h1>
            <p>Вы всегда можете обратиться к нам</p>
            <FormFormikEnhanced
                className="ContactForm__form"
                onSuccess={createAppealSuccess}
                {...contactFormConfig}
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
        </div>
    )
}

export default connectMessagesActions(ContactForm)