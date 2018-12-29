import React from 'react';
import home from './../images/home.jpg';
import T from 'i18n-react';

const Home = () => {
	return (
		<div className="home">
			<T.span className="home__text" text={{ key: "welcome" }} />
			<T.span className="home__text" text={{ key: "login" }} />
			<img src={home} alt="shop"></img>
		</div>

	);
}

export default Home