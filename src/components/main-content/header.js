import React from 'react';
import { Link } from "react-router-dom";

const Header = props => {
	const { selectedItemsArray } = props;
	return (
		<div className="header">
			<h3>Shop</h3>
			{props.isLoggedIn &&
				<Link to="/cart">
					<span>Checkout</span>
					<i className="fa fa-shopping-cart portfolio-element__icon"></i>
					{selectedItemsArray.length > 0 ?
						<span className="header__counter">{selectedItemsArray.length}</span>
						: ""}
				</Link>
			}
			<button className="header__button" onClick={() => props.login()}> {props.isLoggedIn ? 'Log out' : 'Log in'}</button>
		</div>

	);
}

export default Header