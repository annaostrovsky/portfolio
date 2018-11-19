import React, {Component} from 'react';
import SocialMenuItem from './social-menu-item'

class SocialMenu extends Component{
     constructor(props){
	     super(props);
	     this.state = {
		     socialMenuItems: [
			     {className:"fa fa-facebook", pathname: "https://www.facebook.com/"},
			     {className:"fa fa-twitter", pathname: "https://www.twitter.com/"},
			     {className:"fa fa-linkedin", pathname: "https://www.linkedin.com/"},
			     {className:"fa fa-instagram", pathname: "https://www.instagram.com/"}
		     ]
	     }	     
     }

	render(){
		return(
		<div className="social-menu">
			{this.state.socialMenuItems.map((item, index)=>{
				return <SocialMenuItem className={item.className} pathname={item.pathname} key={index}/>
			})}	
			</div>
		)
	}
	
}

export default SocialMenu