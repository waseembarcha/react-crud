import React, { Component } from 'react';
class AddProduct extends Component {
  state =
    {
      id: '',
      name: '',
      price: '',
      catagory: ''

    }
  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addProduct(this.state);
    this.setState({
      id: '',
      name: '',
      price: '',
      catagory: ''
    })
  }
  render() {
    return (
      <div className="card">
        <div className="card-header">
          Add a new product
        </div>
        <div className="card-body">
          <form className="form-inline" onSubmit={ this.handleSubmit }>
            <div className="form-group">
              <label>Name</label>
              <input type="text" className="form-control ml-sm-2 mr-sm-4 my-2" id="name" onChange={this.handleChange} value={this.state.name} required />
            </div>
            <div className="form-group">
              <label>Price</label>
              <input type="number" className="form-control ml-sm-2 mr-sm-4 my-2" id="price" onChange={this.handleChange} value={this.state.price} required />
            </div>
            <div className="form-group">
              <label>Catogary</label>
              <input type="text" className="form-control ml-sm-2 mr-sm-4 my-2" id="catagory" onChange={this.handleChange} value={this.state.catagory} required />
            </div>
            <div className="ml-auto text-right">
              <button type="submit" className="btn btn-dark my-2">Add</button>

            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default AddProduct;
