import React from 'react';
import './App.css';

import AvailableCourses from '../available-courses/available-courses';
import Header from '../header/header';

import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import CreateCourse from '../create-course/create-course';
import EditCourse from '../edit-course/edit-course';
import CoursePage from '../course-page/course-page';
import Home from '../home/home'
import Footer from '../footer/footer';
import SingUp from "../sign-up/sign-up";
import SingIn from "../sign-in/sign-in";
import ApiService from "../api-service/api-service";

export default class App extends React.Component {

    state = {
        courses: []
    }

   setCourses = (courses) => this.setState({courses: courses});

   changeCourses = (update) => this.setCourses(update(this.state.courses));

   getCourse = (id) => this.state.courses.find(course=>course.id===id);

   findIndex = (id) => this.state.courses.findIndex((course) => course.id===id);

   addCourse = (newCourse) => {
    ApiService.addCourse(newCourse, (course) =>
        this.changeCourses((courses) => [...courses, course]));
   }

   removeCourse = (id) => {
      ApiService.removeCourse(id, () => {
          const idx = this.findIndex(id);
          if (idx>=0) {
              this.changeCourses((items) =>
                  [   ...items.slice(0, idx),
                      ...items.slice(idx + 1)  ]);
          }
      });
   }

   editCourse = (editedCourse) => {
      ApiService.editCourse(editedCourse, () => {
          const idx = this.findIndex(editedCourse.id);
          this.changeCourses((items) =>
              [ ...items.slice(0, idx),
                editedCourse,
                ...items.slice(idx + 1)  ]);
      });
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
                  <AvailableCourses
                                  courses={this.state.courses}
                                  setCourses={ this.setCourses } /> }
                                  exact />
            <Route path="/courses/add"
                 render={ () => 
                 <CreateCourse onCreate={ (course) => this.addCourse(course) } /> } />
            <Route path="/courses/:id/delete"
                  render={({ match }) => {
                    const { id } = match.params;
                    this.removeCourse(Number(id));
                    return <Redirect to="/courses/" />
                  }}
                  exact >
            </Route>
            <Route path="/courses/:id/edit"
                 render={ ({ match }) => {
                    const { id } = match.params;
                    const oldItem = this.getCourse(Number(id));
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
                      return <CoursePage id={id} />
                    }
                  } 
                  exact />
            <Route path="/courses/:id/predelete"
                  render={ ({ match }) => {
                    const items = this.state.courses;
                    const idx = this.findIndex(Number(match.params.id));
                    const oldItem = this.state.courses[idx];
                    const item = {...oldItem, deleting:true}
                    const stateWithDeleteConfirmationButton = 
                        [   ...items.slice(0, idx),
                            item,
                            ...items.slice(idx + 1)  ]
                    return <AvailableCourses 
                            courses={stateWithDeleteConfirmationButton} />}}
                            setCourses={ this.setCourses } /> }
                            exact />
            <Route path="/courses/:id/tasks"
                 render={ () => <CoursePage  /> } />
            <Route path="/signin"
                 render={ () => <SingIn /> } />
            <Route path="/signup"
                 render={ () => <SingUp /> } />
              <Route path="**/*.css."
                            render={ () => {
                                ApiService.signOut();
                                return <Redirect to="/main.css"/> }} />
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