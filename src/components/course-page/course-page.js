import React, { Component } from 'react';
import PageTitle from '../page-title/page-title';
import Menu from './menu/menu';
import Content from './content/content';
import Sidebar from './sidebar/sidebar';
import TeacherList from './teacher-list/teacher-list';
import Dialog from './dialog/dialog';
import Resume from '../resume/resume';

export default class CoursePage extends Component {
    state = {
        students: [
            {id: 1, label: 'Буркало Тарас'},
            {id: 2, label: 'Іваненко Вячеслав'},
            {id: 3, label: 'Ігнашов Денис'},
            {id: 4, label: 'Мангер Катерина'},
            {id: 5, label: 'Москальчук Максим'},
            {id: 6, label: 'Осіпьонок Максим'},
            {id: 7, label: 'Переяслов Олексій'},
            {id: 8, label: 'Шамич Марія'}
        ],
        tasks:[
            {id: 1, label: 'Розробити топологію корпоративної мережі', comment: 'Спроектувати на базі технології Ethernet',
                startDate: '2020-01-28', endDate: '2020-01-31', mark: {text: 'Усі студенти', title: 'Усі студенти'}},
            {id: 2, label: 'Розробти засоби по захисту інформації в корпоративній мережі', comment: 'Провести аналіз за підручником, ст.53',
                startDate: '2020-01-31', endDate: '2020-02-04', mark: {text: 'Завдання із вибором', title: 'Завдання із вибором'}},
            {id: 3, label: 'Спроектувати структуру засобів для резервного копіювання даних',
                startDate: '2020-02-05', endDate: '2020-02-10', mark: {text: 'Обрані студенти', title: 'Ігнашов Д.; Москальчук М.'}},
            {id: 4, label: 'Запропонувати рішення по забезпеченню відмовостійкості в корпоративній мережі', comment: 'Вказати не менше 3-х варіантів',
                startDate: '2020-02-11', endDate: '2020-02-04', mark: {text: 'Обрані студенти', title: 'Іваненко В.; Осіпьонок М.'}}
        ],
        mailing:[
            {id: 1, label: 'Додаткові матеріали до лабораторної роботи 1',
                startDate: '2020-01-28', time: '11:00'},
            {id: 2, label: 'Допоміжні матеріали для підготовки до семінарів',
                startDate: '2020-01-31', time: '10:00'},
            {id: 3, label: 'Розклад конференції "Іноваційні технології"', comment: 'Розклад до конференції, що відбудеться у 01 аудиторії 02.04.2020',
                startDate: '2020-02-05', time: '19:30'}
        ],
        materials:[{id: 1, label: 'Задачі та принципи побудови корпоративноъ системи', comment: 'link: http://localhost:3000/...'},
                    {id: 2, label: 'Методичні вказівки до курсу', comment: 'pdf'}],
        teachers:[{id: 1, name: "Заславський Володимир Анатолійович", status: "Професор кафедри МІ", contacts:"+38(095)-000-00-00"},
        {id: 2, name: "Ставровський Андрій Борисович", status: "Доцент кафедри ТК", contacts:"+38(095)-000-00-01"}],
        tabState: 'tasks'
    }

    componentWillReceiveProps() {
        console.log(this.props.tabState, this.state.tabState);
        const tabState = this.props.tabState;
        this.setState({ tabState:tabState===undefined?"tasks":tabState });
    }

    updateComponent = (tabState) => {
        this.setState({ tabState });
    }

    render() {
        let content = undefined;
        if (this.state.tabState === 'tasks') {
            content = <Content courseId={this.props.id} items={this.state.tasks} />
        } else if (this.state.tabState === 'mailing') {
            content = <Content courseId={this.props.id} items={this.state.mailing} />
        } else if (this.state.tabState === 'materials') {
            content = <Content courseId={this.props.id} items={this.state.materials} />
        } else if (this.state.tabState === 'teachers') {
            const buttons={edit:true,delete:true,message:true};
            content = <TeacherList courseId={this.props.id} items={this.state.teachers} 
                        buttons={buttons} baseLink={`/courses/${this.props.id}/teachers/`} />
        }
        let student;
        if (this.props.student !== undefined) {
            student = this.state.students[this.props.student-1].label;
        } else {
            student = undefined;
        }
            return <div className="course-page container">
                    <div className="course-name row">
                        <PageTitle text={ this.props.label } />
                    </div>
                    <div className="row">
                        <div className="col-lg-8">
                            {this.state.tabState === "dialog" ?
                            <Dialog course_id={this.props.id} name={student} /> :
                            this.state.tabState === "resume" ?
                            <Resume courses={this.props.courses}
                                    student_name={student} 
                                    course_id={this.props.id} /> :
                            <div className="tab-menu">
                                <Menu courseId={ this.props.id } update={ this.updateComponent } />
                                {content}
                            </div>
                            }  
                        </div>
                        <div className="col-lg-4">
                            <Sidebar courseId={this.props.id}
                                      students={this.state.students} />
                        </div>
                    </div>
                </div>
    }
}
