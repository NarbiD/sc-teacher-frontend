import React, { Component } from 'react';
import FileButton from '../../../buttons/file-button';

export default class FileMessage extends Component {
    state = {
        link:"",
        text:""
    }

    componentDidMount() {
        this.setState({text:this.props.text, link:this.props.file});
    }

    render() {
        return <span className="file-message">
                    <span className="d-flex file-message-attachment mb-2 mt-2">
                        <span className="col-sm-3">
                            <FileButton />
                        </span>
                        <span className="col-sm-9 mt-1">
                            {this.state.link}
                        </span>
                    </span>
                    <span>{this.state.text}</span>
                </span>
    }
}