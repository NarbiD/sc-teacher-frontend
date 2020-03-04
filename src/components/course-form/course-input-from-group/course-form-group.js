import React, { Component } from 'react';

import {
	withRouter
} from 'react-router-dom';

class CourseFormGroup extends Component{

    state = {
        id: null,
        label: '',
        comment: '',
        startDate: '2020-01-01',
        endDate: '2020-01-01',
        active: false
        }

    componentDidMount() {
        this.setState((state)=>{
            if (this.props.formState) {
                return this.props.formState;
            }
        });
    }

    onChange = (e) => {
        const { name, value, type, checked } = e.target;
        if (type === 'checkbox') {
            this.setState({ [name]: !checked });
        } else {
            this.setState({ [name]: value });
        }
    }

    onSubmit = (e) => {
        e.preventDefault();
        this.props.onSubmit(this.state);
        this.props.history.push("/courses/");
    }

    render() {
        return (<form
        onSubmit={this.onSubmit}>
            <div className="form-group">
                <label className="input-form-label">Назва курсу</label>
                <input type="text"
                    className="form-control"
                    name="label"
                    value={this.state.label}
                    onChange={this.onChange}
                    placeholder=""
                    />
                <small className="form-text text-muted">Публічна назва курсу, що буде відобраатись у переліку курсів викладача</small>
            </div>
            <div className="form-group">
                <label className="input-form-label">Коментар</label>
                <input type="text"
                    className="form-control"
                    name="comment"
                    value={this.state.comment}
                    onChange={this.onChange}
                    placeholder="" />
                <small className="form-text text-muted">Особистий коментар для курсу, відображається лише викладачу</small>
            </div>
            <div className="form-group">
                <label>Початок курсу</label>
                <input 
                    className="form-control"
                    name="startDate"
                    value={this.state.startDate}
                    onChange={this.onChange}
                    type="date" />
            </div>
            <div className="form-group">
                <label>Кінець курсу</label>
                <input 
                    className="form-control" 
                    name="endDate"
                    value={this.state.endDate}
                    onChange={this.onChange}
                    type="date" />
            </div>
            <div className="form-check">
                <label className="form-check-label">
                    <input 
                    className="form-check-input"
                    name="active"
                    value={this.state.active}
                    onChange={this.onChange}
                    type="checkbox" />
                    <span> Активний курс</span>
                </label>
            </div>
            <button 
                type="submit" 
                className="btn btn-outline-primary float-right" >
                <span className="fa fa-plus"></span>
                <span> Зберігти</span>
            </button>
        </form>)
    };
};

export default withRouter(CourseFormGroup);
