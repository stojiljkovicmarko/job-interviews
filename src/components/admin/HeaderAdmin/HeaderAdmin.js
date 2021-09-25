import { Link } from "react-router-dom";

export default function HeaderAdmin() {

    return (
        <header className="mb-3">
            <div className="navbar-fixed container p-0">
                <nav className="navbar navbar-light ">
                    <div className="nav-wrapper container-fluid d-flex d-sm-column justify-content-between">
                        <div className="text-center">
                            <h1>Reports administration </h1>
                        </div>
                        <div className="justify-content-center">
                            <Link to="/reports">
                                <div className="btn btn-outline-secondary btn-header mr-2">
                                    Reports
                                </div>
                            </Link>
                            <Link to="/create-report">
                                <div className="btn btn-outline-secondary btn-header ">
                                    Create report
                                </div>
                            </Link>
                        </div>
                    </div>
                </nav>
            </div>
        </header>
    );
}