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
        postData("/signIn", this.state)
            .then(response => this.setToken(response.json()));
        // this.props.onSubmit(this.state);
        this.props.history.push("/courses/");
    }

    setToken(tokenContainer) {
        if (tokenContainer.value != null) {
            document.cookie = "Auth-Token=" + tokenContainer.value;
        }
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

export default withRouter(SignInForm);
