import React from 'react';
import {Link} from 'react-router-dom'

const MenuItem = (props)=>{
	return(
        <Link to={props.pathName}>{props.title}</Link>
	);
}

export default MenuItem