import "../styles/motive.css";

export default function Motive() {
  return (
    <section className="about" id="motive">
      <div className="about-container">

        <span className="about-tag">OUR MOTIVE & PRINCIPLES</span>

        <h2>Committed to Better Healthcare</h2>

        <p>
          Our motive is to improve quality of life by making trusted,
          evidence-based medicines and health supplements available through
          ethical and transparent practices.
        </p>

        <p>
          We aim to support healthcare professionals with dependable
          therapeutic options, contribute to preventive and curative healthcare,
          and build a pharma brand that stands for integrity, consistency,
          and patient safety.
        </p>

        <p>
          At CurePhix Pharma, we believe that healthcare is a responsibility,
          not just a business.
        </p>

        {/* Principles List */}
        <div className="principles">

          <div className="principle">
            <h4>1. Quality First</h4>
            <p>
              We strictly adhere to WHO-GMP standards, ensuring every product
              is safe, effective, and reliable.
            </p>
          </div>

          <div className="principle">
            <h4>2. Ethical Practices</h4>
            <p>
              We follow ethical marketing and business practices with complete
              transparency and compliance.
            </p>
          </div>

          <div className="principle">
            <h4>3. Patient-Centric Approach</h4>
            <p>
              Patient safety and well-being remain at the core of all decisions.
            </p>
          </div>

          <div className="principle">
            <h4>4. Scientific Integrity</h4>
            <p>
              Our products are built on scientific rationale and clinical value.
            </p>
          </div>

          <div className="principle">
            <h4>5. Continuous Improvement</h4>
            <p>
              We constantly improve through innovation and quality enhancement.
            </p>
          </div>

          <div className="principle">
            <h4>6. Trust & Responsibility</h4>
            <p>
              We build lasting relationships based on trust and accountability.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}