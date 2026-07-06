import React from "react";
import { motion } from "framer-motion";

const fadeUp = {
    hidden: {
        opacity: 0,
        y: 40,
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: .6,
        },
    },
};

function VisionMission() {
    return (
        <section className="vision-mission py-5" id="ar_vission">

            <div className="container">

                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: .2 }}
                    variants={fadeUp}
                >

                    <div className="text-center mb-5">

                        <span className="section-tag">
                            OUR PURPOSE
                        </span>

                        <h2 className="section-title mt-3">
                            Vision & Mission
                        </h2>

                    </div>

                </motion.div>

                <div className="row g-4">

                    {/* Vision */}

                    <div className="col-lg-6">
                        <motion.div
                            className="purpose-card h-100"
                            initial={{ opacity: 0, x: -40 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <div className="purpose-icon">
                                <i className="bi bi-eye"></i>
                            </div>

                            <h3>Vision</h3>

                            <p className="purpose-intro">
                                We envision creating a future where every aspiring entrepreneur has the skills, confidence, and opportunities to build impactful businesses.
                            </p>

                            <ul className="purpose-list">
                                <li>
                                    Become India's leading execution-driven entrepreneurial academy that transforms ideas into successful, sustainable businesses.
                                </li>

                                <li>
                                    Empower the next generation of entrepreneurs, innovators, and business leaders through practical, industry-focused learning experiences.
                                </li>

                                <li>
                                    Build a thriving entrepreneurial ecosystem that drives innovation, creates employment, and delivers lasting social impact.
                                </li>
                            </ul>
                        </motion.div>
                    </div>

                    {/* Mission */}

                    <div className="col-lg-6">
                        <motion.div
                            className="purpose-card h-100"
                            initial={{ opacity: 0, x: 40 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <div className="purpose-icon">
                                <i className="bi bi-bullseye"></i>
                            </div>

                            <h3>Mission</h3>

                            <p className="purpose-intro">
                                Our mission is to provide practical education that transforms ambitious learners into confident entrepreneurs and successful business leaders.
                            </p>

                            <ul className="purpose-list">
                                <li>
                                    Provide hands-on, industry-focused education that develops practical business skills through real-world projects and experiences.
                                </li>

                                <li>
                                    Guide every learner to build, launch, and scale successful businesses through expert mentorship and execution-driven learning.
                                </li>

                                <li>
                                    Foster innovation, leadership, and continuous learning to prepare entrepreneurs for success in the evolving global marketplace.
                                </li>
                            </ul>
                        </motion.div>
                    </div>

                </div>

            </div>

        </section>
    );
}

export default VisionMission;