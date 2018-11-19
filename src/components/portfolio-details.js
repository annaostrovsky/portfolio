import { withRouter } from 'react-router-dom'
import React, { Component } from 'react';

class ProtfolioDetails extends Component {
	constructor(props) {
		super(props);
		this.state = {			 
		}
	}
	closePage=(event)=>{
		this.props.history.push("/");	
	}
	
	render() {
		return (
		<div className="portfolio-details">	
		     <button onClick={this.closePage}>close</button>		
	         <div>{this.props.title}</div>	
	         <div>{this.props.description}</div>	
	         <img src={this.props.imageUrl}></img>
		</div>
		)
	}
}
export default withRouter(ProtfolioDetails);