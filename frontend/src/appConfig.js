import {string, object} from 'yup'

export const DEFAULT_PHONE_INPUT_MASK = ['7', '(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];
export const DEFAULT_PHONE_INPUT_PLACEHOLDER = '7 (   ) ___ __ __';


export const authConfig = {
    fields: [
        {
            name: "username",
            fieldType: 'input',
            //label: 'Логин',
            defaultValue: "nousername",
            type: 'hidden'
        },
        {
            name: "password",
            fieldType: 'input',
            type: 'password',
            label: 'Пароль',
        },
    ],
    formValidationSchema: object().shape({
        // username: string()
        //     .required('Введите логин'),
        password:
            string()
                .required('Введите пароль'),
        // author: string()
        //     .required('Укажите Имя и Фамилию')
    }),
    buttonText: "Аавторизация"
};


export const defaultReactSelectStyles = {
    defaultTheme: {
        singleValue: styles => ({
            ...styles,
            color: "#333",

        }),
        placeholder: styles => ({
            ...styles,
            color: "#CCCCCC",
            fontSize: 16,
        }),
        control: styles => ({
            ...styles,
            backgroundColor: 'white',
            borderColor: '#EBF0F2',
            borderWidth: 1,
            fontSize: 16,
            lineHeight: '100%',
            paddingTop: 7,
            paddingBottom: 6,
            paddingLeft: 4,
            borderRadius: 6,

        }),
        menuList: styles => ({
            ...styles,
            backgroundColor: 'white',
            color: 'whitesmoke',
            borderColor: '#333',
            borderRadius: 8
        }),
        option: (styles, {data, isDisabled, isFocused, isSelected}) => {
            return {
                ...styles,
                color: isDisabled
                    ? '#ccc'
                    : isSelected
                        ? '#253C5E'
                        : '#253C5E',
                backgroundColor: isSelected ? "#F6F7F7" : 'transparent',
                cursor: isDisabled ? 'not-allowed' : 'default',
            };
        },
    }
};