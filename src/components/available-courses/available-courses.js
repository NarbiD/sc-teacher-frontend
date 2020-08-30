import React, {Component} from 'react';
import PageTitle from '../page-title/page-title';
import ItemList from '../item-list/item-list';
import CreateButton from '../create-button/create-button';
import ApiService from "../api-service/api-service";

export default class AvailableCourses extends Component{

    state = {
        courses: []
    }

    buttons = {
        delete: true,
        edit: true
    }

    setCourses = (courses) => {
        this.setState({courses: courses});
    }

    componentDidMount() {
        ApiService.updateCourses(this.setCourses);
    }

    render = () => {
        if(this.state.courses==={}) {return ""} else {console.log(this.state.courses);}
        return (
            <div className="container">
                <PageTitle text="Доступні курси" />
                <ItemList items={ this.state.courses }
                            onRemove={ this.props.onRemove }
                            buttons={this.buttons}
                            onEdit={ this.props.onEdit }
                            baseLink={"/courses/"} />
                <CreateButton label="Створити курс"
                            link="/courses/add"/>
            </div>
        );
    }
}
