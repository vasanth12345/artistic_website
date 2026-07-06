import { motion } from "framer-motion";

export default function FlagshipProgram() {
    return (
        <section className="flagship-program">

            <div className="container">

                <motion.div
                    className="program-wrapper"
                    initial={{ opacity: 0, scale: .95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: .6 }}
                >

                    <span className="section-tag">
                        FLAGSHIP PROGRAM
                    </span>

                    <h2 className="mt-3">
                        Master in Entrepreneurial
                        <br />
                        Business Building
                    </h2>

                    <p className="mt-4">
                        {/* Paste the description from the PDF */}
                    </p>

                    <div className="row stats mt-5">

                        <div className="col-md-4">
                            <h3>06</h3>
                            <span>Months</span>
                        </div>

                        <div className="col-md-4">
                            <h3>20</h3>
                            <span>Students / Batch</span>
                        </div>

                        <div className="col-md-4">
                            <h3>100%</h3>
                            <span>Execution Based</span>
                        </div>

                    </div>

                    <div className="mt-5">

                        <a href="#" className="asb-btn">
                            <span>Explore Program</span>

                            <span className="arrow-circle">
                                <i className="bi bi-arrow-up-right"></i>
                            </span>
                        </a>

                    </div>

                </motion.div>

            </div>

        </section>
    );
}