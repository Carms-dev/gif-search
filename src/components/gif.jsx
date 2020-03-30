import React, { Component } from 'react';

class Gif extends Component {
  handleSelect = () => {
    const { selectGif, id } = this.props;

    if (selectGif) {
      selectGif(id);
    }
  };

  shouldComponentUpdate(nextProps, nextState) {
    return nextProps.id !== this.props.id;
  }

  render() {
    const { id } = this.props;

    // guarding clause
    if (!id) {
      return null;
    }

    const src = `https://media.giphy.com/media/${id}/giphy.gif`;

    return (
      <img src={src} alt="gif" className="gif" onClick={this.handleSelect} />
    );
  }
}

export default Gif;
