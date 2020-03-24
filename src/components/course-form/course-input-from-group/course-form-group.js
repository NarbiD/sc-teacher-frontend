import React, { Component } from 'react';

import {
	withRouter
} from 'react-router-dom';
import InputFormRow from '../../form-elements/input-form-row';
import CourseDuration from '../course-duration/course-duration/course-duration';
import InputFormCheckbox from '../../form-elements/input-checkbox';

class CourseFormGroup extends Component{

    state = {
        id: null,
        label: '',
        comment: '',
        startDate: '2020-01-01',
        endDate: '2020-01-01',
        active: true
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
        this.props.onSubmit(this.state);
        this.props.history.push("/courses/");
    }

    render() {
        return (<form
        onSubmit={this.onSubmit}>
            <InputFormRow label="Назва курсу"
                    type="text"
                    name="label"
                    value={this.state.label}
                    onChange={this.onChange}
                    comment="Публічна назва курсу, що буде відобраатись у переліку курсів викладача" />
            <InputFormRow label="Коментар"
                    type="text"
                    name="comment"
                    value={this.state.comment}
                    onChange={this.onChange}
                    comment="Особистий коментар для курсу, відображається лише викладачу" />
            <CourseDuration label="Тривалість курсу"
                    names={["startDate", "endDate"]}
                    startDate={this.state.startDate}
                    endDate={this.state.endDate}
                    onChange={this.onChange}
                    comment="Дати початку та закінчення курсу" />
            <InputFormCheckbox label="Активний курс"
                    name="active"
                    value={this.state.active}
                    onChange={this.onChange} />
            <button 
                type="submit" 
                className="btn btn-outline-primary create-button float-right" >
                <span className="fa fa-plus"></span>
                <span> Зберігти</span>
            </button>
        </form>)
    };
};

export default withRouter(CourseFormGroup);
