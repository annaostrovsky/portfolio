import React, { Component } from 'react';
import {Link} from 'react-router-dom'

class PortfolioElement extends Component {
  

  render() {   
    return (
    <div className="portfolio-element">    
    <Link to={`/portfolio-details/${this.props.index}`} >    
      <div>{this.props.title}</div>
      <img src={this.props.imageUrl} alt="Portfolio"/>
    </Link>
      <div className="flex">
      <button className="fa fa-trash-o portfolio-element__icon" onClick={()=>this.props.delete(this.props.index)}></button>      
      <Link to={`/edit/${this.props.index}`}><button className="fa fa-pencil portfolio-element__icon"></button></Link>
      </div>
    </div>
    );
  }
}

export default PortfolioElement;