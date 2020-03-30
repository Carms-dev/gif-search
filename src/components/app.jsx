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
      gifs: [
        { id: 'XZNidMVhsXv6K88uZZ' },
        { id: '13CoXDiaCcCoyk' },
        { id: 'VbnUQpnihPSIgIXuZv' },
        { id: 'Yqqxtfar585pK' },
        { id: 'pLyjyr923YfNm' }
      ],
      selectedGifId: null // 'XZNidMVhsXv6K88uZZ'
    };
  }

  searchGif = (query) => {
    giphy(GIPHY_API_KEY).search({
      q: query,
      rating: 'g',
      limit: 10
    }, (error, result) => {
      this.setState({
        gifs: result.data
      });
    });
  }

  selectGif = (id) => {
    this.setState({
      selectedGifId: id
    });
  }

  render() {
    return (
      <div>
        <div className="left-scene">
          <SearchBar searchGif={this.searchGif} />
          <div className="selected-gif">
            <Gif id={this.state.selectedGifId} />
          </div>
        </div>
        <div className="right-scene">
          <GifList gifs={this.state.gifs} selectGif={this.selectGif} />
        </div>
      </div>
    );
  }
}

export default App;
