import React from 'react';
import Logo from './sidebar/logo';

const Home = () => {
	return (
		<div className="home">
			<h3>Welcome to our store</h3>
			<h3>to start shopping please log in</h3>
			<img src={Logo}></img>
		</div>

	);
}

export default Home