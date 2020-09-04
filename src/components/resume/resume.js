import React, { Component } from 'react';

import ItemList from '../item-list/item-list';
import SecondaryHeader from '../course-page/secondary-header/secondary-header';
import SortPanel from '../sort-panel/sort-panel';

import './resume.css'
import FilterPanel from '../filter-panel/filter-panel';
import ApiService from "../api-service/api-service";

export default class Resume extends Component {
    componentDidMount() {
        const { student, course_id } = this.props;
        this.setState(student, course_id);
        this.setItems()
    }

    buttons={teacher:"/", review:"/", vertical:true}

    onChange = ({filter}) => {
        this.setState({items:this.state.items.filter(filter)});
    }

    setItems() {
        this.setState({items:ApiService.getResume(this.props.student.id)});
    }

    render = () =>{
         return <div className="resume">
                <SecondaryHeader title="Резюме за курсами студента"
                    student_name={this.state.student.name}
                    course_id={this.state.course_id} />
                <div className="d-flex justify-content-between">
                    <FilterPanel filters={{"Завершені":this.onChange((item)=>item.status.complited), "Активні":()=>{}, "Всі":()=>{}}} />
                    <SortPanel />
                </div>
                <ItemList items={this.state.items} baseLink={`/courses/`} buttons={this.buttons} />
            </div>
    }
            
}