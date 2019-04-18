import React, { Component } from 'react';
import Main from './views/Main.js';
import Api from './Api.js';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      data: [],
      cart: [],
      addProductToCart: this.addProductToCart,
      clearCart: this.clearCart,
      clearCartItemById: this.clearCartItemById,
    };
  }

  componentDidMount() {
    this.setState({
      data: Api
    })
 }

 addProductToCart = (id) => {
   let new_cart = this.state.cart;
   new_cart.push(id);
   this.setState({
     cart: new_cart,
   })
 }

 clearCart = () => {
   this.setState({
     cart: []
   });
 }

 clearCartItemById = (id) => {
   let cart = this.state.cart;
    let index = cart.indexOf(id);
    if (index > -1) {
      cart.splice(index, 1);
    }

    this.setState({
      cart: cart
    });
 }

  render() {
    return (
      <div>
        <Main data={this.state}/>
      </div>
    );
  }
}

export default App;
