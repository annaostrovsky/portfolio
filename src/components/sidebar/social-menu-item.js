import React from 'react';

const SocialMenuItem = (props)=>{
	return(
        <a className={props.className} href={props.pathname} target="_blank"></a>
	);
}

export default SocialMenuItem