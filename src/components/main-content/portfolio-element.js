import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const PortfolioElement = props => {
  return (
    <div className="portfolio-element">
      <Link to={`/portfolio-details/${props.index}`}>
        <div
          className="portfolio-element__main-content"
          onClick={() => props.onFullScreen(props.index)}
        >
          <div className="portfolio-element__title">{props.title}</div>
          <img src={props.imageUrl} alt="Portfolio" />
          <div>{props.description}</div>
          <div>price: {props.price}$</div>
        </div>
      </Link>
      <div className="flex">       
        <button
          className="fa fa-shopping-cart portfolio-element__icon"
          onClick={() => props.moveToCart(props.index)}
        />
      </div>
    </div>
  );
};

PortfolioElement.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  imageUrl: PropTypes.string
};

export default PortfolioElement;
