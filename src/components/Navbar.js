import '../assets/css/Navbar.css';
import React, { useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBook } from '@fortawesome/free-solid-svg-icons'


const MainNav = () => {
    const [isActive, setActive] = useState(false);
    return (
        <nav className="navbar container is-fluid" role="navigation" aria-label="main navigation">
            <div className="navbar-brand">
                <div className="navbar-item">
                    <FontAwesomeIcon icon={faBook} className='mainLogo' />
                    <span className='mainTitle'>Tech Book Hub</span>
                </div>
                <div className='navbar-item'>
                    <div className={`navbar-burger ${isActive ? "is-active" : ""}`}
                        onClick={() => { setActive(!isActive) }} data-target="navbarExampleTransparentExample">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>
            </div>

            <div id="navbarMenu"
                className={`navbar-menu ${isActive ? "is-active" : ""}`}>
                <div className='navbar-end'>
                    <div className='navbar-item input-parent'>
                        <input className="mainInput input is-medium" type="text" placeholder="Title, Author, ISBN" />
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default MainNav;