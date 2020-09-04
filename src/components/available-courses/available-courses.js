import React, {Component} from 'react';
import PageTitle from '../page-title/page-title';
import ItemList from '../item-list/item-list';
import CreateButton from '../create-button/create-button';
import ApiService from "../api-service/api-service";

export default class AvailableCourses extends Component{

    componentDidMount() {
        ApiService.updateCourses(this.props.setCourses);
    }

    render = () => {
        return (
            <div className="container">
                <PageTitle text="Доступні курси" />
                <ItemList items={ this.props.courses }
                            buttons={{ delete: true, edit: true }}
                            baseLink={"/courses/"} />
                <CreateButton label="Створити курс"
                            link="/courses/add"/>
            </div>
        );
    }
}
