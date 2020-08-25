import React, { Component } from 'react';
import SendButton from '../../buttons/send-button';
import InputForm from '../../form-elements/input-form'

import './dialog.css';
import MessageContainer from './message-container/message-container';
import SecondaryHeader from '../secondary-header/secondary-header';
import SearchPanel from '../../search-panel/search-panel';
import MenuButton from '../../buttons/menu-button';
import AttachmentButton from '../../buttons/attachment-button';

export default class Dialog extends Component {

    state = {
        dialogInputField: "",
        messages: [
            {id:1, text:"І ще одне велике повідомлення, що не вміщується в один рядок", type:"output", mark:true, time:"12:19"},
            {id:2, text:"І ще одне велике повідомлення, що не вміщується в один рядок", type:"output", mark:true, time:"12:19"},
            {id:3, text:"І ще одне велике повідомлення, що не вміщується в один рядок", type:"output", mark:true, time:"12:19"},
            {id:4, text:"І ще одне велике повідомлення, що не вміщується в один рядок", type:"output", mark:true, time:"12:19"},
            {id:5, text:"І ще одне велике повідомлення, що не вміщується в один рядок", type:"output", mark:true, time:"12:19"},
            {id:6, type:"input", time:"14:56", content:"image", attachment:" data:image/jpeg;base64,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"},
            {id:7, text:"Дякую. До 2020-02-02 я надішлю вам повідомлення із результатом перевірки роботи.", type:"output", time:"14:59", mark:true},
            {id:8, text:"Результати дослідження мережі", type:"input", time:"15:06", content:"file", attachment:"Local_Network_2.doc"},
            {id:9, text:"Документ отримано.", type:"output", time:"15:06", mark:true},
            {id:10, text:"Доступне нове завдання. Його потрібно виконати до 2020-02-04. Розробіть засоби для захисту корпоративної мережі чи атаки на неї. Оберіть варіант завдання, який є для вас більш цікавим. Захист мережі | Атака на мережу", type:"output", time:"12:13"},
            {id:11, text:"Теж не довге", type:"input", time:"12:18"},
            {id:12, text:"І ще одне велике повідомлення, що не вміщується в один рядок", type:"output", mark:true, time:"12:19"}
        ]
    }

    

    onChange = (e) => {
        const { name, value } = e.target;
        this.setState((state)=>{
            return { [name]: value }
        });
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
                <SecondaryHeader title="Діалог зі студентом" course_id={this.props.course_id} student_name={this.props.name} />
                <div className="d-flex justify-content-between filter-bar">
                    <div className="message-filter btn-group mb-1" role="toolbar">
                        <MenuButton label="Картинки" onClick={()=>{}}  />
                        <MenuButton label="Файли" onClick={()=>{}} />
                        <MenuButton label="Всі" onClick={()=>{}}  />
                    </div>
                    <div className="search">
                        <SearchPanel placeholder="Введіть слово для пошуку"/>
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