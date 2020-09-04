import React, { Component } from 'react';

import './search-panel.css';

export default class SearchPanel extends Component {

  state = {
    term: ''
  };

  onTermChange = (e) => {
    this.setState({
      term: e.target.value
    });
    this.props.onChange(e.target.value);
  };

  render() {
    return (
      <div className="search-panel input-group input-group-sm mb-1">
          <div className="input-group-prepend">
            <span className="input-group-text">Пошук</span>
          </div>
          <input type="text" 
                 className="form-control search-input"
                 placeholder={this.props.placeholder?this.props.placeholder:""}
                 value={this.state.term}
                 onChange={ this.onTermChange } />
      </div>
    );
  };
}
