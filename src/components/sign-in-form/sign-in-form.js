import React, { Component } from 'react';

import { withRouter } from 'react-router-dom';
import ApiService from "../api-service/api-service";

import './sign-in-form.css';
import InputForm from "../form-elements/input-form";

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
        ApiService.signIn(this.state);
        this.props.hideForm(true);
        this.props.history.push("/");
    }

    render() {
        return (<form
            onSubmit={this.onSubmit}
            className="form-row">
            <span className="form-group col-md-5">
                <InputForm type="text"
                          name="login"
                          onChange={this.onChange}
                                             placeholder={"Логін"} />
            </span>
            <span className="form-group col-md-5">
                <InputForm type="password"
                          name="password"
                          onChange={this.onChange}
                          placeholder={"Пароль"} />
            </span>
            <button
                type="submit"
                className="btn btn-info btn-sm sign-in-btn float-right form-group col-md-1" >
                <span className="fas fa-sign-in-alt"/>
            </button>
        </form>)
    };
}

export default withRouter(SignInForm);
