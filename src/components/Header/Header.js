import React from "react";
import {Link} from "react-router-dom";

import "./Header.css";

const Header = () => {

    return (
        <header>
                <div className="navbar-fixed">
                    <nav className="navbar navbar-light ">
                        <div className="nav-wrapper container-fluid">
                            <h1>Interviews Reports </h1>
                                <div className="btn btn-outline-secondary btn-header">
                                <Link to="/">Candidates</Link>
                                </div>
                        </div>
                    </nav>
                </div> 
        </header>
    );
};


export default Header;

