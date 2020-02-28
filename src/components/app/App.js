import React from 'react';
import './App.css';

import AvailableCourses from '../available-courses/available-courses';
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
    console.log(this.state.items);
  };

  render(){
    return (
      <div className="App">
        <AvailableCourses items={this.state.items} />
        <br />
        <CreateCourse onCreate={ (item) => this.addItem(item) } />
      </div>
    );
  } 
}
