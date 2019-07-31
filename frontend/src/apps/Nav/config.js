import {string, object} from "yup";

// Example 'blog_post';
export const defaultReduxKey = 'navigation';


// '/api/v1/blog/post/';
export const itemEndpoint = '/api/nav/';

export const itemFormConfig = {
    formFields:[
        {
            name:'name',
        },
        {
            name:'parent',
        }
    ],
    formValidationSchema: object().shape({
        name: string()
          .required('Поле не может быть пустым'),
    }),
};