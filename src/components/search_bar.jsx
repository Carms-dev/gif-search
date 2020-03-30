import React, { Component } from 'react';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchTerm: ''
    };
  }

  // shouldComponentUpdate(nextProps, nextState) {
  //   return false;
  // }

  handleInput = (event) => {
    this.setState({
      searchTerm: event.target.value
    });
    this.props.searchGif(event.target.value);
  };

  render() {
    return (
      <input
        value={this.state.searchTerm}
        type="text"
        className="form-search form-control"
        onChange={this.handleInput}
      />
    );
  }
}

export default SearchBar;
