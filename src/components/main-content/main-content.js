import React, { Component } from 'react';
import PortfolioElement from './portfolio-element'
import _ from 'lodash';

class MainContent extends Component {
  constructor(props){
    super(props);
    this.state = {
      
    }
  }
  render() {
    //console.log(this.props.generatedData);
    return (
      <div className="main-content">
      { _.sortBy(this.props.generatedData,i=>+i.key).map((element, index)=>{
       return <PortfolioElement {...element} index={element.key} delete = {this.props.delete} />   
      })}
         
      </div>
    );
  }
}

export default MainContent;