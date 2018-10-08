import React, { Component } from 'react';
import Products from './Products';
import AddProduct from './addProduct';

class App extends Component {
  state = {
    products : [
      { id: 1, name : 'iPhone XS', price : 1300, catagory: 'Mobile' },
      { id: 2, name : 'Dell Xps 15', price : 2000, catagory: 'Laptop' },
      { id: 3, name : 'Macbook Pro', price : 2500, catagory: 'Laptop'},
      { id: 4, name : 'Galaxy Note9', price : 1200, catagory: 'Mobile'}
    ]

  }
  addProduct = (product) => {
    product.id = Math.random();
    let products = [...this.state.products, product];
    this.setState({
      products : products
    })
  }
  deleteProduct = (id) => {
    let products = this.state.products.filter( product => {
      return product.id !== id;
    });
    this.setState({
      products : products
    })
  }
  updateProduct = (product, index) => {
    const state = [...this.state.products];
    let currentProduct = {...state[index]};
    currentProduct = product;
    state[index] = currentProduct;
    this.setState({
      products: state
    });
  }
  render() {
    return (
      <div className="crud-app">
        <header className="app-header">
          <h1 className="app-title">React Crud App</h1>
        </header>
        <div className="container pt-5">
          <AddProduct addProduct={this.addProduct}/>
          <Products products={this.state.products} deleteProduct={ this.deleteProduct } updateProduct={ this.updateProduct} />

        </div>
      </div>
    );
  }
}

export default App;
