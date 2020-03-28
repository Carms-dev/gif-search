import React, { Component } from 'react';

class SearchBar extends Component {
  handleInput = (event) => {
    this.props.searchGif(event.target.value);
  };

  render() {
    return (
      <input type="text" className="form-search form-control"
             onChange={this.handleInput} />
    );
  }
}

export default SearchBar;
