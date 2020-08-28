import React from 'react';
import './App.css';

import AvailableCourses from '../available-courses/available-courses';
import Header from '../header/header';

import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import CreateCourse from '../create-course/create-course';
import EditCourse from '../edit-course/edit-course';
import PageTitle from '../page-title/page-title';
import CoursePage from '../course-page/course-page';
import Home from '../home/home'
import Footer from '../footer/footer';
import SingUp from "../sign-up/sign-up";
import SignInForm from "../sign-in-form/sign-in-form";
import SingIn from "../sign-in/sign-in";
import ApiService from "../api-service/api-service";

export default class App extends React.Component {

  maxId = 4;

  state = {
    courses: [
        {id: 11, label: 'Корпоративні системи', comment: 'Групи БІ-1, СМПР-2',
        startDate: '2020-01-20', endDate: '2020-04-21'},
        {id: 12, label: 'Методи та технології для розподілених систем', comment: 'Група БІ-2',
        startDate: '2020-01-21', endDate: '2020-04-23'},
        {id: 13, label: 'Інформатизація проектного бізнес-менеджменту', comment: 'Група БІ-2',
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
                 render={ () => <Home /> } 
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
            <Route path="/courses/:course_id/students/:student_id/message"
                  render={ ({ match }) => {
                      const { course_id, student_id } = match.params;
                      const course = this.getCourse(course_id);
                      return <CoursePage label={`Курс "${course.label}"`} 
                                        id={course_id} tabState="dialog" 
                                        student={student_id} />
                    }
                  } 
                  exact />
            <Route path="/courses/:course_id/students/:student_id"
                 render={ ({ match }) => {
                  const { course_id, student_id } = match.params;
                  const course = this.getCourse(course_id);
                  return <CoursePage label={`Курс "${course.label}"`} 
                                    id={course_id} tabState="resume" 
                                    student={student_id } 
                                    courses={this.state.courses} />
                } } />
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
            <Route path="/courses/:id/tasks"
                 render={ () => <CoursePage  /> } />
            <Route path="/signin"
                 render={ () => <SingIn /> } />
            <Route path="/signup"
                 render={ () => <SingUp /> } />
            <Route path="/signout"
                 render={ () => {
                         ApiService.signOut();
                         return <Redirect to="/"/>
                     }} />
          </Switch>
        </Router>
        <Footer />
      </div>
    );
  } 
}