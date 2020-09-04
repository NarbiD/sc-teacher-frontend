import React, { Component } from 'react';
import PageTitle from '../page-title/page-title';
import Menu from './menu/menu';
import Content from './content/content';
import Sidebar from './sidebar/sidebar';
import TeacherList from './teacher-list/teacher-list';
import Dialog from './dialog/dialog';
import Resume from '../resume/resume';
import ApiService from "../api-service/api-service";
import objectAdapter from "../api-service/object-adapter";

export default class CoursePage extends Component {
    state = {
        students: [],
        teachers:[],
        tabState: 'tasks',
        content:""
    }

    makeContentBox = (tabName) => {
        if (['tasks', 'mailings', 'materials'].includes(tabName)) {
            ApiService.getContent(this.props.id, tabName, (data) =>{
                objectAdapter(data, 'title', 'label');
                this.setState({ content:
                        <Content courseId={this.props.id}
                                 items={objectAdapter(data, 'title', 'label')} /> });
            });
        } else if (this.state.tabState === 'teachers') {
            const buttons={edit:true,delete:true,message:true};
            this.setState({content:  <TeacherList courseId={this.props.id} items={this.state.teachers}
                                                  buttons={buttons} baseLink={`/courses/${this.props.id}/teachers/`} />});
        }
    }

    setStudents = (students) => this.setState({students:students});

    getStudents = () => {
        ApiService.getStudents(this.props.id, this.setStudents)
    }

    componentDidMount() {
        this.getStudents()
        this.makeContentBox(this.state.tabState);
    }

    updateComponent = (tab) => {
        this.makeContentBox(tab);
    }

    render() {
            return <div className="course-page container">
                    <div className="course-name row">
                        {/*<PageTitle text={ this.props.label } />*/}
                    </div>
                    <div className="row">
                        <div className="col-lg-8">
                            {this.state.tabState === "dialog" ?
                            <Dialog course_id={this.props.id} student={this.props.student} /> :
                            this.state.tabState === "resume" ?
                            <Resume student={this.props.student}
                                    course_id={this.props.id} /> :
                            <div className="tab-menu">
                                <Menu courseId={ this.props.id } update={ this.updateComponent } />
                                {this.state.content}
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
