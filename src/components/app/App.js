import React from 'react';
import './App.css';

import AvailableCourses from '../available-courses/available-courses';
import Header from '../header/header';

import { BrowserRouter as Router, Route } from 'react-router-dom';
import CreateCourse from '../create-course/create-course';

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

  addItem(newItem) {
    this.maxId++;
    const entry = { id:this.maxId, ...newItem };
    const currentItems = [
      ...this.state.items,
      entry
    ];
    this.setState({items: currentItems});
  };

  removeItem(id) {
    console.log(id);
    this.setState((state) => {
      const idx = state.items.findIndex((item) => item.id === id);
      const items = [
        ...state.items.slice(0, idx),
        ...state.items.slice(idx + 1)
      ];
      return { items };
    });
  }

  createCourse() {
    return 
  }

  render(){
    return (
      <div className="App">
        <Router>
          <Header />
          <Route path="/"
                 render={ () => <h2>Welcome</h2> }
                 exact />
          <Route path="/courses/"
                 render={ () => 
                  <AvailableCourses 
                    items={this.state.items}
                    onRemove={ (item) => this.removeItem(item) } 
                  /> }
                 exact />
          <Route path="/create-course/"
                 render={ () => 
                  <CreateCourse
                    onCreate={ (item) => this.addItem(item) }
                  /> }
                  exact />
          <Route path="/sign-in/>"
                 render={ () => <h2>Авторизація викладача</h2> }
                 />
          <Route path="/sign-in/>"
                 render={ () => <h2>Реєстрація нового викладача</h2> }
                 />
        </Router>
      </div>
    );
  } 
}
