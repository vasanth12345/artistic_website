import React from "react";
import { motion } from "framer-motion";
import heroImage from "../assets/images/banner.webp"; // Update your image path

function Banner() {
    return (
        <section className="banner-section py-5 overflow-hidden">
            <div className="container">
                <div className="row align-items-center">

                    <div className="col-lg-6 order-2 order-lg-1 banner_content_container">

                        <motion.div initial={{ opacity: 0, x: -60 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                        >

                            <span className="text-primary fw-semibold mb-3 d-inline-block section-tag banner_badge">
                                ARTISTIC SCHOOL OF BUSINESS
                            </span>

                            <h1 className="display-4 fw-bold mb-4 main_heading">
                                Build the Business
                                <br />
                                Leaders of Tomorrow
                            </h1>

                            <p className="lead text-secondary mb-4">
                                An execution-driven entrepreneurial academy focused on
                                innovation, leadership, and real-world business learning.
                            </p>

                            <div className="d-flex flex-wrap gap-3 banner_btn_container">
                                <a href="#" className="asb-btn">
                                    <span>Explore Programs</span>

                                    <span className="arrow-circle">
                                        <i className="bi bi-arrow-up-right"></i>
                                    </span>
                                </a>
                            </div>
                        </motion.div>

                    </div>

                    <div className="col-lg-6 text-center order-1 order-lg-2 mb-5 mb-lg-0">

                        <motion.img
                            src={heroImage}
                            alt="ASB Hero"
                            className="img-fluid"
                            initial={{ opacity: 0, x: 60 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.9 }}
                            whileHover={{ scale: 1.03 }}
                        />

                    </div>
                </div>
            </div>
        </section>
    );
}

export default Banner;