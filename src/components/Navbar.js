import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Button } from './Button.js'
import '../styles/Navbar.css'

function Navbar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);
    
    function handleMenuClick() {
        setClick(!click)
    }

    function closeMobileMenu() {
        setClick(false)
    }

    function showButton() {
        if(window.innerWidth <= 960) {
            setButton(false)
        } else {
            setButton(true)
        }
    }

    window.addEventListener("resize", showButton)

    return (
        <>
        <nav className="navbar">
            <div className="navbar-container">
                <Link to="/" className="navbar-logo">
                    TRVL <i className="fab fa-typo3" />
                </Link>
                <div className="menu-icon" onClick={handleMenuClick}>
                    <i className={click ? "fas fa-times" : "fas fa-bars"} />
                </div>
                <ul className={click ? "nav-menu active" : "nav-menu"}>
                    <li className="nav-item">
                        <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                            Home
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/services" className="nav-links" onClick={closeMobileMenu}>
                            Services
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/products" className="nav-links" onClick={closeMobileMenu}>
                            Products
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/sign-up" className="nav-links-mobile" onClick={closeMobileMenu}>
                            Sign Up
                        </Link>
                    </li>
                </ul>
                {button && <Button buttonStyle="btn--outline">Sign Up</Button>}
            </div>
        </nav>
        </>
    )
}

export default Navbar