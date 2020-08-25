import React, { Component } from 'react';

export default class TextMessage extends Component {
    state = {
        text:""
    }

    componentDidMount() {
        this.setState({text:this.props.text});
    }

    render() {
        return <span>{this.state.text}</span>
    }
}