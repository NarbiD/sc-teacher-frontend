import React, { Component } from 'react';

import { withRouter } from 'react-router-dom';
import InputFormRow from '../form-elements/input-form-row';
import InputFormCheckbox from '../form-elements/input-checkbox';

import ApiService from "../api-service/api-service";

class SignUpForm extends Component{

    state = {
        name: null,
        surname: null,
        login: null,
        password: null,
        rank: null,
        contacts: null,
        acceptance:false
    }

    onChange = (e) => {
        const { name, value, type, checked } = e.target;
        this.setState((state)=>{
            if (type === 'checkbox') {
                return { [name]: checked }
            } else {
                return { [name]: value };
            }
        });
    }

    onSubmit = (e) => {
        e.preventDefault();
        ApiService.signUp(this.state);
        this.props.history.push("/");
    }

    render() {
        return (<form
            onSubmit={this.onSubmit}>
            <InputFormRow label="Логін"
                          type="text"
                          name="login"
                          value={this.state.comment}
                          onChange={this.onChange} />
            <InputFormRow label="Пароль"
                          type="password"
                          name="password"
                          value={this.state.comment}
                          onChange={this.onChange} />
            <InputFormRow label="Ім'я"
                          type="text"
                          name="name"
                          value={this.state.label}
                          onChange={this.onChange} />
            <InputFormRow label="Прізвище"
                          type="text"
                          name="surname"
                          value={this.state.comment}
                          onChange={this.onChange} />
            <InputFormRow label="Посада"
                          type="text"
                          name="rank"
                          value={this.state.comment}
                          onChange={this.onChange} />
            <InputFormRow label="Контакти"
                          type="text"
                          name="contacts"
                          value={this.state.comment}
                          onChange={this.onChange} />
            <InputFormCheckbox label="Я ознайомлений із правилами користування"
                               name="acceptance"
                               value={this.state.acceptance}
                               onChange={this.onChange} />
            <button
                type="submit"
                className="btn btn-outline-primary create-button float-right" >
                <span className="fa fa-plus"/>
                <span> Зберігти</span>
            </button>
        </form>)
    };
}

export default withRouter(SignUpForm);
