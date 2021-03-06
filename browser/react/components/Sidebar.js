import React from 'react';
import {Link} from 'react-router'

const Sidebar = (props) => {

  const deselectAlbum = props.deselectAlbum;

  return (
    <sidebar>
      <img src="juke.svg" className="logo" />
      <section>
        <h4 className="menu-item active">
          <Link to="/albums">Go to Albums</Link>
        </h4>
        <h4 className="menu-item">
          <Link to="/artists">Go to Artists</Link>
        </h4>
      </section>
    </sidebar>
  );
}

export default Sidebar;
