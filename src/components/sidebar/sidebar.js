import React from 'react';
import Logo from './logo';
import Menu from '../sidebar/menu'
import SocialMenu from '../sidebar/social-menu'

const Sidebar = ()=>{ 
    return (
      <div className="sidebar">
	    <Logo/>
      <Menu/>
      <SocialMenu/>
      </div>
    );
  }

export default Sidebar;