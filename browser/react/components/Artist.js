import React from 'react';
import Songs from '../components/Songs';
import Albums from '../components/Albums';



class Artist extends React.Component  {

  constructor (props){
    super(props)
    console.log('artist props', props)
  }

  componentDidMount(){
    const artistId = this.props.routeParams.artistId;
    const selectArtist = this.props.selectArtist;

    selectArtist(artistId);

    const selectedArtist = this.props.artist;
    const children = this.props.children;
    const propsToPassToChildren = {
      albums: selectedArtist.albums,
      songs: selectedArtist.songs,
      currentSong: this.props.currentSong,
      isPlaying: this.props.isPlaying,
      toggleOne: this.props.toggleOne
    }
  }

  render() {
    return (
      <div>
        <h3>{ selectedArtist && selectedArtist.name }</h3>
        <ul className="nav nav-tabs">
          <li><Link to={/**todo**/}>ALBUMS</Link></li>
          <li><Link to={/**todo**/}>SONGS</Link></li>
        </ul>
        { children && React.cloneElement(children, propsToPassToChildren) }

      </div>

  {/*      // <h3>{this.props.artist.name}</h3>
        // <h4>ALBUMS</h4>
        // {
        //   this.props.artist.albums &&
        //   <Albums selectAlbum={this.props.selectAlbum}
        //    albums={this.props.artist.albums} />
        // }
        // <h4>SONGS</h4>
        // { this.props.artist.songs && <Songs
        //    songs={this.props.artist.songs}
        //    currentSong={this.props.currentSong}
        //    isPlaying={this.props.isPlaying}
        //    toggleOne={this.props.toggleOne} /> }
        //    {

        //    }
      */}
    )
  }
}

export default Artist;
