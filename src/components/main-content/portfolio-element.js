import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import PropTypes from 'prop-types'; 


class PortfolioElement extends Component {
  

  render() {
    return (     
    <div className="portfolio-element"> 
     <Link to={`/portfolio-details/${this.props.index}`}>   
      <div className="portfolio-element__main-content" onClick={()=>this.props.onFullScreen(this.props.index)}>
        <div className="portfolio-element__title">{this.props.title}</div>
        <img src={this.props.imageUrl} alt="Portfolio"/>
      </div>
      </Link>
      <div className="flex">
      <button className="fa fa-trash-o portfolio-element__icon" onClick={()=>this.props.delete(this.props.index)}></button>      
      <Link to={`/edit/${this.props.index}`}><button className="fa fa-pencil portfolio-element__icon"></button></Link>
      </div>
    </div>
    );
  }
}
PortfolioElement.propTypes = {
	key: PropTypes.string,
	title: PropTypes.string,
	description: PropTypes.string,
	imageUrl: PropTypes.string,  
  }

export default PortfolioElement;