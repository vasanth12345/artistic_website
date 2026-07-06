import React from "react";

import logo from "../assets/images/logo.webp"; // Update your image path

function Footer() {
    return (
        <footer className="footer">

            <div className="container">

                {/* Logo */}

                <div className="footer-logo text-center">

                    <img src={logo} alt="ASB Logo" />

                </div>

                {/* Menu */}
                <div className="fooetr_main_menu">

                <div className="footer-menu">

                    <a to="/">Home</a>

                    <a to="/about">About</a>

                    <a to="/programs">Programs</a>

                    <a to="/curriculum">Curriculum</a>

                    <a to="/why-asb">Why ASB</a>

                    <a to="/contact">Contact</a>

                </div>

                {/* Policy */}

                <div className="footer-policy">

                    <a href="#">Privacy Policy</a>

                    <a href="#">Terms & Conditions</a>

                </div>

                </div>

        

                {/* Copyright */}

                <div className="footer-bottom">

                           <div className="footer-social">

                    <a href="#">
                        <i className="bi bi-facebook"></i>
                    </a>

                    <a href="#">
                        <i className="bi bi-instagram"></i>
                    </a>

                    <a href="#">
                        <i className="bi bi-linkedin"></i>
                    </a>

                    <a href="#">
                        <i className="bi bi-youtube"></i>
                    </a>

                </div>

                <div className="copyright-text">

                    © 2026 Artistic School of Business.
                    All Rights Reserved.

                    </div>

                </div>

            </div>

        </footer>
    );
}

export default Footer;