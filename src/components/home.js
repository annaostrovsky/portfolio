import React from 'react';
import home from './../images/home.jpg';

const Home = () => {
	return (
		<div className="home">
			<h3>Welcome to our store</h3>
			<h3>to start shopping please log in</h3>
			<img src={home} alt="shop"></img>
		</div>

	);
}

export default Home