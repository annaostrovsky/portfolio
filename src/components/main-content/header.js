import React from 'react';
import { Link } from "react-router-dom";

const Header = props => {
	console.log(props)
	return (
		<div className="header">
			<h3>Shop</h3>
			{props.isLoggedIn === true ?
				<Link to="/cart">Checkout <i className="fa fa-shopping-cart portfolio-element__icon"></i></Link>
				: ""
			}
			<button className="header__button" onClick={() => props.login()}> {props.isLoggedIn ? 'Log out' : 'Log in'}</button>
		</div>

	);
}

export default Header