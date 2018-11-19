import React, { Component } from 'react';
import Logo from './logo';
import Menu from '../sidebar/menu'
import SocialMenu from '../sidebar/social-menu'

class Sidebar extends Component {
  render() {
    return (
      <div className="sidebar">
	    <Logo/>
      <Menu/>
      <SocialMenu/>
      </div>
    );
  }
}

export default Sidebar;