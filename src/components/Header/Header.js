import React from "react";
import {Link} from "react-router-dom";

import "./Header.css";

const Header = () => {
    const customStyle={
        border: "1px solid rgb(194, 191, 191)",
        padding: "5px 20px",
        borderRadius: "5px",
        color: "rgb(65, 64, 64)",
    }

    return (
        <header>
                <div className="navbar-fixed">
                    <nav className="navbar navbar-light ">
                        <div className="nav-wrapper container-fluid">
                            <h1>Interviews Reports </h1>
                            <Link style={customStyle} to="/">Candidates</Link>
                        </div>
                    </nav>
                </div> 
        </header>
    );
};

export default Header;

