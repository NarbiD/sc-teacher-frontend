import React, { Component } from 'react';

import './search-panel.css';

export default class SearchPanel extends Component {

  state = {
    term: ''
  };

  onTermChange = (e) => {
    const {onSearchChange = () => {}} = this.props;
    this.setState({
      term: e.target.value
    });

    onSearchChange(e.target.value);
  };

  render() {
    return (
      <div className="input-group input-group-sm mb-1">
          <div className="input-group-prepend">
            <span className="input-group-text">Пошук</span>
          </div>
          <input type="text" 
                 className="form-control search-input"
                 placeholder="Почніть вводити ПІБ студента"
                 value={this.state.term}
                 onChange={ this.onTermChange } />
      </div>
    );
  };
}
