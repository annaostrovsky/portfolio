import React from 'react';
import { storiesOf } from '@storybook/react';
import AboutPage from '../src/components/about';
import App from '../src/App'
import Form from '../src/components/form.js'
import { BrowserRouter as Router } from "react-router-dom";
import Cart from '../src/components/cart.js';
import CartItem from '../src/components/cart-item';


storiesOf('Store', module)
  .add('about', () => (
    <AboutPage />
  ))
  .add('main-page', () => (
    <App />
  ))
  .add('contact', () => (
    <Router>
      <Form />
    </Router>
  ))
  .add('cart-item', () => (
    <CartItem title="item" description="my item" />
  ));  