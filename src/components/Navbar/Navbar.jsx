import React, { useState } from 'react'
import Modal from './Modal/Modal';
import "./Navbar.css";
const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const toggleMenuBar = () => {
        setMenuOpen(prev => !prev)
    }
    return (
        <div className='navbar'>
            <div className="wrapper">
                <div className="toggle-menu" onClick={toggleMenuBar} onBlur={() => console.log("blur")}>
                    <span className='bar'></span>
                    <span className='bar'></span>
                    <span className='bar'></span>
                </div>
                <div className="left">
                    <h2>Title</h2>
                </div>
                <div className="right">
                    <ul className='list'>
                        <li className='list-item'>Services</li>
                        <li className='list-item'>Pricing</li>
                        <li className='list-item'>Explore</li>
                        <li className='list-item'>Blog</li>
                        <li className='list-item'>Contact Us</li>
                    </ul>
                </div>
            </div>
            <Modal menuOpen={menuOpen} setMenuOpen={setMenuOpen} />


        </div>
    )
}

export default Navbar
