import React, { useState }  from 'react';
import { NavLink } from 'react-router-dom';
import { Layout } from 'antd';
import  navLogo  from '../../../images/navLogo.jpg';
import searchIcon from '../../../images/searchIcon.png';
import cartIcon from '../../../images/cartIcon.png';

const { Header } = Layout;



function NavBar() {
    const [ colorChange, setColorChange ] = useState(false);

    const changeNavbarColor = () => {
        window.scrollY >= 400 ? setColorChange(true) : setColorChange(false);
    };
    window.addEventListener('scroll', changeNavbarColor);

    return (
        <Header
            style={{
                minHeight: '98px',
                lineHeight: '0',
                padding: '0',
            }}
        >
            <nav className={ colorChange ? 'navbar colorChange' : 'navbar' } >
                <div className='navbar-links navbar-buttons'>
                    <NavLink to="/">
                        <img className='nav-logo' src={navLogo} alt="logo" />
                    </NavLink>
                    <NavLink to="/">
                        <button className="navbar-btn">ABOUT</button>
                    </NavLink>
                    <NavLink to="/">
                        <button className="navbar-btn">GALLERY</button>
                    </NavLink>
                    <NavLink to="/">
                        <button className="navbar-btn">ARTIST</button>
                    </NavLink>
                    <NavLink to="/">
                        <button className="navbar-btn">SHOP</button>
                    </NavLink>
                    <NavLink to="/login">
                        <button className="navbar-btn navbar-login">LOGIN</button>
                    </NavLink>
                </div>
                <div className='navbar-icons'>
                    <NavLink to="/">
                        <button className='navicon-btn'>
                            <input className="search-icon" type="image" src={searchIcon} alt="Search for something" />
                        </button>
                    </NavLink>
                    <NavLink to="/">
                        <button className='navicon-btn'>
                            <input className='cart-icon' type="image" src={cartIcon} alt="Your cart" />
                        </button>
                    </NavLink>
                </div>
            </nav>
        </Header>
    );
}

export default NavBar; 