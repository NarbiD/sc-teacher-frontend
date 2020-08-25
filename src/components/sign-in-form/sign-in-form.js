import React, { Component } from 'react';

import { withRouter } from 'react-router-dom';
import InputFormRow from '../form-elements/input-form-row';
import InputFormCheckbox from "../form-elements/input-checkbox";

class SignInForm extends Component{

    state = {
        login: null,
        password: null,
        rememberMe: false
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
        postData("/signIn", this.state);
        // this.props.onSubmit(this.state);
        this.props.history.push("/courses/");
    }

    render() {
        return (<form
            onSubmit={this.onSubmit}>
            <InputFormRow label="Логін"
                          type="text"
                          name="login"
                          value={this.state.comment}
                          onChange={this.onChange}
                          comment="Особистий коментар для курсу, відображається лише викладачу" />
            <InputFormRow label="Пароль"
                          type="password"
                          name="password"
                          value={this.state.comment}
                          onChange={this.onChange}
                          comment="Особистий коментар для курсу, відображається лише викладачу" />
            <InputFormCheckbox label="Запам'ятати мене"
                               name="rememberMe"
                               value={this.state.rememberMe}
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

async function postData(url = '', data = {}) {
    const response = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
    });
    let tokenContainer =  await response.json();
    if (tokenContainer.value != null) {
        document.cookie = "Auth-Token=" + tokenContainer.value;
    }
}

export default withRouter(SignInForm);
