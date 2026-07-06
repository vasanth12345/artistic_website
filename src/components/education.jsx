import React from "react";
import { motion } from "framer-motion";

const leftItems = [
    {
        icon: "bi-book",
        title: "Learn Theory",
        desc: "Memorize concepts from textbooks with limited practical application."
    },
    {
        icon: "bi-mortarboard",
        title: "Earn a Degree",
        desc: "Focus on grades and certificates rather than practical capabilities."
    },
    {
        icon: "bi-search",
        title: "Search for Opportunities",
        desc: "Graduate and begin looking for jobs or internships."
    },
    {
        icon: "bi-hourglass",
        title: "Gain Experience Later",
        desc: "Develop real business skills only after entering the workforce."
    }
];

const rightItems = [
    {
        icon: "bi-lightbulb",
        title: "Build an Idea",
        desc: "Identify real market problems and validate business opportunities."
    },
    {
        icon: "bi-tools",
        title: "Create a Product",
        desc: "Build solutions through live projects and practical execution."
    },
    {
        icon: "bi-rocket-takeoff",
        title: "Launch Your Business",
        desc: "Take your product or service to market with expert mentorship."
    },
    {
        icon: "bi-graph-up-arrow",
        title: "Generate Revenue",
        desc: "Acquire customers, grow your business, and scale with confidence."
    }
];

function ProblemAnalysis() {
    return (
        <section className="problem-analysis" id="ar_about">

            <div className="container">

                <motion.div
                    className="text-center mb-5"
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <span className="section-tag">
                        THE EXECUTION GAP
                    </span>

                    <h2 className="section-title mt-3">
                        From Traditional Learning to Real Business Building
                    </h2>

                </motion.div>

                <div className="row align-items-center">

                    {/* Left */}

                    <div className="col-lg-5">

                        <motion.div
                            className="journey-card old-way"
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >

                            <h3 className="journey-title text-danger">
                                Traditional Education
                            </h3>

                            {leftItems.map((item, index) => (
                                <div className="journey-step" key={index}>

                                    <div className="journey-icon">
                                        <i className={`bi ${item.icon}`}></i>
                                    </div>

                                    <div>
                                        <h5>{item.title}</h5>
                                        <p>{item.desc}</p>
                                    </div>

                                </div>
                            ))}

                        </motion.div>

                    </div>

                    {/* Middle */}

                    <div className="col-lg-2 text-center">

                        <motion.div
                            initial={{ scale: .8, opacity: 0 }}
                            whileInView={{ scale: 1, opacity: 1 }}
                            viewport={{ once: true }}
                        >

                            <div className="transform-circle">
                                ASB 

                            <i className="bi bi-arrow-left-right fs-2"></i>
                            </div>


                        </motion.div>

                    </div>

                    {/* Right */}

                    <div className="col-lg-5">

                        <motion.div
                            className="journey-card new-way"
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >

                            <h3 className="journey-title text-success">
                                The ASB Way
                            </h3>

                            {rightItems.map((item, index) => (
                                <div className="journey-step" key={index}>

                                    <div className="journey-icon success">
                                        <i className={`bi ${item.icon}`}></i>
                                    </div>

                                    <div>
                                        <h5>{item.title}</h5>
                                        <p>{item.desc}</p>
                                    </div>

                                </div>
                            ))}

                        </motion.div>

                    </div>

                </div>

                <div className="row mt-5">

                    <div className="col-lg-10 mx-auto">

                        <div className="execution-note text-center">

                            <h4>
                                Learn. Build. Launch. Scale.
                            </h4>

                            <p>
                                At ASB, education doesn't stop at learning concepts.
                                It begins with building real businesses through
                                practical execution, mentorship, and industry
                                immersion.
                            </p>

                        </div>

                    </div>

                </div>

            </div>

        </section>
    );
}

export default ProblemAnalysis;