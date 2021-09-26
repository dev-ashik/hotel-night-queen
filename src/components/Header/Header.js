import React from 'react';
import {Link} from 'react-router-dom';
import "./Header.css"

const Header = () => {
    return (
        <div className="header">
            <nav>
            <Link to="/home" className="nevberMenu">Home</Link>
            <Link to="/login" className="nevberMenu">Login</Link>
            <Link to="/book" className="nevberMenu">Book</Link>
            </nav>
            <h1 className="siteName">Hotel Night Queen</h1>
        </div>
    );
};

export default Header;