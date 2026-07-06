import React from "react";
import { motion } from "framer-motion";

const programs = [
  {
    id: "01",
    title: "Master in Entrepreneurial Business Building",
    duration: "6 Months",
    desc: "Execution-driven flagship program designed to transform ideas into successful businesses.",
  },
  {
    id: "02",
    title: "Strategic Brand Management",
    duration: "Professional Program",
    desc: "Learn how to create, position and grow impactful brands through practical strategies.",
  },
  {
    id: "03",
    title: "AI Tools for Business",
    duration: "Certification",
    desc: "Leverage AI-powered tools to improve productivity, marketing and business growth.",
  },
];

function FeaturedPrograms() {
  return (  
    <section className="featured-programs py-5" id="ar_programs">
      <div className="container">

        <div className="text-center mb-5">
          <span className="section-tag">
            FEATURED PROGRAMS
          </span>

          <h2 className="section-title mt-3">
            Explore Our Signature Programs
          </h2>

          <p className="section-description mt-3">
            Discover industry-focused programs designed to build entrepreneurs,
            innovators and future business leaders.
          </p>
        </div>

        <div className="row g-4">

          {programs.map((program, index) => (

            <div className="col-lg-4" key={program.id}>

              <motion.div
                className="program-card"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: .5,
                  delay: index * .15,
                }}
                whileHover={{
                  y: -10,
                }}
              >

                <span className="program-number">
                  {program.id}
                </span>

                <span className="program-duration">
                  {program.duration}
                </span>

                <h3>
                  {program.title}
                </h3>

                <p>
                  {program.desc}
                </p>

                <a className="program-link">
                  Explore
                  <i className="bi bi-arrow-up-right ms-2"></i>
                </a>

              </motion.div>

            </div>

          ))}

        </div>

        <div className="text-center mt-5">

          <a to="/programs" className="asb-btn">
            <span>View All Programs</span>

            <span className="arrow-circle">
              <i className="bi bi-arrow-up-right"></i>
            </span>

          </a>

        </div>

      </div>
    </section>
  );
}

export default FeaturedPrograms;