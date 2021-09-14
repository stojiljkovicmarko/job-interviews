import React from "react";
import {Link} from "react-router-dom";

import "./Header.css";

const Header = () => {
    return (
        <header>
                <div className="navbar-fixed">
                    <nav>
                        <div className="nav-wrapper">
                            <h1>Interviews Reports </h1>
                            <Link to="/">Candidates</Link>
                        </div>
                    </nav>
                </div> 
        </header>
    );
};

export default Header;

