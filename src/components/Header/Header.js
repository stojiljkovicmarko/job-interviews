import React from "react";

import "./Header.css";

const Header = () => {
    return (
        <header>
                <div className="navbar-fixed">
                    <nav>
                        <div className="nav-wrapper">
                            <a href="./Login.js">Login</a>
                            <a href="./Candidates.js">Candidates</a>
                        </div>
                    </nav>
                </div> 
        </header>
    );
};

export default Header;
