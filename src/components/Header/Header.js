import React from "react";

import "./Header.css";

const Header = () => {
    return (
        <header>        
            <div className="navbar-fixed">
                <nav>
                    <div className="nav-wrapper">
                        <a href="#!" className="band-logo">JobBook</a>
                        <a href ="./Login.js">Login</a>
                    </div>
                </nav>
            </div>
        </header>
    );
};

export default Header;


/*dodati dugme kandidati*/