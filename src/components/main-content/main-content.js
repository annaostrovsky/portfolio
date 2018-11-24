import React, { Component } from 'react';
import PortfolioElement from './portfolio-element'
import _ from 'lodash';
import PropTypes from 'prop-types'; 


class MainContent extends Component {
  constructor(props){
    super(props);
    this.state = {
      
    }
  }
  render() {   
    return (
      <div className="main-content">
      { _.sortBy(this.props.generatedData,i=>+i.key).map((element, index)=>{
       return <PortfolioElement onFullScreen={this.props.onFullScreen} {...element} index={element.key} delete = {this.props.delete} />   
      })}         
      </div>
    );
  }
}
MainContent.propTypes = {
	key: PropTypes.string,
	title: PropTypes.string,
	description: PropTypes.string,
	imageUrl: PropTypes.string,  
  }

export default MainContent;