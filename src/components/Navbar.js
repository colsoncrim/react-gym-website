import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Button } from './Button.js'
import '../styles/Navbar.css'

function Navbar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    useEffect(() => {
        showButton()
    }, [])
    
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
                <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
                    Optimal Strength <i className="fab fa-typo3" />
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
                        <Link to="/crossfit" className="nav-links" onClick={closeMobileMenu}>
                            About
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/crossfit" className="nav-links" onClick={closeMobileMenu}>
                            Programs
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/crossfit" className="nav-links-mobile" onClick={closeMobileMenu}>
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