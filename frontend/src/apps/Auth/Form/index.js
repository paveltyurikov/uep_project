import React, {Component} from 'react';
import {FormFormikEnhanced}from "components/Form";

import {authConfig} from 'appConfig'
import './index.scss'

class LoginForm extends Component {

    formSubmit = (values, {...other}) => {
        const {authLogin} = this.props;
        authLogin(values);
    };

    getSubmitButtonText = () => {
        const {loading} = this.props;
        return loading ? "Отправка..." : authConfig.buttonText;
    };

    render() {
        const {
            loading,
            requestErrors,
            clearRequestErrors
        } = this.props;
        const buttonText = this.getSubmitButtonText();
        return (
            <FormFormikEnhanced
                loading={loading}
                className="login-form"
                fields={authConfig.fields}
                formSubmit={this.formSubmit}
                requestErrors={requestErrors}
                clearRequestErrors={clearRequestErrors}
                formValidationSchema={authConfig.formValidationSchema}
                displayName="LoginForm"
                formSubmitButtonText={buttonText}
            />
        )
    }
}

export default LoginForm;