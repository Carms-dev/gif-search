import React, { Component } from 'react';
import giphy from 'giphy-api';

import SearchBar from './search_bar';
import Gif from './gif';
import GifList from './gif_list';

const GIPHY_API_KEY = '0Cm5zb8py2GXXWL1EOei4H1yXe5Iu57b';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      gifs: [],
      selectedGifId: 'XZNidMVhsXv6K88uZZ'
    };
    // this.search('kitten');
  }

  search = (query) => {
    // giphy api
    giphy(GIPHY_API_KEY).search({
      q: query,
      rating: 'g',
      limit: 10
    }, (error, result) => {
      // Res contains gif data!
      // console.log(result.data);
      this.setState({
        gifs: result.data
      });
    });
  }

  select = (id) => {
    this.setState({
      selectedGifId: id
    });
  }

  render() {
    return (
      <div>
        <div className="left-scene">
          <SearchBar searchFunction={this.search} />
          <div className="selected-gif">
            <Gif id={this.state.selectedGifId} />
          </div>
        </div>
        <div className="right-scene">
          <GifList gifs={this.state.gifs} selectGif={this.select} />
        </div>
      </div>
    );
  }
}

export default App;
