import React from 'react';
import './App.css';

import AvailableCourses from '../available-courses/available-courses';
import Header from '../header/header';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import CreateCourse from '../create-course/create-course';
import EditCourse from '../edit-course/edit-course';
import PageTitle from '../page-title/page-title';
import CoursePage from '../course-page/course-page';

export default class App extends React.Component {

  maxId = 100;

  state = {
    items: [
        {id: 1, label: 'Course1', comment: 'Comment for course 1',
        startDate: '2020-01-20', endDate: '2020-06-21'},
        {id: 2, label: 'Course2', comment: 'Comment for course 2',
        startDate: '2020-01-21', endDate: '2020-06-23'},
        {id: 3, label: 'Course3', comment: 'Comment for course 3',
        startDate: '2020-01-28', endDate: '2020-06-24'}
    ]
  }

  changeItems = (update) => 
        this.setState((state) => ({ items: update(state.items) }));

  findIndex = (id) => 
        this.state.items.findIndex((item) => item.id === id);

  addItem = (newItem) => {
    const stateItem = { ...newItem, id:this.maxId++ };
    this.changeItems((items) => [ ...items, stateItem ]);
  }

  removeItem = (id) => {
    const idx = this.findIndex(id);
    this.changeItems((items) => [
      ...items.slice(0, idx),
      ...items.slice(idx + 1)
    ]);
  }

  editItem = (editedItem) => {
    const idx = this.findIndex(editedItem.id);
    this.changeItems((items) => [
      ...items.slice(0, idx),
      editedItem,
      ...items.slice(idx + 1)
    ]);
  }

  getCourse = (id) => {
    return this.state.items[id-1];
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
                  <AvailableCourses items={this.state.items}
                                  onRemove={ (item) => this.removeItem(item) } /> } 
                                  exact />
            <Route path="/courses/:id"
                  render={ ({ match }) => {
                      const { id } = match.params;
                      const course = this.getCourse(id);
                      return <CoursePage label={`Курс "${course.label}"`} />
                    }
                  } />
            <Route path="/create-course/"
                 render={ () => 
                 <CreateCourse onCreate={ (item) => this.addItem(item) } /> } />
            <Route path="/edit-course/:id"
                 render={ ({ match }) => {
                    const { id } = match.params;
                    const oldItem = this.getCourse(id); // todo: fix indexing
                    return <EditCourse onEdit={ this.editItem }
                                       courseItem={ oldItem } />            
                 }} />
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