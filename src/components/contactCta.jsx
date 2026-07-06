import React from "react";
import { motion } from "framer-motion";

function ContactCTA() {
    return (
        <section className="contact-cta">
            <div className="container">

                <motion.div
                    className="contact-wrapper"
                    initial={{ opacity: 0, y: 60 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: .7 }}
                >

                    <div className="row align-items-center">
                        <div className="col-lg-7">

                            <span className="section-tag light">
                                LET'S CONNECT
                            </span>

                            <h2 className="mt-4">
                                Ready to Build
                                <br />
                                Your Future?
                            </h2>

                            <p className="mt-4">

                                Join an execution-driven learning environment
                                designed to help you build businesses, develop
                                practical skills and become an industry-ready
                                entrepreneur.

                            </p>

                            <div className="mt-5 d-flex flex-wrap gap-3 contact_wrapper_btn_container">

                                <button className="asb-btn white-btn" data-bs-toggle="modal" data-bs-target="#contactModal">

                                    <span>
                                        Apply Now
                                    </span>

                                    <span className="arrow-circle">
                                        <i className="bi bi-arrow-up-right"></i>
                                    </span>

                                </button>

                            </div>

                        </div>

                        {/* Right */}

                        <div className="col-lg-5">

                            <div className="contact-info">

                                <div className="info-box">
                                    <small>Email</small>
                                    <h5>info@asb.edu</h5>
                                </div>

                                <div className="info-box">
                                    <small>Phone</small>
                                    <h5>+91 98765 43210</h5>
                                </div>

                                <div className="info-box">
                                    <small>Location</small>
                                    <h5>Chennai, India</h5>
                                </div>

                            </div>

                        </div>

                    </div>

                </motion.div>

            </div>
        </section>
    );
}

export default ContactCTA;