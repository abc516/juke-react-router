import React from 'react';
import Songs from '../components/Songs';
import Albums from '../components/Albums';
import {Link} from 'react-router'



class Artist extends React.Component  {

  constructor (props){
    super(props)
    console.log('artist props', props)
  }

  componentDidMount(){
    const artistId = this.props.routeParams.artistId;
    const selectArtist = this.props.selectArtist;

    selectArtist(artistId);

  }

  render() {
    var selectedArtist = this.props.artist;
    var children = this.props.children;
    var propsToPassToChildren = {
      albums: selectedArtist.albums,
      songs: selectedArtist.songs,
      currentSong: this.props.currentSong,
      isPlaying: this.props.isPlaying,
      toggleOne: this.props.toggleOne
    }
    return (
      <div>
        <h3>{ selectedArtist && selectedArtist.name }</h3>
        <ul className="nav nav-tabs">
          <li><Link to={'/'}>ALBUMS</Link></li>
          <li><Link to={'/'}>SONGS</Link></li>
        </ul>
        { children && React.cloneElement(children, propsToPassToChildren) }

      </div>

 
    )
  }
}

export default Artist;
