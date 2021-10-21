import React from "react";
import { Link } from "react-router-dom";
import SessionStorageService from "../../services/SessionStorageService";

import "./Header.css";

const Header = ({onLogOut}) => {


    return (
        <header className="mb-3">
            <div className="navbar-fixed container p-0">
                <nav className="navbar navbar-light ">
                    <div className="nav-wrapper container-fluid">
                        <h1>Interviews Reports </h1>
                        <div>
                            <Link to="/home">
                                <div className="btn btn-outline-secondary btn-header mx-2">
                                    Candidates
                                </div>
                            </Link>
                            <Link to="/admin">
                                <div className="btn btn-outline-secondary btn-header mx-2">
                                    Admin page
                                </div>
                            </Link>
                            <Link to="/login" onClick={onLogOut}>
                                <div className="btn btn-outline-secondary btn-header">
                                    Log out
                                </div>
                            </Link>
                        </div>
                    </div>
                </nav>
            </div>
        </header>
    );
};


export default Header;

