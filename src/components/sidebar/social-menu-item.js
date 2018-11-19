import React from 'react';

const SocialMenuItem = (props)=>{
	return(
        <a className={props.className} href={props.pathname}></a>
	);
}

export default SocialMenuItem