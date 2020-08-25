import React, { Component } from 'react';

import ItemList from '../item-list/item-list';
import SecondaryHeader from '../course-page/secondary-header/secondary-header';
import SortPanel from '../sort-panel/sort-panel';

import './resume.css'
import FilterPanel from '../filter-panel/filter-panel';

export default class Resume extends Component {
    componentDidMount() {
        const { courses, student_name, course_id } = this.props;
        this.setState(student_name, course_id);
        this.setState({items:courses!==undefined ? [{ id:2, student_id:2, teacher_id:2, course_id:0, status:{complited:true, score:98, progress:"100%"}, label:courses[1].label, comment:"Успішність: 96 балів", startDate:courses[1].startDate, endDate:courses[1].endDate},
        { id:1, student_id:2, teacher_id:1, course_id:1, status:{complited:true, score:89, progress:"95%"},label:courses[0].label, review:true, comment:"Успішність: 90 балів", startDate:courses[0].startDate, endDate:courses[0].endDate},
        { id:3, student_id:2, teacher_id:2, course_id:2, status:{complited:false, progress:"54%"}, label:courses[2].label, comment:"Курс ще не завершено", startDate:courses[2].startDate, endDate:courses[2].endDate}] : []});
    }

    buttons={teacher:"/", review:"/", vertical:true}

    onChange = ({filter}) => {
        this.setState({items:this.state.items.filter(filter)});
    }

    render = () =>{
         return <div className="resume">
                <SecondaryHeader title="Резюме за курсами студента"
                    student_name={this.state.student_name}
                    course_id={this.state.course_id} />
                <div className="d-flex justify-content-between">
                    <FilterPanel filters={{"Завершені":this.onChange((item)=>item.status.complited), "Активні":()=>{}, "Всі":()=>{}}} />
                    <SortPanel />
                </div>
                <ItemList items={this.state.items} baseLink={`/courses/`} buttons={this.buttons} />
            </div>
    }
            
}