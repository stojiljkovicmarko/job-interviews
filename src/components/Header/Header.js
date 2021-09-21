import React from "react";
import { Link } from "react-router-dom";

import "./Header.css";

const Header = () => {

    

    return (
        <header className="mb-3">
            <div className="navbar-fixed container p-0">
                <nav className="navbar navbar-light ">
                    <div className="nav-wrapper container-fluid">
                        <h1>Interviews Reports </h1>
                        <Link to="/">
                            <div className="btn btn-outline-secondary btn-header">
                                Candidates
                            </div>
                        </Link>
                    </div>
                </nav>
            </div>
        </header>
    );
};


export default Header;

