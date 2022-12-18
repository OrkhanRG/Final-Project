import React, { Component } from 'react'
import Menu from './svg/bars-solid.svg'
import Close from './svg/times-solid.svg'
import CartIcon from './svg/shopping-cart-solid.svg'
import { Link } from 'react-router-dom'
import './css/Header.css'
import {DataContext} from './Context'


export class Header extends Component {
    static contextType = DataContext;

    state = {
        toggle: false
    }

    menuToogle = () =>{
        this.setState({toggle: !this.state.toggle})
    }

    render() {
        const {toggle} = this.state;
        return (
            <header>
                <div className='menu' onClick={this.menuToogle}>
                    <img src={Menu} alt='#' width="20"></img>
                </div>
                <div className='logo'>
                    <h1><Link to='/'>Nike</Link></h1>
                </div>
                <nav>
                    <ul className={toggle ? 'toggle' : ''}>
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/product'>Product</Link></li>
                        <li><Link to='/contact'>Contact</Link></li>
                        <li><Link to='/about'>About</Link></li>
                        <li><Link to='/login'>Login / Register</Link></li>
                        <li className='close' onClick={this.menuToogle}>
                            <img src={Close} alt='#' width='20'></img>
                        </li>
                    </ul>
                    <div className='nav-cart'>
                        <span>{this.context.cart.length}</span>
                        <Link to='/cart'>
                            <img src={CartIcon} alt='#' width='20'></img>
                        </Link>
                    </div>
                </nav>
            </header>
        )
    }
}

export default Header