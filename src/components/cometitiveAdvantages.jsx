import React from "react";
import { motion } from "framer-motion";

const advantages = [
    {
        id: "01",
        title: "Industry Heritage",
        description:
            "Rooted in years of branding, marketing and business expertise, ASB bridges academic learning with real industry experience.",
    },
    {
        id: "02",
        title: "Execution-Driven Learning",
        description:
            "Students learn by building real projects, solving business challenges and executing practical strategies throughout the program.",
    },
    {
        id: "03",
        title: "Entrepreneurial Ecosystem",
        description:
            "Access mentors, industry experts and collaborative opportunities that help transform ideas into successful ventures.",
    },
];

function CompetitiveAdvantages() {
    return (
        <section className="advantages-section" id="ar_advantages">

            <div className="container">

                <div className="text-center mb-5">

                    <span className="section-tag">
                        WHY ASB
                    </span>

                    <h2 className="section-title mt-3">
                        Competitive Advantages
                    </h2>

                </div>

                <div className="row g-4">

                    {advantages.map((item, index) => (

                        <div className="col-lg-4" key={index}>

                            <motion.div
                                className="advantage-card"
                                initial={{
                                    opacity: 0,
                                    y: 50,
                                }}
                                whileInView={{
                                    opacity: 1,
                                    y: 0,
                                }}
                                viewport={{ once: true }}
                                transition={{
                                    duration: .5,
                                    delay: index * .15,
                                }}
                                whileHover={{
                                    y: -12,
                                }}
                            >

                                <span className="advantage-number">
                                    {item.id}
                                </span>

                                <h3>
                                    {item.title}
                                </h3>

                                <p>
                                    {item.description}
                                </p>

                                <a href="#">
                                    Learn More
                                    <i className="bi bi-arrow-up-right ms-2"></i>
                                </a>

                            </motion.div>

                        </div>

                    ))}

                </div>

            </div>

        </section>
    );
}

export default CompetitiveAdvantages;