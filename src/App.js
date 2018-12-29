import React, { Component } from "react";
import "./App.css";
import Sidebar from "./components/sidebar/sidebar.js";
import MainContent from "./components/main-content/main-content.js";
import data from "./data.json";
import AboutPage from "./components/about";
import Form from "./components/form";
import { BrowserRouter as Router, Route } from "react-router-dom";
import PropTypes from "prop-types";
import ProtfolioDetails from "./components/portfolio-details";
import Cart from "./components/cart";
import Header from "./components/main-content/header"
import Home from "./components/home";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      generatedData: data,
      obj: null,
      isLoggedIn: false,
      selectedItemsArray: []
    };
  }

  handleLogin = () => {
    const toggle = this.state.isLoggedIn
    this.setState({
      isLoggedIn: !toggle
    });
  };

  deletePortfolioItem = index => {
    const itemToRemove = this.state.selectedItemsArray.filter(item => item.key !== index)
    this.setState({
      selectedItemsArray: itemToRemove
    });
  };

  changeToFullScreen = elementKey => {
    this.setState({
      obj: this.state.generatedData.filter(
        item => item.key.toString() === elementKey.toString()
      )[0]
    });
  };

  moveToCart = elementKey => {
    const selectedItemsArray = this.state.selectedItemsArray.slice(0);
    const newItemToPush = this.state.generatedData.filter(
      item => item.key.toString() === elementKey.toString()
    )[0]

    selectedItemsArray.push(newItemToPush)
    this.setState({
      selectedItemsArray: selectedItemsArray
    });
  };

  render() {
    return (
      <Router>
        <div className="flex">
          <Route path="/" component={Sidebar} />
          <div className="flex flex--column" >
            <Route
              path="/"
              render={(props) => (
                <Header
                  selectedItemsArray={this.state.selectedItemsArray}
                  login={this.handleLogin}
                  {...props}
                  {...this.state}
                />
              )}
            />
            {this.state.isLoggedIn ?
              <Route
                exact
                path="/"
                render={() => (
                  <MainContent
                    moveToCart={this.moveToCart}
                    onFullScreen={this.changeToFullScreen}
                    generatedData={this.state.generatedData}
                    moveToCart={this.moveToCart}
                  />
                )}
              />
              :
              <Route exact path="/">
                <Home />
              </Route>
            }
            <Route path="/about" component={AboutPage} />
            <Route
              path="/contact"
              render={props => (
                <Form
                  {...props}

                />
              )}
            />

            <Route
              path="/portfolio-details/:id"
              render={props => (
                <ProtfolioDetails
                  {...props}
                  generatedData={this.state.generatedData}
                  {...this.state.obj}
                  moveToCart={this.moveToCart} />
              )}
            />
            <Route
              path="/cart"
              render={props => (
                <Cart
                  {...props}
                  delete={this.deletePortfolioItem}
                  moveToCart={this.moveToCart}
                  selectedItemsArray={this.state.selectedItemsArray}
                />
              )}
            />

          </div>
        </div>

      </Router>
    );
  }
}
App.propTypes = {
  key: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  price: PropTypes.string
};

export default App;
