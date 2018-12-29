import { withRouter } from 'react-router-dom'
import React, { Component } from 'react';
import PropTypes from 'prop-types';


class ProtfolioDetails extends Component {

	closePage = () => {
		this.props.history.push("/");
	}
	itemId = this.props.location.pathname.substr(this.props.location.pathname.lastIndexOf('/') + 1);

	render() {
		return (
			<div className="portfolio-details">
				<div className="portfolio-details--wrapper">
					<button onClick={this.closePage} className="portfolio-details__button fa fa-times-circle"></button>
					<h3>{this.props.title}</h3>
					<div>{this.props.description}</div>
					<img className="portfolio-details__img" src={this.props.imageUrl} alt="full-screen-img"></img>
					<button
						className="fa fa-shopping-cart portfolio-details__icon portfolio-details__addToCartButton"
						onClick={() => this.props.moveToCart(this.itemId)}
					/>
				</div>
			</div>
		)
	}
}
ProtfolioDetails.propTypes = {
	key: PropTypes.string,
	title: PropTypes.string,
	description: PropTypes.string,
	imageUrl: PropTypes.string,
}
export default withRouter(ProtfolioDetails);