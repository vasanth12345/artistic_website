import React from "react";
import { motion } from "framer-motion";

const containerVariants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.15,
        },
    },
};

const itemVariants = {
    hidden: {
        opacity: 0,
        y: 30,
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6,
            ease: "easeOut",
        },
    },
};

function WhoWeAre() {
    return (
        <section className="who-we-are py-5">
            <div className="container">

                <motion.div
                    className="row justify-content-center"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                >

                    <div className="col-lg-10 text-center">

                        <motion.span
                            className="section-tag"
                            variants={itemVariants}
                        >
                            WHO WE ARE
                        </motion.span>

                        <motion.h2
                            className="section-title mt-3"
                            variants={itemVariants}
                        >
                            Building Entrepreneurs,
                            <br />
                            Not Just Graduates.
                        </motion.h2>

                        <motion.p
                            className="section-description mt-4"
                            variants={itemVariants}
                        >
                            Artistic School of Business is an execution-driven entrepreneurial academy that empowers aspiring founders, creators, and innovators through practical learning, real-world projects, and industry mentorship.
                        </motion.p>

                        <motion.div
                            className="row mt-5 justify-content-center"
                            variants={containerVariants}
                        >

                            <motion.div
                                className="col-md-3 col-6 mb-3"
                                variants={itemVariants}
                            >
                                <div className="who_we_are_badge">
                                <svg xmlns="http://www.w3.org/2000/svg" width="110" height="107" viewBox="0 0 110 107" fill="none">
<path d="M4.36312 52.2542C28.7735 47.8277 47.919 28.6395 52.2824 4.20666C55.6051 28.9586 74.97 48.6708 99.812 52.3196C75.1845 55.633 55.6947 75.0586 52.3354 99.7204C48.9159 74.7954 29.1327 55.3775 4.36312 52.2542Z" stroke="#666666"/>
<path d="M72.1598 86.7073C80.4234 84.6058 86.8974 78.1125 88.9714 69.8378C90.725 78.2176 97.2318 84.8615 105.612 86.7648C97.3455 88.5495 90.8359 95.0322 89.0247 103.303C87.182 94.9124 80.5319 88.4052 72.1598 86.7073Z" stroke="#666666"/>
</svg> Building Brands
                                </div>
                            </motion.div>

                            <motion.div
                                className="col-md-3 col-6 mb-3"
                                variants={itemVariants}
                            >
                                <div className="who_we_are_badge">
                                <svg xmlns="http://www.w3.org/2000/svg" width="110" height="107" viewBox="0 0 110 107" fill="none">
<path d="M4.36312 52.2542C28.7735 47.8277 47.919 28.6395 52.2824 4.20666C55.6051 28.9586 74.97 48.6708 99.812 52.3196C75.1845 55.633 55.6947 75.0586 52.3354 99.7204C48.9159 74.7954 29.1327 55.3775 4.36312 52.2542Z" stroke="#666666"/>
<path d="M72.1598 86.7073C80.4234 84.6058 86.8974 78.1125 88.9714 69.8378C90.725 78.2176 97.2318 84.8615 105.612 86.7648C97.3455 88.5495 90.8359 95.0322 89.0247 103.303C87.182 94.9124 80.5319 88.4052 72.1598 86.7073Z" stroke="#666666"/>
</svg> Launch Startup
                                </div>
                                
                            </motion.div>

                            <motion.div
                                className="col-md-3 col-6 mb-3"
                                variants={itemVariants}
                            >
                                <div className="who_we_are_badge">
                                <svg xmlns="http://www.w3.org/2000/svg" width="110" height="107" viewBox="0 0 110 107" fill="none">
<path d="M4.36312 52.2542C28.7735 47.8277 47.919 28.6395 52.2824 4.20666C55.6051 28.9586 74.97 48.6708 99.812 52.3196C75.1845 55.633 55.6947 75.0586 52.3354 99.7204C48.9159 74.7954 29.1327 55.3775 4.36312 52.2542Z" stroke="#666666"/>
<path d="M72.1598 86.7073C80.4234 84.6058 86.8974 78.1125 88.9714 69.8378C90.725 78.2176 97.2318 84.8615 105.612 86.7648C97.3455 88.5495 90.8359 95.0322 89.0247 103.303C87.182 94.9124 80.5319 88.4052 72.1598 86.7073Z" stroke="#666666"/>
</svg> Develop Products
                                </div>
                            </motion.div>

                            <motion.div
                                className="col-md-3 col-6 mb-3"
                                variants={itemVariants}
                            >
                                <div className="who_we_are_badge">
                                <svg xmlns="http://www.w3.org/2000/svg" width="110" height="107" viewBox="0 0 110 107" fill="none">
<path d="M4.36312 52.2542C28.7735 47.8277 47.919 28.6395 52.2824 4.20666C55.6051 28.9586 74.97 48.6708 99.812 52.3196C75.1845 55.633 55.6947 75.0586 52.3354 99.7204C48.9159 74.7954 29.1327 55.3775 4.36312 52.2542Z" stroke="#666666"/>
<path d="M72.1598 86.7073C80.4234 84.6058 86.8974 78.1125 88.9714 69.8378C90.725 78.2176 97.2318 84.8615 105.612 86.7648C97.3455 88.5495 90.8359 95.0322 89.0247 103.303C87.182 94.9124 80.5319 88.4052 72.1598 86.7073Z" stroke="#666666"/>
</svg> Create Campaigns
                                </div>
                            </motion.div>

                        </motion.div>

                        <motion.div
                            className="mt-5"
                            variants={itemVariants}
                        >
                            <a href="#" className="asb-btn">
                                <span>Read More</span>

                                <span className="arrow-circle">
                                    <i className="bi bi-arrow-up-right"></i>
                                </span>
                            </a>
                        </motion.div>

                    </div>

                </motion.div>

            </div>
        </section>
    );
}

export default WhoWeAre;