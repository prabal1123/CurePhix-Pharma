import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import "../styles/coverage.css";

export default function Coverage() {

  const [districts, setDistricts] = useState(0);
  const [doctors, setDoctors] = useState(0);

  useEffect(() => {

    let d = 0;
    let doc = 0;

    const interval = setInterval(() => {

      if (d < 24) {
        d += 3;
        setDistricts(d);
      }

      if (doc < 2000) {
        doc += 100;
        setDoctors(doc);
      }

      if (d >= 24 && doc >= 2000) {
        clearInterval(interval);
      }

    }, 30);

  }, []);

  return (
    <section className="coverage">

      <span className="section-tag">OUR REACH</span>

      <h2>Coverage & Network</h2>

      <div className="coverage-grid">

        <motion.div
          className="coverage-card"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="coverage-icon">🏢</div>
          <h3>{districts}+</h3>
          <p>Districts Covered</p>
        </motion.div>

        <motion.div
          className="coverage-card"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="coverage-icon">🔬</div>
          <h3>{doctors.toLocaleString()}+</h3>
          <p>Doctors Associated</p>
        </motion.div>

      </div>

    </section>
  );
}