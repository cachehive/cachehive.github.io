import React from 'react';
import { stack as Menu } from 'react-burger-menu';
import { Link } from 'react-router';
import Radium from 'radium';

let RadiumLink = Radium(Link);

class Navigate extends React.Component {
  render() {
    return (
      <Menu>
        <RadiumLink className="menu-item" to="/home">Home</RadiumLink>
        <RadiumLink className="menu-item" to="/settings">Settings</RadiumLink>
        <RadiumLink className="menu-item" to="/blablabla">Blablabla</RadiumLink>
      </Menu>
    );
  }
};

export default Navigate;