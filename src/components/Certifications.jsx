import { motion } from "framer-motion";
import "../styles/certifications.css";

export default function Certifications() {

  const certifications = [
    "FSSAI",
    "GMP Certified",
    "GLP",
    "WHO Compliant",
    "ISO Certified"
  ];

  return (
    <section className="certifications">

      <span className="section-tag">CERTIFICATIONS</span>

      <h2>Quality Accreditations</h2>

      <p className="section-subtext">
        Our facilities and processes meet the highest international quality standards.
      </p>

      <div className="cert-grid">

        {certifications.map((item, index) => (
          <motion.div
            key={index}
            className="cert-card"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
          >
            <span className="cert-icon">✔</span>
            {item}
          </motion.div>
        ))}

      </div>

    </section>
  );
}