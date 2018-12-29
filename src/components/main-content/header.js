import React from 'react';
import { Link } from "react-router-dom";
import T from 'i18n-react';
import translations from '../../services/translations';

const Header = props => {
	const { selectedItemsArray } = props;
	return (
		<div className="header">
			<button className="header__button" onClick={() => T.setTexts(translations.en)}>Change to hebrew</button>
			<div>Online Shop</div>
			{props.isLoggedIn &&
				<Link to="/cart">
					<span>Checkout</span>
					<i className="fa fa-shopping-cart header__checkoutLink portfolio-element__icon"></i>
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