import React from 'react'
import "./Modal.css";
const Modal = ({ menuOpen, setMenuOpen }) => {
    return (
        <div className={`modal ${menuOpen && "active"}`}>
            <div className="item">Services</div>
            <div className="item">Pricing</div>
            <div className="item">Explore</div>
            <div className="item">Blog</div>
            <div className="item">Contact Us</div>
        </div>
    )
}

export default Modal;
