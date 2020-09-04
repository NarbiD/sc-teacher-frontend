import React, { Component } from 'react';
import SendButton from '../../buttons/send-button';
import InputForm from '../../form-elements/input-form'

import './dialog.css';
import MessageContainer from './message-container/message-container';
import SecondaryHeader from '../secondary-header/secondary-header';
import SearchPanel from '../../search-panel/search-panel';
import MenuButton from '../../buttons/menu-button';
import AttachmentButton from '../../buttons/attachment-button';
import ApiService from "../../api-service/api-service";

export default class Dialog extends Component {

    state = {
        dialogInputField: "",
        messages: []
    }

    getMessages() {
        ApiService.getMessages(this.props.course_id,
            this.props.student.id,
            20,
            messages=>this.setState({messages:messages}));
    }

    searchMessages(text) {
        ApiService.searchMessages(this.props.course_id,
            this.props.student.id,
            20,
            text,
            messages=>this.setState({messages:messages}));
    }

    componentDidMount() {
        this.getMessages();
    }

    onChange = (e) => {
        const { name, value } = e.target;
        this.setState({ [name]: value });
        if (name === "searchField") {
            this.searchMessages(value);
        }
    }

    onSubmit = (e) => {
        e.preventDefault();
        this.setState((state)=>{
            return { messages:[...state.messages, {id:10, text:state.dialogInputField, type:"output", time:"now"}],
                    dialogInputField:""}
        });
    }

    render() {
        return (
            <div className="dialog">
                <SecondaryHeader title="Діалог зі студентом" course_id={this.props.course_id} student_name={this.props.student.name} />
                <div className="d-flex justify-content-between filter-bar">
                    <div className="message-filter btn-group mb-1" role="toolbar">
                        <MenuButton label="Картинки" onClick={()=>{}}  />
                        <MenuButton label="Файли" onClick={()=>{}} />
                        <MenuButton label="Всі" onClick={()=>{}}  />
                    </div>
                    <div className="search">
                        <SearchPanel placeholder="Введіть слово для пошуку" onChange={this.onChange}/>
                    </div>
                </div>
                <div className="dialog-history mb-1">
                    <MessageContainer messages={this.state.messages} />
                </div>
                <form className="dialog-input-field d-flex"
                    onSubmit={this.onSubmit}>
                    <InputForm placeholder="Введіть повідолення..."
                                name="dialogInputField"
                                onChange={this.onChange}
                                value={this.state.dialogInputField}
                                type="text" />
                    <AttachmentButton />
                    <SendButton />
                </form>
            </div>
        );
    }
}