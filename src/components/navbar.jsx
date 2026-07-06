import React from "react";

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light py-3 navbar_main_container">
            <div className="container">

                <a className="navbar-brand navbar_brand_mobile m-0 " href="#">
                    <img src="logo.webp" className="main_logo" alt="Artistic School"/>
                </a>

                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarTogglerDemo01"
                    aria-controls="navbarTogglerDemo01"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse justify-content-between" id="navbarTogglerDemo01">

                    <div className="nav-side d-none d-lg-block">
                        <a className="navbar-brand m-0" href="#">
                            <img
                                src="logo.webp"
                                className="main_logo"
                                alt="Artistic School"
                            />
                        </a>
                    </div>

                    <ul className="navbar-nav mx-auto">
                        <li className="nav-item">
                            <a className="nav-link active" href="#">
                                Home
                            </a>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link" href="#ar_vission">
                                Our Vission
                            </a>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link" href="#ar_about">
                                About ASB
                            </a>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link" href="#ar_programs">
                                Programs
                            </a>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link" href="#ar_advantages">
                                Why ASB
                            </a>
                        </li>
                    </ul>

                    <div className="nav-side text-lg-end">
                        <button className="btn btn_outline_primary" data-bs-toggle="modal" data-bs-target="#contactModal">
                        Contact With Us
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;