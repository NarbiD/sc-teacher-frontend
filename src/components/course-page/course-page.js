import React, { Component } from 'react';
import PageTitle from '../page-title/page-title';
import Menu from './menu/menu';
import Content from './content/content';
import Sidebar from './sidebar/sidebar';

export default class CoursePage extends Component {
    state = {
        students: [
            {id: 1, label: 'student1'},
            {id: 2, label: 'student2'},
            {id: 3, label: 'student3'},
            {id: 4, label: 'student4'},
            {id: 5, label: 'student5'}
        ]
    }

    render() {
        return <div className="course-page container">
                    <div className="course-name row">
                        <PageTitle text={ this.props.label} />
                    </div>
                    <div className="row">
                        <div className="col-lg-8">
                                <Menu courseId={ this.props.id } />
                                <Content courseId={ this.props.id } />
                        </div>
                        <div className="col-lg-4">
                            <Sidebar courseId={this.props.id}
                                      students={this.state.students} />
                        </div>
                    </div>
                </div>
    }
}
