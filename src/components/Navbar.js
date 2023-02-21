import React from 'react'
import "../styles/nav.css"
import logo from '../assets/logo.png';

const searchIcon = <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"/></svg>

const Navbar = () => {
    return (
        <div className="nav">

            <div className="logo">

                <a href="/">
                    <img id="logoImage" src={logo} alt="Not" />
                </a>

            </div>

            <a className="navlinks" href="/#miphones">Mi Phones</a>
            <a className="navlinks" href="/#redmiphones">Redmi Phones</a>
            <a className="navlinks" href="/#tv">TV</a>
            <a className="navlinks" href="/#laptops">Laptops</a>
            <a className="navlinks" href="/#lifestyle">Fitness & Lifestyle</a>
            <a className="navlinks" href="/#home">Home</a>
            <a className="navlinks" href="/#audio">Radio</a>
            <a className="navlinks" href="/#accessories">Accessories</a>

            <div className="searchbox">
                <input type="text" name="search" placeholder="Search Products" />
                {searchIcon}

            </div>


        </div>
    )
}
export default Navbar;
