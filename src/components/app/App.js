import React from 'react';
import './App.css';

import AvailableCourses from '../available-courses/available-courses';
import Header from '../header/header';

import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import CreateCourse from '../create-course/create-course';
import EditCourse from '../edit-course/edit-course';
import PageTitle from '../page-title/page-title';
import CoursePage from '../course-page/course-page';

export default class App extends React.Component {

  maxId = 4;

  state = {
    courses: [
        {id: 1, label: 'Course1', comment: 'Comment for course 1',
        startDate: '2020-01-20', endDate: '2020-06-21'},
        {id: 2, label: 'Course2', comment: 'Comment for course 2',
        startDate: '2020-01-21', endDate: '2020-06-23'},
        {id: 3, label: 'Course3', comment: 'Comment for course 3',
        startDate: '2020-01-28', endDate: '2020-06-24'}
    ]
  }

  changeCourses = (update) => 
        this.setState((state) => ({ courses: update(state.courses) }));

  findIndex = (id) =>
        this.state.courses.findIndex((item) => item.id === id);

  addCourse = (newItem) => {
    const stateItem = { ...newItem, id:this.maxId++ };
    this.changeCourses((items) => [ ...items, stateItem ]);
  }

  removeCourse = (id) => {
    const idx = this.findIndex(id);
    this.changeCourses((items) => [
      ...items.slice(0, idx),
      ...items.slice(idx + 1)
    ]);
  }

  editCourse = (editedCourse) => {
    const idx = this.findIndex(editedCourse.id);
    this.changeCourses((items) => [
      ...items.slice(0, idx),
      editedCourse,
      ...items.slice(idx + 1)
    ]);
  }

  getCourse = (id) => {
    return this.state.courses[id-1];
  }
  
  render() {
    return (
      <div className="App">
        <Router>
          <Header />
          <Switch>
            <Route path="/"
                 render={ () => <PageTitle text="Welcome!"/> } 
                 exact />
            <Route path="/courses/"
                 render={ () =>
                  <AvailableCourses courses={this.state.courses}
                                  onRemove={ (course) => this.removeCourse(course) } /> } 
                                  exact />
            <Route path="/courses/add"
                 render={ () => 
                 <CreateCourse onCreate={ (course) => this.addCourse(course) } /> } />
            <Route path="/courses/:id/delete"
                  render={({ match }) => {
                    const { id } = match.params;
                    this.removeCourse(Number(id)); // todo: fix changing state during render
                    return <Redirect to="/courses/" />
                  }} 
                  exact >
            </Route>
            <Route path="/courses/:id/edit"
                 render={ ({ match }) => {
                    const { id } = match.params;
                    const oldItem = this.getCourse(id); // todo: fix indexing
                    console.log(id);
                    return <EditCourse onEdit={ this.editCourse }
                                       course={ oldItem } /> 
                 }} />
            <Route path="/courses/:id"
                  render={ ({ match }) => {
                      const { id } = match.params;
                      const course = this.getCourse(id);
                      return <CoursePage label={`Курс "${course.label}"`} id={id} />
                    }
                  } 
                  exact />
            <Route path="/courses/:id/predelete"
                  render={ ({ match }) => {
                    const { id } = match.params;
                    const items = this.state.courses;
                    const idx = this.findIndex(Number(id));
                    const oldItem = this.state.courses[idx];
                    const item = {...oldItem, deleting:true}
                    const stateWithDeleteConfirmationButton = 
                        [...items.slice(0, idx),
                        item,
                        ...items.slice(idx + 1)]
                    return <AvailableCourses 
                            courses={stateWithDeleteConfirmationButton} />}} 
                            exact />
            
            <Route path="/sign-in"
                 render={ () => <PageTitle text="Авторизація викладача" /> } />
            <Route path="/sign-up"
                 render={ () => <PageTitle text="Реєстрація нового викладача" /> } />
          </Switch>
        </Router>
      </div>
    );
  } 
}