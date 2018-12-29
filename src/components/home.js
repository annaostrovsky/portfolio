import React from 'react';
import home from './../images/home.jpg';

const Home = () => {
	return (
		<div className="home">
			<div>Welcome to our store</div>
			<div>to start shopping please log in</div>
			<img src={home} alt="shop"></img>
		</div>

	);
}

export default Home