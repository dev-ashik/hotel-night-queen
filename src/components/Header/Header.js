import React, {useContext} from 'react';
import {Link} from 'react-router-dom';
import {userContext} from '../Routes/Routes';
import "./Header.css"

const Header = () => {
    const [loggedInUser, setLoggedInUser] = useContext(userContext);
    return (
        <div className="header">
            <nav>
            <Link to="/home" className="nevberMenu">Home</Link>
            <Link to="/login" className="nevberMenu">{loggedInUser.name ? <button style={{background: "none", border: 'none', cursor: 'pointer'}} className="nevberMenu" onClick={()=>setLoggedInUser({})}>LogOut</button> : "Login"}</Link>
            <Link to="/book" className="nevberMenu">Book</Link>
            </nav>
            {
                loggedInUser.name && <h3 style={{color: "darkorange"}}>Welcom: {loggedInUser.name}</h3>
            }
            <h1 className="siteName">Hotel Night Queen</h1>
        </div>
    );
};

export default Header;