import React, { Component } from 'react';

export default class ImageMessage extends Component {
    state = {
        src:"",
        text:""
    }

    componentDidMount() {
        this.setState({text:this.props.text, src:this.props.image});
    }

    render() {
        console.log(this.state.text);
        return <span className="image-message">
                    <span className="mb-1">
                        <img src={this.state.src} alt=""/>
                    </span><br/>
                    <span>{this.props.text}</span>
                </span>
    }
}