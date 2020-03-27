import React, { Component } from 'react';

class Gif extends Component {
  handleSelect = () => {
    if (this.props.selectGif) {
      this.props.selectGif(this.props.id);
    }
  }

  render() {
    const src = `https://media0.giphy.com/media/${this.props.id}/giphy.gif`;
    return (
      <img className="gif" src={src} alt="gif" onClick={this.handleSelect} />
    );
  }
}

export default Gif;
