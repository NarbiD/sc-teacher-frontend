import React, { Component } from 'react';
import StudentList from './student-list/student-list';
import SearchPanel from '../../search-panel/search-panel';
import CreateButton from '../../create-button/create-button';

export default class Sidebar extends Component {
    state = { search:'' }

    onSearchChange = (search) => {
        this.setState({ search });
    };
    
    searchItems(items, search) {
        if (search.length === 0) {
          return items;
        }
    
        return items.filter((item) => {
          return item.label.toLowerCase().indexOf(search.toLowerCase()) > -1;
        });
    }

    render() {
        const { search } = this.state;
        const visibleStudents = this.searchItems(this.props.students, search);
        return <div className="right-bar">
            <SearchPanel onSearchChange={this.onSearchChange}
                        placeholder="Почніть вводити ПІБ студента" />
            <StudentList students={visibleStudents}
                         courseId={this.props.courseId} />
            <CreateButton label="Додати студента"
                        link={`/courses/${this.props.courseId}/students/add`} />
        </div>
    }

}