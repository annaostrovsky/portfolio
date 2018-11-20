import { withRouter } from 'react-router-dom'
import React, { Component } from 'react';

class ProtfolioDetails extends Component {
	constructor(props) {		
		super(props);
		this.state = {	
			title: "",
			descriptoin: "",			
			key: "",
			imageUrl: "",
		}
	}		
	
	componentDidMount() {
		if (this.props.match.params.id) {			
			const rslt = this.props.showEditedContent(this.props.match.params.id)				
			this.setState({
				title: rslt.title,
				description: rslt.descriptoin,
				key: rslt.key,
				imageUrl: rslt.imageUrl
			})			
		}
	}	

	closePage=()=>{
		this.props.history.push("/");	
	}
	
	render() {		
		return (
		<div className="portfolio-details">	
		     <button onClick={this.closePage}>close</button>		
	         <div>{this.state.title}</div>	
	         <div>{this.state.description}</div>	
	         <img src={this.state.imageUrl} alt="full-screen-img"></img>
		</div>
		)
	}
}
export default withRouter(ProtfolioDetails);