import React, {Component} from 'react'
import Button from 'components/Button'
import FormInput from 'components/FormInput'
import './index.scss'

const initialState = {
    email: ''
};

export default class GetEmailForm extends Component {
    state = initialState;
    handleChange = (e) => {
        this.setState({[e.target.name]: e.target.value})
    };
    onSubmit = (e) => {
        e.preventDefault();
        this.props.onSubmit(this.state);
        this.resetState()
    };

    resetState = () => {
        this.setState({...initialState})
    };

    render() {
        return (
            <form
                className="get-email-form"
                onSubmit={this.onSubmit}>
                <h3>Введите ваш email</h3>
                <FormInput>
                    <input
                        name="email"
                        type="email"
                        className="form-input__input"
                        onChange={this.handleChange}
                        value={this.state.email}
                        required
                    />
                </FormInput>
                <Button type="submit">Сохранить</Button>
            </form>
        )
    }
}

