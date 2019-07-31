import {object, string} from 'yup'

import {
    DEFAULT_PHONE_INPUT_MASK,
    DEFAULT_PHONE_INPUT_PLACEHOLDER
} from 'appConfig'

const APPEALS_URL = '/api/appeals/';

export const contactFormConfig = {
    formAction: APPEALS_URL,
    fields: {
        name: {
            name: 'name',
            label: 'Имя фамилия'
        },
        phone: {
            name: 'phone',
            label: 'Телефон',
            type: 'text',
            placeholder: DEFAULT_PHONE_INPUT_PLACEHOLDER,
            mask: DEFAULT_PHONE_INPUT_MASK,
            fieldType: 'masked'
        },
        message: {
            name: 'message',
            placeholder: 'Ваше сообщение',
            fieldType:"textarea"
        }
    },
    validationSchema: object().shape({
        phone: string()
            .required('Укажите телефон'),
    })
};