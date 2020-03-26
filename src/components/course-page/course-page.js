import React, { Component } from 'react';
import PageTitle from '../page-title/page-title';
import ItemList from '../item-list/item-list';
import CreateButton from '../create-button/create-button';
import Menu from './menu/menu';

export default class CoursePage extends Component {
    state = {
        tasks: [
            {id: 1, label: 'task1', comment: 'Comment for task 1',
                startDate: '2020-01-28', endDate: '2020-01-31'},
            {id: 2, label: 'task2', comment: 'Comment for task 2',
                startDate: '2020-01-31', endDate: '2020-02-04'},
            {id: 3, label: 'task3', comment: 'Comment for task 2',
                startDate: '2020-02-05', endDate: '2020-02-10'},
            {id: 4, label: 'task4', comment: 'Comment for task 2',
                startDate: '2020-02-11', endDate: '2020-02-04'}
        ],
        students: [
            {id: 1, label: 'student1'},
            {id: 2, label: 'student2'},
            {id: 3, label: 'student3'},
            {id: 4, label: 'student4'},
            {id: 5, label: 'student5'}
        ]
    }
    buttons1 = {
        delete:true,
        edit:true
    }
    buttons2 = {
        message:true
    }
    render() {
        return <div className="course-name container">
            <PageTitle text={ this.props.label} />
            <div className="row">
            </div>

            <div className="row">
                <div className="col-lg-8">
                    {/* {<ItemList items={this.state.tasks}
                        onRemove={()=>{}}
                        buttons={this.buttons1}
                        baseLink={`/courses/${this.props.id}/task/`} /> }
                    <CreateButton label="Створити завдання"
                        link={`/courses/${this.props.id}/tasks/add`} />
                    <CreateButton label="Створити розсилку"
                        link={`/courses/${this.props.id}/tasks/add`} /> */}
                    <Menu courseId={ this.props.id } />
                </div>
                <div className="col-lg-4">
                    {<ItemList items={this.state.students}
                        onRemove={()=>{}} 
                        buttons={this.buttons2}
                        baseLink={`/courses/${this.props.id}/students/`}/> }
                    <CreateButton label="Додати студента"
                        link={`/courses/${this.props.id}/students/add`} />
                </div>

            </div>
           </div>
    }
}
