import { motion } from "framer-motion";

const model = [
  {
    no: "01",
    title: "Practical Execution",
    desc: "Paste the content from the PDF.",
  },
  {
    no: "02",
    title: "Industry Mentorship",
    desc: "Paste the content from the PDF.",
  },
  {
    no: "03",
    title: "Real Market Projects",
    desc: "Paste the content from the PDF.",
  },
  {
    no: "04",
    title: "Business Building",
    desc: "Paste the content from the PDF.",
  },
];

export default function ExecutionModel() {
  return (
    <section className="execution-section">
      <div className="container">

        <div className="text-center mb-5">

          <span className="section-tag">
            EXECUTION MODEL
          </span>

          <h2 className="section-title mt-3">
            The ASB Execution Model
          </h2>

        </div>

        <div className="row">

          {model.map((item, index) => (

            <div className="col-lg-3 col-md-6 main_execution_box" key={index}>

              <motion.div
                className="execution-box"
                initial={{
                  opacity: 0,
                  y: 70,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{ once: true }}
                whileHover={{
                  y: -12,
                }}
              >

                <span className="big-number">
                  {item.no}
                </span>

                <div className="circle"></div>

                <h4>{item.title}</h4>

                <p>{item.desc}</p>

              </motion.div>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}