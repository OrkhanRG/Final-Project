import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import {DataContext} from '../Context'
import '../css/Products.css'

export class Products extends Component {
  static contextType = DataContext;
  render() {
    const {products} = this.context
    return (
      <div id='product'>
        {
          products.map(item =>(
            <div className='card' key={item._id}> 
            <Link to={`/product/${item._id}`}>
              <img src={item.src} alt='#'/>
            </Link>
            <div className='content'>
              <h3>
                <Link to={`/product/${item._id}`}>{item.title}</Link>
              </h3>
              <span>${item.price}</span>
              <p>{item.description}</p>
              <button onClick={() => this.context.addCart(item._id)}>Add to cart</button>
            </div>
            </div>
          ))
        }
      </div>
    )
  }
}

export default Products